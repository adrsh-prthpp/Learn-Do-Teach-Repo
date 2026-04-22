import { samplePosts, sampleProjects, sampleVideos } from "@/data/seed";
import { BlogPost, Project, Video } from "@/types/content";
import { createClient } from "@/lib/supabase/server";

async function tryQuery<T>(table: "videos" | "blog_posts" | "projects"): Promise<T[] | null> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from(table).select("*").order("published_at", { ascending: false });
    if (error) return null;
    return (data as T[]) ?? null;
  } catch {
    return null;
  }
}

async function getTableRows<T>(
  table: "videos" | "blog_posts" | "projects",
  fallbackData: T[],
  options?: { fallbackToSample?: boolean }
): Promise<T[]> {
  const data = await tryQuery<T>(table);
  if (data && data.length > 0) return data;
  return options?.fallbackToSample === false ? [] : fallbackData;
}

export async function getVideos(options?: { fallbackToSample?: boolean }): Promise<Video[]> {
  return getTableRows("videos", sampleVideos, options);
}

export async function getAdminVideos(): Promise<Video[]> {
  return getVideos({ fallbackToSample: false });
}

export async function getFeaturedVideos() {
  const videos = await getVideos();
  return videos.filter((item) => item.featured).slice(0, 3);
}

export async function getVideoBySlug(slug: string) {
  const videos = await getVideos();
  return videos.find((item) => item.slug === slug) ?? null;
}

export async function getProjectByVideoSlug(videoSlug: string) {
  const projects = await getProjects();
  return projects.find((item) => item.video_slug === videoSlug) ?? null;
}

export async function getBlogPosts(options?: { fallbackToSample?: boolean }): Promise<BlogPost[]> {
  return getTableRows("blog_posts", samplePosts, options);
}

export async function getAdminBlogPosts(): Promise<BlogPost[]> {
  return getBlogPosts({ fallbackToSample: false });
}

export async function getFeaturedPosts() {
  const posts = await getBlogPosts();
  return posts.filter((item) => item.featured).slice(0, 3);
}

export async function getPostBySlug(slug: string) {
  const posts = await getBlogPosts();
  return posts.find((item) => item.slug === slug) ?? null;
}

export async function getProjects(options?: { fallbackToSample?: boolean }): Promise<Project[]> {
  return getTableRows("projects", sampleProjects, options);
}

export async function getAdminProjects(): Promise<Project[]> {
  return getProjects({ fallbackToSample: false });
}

export async function getFeaturedProjects() {
  const projects = await getProjects();
  return projects.filter((item) => item.featured).slice(0, 3);
}

export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();
  return projects.find((item) => item.slug === slug) ?? null;
}
