import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Tag } from "@/components/ui/tag";
import { BlogPost } from "@/types/content";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-foreground/10">
      {post.cover_image_url && <Image src={post.cover_image_url} alt={post.title} width={900} height={480} className="h-48 w-full object-cover" />}
      <div className="space-y-3 p-5">
        <p className="text-xs text-foreground/60">{format(new Date(post.published_at), "MMMM d, yyyy")}</p>
        <Link href={`/blog/${post.slug}`} className="text-lg font-semibold hover:text-primary">{post.title}</Link>
        <p className="text-sm text-foreground/75">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2">{post.tags.map((tag) => <Tag key={tag} text={tag} />)}</div>
      </div>
    </article>
  );
}

