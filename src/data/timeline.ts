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
      "Foundations in programming, data structures, and how software is designed and built.",
    tag: "Foundations",
  },
  {
    title: "Software development",
    description:
      "Exploring web applications and different types of software — learning how features become real products.",
    tag: "Software",
  },
  {
    title: "Database systems & big data",
    description:
      "Growing curiosity about how information is modeled, stored, and processed at scale.",
    tag: "Data",
  },
  {
    title: "Networking & system administration",
    description:
      "Moving closer to the systems layer — Linux, permissions, storage, and how machines actually talk to each other.",
    tag: "Systems",
  },
  {
    title: "Cloud computing",
    description:
      "Understanding how infrastructure is provisioned, secured, and scaled on cloud platforms.",
    tag: "Cloud",
  },
  {
    title: "DevOps & automation",
    description:
      "Where the journey keeps pointing: reliable workflows, reproducible infrastructure, and the bridge between development and operations.",
    tag: "DevOps",
  },
];
