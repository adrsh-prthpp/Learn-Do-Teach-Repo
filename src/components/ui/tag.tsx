export function Tag({ text }: { text: string }) {
  return <span className="rounded-full bg-muted px-2 py-1 text-xs text-foreground/80">#{text}</span>;
}

