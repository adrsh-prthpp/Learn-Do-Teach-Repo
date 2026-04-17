import Link from "next/link";
import Image from "next/image";
import { Tag } from "@/components/ui/tag";
import { Video } from "@/types/content";

export function VideoCard({ video }: { video: Video }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-foreground/10 bg-background">
      <Image src={video.thumbnail_url || "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb"} alt={video.title} width={800} height={450} className="h-48 w-full object-cover transition group-hover:scale-[1.02]" />
      <div className="space-y-3 p-5">
        <Link href={`/videos/${video.slug}`} className="text-lg font-semibold hover:text-primary">
          {video.title}
        </Link>
        <p className="text-sm text-foreground/75">{video.description}</p>
        <div className="flex flex-wrap gap-2">
          {video.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
      </div>
    </article>
  );
}

