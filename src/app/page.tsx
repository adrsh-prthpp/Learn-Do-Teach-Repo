import { HeroSection } from "@/components/sections/hero";
import { BlogCard } from "@/components/sections/blog-card";
import { ProjectCard } from "@/components/sections/project-card";
import { VideoCard } from "@/components/sections/video-card";
import { categoryDescriptions, learningPrinciples, topicCategories } from "@/lib/content-config";
import { getFeaturedPosts, getFeaturedProjects, getFeaturedVideos, getProjects } from "@/lib/content";

export default async function Home() {
  const [videos, posts, projects, allProjects] = await Promise.all([
    getFeaturedVideos(),
    getFeaturedPosts(),
    getFeaturedProjects(),
    getProjects()
  ]);

  const projectSlugByVideoSlug = new Map(
    allProjects.filter((project) => project.video_slug).map((project) => [project.video_slug as string, project.slug])
  );

  const stats = [
    { label: "Teaching videos", value: String(videos.length).padStart(2, "0") },
    { label: "Project case studies", value: String(projects.length).padStart(2, "0") },
    { label: "Writing pieces", value: String(posts.length).padStart(2, "0") }
  ];

  return (
    <div className="space-y-14">
      <HeroSection />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="rounded-3xl border border-foreground/10 bg-muted/60 p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">Why This Exists</p>
          <h2 className="mt-3 text-3xl font-semibold">This is less about content creation and more about visible understanding.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-foreground/75">
            The main goal is to make my learning concrete. If I can break down an idea clearly, connect it to a build,
            and publish the explanation, I know I have actually moved beyond passive consumption.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-foreground/10 bg-background p-5">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="mt-2 text-sm text-foreground/65">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">Focus Areas</p>
          <h2 className="text-3xl font-semibold">Topics I am learning in public</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topicCategories.map((category) => (
            <article key={category} className="rounded-3xl border border-foreground/10 bg-background p-5">
              <h3 className="text-xl font-semibold">{category}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/70">{categoryDescriptions[category]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">Learning Loop</p>
          <h2 className="text-3xl font-semibold">How each topic moves through the site</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {learningPrinciples.map((principle) => (
            <article key={principle.title} className="rounded-3xl border border-foreground/10 bg-background p-5">
              <h3 className="text-xl font-semibold">{principle.title}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/70">{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">Featured</p>
          <h2 className="text-3xl font-semibold">Recent teaching videos</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} projectSlug={projectSlugByVideoSlug.get(video.slug)} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">Projects</p>
          <h2 className="text-3xl font-semibold">Builds that reinforce the concepts</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">Writing</p>
          <h2 className="text-3xl font-semibold">Notes, reflections, and technical breakdowns</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
