export type SkillStatus = "practicing" | "learning";

export interface SkillGroup {
  group: string;
  items: { name: string; status: SkillStatus }[];
}

export const skills: SkillGroup[] = [
  {
    group: "Operating Systems",
    items: [
      { name: "Linux", status: "practicing" },
      { name: "Red Hat Enterprise Linux", status: "learning" },
      { name: "Windows", status: "practicing" },
    ],
  },
  {
    group: "Programming Languages",
    items: [
      { name: "Python", status: "practicing" },
      { name: "Java", status: "practicing" },
      { name: "C#", status: "practicing" },
      { name: "Bash", status: "practicing" },
      { name: "SQL", status: "practicing" },
    ],
  },
  {
    group: "Databases",
    items: [
      { name: "MySQL", status: "practicing" },
      { name: "PostgreSQL", status: "practicing" },
      { name: "Database Design", status: "practicing" },
      { name: "Big Data Concepts", status: "learning" },
    ],
  },
  {
    group: "Networking",
    items: [
      { name: "TCP/IP", status: "learning" },
      { name: "Subnetting", status: "learning" },
      { name: "DNS", status: "learning" },
      { name: "SSH", status: "practicing" },
    ],
  },
  {
    group: "Cloud Platforms",
    items: [
      { name: "AWS (IAM, S3, EC2, VPC)", status: "learning" },
    ],
  },
  {
    group: "DevOps & Automation",
    items: [
      { name: "Docker", status: "practicing" },
      { name: "Ansible", status: "learning" },
      { name: "Terraform", status: "learning" },
      { name: "Jenkins", status: "learning" },
      { name: "Git", status: "practicing" },
      { name: "CI/CD Concepts", status: "learning" },
    ],
  },
];
