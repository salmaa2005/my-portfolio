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
    institution: "Capital University",
    faculty: "Faculty of Computers and Artificial Intelligence",
    degree: "B.Sc. in Software Engineering",
    period: "2022 — JUNE 2026",
    status: "in-progress",
    gpa: "3.71 / 4.00",
    highlights: [
      "Relevant coursework: Operating Systems, Computer Networks, Databases, Software Engineering, System Analysis, Object-Oriented Programming, Algorithms and Data Structures.",
      "GPA 3.71 / 4.00 in a Software Engineering specialization.",
    ],
  },
];
