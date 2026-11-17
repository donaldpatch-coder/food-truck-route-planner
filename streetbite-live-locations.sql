-- Applied after streetbite-discovery.sql as streetbite_live_service_locations and streetbite_owner_photos.
alter table public.streetbite_listings alter column zip drop not null;
alter table public.streetbite_listings add column live_address text check(char_length(live_address)<=250),
 add column live_latitude double precision check(live_latitude between -90 and 90),
 add column live_longitude double precision check(live_longitude between -180 and 180),
 add column photo_url text not null default '' check(photo_url='' or (photo_url ~ '^https://' and char_length(photo_url)<=700));
grant update(live_address,live_latitude,live_longitude) on public.streetbite_listings to authenticated;
grant insert(photo_url),update(photo_url) on public.streetbite_listings to authenticated;
create or replace function public.streetbite_validate_live() returns trigger language plpgsql security invoker set search_path='' as $$
begin
 if new.live_until is not null and (new.user_id is null or new.live_latitude is null or new.live_longitude is null or coalesce(char_length(new.live_address),0)<5 or new.live_until>now()+interval '4 hours') then
  raise exception 'Owner check-ins need a public service address, coordinates and expiry within four hours';
 end if;
 return new;
end $$;
create or replace function public.streetbite_nearby(p_lat double precision,p_lng double precision,p_radius integer default 10,p_kind text default '',p_live boolean default false,p_query text default '') returns setof jsonb language sql stable security invoker set search_path='' as $$
with located as (
 select l.*,case when l.live_until>now() then l.live_latitude else l.latitude end as effective_lat,
 case when l.live_until>now() then l.live_longitude else l.longitude end as effective_lng
 from public.streetbite_listings l where l.status='published'
),nearby as (
 select l.*,case when l.effective_lat is not null and l.effective_lng is not null then
  3958.8*acos(least(1.0,greatest(-1.0,sin(radians(p_lat))*sin(radians(l.effective_lat))+cos(radians(p_lat))*cos(radians(l.effective_lat))*cos(radians(l.effective_lng-p_lng))))) end as distance_miles
 from located l where p_lat between -90 and 90 and p_lng between -180 and 180 and p_radius in(5,10,25)
 and (p_kind='' or l.kind=p_kind) and (not p_live or l.live_until>now())
 and (p_query='' or (l.name||' '||l.cuisine||' '||l.description) ilike '%'||left(p_query,100)||'%')
),limited as (
 select * from nearby where distance_miles<=p_radius or (effective_lat is null and location_kind='service_area' and abs(p_lat-42.64)<0.3 and abs(p_lng+71.31)<0.4 and not p_live)
 order by distance_miles nulls last,name limit 200
)
select to_jsonb(l)||jsonb_build_object('latitude',l.effective_lat,'longitude',l.effective_lng,
 'review_count',(select count(*) from public.streetbite_reviews r where r.listing_id=l.id),
 'average_rating',(select round(avg(r.rating),1) from public.streetbite_reviews r where r.listing_id=l.id)) from limited l;
$$;
