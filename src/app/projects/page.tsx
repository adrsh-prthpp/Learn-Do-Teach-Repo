import { ProjectCard } from "@/components/sections/project-card";
import { getProjects } from "@/lib/content";

export const metadata = {
  title: "Projects",
  description: "Projects and demos that reinforce the concepts I am studying and teaching."
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="space-y-6">
      <div className="max-w-3xl space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">Projects</p>
        <h1 className="text-4xl font-bold">Builds that make the learning real.</h1>
        <p className="text-lg leading-8 text-foreground/72">
          These projects are part of the same loop as the videos and blog posts. I use them to test ideas in practice,
          document tradeoffs, and turn abstract concepts into something I can demo and explain.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
    </section>
  );
}

