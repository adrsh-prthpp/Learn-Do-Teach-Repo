import { VideoCard } from "@/components/sections/video-card";
import { categoryDescriptions, topicCategories } from "@/lib/content-config";
import { getProjects, getVideos } from "@/lib/content";

export const metadata = {
  title: "Teaching Videos",
  description: "Video explainers where I teach back what I am learning across AI, ML, Data, Cloud, Systems, and Web."
};

export default async function VideosPage() {
  const [videos, projects] = await Promise.all([getVideos(), getProjects()]);
  const projectSlugByVideoSlug = new Map(
    projects.filter((project) => project.video_slug).map((project) => [project.video_slug as string, project.slug])
  );

  return (
    <section className="space-y-8">
      <div className="max-w-3xl space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">Teaching Library</p>
        <h1 className="text-4xl font-bold">Videos that turn studying into proof of learning.</h1>
        <p className="text-lg leading-8 text-foreground/72">
          Every video is published through YouTube and embedded here so the site becomes the organized archive of what I
          am learning. The goal is not just to share tutorials. It is to pressure-test my own understanding by explaining
          each topic clearly.
        </p>
      </div>

      {topicCategories.map((category) => {
        const items = videos.filter((video) => video.category === category);
        if (items.length === 0) return null;

        return (
          <section key={category} className="space-y-4 rounded-3xl border border-foreground/10 bg-background p-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">{category}</h2>
              <p className="max-w-3xl text-sm leading-6 text-foreground/68">{categoryDescriptions[category]}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {items.map((video) => (
                <VideoCard key={video.id} video={video} projectSlug={projectSlugByVideoSlug.get(video.slug)} />
              ))}
            </div>
          </section>
        );
      })}
    </section>
  );
}
