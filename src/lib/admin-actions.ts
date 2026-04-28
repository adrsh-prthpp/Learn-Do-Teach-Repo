"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { defaultProjectCategory, topicCategories } from "@/lib/content-config";
import { getYouTubeThumbnailUrl } from "@/lib/utils";
import { ProjectCategory, VideoCategory } from "@/types/content";

const projectCategories: ProjectCategory[] = [...topicCategories];
const videoCategories: VideoCategory[] = [...topicCategories];

function parseTags(value: FormDataEntryValue | null): string[] {
  return String(value ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseProjectCategory(value: FormDataEntryValue | null): ProjectCategory {
  const category = String(value ?? "");
  return projectCategories.includes(category as ProjectCategory) ? (category as ProjectCategory) : defaultProjectCategory;
}

function parseVideoCategory(value: FormDataEntryValue | null): VideoCategory {
  const category = String(value ?? "");
  return videoCategories.includes(category as VideoCategory) ? (category as VideoCategory) : "Cloud";
}

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const supabase = await createClient();
  await supabase.auth.signInWithPassword({ email, password });
  redirect("/admin");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function upsertVideo(formData: FormData) {
  const supabase = await createClient();
  const youtubeUrl = String(formData.get("youtube_url"));
  const thumbnailUrl = String(formData.get("thumbnail_url")).trim();
  const payload = {
    id: String(formData.get("id") || "") || undefined,
    title: String(formData.get("title")),
    slug: String(formData.get("slug")),
    description: String(formData.get("description")),
    why_this_video_exists: String(formData.get("why_this_video_exists")) || null,
    category: parseVideoCategory(formData.get("category")),
    youtube_url: youtubeUrl,
    thumbnail_url:
      (thumbnailUrl.includes("youtube.com") || thumbnailUrl.includes("youtu.be")
        ? getYouTubeThumbnailUrl(thumbnailUrl)
        : thumbnailUrl) ||
      getYouTubeThumbnailUrl(youtubeUrl) ||
      null,
    tags: parseTags(formData.get("tags")),
    featured: formData.get("featured") === "on",
    published_at: String(formData.get("published_at"))
  };
  await supabase.from("videos").upsert(payload);
  revalidatePath("/");
  revalidatePath("/videos");
  revalidatePath("/admin/videos");
}

export async function deleteVideo(formData: FormData) {
  const supabase = await createClient();
  await supabase.from("videos").delete().eq("id", String(formData.get("id")));
  revalidatePath("/videos");
  revalidatePath("/admin/videos");
}

export async function upsertPost(formData: FormData) {
  const supabase = await createClient();
  const payload = {
    id: String(formData.get("id") || "") || undefined,
    title: String(formData.get("title")),
    slug: String(formData.get("slug")),
    excerpt: String(formData.get("excerpt")),
    content: String(formData.get("content")),
    cover_image_url: String(formData.get("cover_image_url")) || null,
    tags: parseTags(formData.get("tags")),
    featured: formData.get("featured") === "on",
    published_at: String(formData.get("published_at"))
  };
  await supabase.from("blog_posts").upsert(payload);
  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
}

export async function deletePost(formData: FormData) {
  const supabase = await createClient();
  await supabase.from("blog_posts").delete().eq("id", String(formData.get("id")));
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
}

export async function upsertProject(formData: FormData) {
  const supabase = await createClient();
  const payload = {
    id: String(formData.get("id") || "") || undefined,
    name: String(formData.get("name")),
    slug: String(formData.get("slug")),
    category: parseProjectCategory(formData.get("category")),
    summary: String(formData.get("summary")),
    description: String(formData.get("description")),
    github_url: String(formData.get("github_url")) || null,
    demo_url: String(formData.get("demo_url")) || null,
    video_slug: String(formData.get("video_slug")) || null,
    image_url: String(formData.get("image_url")) || null,
    featured: formData.get("featured") === "on",
    published_at: String(formData.get("published_at"))
  };
  await supabase.from("projects").upsert(payload);
  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/admin/projects");
}

export async function deleteProject(formData: FormData) {
  const supabase = await createClient();
  await supabase.from("projects").delete().eq("id", String(formData.get("id")));
  revalidatePath("/projects");
  revalidatePath("/admin/projects");
}
