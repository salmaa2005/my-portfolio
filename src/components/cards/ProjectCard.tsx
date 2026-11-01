import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../../types/content";

interface Props {
  project: Project;
}

const statusLabel: Record<Project["status"], string> = {
  completed: "Completed",
  "in-progress": "In progress",
  archived: "Archived",
  experimental: "Experimental",
};

export function ProjectCard({ project }: Props) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div className="project-card-top">
        <span className="pill">{project.category.replace("-", " ")}</span>
        <span className={`status status-${project.status}`}>
          {statusLabel[project.status]}
        </span>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-summary">{project.summary}</p>

      <ul className="chip-row" aria-label="Technology stack">
        {project.stack.slice(0, 4).map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>

      <div className="project-actions">
        <span className="action-link">
          View details <ArrowUpRight size={14} />
        </span>
        {project.repoUrl && (
          <span
            className="action-icon"
            aria-label="Repository (external)"
            title="Repository"
          >
            <FaGithub size={15} />
          </span>
        )}
      </div>
    </Link>
  );
}
