import Link from "next/link";
import { AutoSlugFields } from "@/components/admin/auto-slug-fields";
import { InputField, SelectField, TextareaField } from "@/components/admin/form-fields";
import { deleteVideo, upsertVideo } from "@/lib/admin-actions";
import { topicCategories } from "@/lib/content-config";
import { getAdminVideos } from "@/lib/content";

export default async function AdminVideosPage({
  searchParams
}: {
  searchParams: Promise<{ edit?: string }>
}) {
  const items = await getAdminVideos();
  const { edit } = await searchParams;
  const editingVideo = items.find((item) => item.id === edit) ?? null;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold">Manage Videos</h1>
      <form action={upsertVideo} className="grid gap-3 rounded-2xl border border-foreground/10 p-4">
        {editingVideo ? <input type="hidden" name="id" value={editingVideo.id} /> : null}
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-foreground/70">
            {editingVideo ? `Editing: ${editingVideo.title}` : "Create a new video"}
          </p>
          {editingVideo ? (
            <Link href="/admin/videos" className="text-sm text-foreground/60 hover:text-foreground">
              Cancel edit
            </Link>
          ) : null}
        </div>
        <AutoSlugFields
          sourceLabel="Title"
          sourceName="title"
          sourcePlaceholder="What Happens in a RAG Pipeline?"
          sourceDefaultValue={editingVideo?.title}
          slugDefaultValue={editingVideo?.slug}
        />
        <TextareaField label="Description" name="description" defaultValue={editingVideo?.description} />
        <TextareaField
          label="Why This Video Exists"
          name="why_this_video_exists"
          rows={4}
          defaultValue={editingVideo?.why_this_video_exists ?? undefined}
        />
        <SelectField
          label="Topic"
          name="category"
          options={topicCategories}
          defaultValue={editingVideo?.category ?? "Cloud"}
        />
        <InputField label="YouTube URL" name="youtube_url" required defaultValue={editingVideo?.youtube_url} />
        <InputField label="Thumbnail URL" name="thumbnail_url" defaultValue={editingVideo?.thumbnail_url ?? undefined} />
        <InputField label="Tags (comma-separated)" name="tags" defaultValue={editingVideo?.tags.join(", ")} />
        <InputField label="Publish Date (YYYY-MM-DD)" name="published_at" required defaultValue={editingVideo?.published_at} />
        <label className="text-sm">
          <input type="checkbox" name="featured" defaultChecked={editingVideo?.featured} /> Featured
        </label>
        <button className="rounded-lg bg-primary px-4 py-2 text-white">
          {editingVideo ? "Update Video" : "Save Video"}
        </button>
      </form>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between rounded-xl border border-foreground/10 p-3 text-sm">
            <div>
              {item.title} · {item.category}
            </div>
            <div className="flex items-center gap-4">
              <Link href={`/admin/videos?edit=${item.id}`} className="text-foreground/70 hover:text-foreground">
                Edit
              </Link>
              <form action={deleteVideo}>
                <input type="hidden" name="id" value={item.id} />
                <button className="text-red-500">Delete</button>
              </form>
            </div>
          </div>
        ))}
        {items.length === 0 ? (
          <div className="rounded-xl border border-dashed border-foreground/12 bg-muted/35 px-4 py-6 text-sm text-foreground/65">
            No videos have been saved in the database yet.
          </div>
        ) : null}
      </div>
    </div>
  );
}
