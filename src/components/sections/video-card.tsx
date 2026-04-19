import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { Video } from "@/types/content";

export function VideoCard({ video, projectSlug }: { video: Video; projectSlug?: string | null }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-foreground/10 bg-background">
      <Image
        src={video.thumbnail_url || "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb"}
        alt={video.title}
        width={800}
        height={450}
        className="h-48 w-full object-cover transition group-hover:scale-[1.02]"
      />
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.16em] text-foreground/50">
          <span>{video.category}</span>
          <span>Teach Back</span>
        </div>
        <Link href={`/videos/${video.slug}`} className="text-lg font-semibold hover:text-primary">
          {video.title}
        </Link>
        <p className="text-sm leading-6 text-foreground/75">{video.description}</p>
        <div className="flex flex-wrap gap-2">
          {video.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-1">
          <Button href={`/videos/${video.slug}`}>Watch Video</Button>
          {projectSlug ? (
            <Button href={`/projects/${projectSlug}`} className="bg-foreground text-background">
              View Project
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
