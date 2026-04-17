import { ProjectCard } from "@/components/sections/project-card";
import { getProjects } from "@/lib/content";

export const metadata = { title: "Projects", description: "Production-focused technical projects and case studies." };

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
    </section>
  );
}

