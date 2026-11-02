export interface Certification {
  name: string;
  provider: string;
  date?: string;
  description?: string;
  credentialUrl?: string; // Added this
  skills?: string[];
}

export interface TrainingProgram {
  name: string;
  provider: string;
  date?: string;
  description?: string;
}

export const earnedCertifications: Certification[] = [
  {
    name: "Introduction to Front-End Development",
    provider: "Meta",
    date: "Apr 2025",
    credentialUrl: "https://example.com/placeholder", // <--- REPLACE THIS
    skills: ["React.js", "Web Servers"],
  },
  {
    name: "Delivering Quality Work with Agility",
    provider: "IBM",
    date: "Mar 2025",
    credentialUrl: "https://example.com/placeholder", // <--- REPLACE THIS
  },
  {
    name: "Foundational C# with Microsoft",
    provider: "FreeCodeCamp",
    date: "Feb 2025",
    credentialUrl: "https://example.com/placeholder", // <--- REPLACE THIS
  },
  {
    name: "Big Data Analysis",
    provider: "National Telecommunication Institute (NTI)",
    date: "Sep 2024",
    credentialUrl: "https://example.com/placeholder", // <--- REPLACE THIS
    skills: ["Big Data Analytics", "Apache Spark"],
  },
  {
    name: "DevOps Pre-Requisite Course",
    provider: "KodeKloud",
    date: "Sep 2024",
    credentialUrl: "https://example.com/placeholder", // <--- REPLACE THIS
    skills: ["Linux", "CLI"],
  },
];

export const courseAttendance: Certification[] = [
  {
    name: "Red Hat System Administration I (RH124 - RHA) - Ver. 10",
    provider: "Red Hat Academy",
    date: "Oct 2026",
    credentialUrl: "https://example.com/placeholder", // <--- REPLACE THIS
  },
  {
    name: "Red Hat System Administration II (RH134 - RHA) - Ver. 10",
    provider: "Red Hat Academy",
    date: "Oct 2026",
    credentialUrl: "https://example.com/placeholder", // <--- REPLACE THIS
  },
];

export const trainingPrograms: TrainingProgram[] = [
  {
    name: "DevOps Accelerator Program",
    provider: "National Telecommunication Institute (NTI)",
    date: "2025",
    description:
      "Intensive DevOps track covering RHCSA, Ansible (RH294), AWS Cloud Practitioner & Architect, AWS Security, Kubernetes & Helm, OpenShift, Terraform, and CI/CD (GitLab & Jenkins).",
  },
  {
    name: "Full-Stack .NET",
    provider: "Digital Egypt Pioneers Initiative (DEPI)",
    date: "2024",
    description:
      "Full-stack software development track focused on .NET — backend development, database integration, and frontend basics.",
  },
];

export const currentlyStudying: Certification[] = [
  {
    name: "AWS Cloud Architecting",
    provider: "AWS Academy",
    description:
      "Currently studying cloud architecture principles, designing scalable systems, and AWS infrastructure solutions.",
  },
];