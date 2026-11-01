export type ContentType = "article" | "note" | "lab" | "project";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "archived"
  | "experimental";

export type Category =
  | "linux"
  | "networking"
  | "cloud"
  | "devops"
  | "databases"
  | "big-data"
  | "software-engineering"
  | "troubleshooting";

export interface BaseContent {
  slug: string;
  title: string;
  summary: string;
  category: Category;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  isSample?: boolean;
  relatedSlugs?: string[];
}

export interface Article extends BaseContent {
  type: "article";
  readingTimeMinutes: number;
  featured?: boolean;
}

export interface Note extends BaseContent {
  type: "note";
  difficulty: Difficulty;
}

export interface Lab extends BaseContent {
  type: "lab";
  difficulty: Difficulty;
}

export interface Project extends BaseContent {
  type: "project";
  status: ProjectStatus;
  stack: string[];
  repoUrl?: string;
  featured?: boolean;
}