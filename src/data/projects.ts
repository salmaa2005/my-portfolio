import type { Project, ProjectStatus, Category } from "../types/content";

// Removed the 'All' option here — the FilterBar component injects it automatically.
export const projectCategories: { value: Category | "all"; label: string }[] = [
  { value: "linux", label: "Linux & SysAdmin" },
  { value: "networking", label: "Networking" },
  { value: "cloud", label: "Cloud & DevOps" },
  { value: "devops", label: "DevOps" },
  { value: "databases", label: "Databases & Big Data" },
  { value: "software-engineering", label: "Software Dev" },
];

export const projectStatuses: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-progress": "In progress",
  archived: "Archived",
  experimental: "Experimental",
};

export const projects: Project[] = [
  {
    type: "project",
    slug: "linux-aws-cloud-labs",
    title: "Linux & AWS Cloud Infrastructure Labs",
    summary:
      "Hands-on labs spanning RHEL administration, LVM storage, and AWS cloud provisioning with IAM, EC2, S3, and EFS.",
    category: "linux",
    tags: ["Linux", "AWS", "IAM", "EC2", "S3"],
    stack: ["RHEL", "AWS CLI", "IAM", "EC2", "S3", "EFS"],
    status: "in-progress",
    publishedAt: "2025-09-15",
    featured: true,
    isSample: true,
    repoUrl: "https://github.com/salmaa2005",
    relatedSlugs: ["understanding-lvm", "aws-iam-overview"],
  },
  {
    type: "project",
    slug: "infrastructure-automation",
    title: "Infrastructure Automation (Ansible & Terraform)",
    summary:
      "Automated Linux administration workflows with Ansible playbooks and provisioned AWS infrastructure with Terraform and CloudFormation.",
    category: "devops",
    tags: ["Ansible", "Terraform", "IaC", "CloudFormation"],
    stack: ["Ansible", "Terraform", "AWS CloudFormation"],
    status: "in-progress",
    publishedAt: "2025-09-01",
    featured: true,
    isSample: true,
    repoUrl: "https://github.com/salmaa2005",
  },
  {
    type: "project",
    slug: "containerization-orchestration",
    title: "Containerization & Orchestration (Docker → Kubernetes → OpenShift)",
    summary:
      "Containerized applications with Docker, deployed them on Kubernetes and Red Hat OpenShift, and managed releases with Helm.",
    category: "devops",
    tags: ["Docker", "Kubernetes", "OpenShift", "Helm"],
    stack: ["Docker", "Kubernetes", "Helm", "OpenShift"],
    status: "in-progress",
    publishedAt: "2025-08-20",
    featured: true,
    isSample: true,
    repoUrl: "https://github.com/salmaa2005",
    relatedSlugs: ["docker-networking-basics"],
  },
  {
    type: "project",
    slug: "cicd-pipelines",
    title: "End-to-End CI/CD Pipelines (GitLab & Jenkins)",
    summary:
      "Built CI/CD pipelines with GitLab and Jenkins covering source control, automated build, testing, and containerized deployment.",
    category: "devops",
    tags: ["CI/CD", "GitLab", "Jenkins", "Automation"],
    stack: ["GitLab CI/CD", "Jenkins", "Git", "Docker"],
    status: "in-progress",
    publishedAt: "2025-08-05",
    featured: true,
    isSample: true,
    repoUrl: "https://github.com/salmaa2005",
    relatedSlugs: ["jenkins-basic-pipeline"],
  },
];