import Link from "next/link";
import { categoryDescriptions, learningPrinciples, topicCategories } from "@/lib/content-config";

export const metadata = {
  title: "About",
  description: "Why I use building and teaching to deepen my understanding."
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl space-y-8">
      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50">About</p>
        <h1 className="text-4xl font-bold">I built this site to prove my learning by teaching it back.</h1>
        <p className="max-w-3xl text-lg leading-8 text-foreground/75">
          This site is my personal learning system for tech. Instead of keeping notes private, I turn concepts into
          projects, videos, and writing to see whether I truly understand them. Helping others is a great side effect,
          but the main purpose is sharpening my own thinking.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {learningPrinciples.map((principle) => (
          <article key={principle.title} className="rounded-3xl border border-foreground/10 bg-background p-5">
            <h2 className="text-xl font-semibold">{principle.title}</h2>
            <p className="mt-2 text-sm leading-6 text-foreground/70">{principle.description}</p>
          </article>
        ))}
      </div>

      <div className="space-y-4 rounded-3xl border border-foreground/10 bg-muted/50 p-6">
        <h2 className="text-2xl font-semibold">How I use the platform</h2>
        <p className="leading-7 text-foreground/75">
          Most topics start as a question I want to understand better. I study it, build something small around it, and
          then explain it through a video or post. Over time, the site becomes a timeline of what I&apos;ve learned, how
          I&apos;ve applied it, and how my understanding has evolved.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Current learning tracks</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {topicCategories.map((category) => (
            <article key={category} className="rounded-3xl border border-foreground/10 bg-background p-5">
              <h3 className="text-lg font-semibold">{category}</h3>
              <p className="mt-2 text-sm leading-6 text-foreground/70">{categoryDescriptions[category]}</p>
            </article>
          ))}
        </div>
      </div>

      <Link
        href="/videos"
        className="inline-block rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white"
      >
        Start With The Videos
      </Link>
    </section>
  );
}
