import { notFound } from "next/navigation";
import { Tag } from "@/components/ui/tag";
import { extractYouTubeId } from "@/lib/utils";
import { getVideoBySlug, getVideos } from "@/lib/content";

export default async function VideoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const video = await getVideoBySlug(slug);
  if (!video) return notFound();

  const related = (await getVideos()).filter((item) => item.id !== video.id).slice(0, 3);
  const videoId = extractYouTubeId(video.youtube_url);

  return (
    <article className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold">{video.title}</h1>
        <p className="text-foreground/75">{video.description}</p>
        <div className="flex flex-wrap gap-2">{video.tags.map((tag) => <Tag key={tag} text={tag} />)}</div>
      </div>
      <div className="aspect-video overflow-hidden rounded-2xl border border-foreground/10">
        <iframe src={`https://www.youtube.com/embed/${videoId}`} title={video.title} className="h-full w-full" allowFullScreen />
      </div>
      <section>
        <h2 className="mb-3 text-2xl font-semibold">Related Videos</h2>
        <ul className="space-y-2 text-sm text-foreground/75">{related.map((item) => <li key={item.id}>â€¢ {item.title}</li>)}</ul>
      </section>
    </article>
  );
}

