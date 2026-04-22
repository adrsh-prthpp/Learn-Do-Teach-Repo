-- Enable extensions
create extension if not exists "pgcrypto";

create table if not exists public.videos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text not null,
  why_this_video_exists text,
  category text not null check (category in ('AI/ML', 'Data', 'Cloud')),
  youtube_url text not null,
  thumbnail_url text,
  tags text[] not null default '{}',
  featured boolean not null default false,
  published_at date not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  cover_image_url text,
  tags text[] not null default '{}',
  featured boolean not null default false,
  published_at date not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  category text not null check (category in ('AI/ML', 'Data', 'Cloud')),
  summary text not null,
  description text not null,
  github_url text,
  demo_url text,
  video_slug text references public.videos(slug) on delete set null,
  image_url text,
  featured boolean not null default false,
  published_at date not null default now()
);

alter table public.videos enable row level security;
alter table public.blog_posts enable row level security;
alter table public.projects enable row level security;

create policy "Public can read videos"
  on public.videos for select using (true);
create policy "Public can read blog posts"
  on public.blog_posts for select using (true);
create policy "Public can read projects"
  on public.projects for select using (true);

create policy "Authenticated can manage videos"
  on public.videos for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated can manage blog posts"
  on public.blog_posts for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Authenticated can manage projects"
  on public.projects for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
