export interface LearningItem {
  title: string;
  note?: string;
  tag?: string;
}

export const currentlyLearning: LearningItem[] = [
  {
    title: "Red Hat System Administration (RH124 / RH134)",
    note: "Working through the official RHEL curriculum.",
    tag: "Linux",
  },
  {
    title: "Linux storage & permissions",
    note: "LVM, ACLs, and SELinux in practice.",
    tag: "Linux",
  },
  {
    title: "Networking fundamentals",
    note: "TCP/IP, subnetting, and packet flow.",
    tag: "Networking",
  },
  {
    title: "Infrastructure automation",
    note: "Ansible playbooks and Terraform modules.",
    tag: "DevOps",
  },
];
