import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
      <div className="flex flex-wrap gap-4 text-sm">
        {project.github_url && <Link href={project.github_url} target="_blank" className="text-primary">GitHub</Link>}
        {project.demo_url && <Link href={project.demo_url} target="_blank" className="text-primary">Live Demo</Link>}
        {project.video_slug && <Link href={`/videos/${project.video_slug}`} className="text-primary">Related Video</Link>}
      </div>
    </article>
  );
}