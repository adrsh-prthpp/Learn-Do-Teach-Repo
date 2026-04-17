import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Why I use building and teaching to deepen my understanding."
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-4xl font-bold">About Me</h1>

      <p className="text-foreground/75">
        I built this site around a simple idea: the best way to learn something
        deeply is to build it and then teach it clearly. If I can explain a
        concept, connect it to a project, and show how I applied it, that is a
        stronger signal of understanding than just saying I studied it.
      </p>

      <p className="text-foreground/75">
        This site is my proof-of-learning platform. Videos help me teach topics
        back, projects let me document the demos and technical writeups behind
        them, and blog posts give me space to share my thoughts on recent trends
        and ideas in tech.
      </p>

      <p className="text-foreground/75">
        Right now, my main learning tracks are AI, ML, Data, and Cloud. Over
        time, this site will show what I studied, what I built, and how my
        understanding evolved.
      </p>

      <div>
        <h2 className="mb-2 text-xl font-semibold">How I Use This Site</h2>
        <p className="text-foreground/75">
          Each topic starts with learning, then gets reinforced through a demo or
          project, and finally gets tested through a video explanation. Blog posts
          are separate and are mainly for reflections, opinions, and commentary.
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-xl font-semibold">Current Focus Areas</h2>
        <p className="text-foreground/75">AI · ML · Data · Cloud</p>
      </div>

      <Link
        href="https://example.com/resume.pdf"
        className="inline-block rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white"
        target="_blank"
      >
        View Resume
      </Link>
    </section>
  );
}