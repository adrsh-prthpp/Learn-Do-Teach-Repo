import Link from "next/link";

const links = [
  { href: "/videos", label: "Teaching" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <Link href="/" className="space-y-1">
          <p className="text-lg font-semibold">Learn Build Teach</p>
          <p className="text-xs uppercase tracking-[0.18em] text-foreground/50">Portfolio + Teaching Archive</p>
        </Link>

        <nav className="flex items-center gap-5 text-sm text-foreground/80">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
          <Link href="/admin" className="rounded-lg border border-foreground/20 px-3 py-1.5 text-xs">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
