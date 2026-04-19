import { learningPrinciples } from "@/lib/content-config";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-foreground/10 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.20),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.18),_transparent_30%),linear-gradient(135deg,_rgba(255,255,255,0.98),_rgba(241,245,249,0.92))] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-12">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,0.9fr)] lg:items-end">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-foreground/60">
            Learn · Build · Teach
          </p>

          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              A portfolio built around teaching what I am learning in tech.
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-foreground/75">
              I use this site as a public proof-of-learning system. Every topic starts with study, gets pressure-tested
              through a project or demo, and turns into a video or write-up that shows what I actually understand.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href="/videos">Watch Teaching Videos</Button>
            <Button href="/projects" className="bg-foreground text-background">
              Explore Projects
            </Button>
            <Button href="/blog" className="border border-foreground/15 bg-background/70 text-foreground">
              Read Blog Posts
            </Button>
          </div>
        </div>

        <div className="grid gap-3 rounded-3xl border border-foreground/10 bg-background/75 p-5 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/50">The Loop</p>
          {learningPrinciples.map((principle, index) => (
            <div key={principle.title} className="rounded-2xl border border-foreground/10 bg-background/80 p-4">
              <p className="text-sm text-foreground/50">0{index + 1}</p>
              <h2 className="mt-1 text-xl font-semibold">{principle.title}</h2>
              <p className="mt-2 text-sm leading-6 text-foreground/70">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
