import { AutoSlugFields } from "@/components/admin/auto-slug-fields";
import { InputField, SelectField, TextareaField } from "@/components/admin/form-fields";
import { deleteProject, upsertProject } from "@/lib/admin-actions";
import { defaultProjectCategory, topicCategories } from "@/lib/content-config";
import { getProjects } from "@/lib/content";

export default async function AdminProjectsPage() {
  const items = await getProjects();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Manage Projects</h1>
      <form action={upsertProject} className="grid gap-3 rounded-2xl border border-foreground/10 p-4">
        <AutoSlugFields sourceLabel="Name" sourceName="name" sourcePlaceholder="LLM Ops Prompt Evaluator" />
        <SelectField label="Category" name="category" options={topicCategories} defaultValue={defaultProjectCategory} />
        <TextareaField label="Summary" name="summary" rows={2} />
        <TextareaField label="Description" name="description" rows={5} />
        <InputField label="GitHub URL" name="github_url" />
        <InputField label="Demo URL" name="demo_url" />
        <InputField label="Related Video Slug" name="video_slug" />
        <InputField label="Image URL" name="image_url" />
        <InputField label="Publish Date (YYYY-MM-DD)" name="published_at" required />
        <label className="text-sm"><input type="checkbox" name="featured" /> Featured</label>
        <button className="rounded-lg bg-primary px-4 py-2 text-white">Save Project</button>
      </form>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between rounded-xl border border-foreground/10 p-3 text-sm">
            <div>
              {item.name} · {item.category}
            </div>
            <form action={deleteProject}>
              <input type="hidden" name="id" value={item.id} />
              <button className="text-red-500">Delete</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
