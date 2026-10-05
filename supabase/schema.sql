-- NYAM Supabase schema
-- Cara pakai: buka Supabase Dashboard > SQL Editor > tempel seluruh file ini > Run.
-- Project: terdtjmtrujznqjfqjiv

-- 1) Tabel profil (kunci = email, biar tamu tanpa Auth tetap bisa sync)
create table if not exists public.profiles (
  email text primary key,
  name text not null default 'Sobat NYAM',
  phone text default '',
  tier text not null default 'biasa',
  points int not null default 0,
  updated_at timestamptz not null default now()
);

-- 2) Tabel pesanan
create table if not exists public.orders (
  id text primary key,
  email text not null default 'tamu@nyam',
  resto text not null default 'NYAM',
  items jsonb not null default '[]'::jsonb,
  total int not null default 0,
  status int not null default 1,
  pay text not null default 'qris',
  fleet text not null default 'nyam',
  addr jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists orders_email_idx on public.orders (email, created_at desc);

-- 3) Tabel favorit
create table if not exists public.favorites (
  email text not null,
  product_id text not null,
  created_at timestamptz not null default now(),
  primary key (email, product_id)
);

-- 4) Tabel voucher
create table if not exists public.vouchers (
  email text not null,
  code text not null,
  created_at timestamptz not null default now(),
  primary key (email, code)
);

-- 5) Aktifkan RLS + policy demo (anon bisa baca/tulis).
-- PENTING: ini policy longgar untuk tahap demo. Setelah login Supabase Auth
-- jalan, ganti ke policy berbasis auth.uid() yang ketat.
alter table public.profiles enable row level security;
alter table public.orders enable row level security;
alter table public.favorites enable row level security;
alter table public.vouchers enable row level security;

drop policy if exists "demo_all_profiles" on public.profiles;
create policy "demo_all_profiles" on public.profiles
  for all using (true) with check (true);

drop policy if exists "demo_all_orders" on public.orders;
create policy "demo_all_orders" on public.orders
  for all using (true) with check (true);

drop policy if exists "demo_all_favorites" on public.favorites;
create policy "demo_all_favorites" on public.favorites
  for all using (true) with check (true);

drop policy if exists "demo_all_vouchers" on public.vouchers;
create policy "demo_all_vouchers" on public.vouchers
  for all using (true) with check (true);
