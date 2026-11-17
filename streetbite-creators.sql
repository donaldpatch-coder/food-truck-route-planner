create table public.streetbite_creator_profiles (
 user_id uuid primary key default auth.uid() references auth.users(id),
 handle text not null unique check(handle ~ '^[a-z0-9_]{3,30}$'),
 display_name text not null check(char_length(display_name) between 2 and 60),
 bio text not null default '' check(char_length(bio)<=500),
 home_area text not null default '' check(char_length(home_area)<=100),
 instagram_url text not null default '' check(instagram_url='' or (instagram_url ~ '^https://(www\.)?instagram\.com/[A-Za-z0-9_.]+/?$' and char_length(instagram_url)<=300)),
 tiktok_url text not null default '' check(tiktok_url='' or (tiktok_url ~ '^https://(www\.)?tiktok\.com/@[A-Za-z0-9_.]+/?$' and char_length(tiktok_url)<=300)),
 is_public boolean not null default false,
 created_at timestamptz not null default now()
);
alter table public.streetbite_creator_profiles enable row level security;
revoke all on public.streetbite_creator_profiles from anon,authenticated;
grant select on public.streetbite_creator_profiles to anon,authenticated;
grant insert(handle,display_name,bio,home_area,instagram_url,tiktok_url,is_public),update(handle,display_name,bio,home_area,instagram_url,tiktok_url,is_public) on public.streetbite_creator_profiles to authenticated;
create policy "Read published creator or own draft" on public.streetbite_creator_profiles for select to anon,authenticated using(is_public or user_id=(select auth.uid()));
create policy "Create own creator profile" on public.streetbite_creator_profiles for insert to authenticated with check(user_id=(select auth.uid()) and coalesce((select auth.jwt())->>'is_anonymous','false')='false');
create policy "Update own creator profile" on public.streetbite_creator_profiles for update to authenticated using(user_id=(select auth.uid())) with check(user_id=(select auth.uid()) and coalesce((select auth.jwt())->>'is_anonymous','false')='false');

alter table public.streetbite_reviews add column dish_name text not null default '' check(char_length(dish_name)<=100),
 add column heat integer check(heat between 0 and 5),
 add column richness integer check(richness between 0 and 5),
 add column video_url text not null default '' check(video_url='' or (video_url ~ '^https://((www\.)?tiktok\.com/(@[A-Za-z0-9_.]+/video/[0-9]+|t/[A-Za-z0-9]+)|(vm|vt)\.tiktok\.com/[A-Za-z0-9]+|(www\.)?instagram\.com/(p|reel|tv)/[A-Za-z0-9_-]+)/?$' and char_length(video_url)<=700)),
 add column disclosure text not null default 'none' check(disclosure in('none','complimentary','paid')),
 add column is_public boolean not null default true;
grant insert(dish_name,heat,richness,video_url,disclosure,is_public),update(display_name,rating,body,dish_name,heat,richness,video_url,disclosure,is_public) on public.streetbite_reviews to authenticated;
drop policy "Read reviews of published places" on public.streetbite_reviews;
create policy "Read public reviews or own draft" on public.streetbite_reviews for select to anon,authenticated using(user_id=(select auth.uid()) or (is_public and exists(select 1 from public.streetbite_listings l where l.id=listing_id and l.status='published')));
create policy "Authors edit or withdraw own review" on public.streetbite_reviews for update to authenticated using(user_id=(select auth.uid())) with check(user_id=(select auth.uid()) and coalesce((select auth.jwt())->>'is_anonymous','false')='false' and (not is_public or exists(select 1 from public.streetbite_listings l where l.id=listing_id and l.status='published' and l.user_id is distinct from (select auth.uid()))));
create index streetbite_reviews_user_idx on public.streetbite_reviews(user_id);

create function public.streetbite_creator_feed(p_handle text default null,p_limit integer default 12) returns setof jsonb language sql stable security invoker set search_path='' as $$
 select jsonb_build_object(
 'review_id',r.id,'rating',r.rating,'body',r.body,'dish_name',r.dish_name,'heat',r.heat,'richness',r.richness,'video_url',r.video_url,'disclosure',r.disclosure,'created_at',r.created_at,
 'creator_handle',p.handle,'creator_name',p.display_name,'creator_area',p.home_area,
 'listing_id',l.id,'listing_name',l.name,'listing_source_key',l.source_key,'listing_city',l.city)
 from public.streetbite_reviews r join public.streetbite_creator_profiles p on p.user_id=r.user_id join public.streetbite_listings l on l.id=r.listing_id
 where p.is_public and r.is_public and l.status='published' and (p_handle is null or p.handle=p_handle)
 order by r.created_at desc limit greatest(1,least(p_limit,30));
$$;
revoke all on function public.streetbite_creator_feed(text,integer) from public;
grant execute on function public.streetbite_creator_feed(text,integer) to anon,authenticated;

-- Keep withdrawn reviews out of public rating aggregates.
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
 'review_count',(select count(*) from public.streetbite_reviews r where r.listing_id=l.id and r.is_public),
 'average_rating',(select round(avg(r.rating),1) from public.streetbite_reviews r where r.listing_id=l.id and r.is_public)) from limited l;
$$;
