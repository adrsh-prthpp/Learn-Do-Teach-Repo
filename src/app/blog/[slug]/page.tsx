import Image from "next/image";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import { Tag } from "@/components/ui/tag";
import { getPostBySlug } from "@/lib/content";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <p className="text-sm text-foreground/60">{format(new Date(post.published_at), "MMMM d, yyyy")}</p>
      <h1 className="text-4xl font-bold">{post.title}</h1>
      {post.cover_image_url && <Image src={post.cover_image_url} alt={post.title} width={1200} height={600} className="rounded-2xl object-cover" />}
      <div className="flex flex-wrap gap-2">{post.tags.map((tag) => <Tag key={tag} text={tag} />)}</div>
      <div className="prose-content text-foreground/90 whitespace-pre-wrap">{post.content}</div>
    </article>
  );
}

