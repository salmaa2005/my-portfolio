export interface Education {
  institution: string;
  faculty: string;
  degree: string;
  period: string;
  status: "in-progress" | "graduated";
  gpa?: string;
  highlights?: string[];
}

export const education: Education[] = [
  {
    institution: "TODO: University name",
    faculty: "TODO: Faculty / department",
    degree: "TODO: Degree or specialization",
    period: "TODO: e.g. 2021 — 2025",
    status: "in-progress",
    gpa: undefined,
    highlights: [
      "TODO: relevant academic achievement or course",
      "TODO: relevant academic achievement or course",
    ],
  },
];
