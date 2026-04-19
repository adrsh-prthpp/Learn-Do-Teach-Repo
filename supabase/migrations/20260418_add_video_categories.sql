alter table public.videos
  add column if not exists category text;

update public.videos
set category = case
  when category in ('AI', 'ML', 'AI/ML') then 'AI/ML'
  when category in ('Systems', 'Web', 'Cloud') then 'Cloud'
  when category = 'Data' then 'Data'
  else 'Cloud'
end;

alter table public.videos
  alter column category set not null;

alter table public.videos
  drop constraint if exists videos_category_check;

alter table public.videos
  add constraint videos_category_check
  check (category in ('AI/ML', 'Data', 'Cloud'));

update public.projects
set category = case
  when category in ('AI', 'ML', 'AI/ML') then 'AI/ML'
  when category in ('Systems', 'Web', 'Cloud') then 'Cloud'
  when category = 'Data' then 'Data'
  else 'Cloud'
end;

alter table public.projects
  drop constraint if exists projects_category_check;

alter table public.projects
  add constraint projects_category_check
  check (category in ('AI/ML', 'Data', 'Cloud'));
