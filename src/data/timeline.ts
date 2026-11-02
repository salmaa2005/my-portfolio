export interface TimelineEntry {
  title: string;
  description: string;
  period?: string;
  tag: string;
}

export const timeline: TimelineEntry[] = [
  {
    title: "Academic computer science education",
    description:
      "Built a broad foundation in software engineering, system analysis, studying operating systems, computer networks, system administration, database management, big data concepts, algorithms, and object-oriented programming — B.Sc. in Software Engineering at Capital University.",
    period: "2022 — 2026",
    tag: "Education",
  },
  {
    title: "Software development",
    description:
      "Explored web applications and different areas of software development through university coursework and additional training, including the Full-Stack .NET track with the Digital Egypt Pioneers Initiative.",
    period: "2023 — 2024",
    tag: "Software",
  },
  {
    title: "Database systems & big data",
    description:
      "Expanded on academic studies in database management and data processing through the Big Data Associate Training with NTI, Huawei, and ITIDA.",
    period: "2024 — 2026",
    tag: "Data",
  },
  {
    title: "Infrastructure foundations",
    description:
      "Developed foundational knowledge of networking, Linux system administration, cloud computing, and DevOps through university coursework. Further strengthened Linux administration skills through Red Hat System Administration I training at Orange Digital Center.",
    period: "2025 — June 2026",
    tag: "Foundations",
  },
  {
    title: "Cloud & infrastructure engineering",
    description:
      "Began focusing more deeply on infrastructure through the NTI Cloud Accelerator Program. Exploring cloud architecture, AWS services, networking, security, and infrastructure management through guided learning and hands-on labs.",
    period: "August 2026 — Present",
    tag: "Currently Learning",
  },
  {
    title: "DevOps & automation",
    description:
      "Continuing to develop practical DevOps skills through infrastructure automation with Ansible, Terraform, and CloudFormation; containerization and orchestration with Docker, Kubernetes, and OpenShift; and CI/CD pipelines using GitLab and Jenkins as part of the NTI Cloud Accelerator Program.",
    period: "August 2026 — Present",
    tag: "Currently Learning",
  },
];
