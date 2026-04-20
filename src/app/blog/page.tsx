import { BlogCard } from "@/components/sections/blog-card";
import { getBlogPosts } from "@/lib/content";

export const metadata = {
  title: "Blog",
  description: "Technical writing, reflections, and learning notes behind the projects and teaching videos."
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="space-y-8">
      <div className="max-w-3xl space-y-4 rounded-[1.5rem] border border-foreground/10 bg-[linear-gradient(180deg,_rgba(250,250,251,0.98),_rgba(246,247,249,0.95))] px-6 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-foreground/50 sm:text-sm">Writing</p>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
            Where I think through what I&apos;m learning.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-foreground/72 sm:text-lg">
            Some ideas need more than a video. This is where I break things down, reflect on how I learn, and share
            thoughts on tech, career, and the tradeoffs behind what I build.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">{posts.map((post) => <BlogCard key={post.id} post={post} />)}</div>
    </section>
  );
}

