import { BlogCard } from "@/components/sections/blog-card";
import { getBlogPosts } from "@/lib/content";

export const metadata = { title: "Blog", description: "Technical writing, playbooks, and engineering insights." };

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">{posts.map((post) => <BlogCard key={post.id} post={post} />)}</div>
    </section>
  );
}

