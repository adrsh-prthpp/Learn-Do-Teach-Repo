import Link from "next/link";
import { signOut } from "@/lib/admin-actions";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 md:grid-cols-[220px_1fr]">
      <aside className="space-y-3 rounded-2xl border border-foreground/10 p-4">
        <h2 className="font-semibold">Admin</h2>
        <nav className="flex flex-col gap-2 text-sm">
          <Link href="/admin/videos">Videos</Link>
          <Link href="/admin/blog">Blog</Link>
          <Link href="/admin/projects">Projects</Link>
        </nav>
        <form action={signOut}>
          <button className="mt-4 rounded-lg border border-foreground/20 px-3 py-2 text-sm">Sign out</button>
        </form>
      </aside>
      <main>{children}</main>
    </div>
  );
}

