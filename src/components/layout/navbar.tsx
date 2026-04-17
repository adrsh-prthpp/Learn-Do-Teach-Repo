import Link from "next/link";

const links = [
  { href: "/videos", label: "Videos" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold">
          Learn Build Teach
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