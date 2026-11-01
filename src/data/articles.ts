import type { Article } from "../types/content";

export const articles: Article[] = [
  {
    type: "article",
    slug: "understanding-lvm",
    title: "Understanding Physical Volumes, Volume Groups, and Logical Volumes",
    summary:
      "A mental model for LVM — where the abstraction lives, why it exists, and what commands you actually run.",
    category: "linux",
    tags: ["LVM", "Storage", "RHEL"],
    publishedAt: "2025-09-20",
    readingTimeMinutes: 8,
    isSample: true,
    featured: true,
  },
  {
    type: "article",
    slug: "docker-networking-basics",
    title: "Docker Networking: A Grounded Walkthrough",
    summary:
      "Bridge, host, overlay — what each mode really does, and when to reach for one over the other.",
    category: "devops",
    tags: ["Docker", "Networking"],
    publishedAt: "2025-09-05",
    readingTimeMinutes: 11,
    isSample: true,
  },
  {
    type: "article",
    slug: "aws-iam-in-practice",
    title: "AWS IAM in Practice: Users, Groups, Roles, and Policies",
    summary:
      "The vocabulary of IAM, mapped to a realistic least-privilege example with MFA enforcement.",
    category: "cloud",
    tags: ["AWS", "IAM", "Security"],
    publishedAt: "2025-08-22",
    readingTimeMinutes: 13,
    isSample: true,
  },
];
