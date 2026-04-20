import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-foreground/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(248,250,252,0.94))] px-6 py-10 shadow-[0_24px_70px_rgba(15,23,42,0.07)] sm:px-8 md:px-12 md:py-14">
      <div className="max-w-4xl space-y-8">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-foreground/50 sm:text-sm">
            Learn Build Teach
          </p>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl">
              If I can&apos;t explain it, I haven&apos;t learned it. This is where I do both.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-foreground/72 sm:text-lg">
              This portfolio is my proof-of-learning system. Every topic starts with study, reinforced through a
              project or demo, and is solidified by teaching it.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button href="/videos">Watch Explanations</Button>
          <Button href="/projects" variant="secondary">
            Explore Projects
          </Button>
          <Button href="/blog" variant="ghost">
            Read Insights
          </Button>
        </div>
      </div>
    </section>
  );
}
