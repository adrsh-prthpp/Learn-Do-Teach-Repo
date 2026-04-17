export function InputField({ label, name, defaultValue, required = false }: { label: string; name: string; defaultValue?: string; required?: boolean }) {
  return (
    <label className="block space-y-1 text-sm">
      <span>{label}</span>
      <input name={name} defaultValue={defaultValue} required={required} className="w-full rounded-lg border border-foreground/20 bg-transparent px-3 py-2" />
    </label>
  );
}

export function TextareaField({ label, name, defaultValue, rows = 4 }: { label: string; name: string; defaultValue?: string; rows?: number }) {
  return (
    <label className="block space-y-1 text-sm">
      <span>{label}</span>
      <textarea name={name} defaultValue={defaultValue} rows={rows} className="w-full rounded-lg border border-foreground/20 bg-transparent px-3 py-2" />
    </label>
  );
}

