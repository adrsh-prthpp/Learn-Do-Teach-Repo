import { HeroSection } from "@/components/sections/hero";
import { BlogCard } from "@/components/sections/blog-card";
import { ProjectCard } from "@/components/sections/project-card";
import { VideoCard } from "@/components/sections/video-card";
import { categoryDescriptions, topicCategories } from "@/lib/content-config";
import { getFeaturedPosts, getFeaturedProjects, getFeaturedVideos, getProjects } from "@/lib/content";

const homepageLearningLoop = [
  {
    title: "Learn",
    description: "I study a topic until I can clearly explain it."
  },
  {
    title: "Build",
    description: "I reinforce it by building a project or working through a demo."
  },
  {
    title: "Teach",
    description: "I explain the topic at the depth of my understanding through a teaching video."
  }
] as const;

const sectionHeaderClass = "space-y-3";
const sectionEyebrowClass = "text-xs font-semibold uppercase tracking-[0.24em] text-foreground/48 sm:text-sm";
const sectionTitleClass = "text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-[2rem]";
const sectionCopyClass = "max-w-2xl text-base leading-7 text-foreground/72";

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

  return (
    <div className="space-y-16 pb-6 md:space-y-20">
      <HeroSection />

      <section className="rounded-[1.75rem] border border-foreground/10 bg-[linear-gradient(180deg,_rgba(248,250,252,0.95),_rgba(255,255,255,0.96))] p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8">
        <div className={sectionHeaderClass}>
          <p className={sectionEyebrowClass}>Why This Exists</p>
          <div className="max-w-3xl space-y-4">
            <p className={sectionCopyClass}>
              This portfolio exists to solidify, test, and prove my understanding of the topics I&apos;m learning.
            </p>
            <p className={sectionCopyClass}>
              I believe true understanding comes from being able to teach something clearly. This site is where I
              validate that, and document my progress along the way.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-7">
        <div className={sectionHeaderClass}>
          <p className={sectionEyebrowClass}>Learn Build Teach</p>
          <h2 className={sectionTitleClass}>The loop behind the portfolio</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {homepageLearningLoop.map((principle, index) => (
            <article
              key={principle.title}
              className="rounded-[1.5rem] border border-foreground/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(248,250,252,0.95))] p-6 shadow-[0_16px_45px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-foreground">{principle.title}</h3>
                <span className="rounded-full border border-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/45">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-5 text-sm leading-7 text-foreground/72">{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-7">
        <div className={sectionHeaderClass}>
          <p className={sectionEyebrowClass}>Focus Areas</p>
          <h2 className={sectionTitleClass}>Topics I&apos;m currently learning</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topicCategories.map((category) => (
            <article
              key={category}
              className="rounded-[1.5rem] border border-foreground/10 bg-background px-6 py-6 shadow-[0_16px_45px_rgba(15,23,42,0.04)]"
            >
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">{category}</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/70">{categoryDescriptions[category]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-7">
        <div className={sectionHeaderClass}>
          <p className={sectionEyebrowClass}>Featured Videos</p>
          <h2 className={sectionTitleClass}>Recent teaching explanations</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} projectSlug={projectSlugByVideoSlug.get(video.slug)} />
          ))}
        </div>
      </section>

      <section className="space-y-7">
        <div className={sectionHeaderClass}>
          <p className={sectionEyebrowClass}>Featured Projects</p>
          <h2 className={sectionTitleClass}>Builds that reinforce the concepts</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-7">
        <div className={sectionHeaderClass}>
          <p className={sectionEyebrowClass}>Insights</p>
          <h2 className={sectionTitleClass}>Notes, reflections, and technical breakdowns</h2>
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
