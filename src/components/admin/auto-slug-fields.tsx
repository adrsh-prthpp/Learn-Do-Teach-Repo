"use client";

import { useId, useState } from "react";
import { slugify } from "@/lib/utils";

export function AutoSlugFields({
  sourceLabel,
  sourceName,
  slugLabel = "Slug",
  slugName = "slug",
  sourcePlaceholder,
  slugPlaceholder = "my-clean-url-slug"
}: {
  sourceLabel: string;
  sourceName: string;
  slugLabel?: string;
  slugName?: string;
  sourcePlaceholder?: string;
  slugPlaceholder?: string;
}) {
  const sourceId = useId();
  const slugId = useId();
  const [slug, setSlug] = useState("");
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(false);

  return (
    <>
      <label className="block space-y-1 text-sm" htmlFor={sourceId}>
        <span>{sourceLabel}</span>
        <input
          id={sourceId}
          name={sourceName}
          required
          placeholder={sourcePlaceholder}
          className="w-full rounded-lg border border-foreground/20 bg-transparent px-3 py-2"
          onChange={(event) => {
            if (isSlugManuallyEdited) return;
            setSlug(slugify(event.target.value));
          }}
        />
      </label>

      <label className="block space-y-1 text-sm" htmlFor={slugId}>
        <span>{slugLabel}</span>
        <input
          id={slugId}
          name={slugName}
          required
          value={slug}
          placeholder={slugPlaceholder}
          className="w-full rounded-lg border border-foreground/20 bg-transparent px-3 py-2"
          onChange={(event) => {
            const nextSlug = slugify(event.target.value);
            setSlug(nextSlug);
            setIsSlugManuallyEdited(nextSlug.length > 0);
          }}
        />
        <p className="text-xs leading-5 text-foreground/55">
          Auto-generated from the title. You can still edit it if you want a custom URL.
        </p>
      </label>
    </>
  );
}
