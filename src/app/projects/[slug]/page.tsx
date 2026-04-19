import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { getProjectBySlug } from "@/lib/content";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <article className="space-y-6">
      <h1 className="text-4xl font-bold">{project.name}</h1>
      <div className="flex flex-wrap gap-2">
        <Tag text={project.category} />
      </div>
      <p className="max-w-3xl text-foreground/75">{project.description}</p>
      {project.image_url && <Image src={project.image_url} alt={project.name} width={1200} height={640} className="rounded-2xl object-cover" />}
      <div className="flex flex-wrap gap-4">
        {project.github_url && <Button href={project.github_url}>GitHub</Button>}
        {project.demo_url && <Button href={project.demo_url} className="border border-foreground/15 bg-background text-foreground">Live Demo</Button>}
        {project.video_slug && <Button href={`/videos/${project.video_slug}`} className="bg-foreground text-background">Watch Related Video</Button>}
      </div>
    </article>
  );
}
