import {
  Server,
  Cloud,
  Database,
  Code2,
  type LucideIcon,
} from "lucide-react";

export interface Pillar {
  id: string;
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  accent: "rose-gold" | "terracotta" | "rosewood" | "espresso";
  to: string;
}

export const pillars: Pillar[] = [
  {
    id: "infrastructure",
    title: "Infrastructure & Systems",
    description:
      "Understanding the foundations that keep systems running.",
    tech: ["Linux", "RHEL", "Networking", "System Administration", "Security"],
    icon: Server,
    accent: "rose-gold",
    to: "/explore?category=linux",
  },
  {
    id: "cloud",
    title: "Cloud & Automation",
    description:
      "Exploring infrastructure automation, cloud platforms, and reliable deployment workflows.",
    tech: ["AWS", "Docker", "Ansible", "Terraform", "Jenkins", "CI/CD"],
    icon: Cloud,
    accent: "terracotta",
    to: "/explore?category=cloud",
  },
  {
    id: "data",
    title: "Data & Databases",
    description:
      "Exploring how information is structured, stored, and transformed into meaningful insight.",
    tech: ["SQL", "Database Design", "Big Data", "Data Engineering"],
    icon: Database,
    accent: "rosewood",
    to: "/explore?category=databases",
  },
  {
    id: "software",
    title: "Software Engineering",
    description:
      "Understanding how applications are designed, developed, and connected to the systems they run on.",
    tech: ["Java", "Python", "C#", "Algorithms", "Application Development"],
    icon: Code2,
    accent: "espresso",
    to: "/explore?category=software-engineering",
  },
];
