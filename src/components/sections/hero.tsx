import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="grid gap-6 rounded-3xl border border-foreground/10 bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-12">
      <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
        Learn · Build · Teach
      </p>

      <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
        I learn by building and teaching what I study.
      </h1>

      <p className="max-w-3xl text-lg text-foreground/75">
        This site is where I document my understanding through video explanations,
        technical project writeups, demos, and blog posts across AI, ML, Data,
        and Cloud.
      </p>

      <div className="flex flex-wrap gap-3">
        <Button href="/videos">Watch Videos</Button>
        <Button href="/projects" className="bg-foreground text-background">
          View Projects
        </Button>
      </div>
    </section>
  );
}