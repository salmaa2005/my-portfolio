export interface LearningItem {
  title: string;
  note?: string;
  tag?: string;
}

export const currentlyLearning: LearningItem[] = [
  {
    title: "Red Hat System Administration (RHCSA)",
    note: "Working through RH124 / RH134 — Linux administration in practice.",
    tag: "Linux",
  },
  {
    title: "Ansible Automation (RH294)",
    note: "Playbook-driven configuration management and repeatable workflows.",
    tag: "Automation",
  },
  {
    title: "Kubernetes & OpenShift",
    note: "Container orchestration, Helm releases, and Red Hat OpenShift administration.",
    tag: "DevOps",
  },
  {
    title: "Terraform & CloudFormation",
    note: "Infrastructure as Code for AWS environments, end-to-end.",
    tag: "Cloud",
  },
];
