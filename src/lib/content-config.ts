import { ProjectCategory, VideoCategory } from "@/types/content";

export const topicCategories = [
  "AI/ML",
  "Cloud",
  "Data"
] as const satisfies readonly VideoCategory[];

export const categoryDescriptions: Record<VideoCategory, string> = {
  "AI/ML": "LLM workflows, model intuition, evaluations, prompting, and applied machine learning systems.",
  Cloud: "Infrastructure, deployment patterns, backend architecture, and platform tradeoffs.",
  Data: "Pipelines, analytics, warehousing, experimentation data, and distributed data ideas."
};

export const learningPrinciples = [
  {
    title: "Learn",
    description: "I study a topic until I can explain the key ideas in plain language."
  },
  {
    title: "Build",
    description: "I reinforce the concept through a project, demo, or implementation."
  },
  {
    title: "Teach",
    description: "I record the explanation here so my understanding is visible and testable."
  }
] as const;

export const defaultProjectCategory: ProjectCategory = "Cloud";
