export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type ProjectCategory = "AI" | "ML" | "Data" | "Cloud";

export interface Video {
  id: string;
  title: string;
  slug: string;
  description: string;
  youtube_url: string;
  thumbnail_url: string | null;
  tags: string[];
  featured: boolean;
  published_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image_url: string | null;
  tags: string[];
  featured: boolean;
  published_at: string;
}

export interface Project {
  id: string;
  name: string;
  slug: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  github_url: string | null;
  demo_url: string | null;
  video_slug: string | null;
  image_url: string | null;
  featured: boolean;
  published_at: string;
}