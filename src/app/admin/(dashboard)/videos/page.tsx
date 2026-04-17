import { InputField, TextareaField } from "@/components/admin/form-fields";
import { deleteVideo, upsertVideo } from "@/lib/admin-actions";
import { getVideos } from "@/lib/content";

export default async function AdminVideosPage() {
  const items = await getVideos();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Manage Videos</h1>
      <form action={upsertVideo} className="grid gap-3 rounded-2xl border border-foreground/10 p-4">
        <InputField label="Title" name="title" required />
        <InputField label="Slug" name="slug" required />
        <TextareaField label="Description" name="description" />
        <InputField label="YouTube URL" name="youtube_url" required />
        <InputField label="Thumbnail URL" name="thumbnail_url" />
        <InputField label="Tags (comma-separated)" name="tags" />
        <InputField label="Publish Date (YYYY-MM-DD)" name="published_at" required />
        <label className="text-sm"><input type="checkbox" name="featured" /> Featured</label>
        <button className="rounded-lg bg-primary px-4 py-2 text-white">Save Video</button>
      </form>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between rounded-xl border border-foreground/10 p-3 text-sm">
            <div>{item.title}</div>
            <form action={deleteVideo}>
              <input type="hidden" name="id" value={item.id} />
              <button className="text-red-500">Delete</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

