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

export async function getVideos(): Promise<Video[]> {
  return (await tryQuery<Video>("videos")) ?? sampleVideos;
}

export async function getFeaturedVideos() {
  const videos = await getVideos();
  return videos.filter((item) => item.featured).slice(0, 3);
}

export async function getVideoBySlug(slug: string) {
  const videos = await getVideos();
  return videos.find((item) => item.slug === slug) ?? null;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return (await tryQuery<BlogPost>("blog_posts")) ?? samplePosts;
}

export async function getFeaturedPosts() {
  const posts = await getBlogPosts();
  return posts.filter((item) => item.featured).slice(0, 3);
}

export async function getPostBySlug(slug: string) {
  const posts = await getBlogPosts();
  return posts.find((item) => item.slug === slug) ?? null;
}

export async function getProjects(): Promise<Project[]> {
  return (await tryQuery<Project>("projects")) ?? sampleProjects;
}

export async function getFeaturedProjects() {
  const projects = await getProjects();
  return projects.filter((item) => item.featured).slice(0, 3);
}

export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();
  return projects.find((item) => item.slug === slug) ?? null;
}

