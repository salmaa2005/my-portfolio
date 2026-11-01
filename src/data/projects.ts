import type { Project } from "../types/content";

export const projects: Project[] = [
  {
    type: "project",
    slug: "lvm-storage-administration",
    title: "Linux Storage & LVM Administration",
    summary:
      "Practicing LVM workflows end-to-end: creating physical volumes, extending volume groups, and writing safe snapshot procedures on RHEL.",
    category: "linux",
    tags: ["LVM", "RHEL", "Storage", "Disaster Recovery"],
    stack: ["RHEL 9", "LVM2", "Bash"],
    status: "in-progress",
    publishedAt: "2025-09-14",
    featured: true,
    isSample: true,
  },
  {
    type: "project",
    slug: "aws-iam-hardening-lab",
    title: "AWS IAM Hardening Lab",
    summary:
      "Structured walkthrough of IAM users, groups, roles, and least-privilege policies — including MFA enforcement and access-key rotation.",
    category: "cloud",
    tags: ["AWS", "IAM", "Security"],
    stack: ["AWS IAM", "AWS CLI"],
    status: "in-progress",
    publishedAt: "2025-08-28",
    featured: true,
    isSample: true,
  },
  {
    type: "project",
    slug: "ci-cd-pipeline-demo",
    title: "CI/CD Pipeline Demo",
    summary:
      "A small Jenkins pipeline that builds, tests, and containerizes a demo app, then deploys it to a staging environment.",
    category: "devops",
    tags: ["Jenkins", "Docker", "Automation"],
    stack: ["Jenkins", "Docker", "GitHub Actions"],
    status: "experimental",
    publishedAt: "2025-07-10",
    featured: true,
    isSample: true,
  },
  {
    type: "project",
    slug: "sql-query-optimization-notes",
    title: "SQL Query Optimization Notes",
    summary:
      "An ongoing study of indexing strategies, `EXPLAIN` plans, and common query pitfalls in PostgreSQL and MySQL.",
    category: "databases",
    tags: ["SQL", "Indexing", "Performance"],
    stack: ["PostgreSQL", "MySQL"],
    status: "in-progress",
    publishedAt: "2025-06-02",
    featured: true,
    isSample: true,
  },
];
