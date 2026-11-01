export interface Certification {
  name: string;
  provider: string;
  issuer?: string;
  date?: string;
  description?: string;
  credentialUrl?: string;
}

export const earnedCertifications: Certification[] = [
  // TODO: add real earned certifications here when available
];

export const trainingPrograms: Certification[] = [
  // TODO: add training programs (attendance / completion) here
  // Example shape:
  // {
  //   name: "Linux Fundamentals",
  //   provider: "Training provider",
  //   date: "2024",
  //   description: "Coursework covering shell, permissions, and processes.",
  // },
];

export const currentlyStudying: Certification[] = [
  {
    name: "Red Hat System Administration",
    provider: "Red Hat",
    description:
      "Working through the RH124 / RH134 curriculum — Linux administration in practice.",
  },
];
