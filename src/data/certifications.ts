// Import your images
import metaImg from "../assets/certs/front-end.png";
import ibmImg from "../assets/certs/ibm-quality-work.png";
import fccImg from "../assets/certs/ms-c-sharp.png";
import ntiImg from "../assets/certs/nti-big-data.png";
import kodekloudImg from "../assets/certs/kodeklou-devops-prerequisites.png";
import rh124Img from "../assets/certs/redhat-admin-1.png";
import rh134Img from "../assets/certs/redhat-admin-2.png";
import depiImg from "../assets/certs/depi.png";
import odcImg from "../assets/certs/odc-linux.png";

export interface Certification {
  name: string;
  provider: string;
  date?: string;
  description?: string;
  credentialUrl?: string;
  imageUrl?: string;
  skills?: string[];
}

export interface TrainingProgram {
  name: string;
  provider: string;
  date?: string;
  description?: string;
  imageUrl?: string;
}

export const earnedCertifications: Certification[] = [
  {
    name: "Introduction to Front-End Development",
    provider: "Meta",
    date: "Apr 2025",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/9PT1BPNRGO6B", // Add real link here
    imageUrl: metaImg,
    skills: ["React.js", "Web Servers"],
  },
  {
    name: "Delivering Quality Work with Agility",
    provider: "IBM",
    date: "Mar 2025",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/TCSAEGWRLJBF", 
    imageUrl: ibmImg,
  },
  {
    name: "Foundational C# with Microsoft",
    provider: "FreeCodeCamp",
    date: "Feb 2025",
    credentialUrl: "https://www.freecodecamp.org/certification/salmaa2005/foundational-c-sharp-with-microsoft",
    imageUrl: fccImg,
  },
  {
    name: "Big Data Analysis",
    provider: "National Telecommunication Institute (NTI)",
    date: "Sep 2024",
    imageUrl: ntiImg,
    skills: ["Big Data Analytics", "Apache Spark"],
  },
  {
    name: "DevOps Pre-Requisite Course",
    provider: "KodeKloud",
    date: "Sep 2024",
    credentialUrl: "https://learn.kodekloud.com/learn/certificate/f89571ad-0eca-4c71-95d8-cee2cb9afcd4",
    imageUrl: kodekloudImg,
    skills: ["Linux", "CLI"],
  },
];

export const courseAttendance: Certification[] = [
  {
    name: "Red Hat System Administration I (RH124 - RHA) - Ver. 10",
    provider: "Orange Digital Center", 
    date: "2024",
    imageUrl: odcImg,
  },
  {
    name: "Red Hat System Administration II (RH134 - RHA) - Ver. 10",
    provider: "Red Hat Academy",
    date: "Oct 2026",
    credentialUrl: "https://www.credly.com/badges/630af821-1b48-42f6-958d-5346fdd31252/public_url",
    imageUrl: rh134Img,
  },
  {
    name: "Red Hat System Administration I (RH124 - RHA) - Ver. 10",
    provider: "Red Hat Academy",
    date: "Oct 2026",
    credentialUrl: "https://www.credly.com/badges/2a50fa82-e002-433f-8d7e-727d8394e4fb/public_url",
    imageUrl: rh124Img,
  },
];

export const trainingPrograms: TrainingProgram[] = [
  {
    name: "DevOps Accelerator Program",
    provider: "National Telecommunication Institute (NTI)",
    date: "2025",
    description:
      "Intensive DevOps track covering RHCSA, Ansible (RH294), AWS Cloud Practitioner & Architect, AWS Security, Kubernetes & Helm, OpenShift, Terraform, and CI/CD (GitLab & Jenkins).",

  },
  {
    name: "Full-Stack .NET",
    provider: "Digital Egypt Pioneers Initiative (DEPI)",
    date: "2024",
    description:
      "Full-stack software development track focused on .NET — backend development, database integration, and frontend basics.",
    imageUrl: depiImg,
  },
];

export const currentlyStudying: Certification[] = [
  {
    name: "AWS Cloud Architecting",
    provider: "AWS Academy",
    description:
      "Currently studying cloud architecture principles, designing scalable systems, and AWS infrastructure solutions.",
  },
];