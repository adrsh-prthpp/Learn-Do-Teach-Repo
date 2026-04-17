import { HeroSection } from "@/components/sections/hero";
import { BlogCard } from "@/components/sections/blog-card";
import { ProjectCard } from "@/components/sections/project-card";
import { VideoCard } from "@/components/sections/video-card";
import { getFeaturedPosts, getFeaturedProjects, getFeaturedVideos } from "@/lib/content";

export default async function Home() {
  const [videos, posts, projects] = await Promise.all([
    getFeaturedVideos(),
    getFeaturedPosts(),
    getFeaturedProjects()
  ]);

  return (
    <div className="space-y-12">
      <HeroSection />
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Featured Videos</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{videos.map((video) => <VideoCard key={video.id} video={video} />)}</div>
      </section>
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Featured Blog Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{posts.map((post) => <BlogCard key={post.id} post={post} />)}</div>
      </section>
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
      </section>
    </div>
  );
}

