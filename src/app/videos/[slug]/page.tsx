import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { extractYouTubeId } from "@/lib/utils";
import { getProjectByVideoSlug, getVideoBySlug, getVideos } from "@/lib/content";

export default async function VideoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const video = await getVideoBySlug(slug);
  if (!video) return notFound();
  const relatedProject = await getProjectByVideoSlug(video.slug);

  const related = (await getVideos())
    .filter((item) => item.id !== video.id && item.category === video.category)
    .slice(0, 3);
  const videoId = extractYouTubeId(video.youtube_url);

  return (
    <article className="space-y-8">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">{video.category}</p>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold">{video.title}</h1>
          <p className="max-w-3xl text-lg leading-8 text-foreground/75">{video.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {video.tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-1">
          <Button href={video.youtube_url}>Open on YouTube</Button>
          {relatedProject ? (
            <Button href={`/projects/${relatedProject.slug}`} className="bg-foreground text-background">
              View Related Project
            </Button>
          ) : null}
        </div>
      </div>

      <div className="aspect-video overflow-hidden rounded-2xl border border-foreground/10 bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={video.title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <section className="rounded-3xl border border-foreground/10 bg-muted/50 p-6">
        <h2 className="text-2xl font-semibold">Why this video exists</h2>
        <p className="mt-3 max-w-3xl leading-7 text-foreground/75">
          {video.why_this_video_exists ||
            "This explainer is part of my learn-build-teach workflow. The point is to compress a topic into a clear, teachable explanation so I can see whether I truly understand the concept and where I still need to go deeper."}
        </p>
      </section>

      {related.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">More from this topic</h2>
          <ul className="space-y-2 text-sm text-foreground/75">
            {related.map((item) => (
              <li key={item.id}>
                <Link href={`/videos/${item.slug}`} className="hover:text-primary">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
