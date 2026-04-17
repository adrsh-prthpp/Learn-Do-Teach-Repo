import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components/ui/tag";
import { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-foreground/10">
      {project.image_url && <Image src={project.image_url} alt={project.name} width={900} height={480} className="h-48 w-full object-cover" />}
      <div className="space-y-3 p-5">
        <Link href={`/projects/${project.slug}`} className="text-lg font-semibold hover:text-primary">{project.name}</Link>
        <p className="text-sm text-foreground/75">{project.summary}</p>
        <div className="flex gap-2">
          <Tag text={project.category} />
          {project.video_slug && <Tag text="has-video" />}
        </div>
      </div>
    </article>
  );
}