import { useMemo, useState } from "react";
import { projects, projectCategories } from "../data/projects";
import { ProjectCard } from "../components/cards/ProjectCard";
import { SearchBar } from "../components/common/SearchBar";
import { FilterBar } from "../components/common/FilterBar";

import "../styles/projects.css";

export function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [tech, setTech] = useState<string>("all");

  const allTech = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.stack.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  // Removed the 'All' option here — FilterBar injects it automatically.
  const techOptions = allTech.map((t) => ({ value: t, label: t }));

  const filtered = useMemo(() => {
    return projects
      .filter((p) => {
        if (category !== "all" && p.category !== category) return false;
        if (tech !== "all" && !p.stack.includes(tech)) return false;
        if (!query) return true;
        const s = query.toLowerCase();
        return (
          p.title.toLowerCase().includes(s) ||
          p.summary.toLowerCase().includes(s) ||
          p.tags.some((t) => t.toLowerCase().includes(s))
        );
      })
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime(),
      );
  }, [query, category, tech]);

  return (
    <div className="projects-page">
      {/* ── HEADER ────────────────────────────────────── */}
      <section className="projects-header">
        <div className="container">
          <div className="eyebrow">Selected work</div>
          <h1 className="projects-heading">
            Projects, labs, and experiments — laid bare.
          </h1>
          <p className="projects-sub">
            A growing set of infrastructure, cloud, and DevOps work — built,
            broken, and rebuilt to understand how systems fit together.
          </p>
        </div>
      </section>

      {/* ── CONTROLS ─────────────────────────────────── */}
      <section className="projects-controls">
        <div className="container">
          <div className="projects-search">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search projects…"
            />
          </div>

          <div className="projects-filters">
            <FilterBar
              label="Category"
              options={projectCategories.map((c) => ({
                value: c.value,
                label: c.label,
              }))}
              active={category}
              onSelect={setCategory}
            />
            <FilterBar
              label="Tech"
              options={techOptions}
              active={tech}
              onSelect={setTech}
            />
          </div>

          <div className="projects-count">
            {filtered.length} project{filtered.length === 1 ? "" : "s"}
            {query && ` matching "${query}"`}
          </div>
        </div>
      </section>

      {/* ── GRID ─────────────────────────────────────── */}
      <section className="projects-results">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="projects-empty">
              <p className="projects-empty-title">No projects match.</p>
              <p className="projects-empty-text">
                Try clearing filters or searching for something else.
              </p>
              <button
                type="button"
                className="filter-pill is-active"
                onClick={() => {
                  setQuery("");
                  setCategory("all");
                  setTech("all");
                }}
              >
                Clear everything
              </button>
            </div>
          ) : (
            <div className="projects-grid">
              {filtered.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}