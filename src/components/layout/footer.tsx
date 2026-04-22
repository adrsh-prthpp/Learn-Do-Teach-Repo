import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-foreground/70 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p>© {new Date().getFullYear()} Learn Build Teach.</p>
          <p>A proof-of-learning portfolio built around teaching videos, blog posts, and project case studies.</p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link href="https://github.com/adrsh-prthpp" target="_blank">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/adharsh-prathap-cs" target="_blank">
            LinkedIn
          </Link>
          <Link href="https://youtube.com/@learnbyteaching-adharsh?si=drOxHZzuodQve2Sw" target="_blank">
            YouTube
          </Link>
        </div>
      </div>
    </footer>
  );
}
