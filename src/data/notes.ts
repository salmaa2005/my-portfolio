import type { Note } from "../types/content";

export const notes: Note[] = [
  {
    type: "note",
    slug: "linux-file-permissions",
    title: "Linux File Permissions — Quick Reference",
    summary:
      "Owner / group / other, symbolic vs octal, and how to read `ls -l` output at a glance.",
    category: "linux",
    tags: ["Permissions", "Linux"],
    difficulty: "beginner",
    publishedAt: "2025-09-18",
    isSample: true,
  },
  {
    type: "note",
    slug: "sql-joins-overview",
    title: "SQL Joins — One Page Overview",
    summary:
      "Inner, left, right, full, cross — with the tiny set-theory picture for each.",
    category: "databases",
    tags: ["SQL", "Joins"],
    difficulty: "beginner",
    publishedAt: "2025-08-30",
    isSample: true,
  },
];
