export type SkillStatus = "practicing" | "learning";

export interface SkillGroup {
  group: string;
  items: { name: string; status: SkillStatus }[];
}

export const skills: SkillGroup[] = [
  {
    group: "Cloud (AWS)",
    items: [
      { name: "EC2", status: "practicing" },
      { name: "S3", status: "practicing" },
      { name: "EFS", status: "practicing" },
      { name: "RDS", status: "practicing" },
      { name: "DynamoDB", status: "practicing" },
      { name: "IAM", status: "practicing" },
      { name: "AWS CLI", status: "practicing" },
      { name: "CloudFormation", status: "practicing" },
      { name: "Cloud Architecture", status: "practicing" },
      { name: "Cloud Security", status: "practicing" },
    ],
  },
  {
    group: "Linux & Systems",
    items: [
      { name: "Red Hat Enterprise Linux (RHEL)", status: "practicing" },
      { name: "Bash", status: "practicing" },
      { name: "SSH", status: "practicing" },
      { name: "systemd", status: "practicing" },
      { name: "LVM", status: "practicing" },
      { name: "Storage Management", status: "practicing" },
      { name: "User & Group Administration", status: "practicing" },
      { name: "File Permissions", status: "practicing" },
      { name: "System Troubleshooting", status: "practicing" },
    ],
  },
  {
    group: "Infrastructure as Code & Automation",
    items: [
      { name: "Terraform", status: "practicing" },
      { name: "Ansible", status: "practicing" },
      { name: "AWS CloudFormation", status: "practicing" },
      { name: "Bash Scripting", status: "practicing" },
    ],
  },
  {
    group: "CI/CD & Version Control",
    items: [
      { name: "Jenkins", status: "practicing" },
      { name: "GitLab CI/CD", status: "practicing" },
      { name: "Git", status: "practicing" },
      { name: "GitLab", status: "practicing" },
    ],
  },
  {
    group: "Containers & Orchestration",
    items: [
      { name: "Docker", status: "practicing" },
      { name: "Kubernetes", status: "practicing" },
      { name: "Helm", status: "practicing" },
      { name: "Red Hat OpenShift", status: "practicing" },
    ],
  },
  {
    group: "Networking",
    items: [
      { name: "TCP/IP", status: "practicing" },
      { name: "DNS", status: "practicing" },
      { name: "DHCP", status: "practicing" },
      { name: "Routing & Switching", status: "learning" },
      { name: "Subnetting", status: "practicing" },
      { name: "Network Security", status: "learning" },
    ],
  },
  {
    group: "Virtualization",
    items: [
      { name: "VMware", status: "practicing" },
      { name: "Virtual Machines", status: "practicing" },
      { name: "Virtual Networking", status: "practicing" },
      { name: "Nested Virtualization", status: "practicing" },
    ],
  },
  {
    group: "Programming & Databases",
    items: [
      { name: "Python", status: "practicing" },
      { name: "Java", status: "practicing" },
      { name: "C#", status: "practicing" },
      { name: "C / C++", status: "practicing" },
      { name: "SQL", status: "practicing" },
      { name: "CQL", status: "practicing" },
    ],
  },
];
