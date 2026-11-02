import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "../../types/content";
import { projectStatuses } from "../../data/projects";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="pill">{project.category.replace("-", " ")}</span>
        <span className={`status status-${project.status}`}>
          {projectStatuses[project.status]}
        </span>
      </div>

      <h3 className="project-title">
        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>
      <p className="project-summary">{project.summary}</p>

      <ul className="chip-row" aria-label="Technology stack">
        {project.stack.slice(0, 4).map((t) => (
          <li key={t} className="chip">{t}</li>
        ))}
      </ul>

      <div className="project-actions">
        <Link to={`/projects/${project.slug}`} className="action-link">
          View details <ArrowUpRight size={14} />
        </Link>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="action-icon"
            aria-label="Repository (external)"
            title="Repository"
          >
            <FaGithub size={16} />
          </a>
        )}
      </div>
    </article>
  );
}