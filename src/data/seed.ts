import { BlogPost, Project, Video } from "@/types/content";

export const sampleVideos: Video[] = [
  {
    id: "1",
    title: "Distributed Systems in 15 Minutes",
    slug: "distributed-systems-15-minutes",
    description: "A compact explanation of core distributed systems concepts.",
    youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail_url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    tags: ["distributed systems", "architecture"],
    featured: true,
    published_at: "2026-03-01"
  },
  {
    id: "2",
    title: "System Design: API Gateway Patterns",
    slug: "api-gateway-patterns",
    description: "Practical API gateway design decisions for modern cloud stacks.",
    youtube_url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail_url: "https://i.ytimg.com/vi/ysz5S6PUM-U/maxresdefault.jpg",
    tags: ["system design", "api"],
    featured: true,
    published_at: "2026-02-18"
  }
];

export const samplePosts: BlogPost[] = [
  {
    id: "1",
    title: "How I Scope Engineering Projects as a Solutions Engineer",
    slug: "scoping-engineering-projects",
    excerpt: "A practical framework for scoping projects with speed and confidence.",
    content: "## Why scope matters\nGreat scope aligns outcomes, risks, and constraints...",
    cover_image_url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tags: ["career", "solutions engineering"],
    featured: true,
    published_at: "2026-03-10"
  },
  {
    id: "2",
    title: "Shipping Reliable Integrations with API Contracts",
    slug: "reliable-integrations-api-contracts",
    excerpt: "API contracts reduce surprises and accelerate cross-team delivery.",
    content: "## Contracts first\nDefine schemas before implementation...",
    cover_image_url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    tags: ["api", "reliability"],
    featured: true,
    published_at: "2026-01-21"
  }
];

export const sampleProjects: Project[] = [
  {
    id: "1",
    name: "LLM Ops Prompt Evaluator",
    slug: "llm-ops-prompt-evaluator",
    category: "AI",
    summary: "Proof-of-understanding project for prompt evaluation and reliability.",
    description:
      "A Learn Build Teach project where I implemented a prompt evaluation loop, tracked regression metrics, and documented tradeoffs in prompt strategy.",
    github_url: "https://github.com/example/llm-ops-prompt-evaluator",
    demo_url: "https://example.com/prompt-evaluator",
    video_slug: "distributed-systems-15-minutes",
    image_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    featured: true,
    published_at: "2026-02-01"
  },
  {
    id: "2",
    name: "Cloud Cost Guardrails",
    slug: "cloud-cost-guardrails",
    category: "Cloud",
    summary: "Proof-of-understanding project for cloud governance and budgets.",
    description:
      "A Learn Build Teach project that applies policy-as-code checks to enforce spend controls and document cloud architecture decisions.",
    github_url: "https://github.com/example/cloud-cost-guardrails",
    demo_url: "https://example.com/cost-guardrails",
    video_slug: "api-gateway-patterns",
    image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    featured: true,
    published_at: "2025-12-12"
  }
];