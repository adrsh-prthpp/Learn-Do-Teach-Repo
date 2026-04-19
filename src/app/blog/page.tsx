import { BlogCard } from "@/components/sections/blog-card";
import { getBlogPosts } from "@/lib/content";

export const metadata = {
  title: "Blog",
  description: "Technical writing, reflections, and learning notes behind the projects and teaching videos."
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="space-y-6">
      <div className="max-w-3xl space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">Writing</p>
        <h1 className="text-4xl font-bold">The written side of the learning process.</h1>
        <p className="text-lg leading-8 text-foreground/72">
          This is where I expand on ideas that need more room than a short video. Some posts are technical breakdowns,
          some are reflections on how I learn, and some document the tradeoffs behind a project build.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">{posts.map((post) => <BlogCard key={post.id} post={post} />)}</div>
    </section>
  );
}

