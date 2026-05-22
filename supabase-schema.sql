create extension if not exists "pgcrypto";

create table if not exists business_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  business_name text not null,
  city text not null,
  food_type text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists locations (
  id uuid primary key default gen_random_uuid(),
  city text not null,
  location_name text not null,
  score integer not null default 75,
  best_time text,
  nearby_events text,
  competition_level text,
  weather_risk text,
  opportunity_type text,
  source_url text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists weekly_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  business_profile_id uuid references business_profiles(id) on delete set null,
  week_start_date date not null,
  created_at timestamptz not null default now()
);

create table if not exists weekly_plan_items (
  id uuid primary key default gen_random_uuid(),
  weekly_plan_id uuid not null references weekly_plans(id) on delete cascade,
  plan_day text not null,
  best_location text not null,
  best_time text,
  score integer,
  created_at timestamptz not null default now()
);

create table if not exists sales_checkins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  business_profile_id uuid references business_profiles(id) on delete set null,
  location_name text not null,
  service_date date not null,
  start_time text,
  end_time text,
  sales_total numeric(10,2) not null default 0,
  costs_total numeric(10,2) not null default 0,
  best_sellers text,
  competitors integer,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists location_pipeline (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  location_name text not null,
  status text not null default 'Interested',
  application_deadline date,
  fee numeric(10,2),
  documents text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists supplier_partners (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  vendor_name text not null,
  category text,
  city text,
  products text,
  affiliate_url text not null,
  commission_notes text,
  listing_notes text,
  created_at timestamptz not null default now()
);

create table if not exists supplier_prices (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  item_name text not null,
  supplier_name text not null,
  unit_price numeric(10,2) not null,
  unit text,
  recorded_date date not null default current_date,
  created_at timestamptz not null default now()
);

create table if not exists reminders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  title text not null,
  due_date date not null,
  location_name text,
  completed boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public_space_listings (
  id uuid primary key default gen_random_uuid(),
  listing_name text not null,
  city text not null,
  space_type text,
  best_time text,
  fee text,
  contact_url text,
  notes text,
  status text not null default 'Submitted',
  created_at timestamptz not null default now()
);

create index if not exists locations_city_idx on locations(city);
create index if not exists sales_checkins_user_location_idx on sales_checkins(user_id, location_name);
create index if not exists weekly_plans_user_week_idx on weekly_plans(user_id, week_start_date);
create index if not exists location_pipeline_user_location_idx on location_pipeline(user_id, location_name);
create index if not exists reminders_user_due_idx on reminders(user_id, due_date);
