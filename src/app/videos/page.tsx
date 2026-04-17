import { VideoCard } from "@/components/sections/video-card";
import { getVideos } from "@/lib/content";

export const metadata = { title: "Videos", description: "Video explainers and technical walkthroughs." };

export default async function VideosPage() {
  const videos = await getVideos();
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">Videos</h1>
      <p className="text-foreground/70">YouTube-based technical breakdowns for engineers and technical teams.</p>
      <div className="grid gap-6 md:grid-cols-2">{videos.map((video) => <VideoCard key={video.id} video={video} />)}</div>
    </section>
  );
}

