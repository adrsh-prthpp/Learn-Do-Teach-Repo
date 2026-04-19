import { BlogPost, Project, Video } from "@/types/content";

export const sampleVideos: Video[] = [
  {
    id: "1",
    title: "What Happens in a RAG Pipeline?",
    slug: "what-happens-in-a-rag-pipeline",
    description: "A teaching-first walkthrough of retrieval, embeddings, ranking, and response generation.",
    category: "AI/ML",
    youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail_url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    tags: ["rag", "llms", "embeddings"],
    featured: true,
    published_at: "2026-03-21"
  },
  {
    id: "2",
    title: "How Feature Stores Help AI Teams Move Faster",
    slug: "how-feature-stores-help-ml-teams-move-faster",
    description: "A practical explanation of feature reuse, online vs. offline stores, and why this matters in production ML.",
    category: "AI/ML",
    youtube_url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail_url: "https://i.ytimg.com/vi/ysz5S6PUM-U/maxresdefault.jpg",
    tags: ["feature store", "ml systems", "production ml"],
    featured: true,
    published_at: "2026-02-18"
  },
  {
    id: "3",
    title: "System Design: API Gateway Patterns",
    slug: "api-gateway-patterns",
    description: "Practical API gateway design decisions for modern cloud and backend stacks.",
    category: "Cloud",
    youtube_url: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    thumbnail_url: "https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
    tags: ["system design", "api gateway", "backend"],
    featured: true,
    published_at: "2026-01-30"
  }
];

export const samplePosts: BlogPost[] = [
  {
    id: "1",
    title: "Why Teaching Forces Better Understanding",
    slug: "why-teaching-forces-better-understanding",
    excerpt: "The feedback loop I use to turn passive study into visible proof of learning.",
    content: "## Why I built this workflow\nIf I cannot explain a concept simply, I probably do not understand it deeply enough yet...",
    cover_image_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tags: ["learning", "teaching", "career"],
    featured: true,
    published_at: "2026-03-10"
  },
  {
    id: "2",
    title: "From Notes to Demo: My Project-Based Learning Loop",
    slug: "from-notes-to-demo",
    excerpt: "How I turn new topics into projects, short explainers, and a personal knowledge base.",
    content: "## Start with a narrow question\nThe fastest path to clarity is to pick one concept, one implementation, and one explanation...",
    cover_image_url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    tags: ["projects", "workflow", "learning systems"],
    featured: true,
    published_at: "2026-01-21"
  }
];

export const sampleProjects: Project[] = [
  {
    id: "1",
    name: "LLM Ops Prompt Evaluator",
    slug: "llm-ops-prompt-evaluator",
    category: "AI/ML",
    summary: "Proof-of-understanding project for prompt evaluation and reliability.",
    description:
      "A Learn Build Teach project where I implemented a prompt evaluation loop, tracked regression metrics, and documented tradeoffs in prompt strategy.",
    github_url: "https://github.com/example/llm-ops-prompt-evaluator",
    demo_url: "https://example.com/prompt-evaluator",
    video_slug: "what-happens-in-a-rag-pipeline",
    image_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    featured: true,
    published_at: "2026-02-01"
  },
  {
    id: "2",
    name: "Event-Driven Integration Sandbox",
    slug: "event-driven-integration-sandbox",
    category: "Cloud",
    summary: "A backend playground for learning APIs, queues, retries, and observability together.",
    description:
      "A Learn Build Teach project that maps system design concepts into a hands-on sandbox with asynchronous processing, retries, and dashboarding.",
    github_url: "https://github.com/example/event-driven-integration-sandbox",
    demo_url: "https://example.com/event-driven-sandbox",
    video_slug: "api-gateway-patterns",
    image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    featured: true,
    published_at: "2025-12-12"
  }
];
