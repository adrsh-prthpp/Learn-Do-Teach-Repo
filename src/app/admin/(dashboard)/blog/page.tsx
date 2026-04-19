import { AutoSlugFields } from "@/components/admin/auto-slug-fields";
import { InputField, TextareaField } from "@/components/admin/form-fields";
import { deletePost, upsertPost } from "@/lib/admin-actions";
import { getBlogPosts } from "@/lib/content";

export default async function AdminBlogPage() {
  const items = await getBlogPosts();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Manage Blog Posts</h1>
      <form action={upsertPost} className="grid gap-3 rounded-2xl border border-foreground/10 p-4">
        <AutoSlugFields sourceLabel="Title" sourceName="title" sourcePlaceholder="Why Teaching Forces Better Understanding" />
        <TextareaField label="Excerpt" name="excerpt" rows={2} />
        <TextareaField label="Content (Markdown-friendly)" name="content" rows={10} />
        <InputField label="Cover Image URL" name="cover_image_url" />
        <InputField label="Tags (comma-separated)" name="tags" />
        <InputField label="Publish Date (YYYY-MM-DD)" name="published_at" required />
        <label className="text-sm"><input type="checkbox" name="featured" /> Featured</label>
        <button className="rounded-lg bg-primary px-4 py-2 text-white">Save Post</button>
      </form>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between rounded-xl border border-foreground/10 p-3 text-sm">
            <div>{item.title}</div>
            <form action={deletePost}>
              <input type="hidden" name="id" value={item.id} />
              <button className="text-red-500">Delete</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

