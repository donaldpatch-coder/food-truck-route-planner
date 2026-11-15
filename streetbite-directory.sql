-- Additive: preserves all existing owner accounts, planning records and browser drafts.
create table public.streetbite_listings (
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null default auth.uid() references auth.users(id),
 name text not null check (char_length(name) between 2 and 100),
 kind text not null check (kind in ('Food truck','Restaurant','Cafe','Bakery','Other')),
 cuisine text not null check (char_length(cuisine) between 2 and 80),
 zip text not null check (zip ~ '^[0-9]{5}$'),
 city text not null check (char_length(city) between 2 and 100),
 address text not null check (char_length(address) between 2 and 200),
 description text not null check (char_length(description) between 20 and 1000),
 website text not null default '' check (website = '' or (website ~ '^https?://' and char_length(website) <= 500)),
 status text not null default 'published' check (status in ('published','hidden')),
 created_at timestamptz not null default now(),
 unique(user_id, name, zip)
);
create index streetbite_listings_zip_idx on public.streetbite_listings(zip,created_at desc) where status='published';
create index streetbite_listings_owner_idx on public.streetbite_listings(user_id);
alter table public.streetbite_listings enable row level security;
revoke all on public.streetbite_listings from anon, authenticated;
grant select on public.streetbite_listings to anon, authenticated;
grant insert (name,kind,cuisine,zip,city,address,description,website), update (name,kind,cuisine,zip,city,address,description,website,status) on public.streetbite_listings to authenticated;
create policy "Public published listings and own drafts" on public.streetbite_listings for select to anon,authenticated using(status='published' or user_id=(select auth.uid()));
create policy "Owners create their listing" on public.streetbite_listings for insert to authenticated with check(user_id=(select auth.uid()) and status='published' and coalesce((select auth.jwt())->>'is_anonymous','false')='false');
create policy "Owners manage their listing" on public.streetbite_listings for update to authenticated using(user_id=(select auth.uid())) with check(user_id=(select auth.uid()));

create table public.streetbite_reviews (
 id uuid primary key default gen_random_uuid(),
 listing_id uuid not null references public.streetbite_listings(id),
 user_id uuid not null default auth.uid() references auth.users(id),
 display_name text not null check(char_length(display_name) between 2 and 60),
 rating integer not null check(rating between 1 and 5),
 body text not null check(char_length(body) between 20 and 1500),
 created_at timestamptz not null default now(),
 unique(listing_id,user_id)
);
create index streetbite_reviews_owner_idx on public.streetbite_reviews(user_id);
alter table public.streetbite_reviews enable row level security;
revoke all on public.streetbite_reviews from anon,authenticated;
grant select on public.streetbite_reviews to anon,authenticated;
grant insert(listing_id,display_name,rating,body) on public.streetbite_reviews to authenticated;
create policy "Read reviews of published places" on public.streetbite_reviews for select to anon,authenticated using(exists(select 1 from public.streetbite_listings l where l.id=listing_id and l.status='published'));
create policy "One signed in review per place, no self review" on public.streetbite_reviews for insert to authenticated with check(user_id=(select auth.uid()) and coalesce((select auth.jwt())->>'is_anonymous','false')='false' and exists(select 1 from public.streetbite_listings l where l.id=listing_id and l.status='published' and l.user_id<>(select auth.uid())));
