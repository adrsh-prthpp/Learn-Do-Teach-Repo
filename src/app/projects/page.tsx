import { ProjectCard } from "@/components/sections/project-card";
import { getProjects } from "@/lib/content";

export const metadata = {
  title: "Projects",
  description: "Projects and demos that reinforce the concepts I am studying and teaching."
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="space-y-8">
      <div className="max-w-3xl space-y-4 rounded-[1.5rem] border border-foreground/10 bg-[linear-gradient(180deg,_rgba(252,252,253,0.98),_rgba(247,248,250,0.95))] px-6 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-foreground/50 sm:text-sm">Projects</p>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-4xl md:text-5xl">
            Proof of understanding through building.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-foreground/72 sm:text-lg">
            Each project is how I validate what I learn: by building around a concept or working through a demo and
            turning it into something I can explain.
          </p>
        </div>
        <p className="text-sm leading-7 text-foreground/60 sm:text-base">
          Most projects are paired with a teaching video that explains the underlying ideas.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
    </section>
  );
}

