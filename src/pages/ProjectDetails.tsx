import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Calendar, Tag } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects, projectStatuses } from "../data/projects";
import { NotFound } from "./NotFound";

import "../styles/projects.css";

export function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <NotFound />;

  const formattedDate = new Date(project.publishedAt).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );

  return (
    <div className="project-detail">
      {/* ── BACK ─────────────────────────────────────── */}
      <div className="container project-detail-back">
        <Link to="/projects" className="back-link">
          <ArrowLeft size={14} /> All projects
        </Link>
      </div>

      {/* ── HEADER ───────────────────────────────────── */}
      <header className="project-detail-header">
        <div className="container">
          <div className="project-detail-meta">
            <span className="pill">{project.category.replace("-", " ")}</span>
            <span className={`status status-${project.status}`}>
              {projectStatuses[project.status]}
            </span>
            <span className="dot" aria-hidden="true">·</span>
            <span className="project-detail-date">
              <Calendar size={12} /> {formattedDate}
            </span>
          </div>

          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-summary">{project.summary}</p>

          <div className="project-detail-tags">
            {project.tags.map((t) => (
              <span key={t} className="tag-pill">
                <Tag size={11} /> {t}
              </span>
            ))}
          </div>

          {project.repoUrl && (
            <div className="project-detail-actions">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-primary"
              >
                <FaGithub size={16} /> View repository
              </a>
            </div>
          )}
        </div>
      </header>

      {/* ── BODY ─────────────────────────────────────── */}
      <div className="container project-detail-body">
        <aside className="project-detail-sidebar">
          <div className="project-side-card">
            <h4 className="project-side-title">Stack</h4>
            <ul className="project-side-list">
              {project.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {project.relatedSlugs && project.relatedSlugs.length > 0 && (
            <div className="project-side-card">
              <h4 className="project-side-title">Related content</h4>
              <ul className="project-side-list">
                {project.relatedSlugs.map((s) => (
                  <li key={s}>
                    <Link to={`/explore/notes/${s}`}>{s}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        <article className="project-detail-content">
          <div className="project-detail-placeholder">
            <p className="eyebrow">Project write-up</p>
            <h2>Coming soon</h2>
            <p>
              The full write-up for this project — problem statement,
              architecture, implementation steps, challenges, testing, results,
              and lessons learned — is in progress. Follow the{" "}
              {project.repoUrl ? (
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  GitHub repository
                </a>
              ) : (
                "GitHub repository"
              )}{" "}
              for updates.
            </p>
            <p className="project-detail-note">
              <strong>Note:</strong> this is a sample placeholder. When the
              real write-up is ready, its content will replace this block.
            </p>
          </div>
        </article>
      </div>

      {/* ── NEXT / PREV ─────────────────────────────── */}
      <div className="container project-detail-back-bottom">
        <Link to="/projects" className="btn btn-ghost">
          <ArrowLeft size={14} /> All projects <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}
