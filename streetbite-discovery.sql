alter table public.streetbite_listings alter column user_id drop not null;
alter table public.streetbite_listings add column source_key text unique,
 add column source_url text check(source_url is null or source_url ~ '^https://'),
 add column source_checked_on date,
 add column latitude double precision check(latitude between -90 and 90),
 add column longitude double precision check(longitude between -180 and 180),
 add column location_kind text not null default 'street_address' check(location_kind in ('street_address','service_area')),
 add column live_until timestamptz,
 add column live_note text check(char_length(live_note)<=140);
grant insert(latitude,longitude),update(latitude,longitude,live_until,live_note) on public.streetbite_listings to authenticated;
create function public.streetbite_validate_live() returns trigger language plpgsql security invoker set search_path='' as $$
begin
 if new.live_until is not null and (new.user_id is null or new.latitude is null or new.longitude is null or new.live_until>now()+interval '4 hours') then
  raise exception 'Owner check-ins need a verified owner, coordinates and expiry within four hours';
 end if;
 return new;
end $$;
revoke all on function public.streetbite_validate_live() from public;
create trigger streetbite_live_guard before insert or update on public.streetbite_listings for each row execute function public.streetbite_validate_live();
drop policy "One signed in review per place, no self review" on public.streetbite_reviews;
create policy "One signed in review per place, no self review" on public.streetbite_reviews for insert to authenticated with check(user_id=(select auth.uid()) and coalesce((select auth.jwt())->>'is_anonymous','false')='false' and exists(select 1 from public.streetbite_listings l where l.id=listing_id and l.status='published' and l.user_id is distinct from (select auth.uid())));

create table public.streetbite_claim_requests(
 id uuid primary key default gen_random_uuid(),
 listing_id uuid not null references public.streetbite_listings(id),
 user_id uuid not null default auth.uid() references auth.users(id),
 message text not null check(char_length(message) between 20 and 1500),
 status text not null default 'pending' check(status in ('pending','approved','declined')),
 created_at timestamptz not null default now(),
 unique(listing_id,user_id)
);
create index streetbite_claim_requests_owner on public.streetbite_claim_requests(user_id);
alter table public.streetbite_claim_requests enable row level security;
revoke all on public.streetbite_claim_requests from anon,authenticated;
grant select on public.streetbite_claim_requests to authenticated;
grant insert(listing_id,message) on public.streetbite_claim_requests to authenticated;
create policy "Requesters read own requests" on public.streetbite_claim_requests for select to authenticated using(user_id=(select auth.uid()));
create policy "Request claim of unclaimed public business" on public.streetbite_claim_requests for insert to authenticated with check(user_id=(select auth.uid()) and status='pending' and coalesce((select auth.jwt())->>'is_anonymous','false')='false' and exists(select 1 from public.streetbite_listings l where l.id=listing_id and l.status='published' and l.user_id is null));

create function public.streetbite_nearby(p_lat double precision,p_lng double precision,p_radius integer default 10,p_kind text default '',p_live boolean default false,p_query text default '') returns setof jsonb language sql stable security invoker set search_path='' as $$
 with nearby as (
 select l.*,case when l.latitude is not null and l.longitude is not null then
  3958.8*acos(least(1.0,greatest(-1.0,sin(radians(p_lat))*sin(radians(l.latitude))+cos(radians(p_lat))*cos(radians(l.latitude))*cos(radians(l.longitude-p_lng))))) end as distance_miles
 from public.streetbite_listings l where l.status='published' and p_lat between -90 and 90 and p_lng between -180 and 180 and p_radius in(5,10,25)
 and (p_kind='' or l.kind=p_kind) and (not p_live or l.live_until>now())
 and (p_query='' or (l.name||' '||l.cuisine||' '||l.description) ilike '%'||left(p_query,100)||'%')
 ), limited as (
 select * from nearby where distance_miles<=p_radius or (latitude is null and location_kind='service_area' and abs(p_lat-42.64)<0.3 and abs(p_lng+71.31)<0.4)
 order by distance_miles nulls last,name limit 200)
 select to_jsonb(l)||jsonb_build_object('review_count',(select count(*) from public.streetbite_reviews r where r.listing_id=l.id),'average_rating',(select round(avg(r.rating),1) from public.streetbite_reviews r where r.listing_id=l.id)) from limited l;
$$;
revoke all on function public.streetbite_nearby(double precision,double precision,integer,text,boolean,text) from public;
grant execute on function public.streetbite_nearby(double precision,double precision,integer,text,boolean,text) to anon,authenticated;
