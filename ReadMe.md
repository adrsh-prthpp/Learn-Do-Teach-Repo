# Tech Creator Portfolio (Next.js + Supabase)

A production-style personal portfolio web app for a tech creator, built with:

- **Next.js (App Router, TypeScript)**
- **Tailwind CSS**
- **Supabase (Postgres + Auth + optional Storage)**
- **Vercel deployment target**

## Features

- Homepage with hero + featured videos, posts, and projects
- Videos page and video detail pages with YouTube embeds
- Blog index and blog detail pages (markdown-compatible content field)
- Projects index and project detail pages
- About page with background, skills, interests, resume link
- Protected admin dashboard with CRUD actions for videos/blog/projects
- SEO metadata per route
- Responsive layout and reusable UI/components

## Project Structure

```txt
src/
  app/
    page.tsx
    videos/
    blog/
    projects/
    about/
    admin/
  components/
    layout/
    sections/
    ui/
    admin/
  lib/
    supabase/
    content.ts
    admin-actions.ts
  data/seed.ts
  types/
supabase/
  schema.sql
  seed.sql
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill values:

```bash
cp .env.example .env.local
```

Required values:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ADMIN_EMAIL`

## Supabase Setup

1. Create a Supabase project.
2. In Supabase SQL Editor, run:
   - `supabase/schema.sql`
   - `supabase/seed.sql` (optional starter data)
3. In **Authentication > Users**, create your admin user and set email/password.
4. Set `ADMIN_EMAIL` in `.env.local` to the same email.
5. Add your app URL(s) in **Authentication > URL Configuration** for local and production callbacks.

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

Admin login is at `/admin/login`.

## Deployment to Vercel

1. Push this repo to GitHub.
2. Import project in Vercel.
3. Add all environment variables from `.env.example` in Vercel project settings.
4. Deploy.
5. Set `NEXT_PUBLIC_SITE_URL` to your deployed domain URL.

## Notes

- v1 intentionally uses YouTube embeds instead of native upload/transcoding.
- If Supabase is unavailable or env vars are missing, the app falls back to local sample data (`src/data/seed.ts`).
- You can customize placeholder text and social links from components and page files.

