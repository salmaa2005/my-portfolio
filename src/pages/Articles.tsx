import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowUpRight } from "lucide-react";

import { articles } from "../data/articles";
import { SearchBar } from "../components/common/SearchBar";
import { FilterBar } from "../components/common/FilterBar";

import "../styles/articles.css";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function Articles() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");

  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => set.add(a.category));
    return Array.from(set).map((c) => ({
      value: c,
      label: c.replace("-", " "),
    }));
  }, []);

  const filtered = useMemo(() => {
    return articles
      .filter((a) => {
        if (category !== "all" && a.category !== category) return false;
        if (!query) return true;
        const s = query.toLowerCase();
        return (
          a.title.toLowerCase().includes(s) ||
          a.summary.toLowerCase().includes(s) ||
          a.tags.some((t) => t.toLowerCase().includes(s))
        );
      })
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() -
          new Date(a.publishedAt).getTime(),
      );
  }, [query, category]);

  return (
    <div className="articles-page">
      {/* ── HEADER ────────────────────────────────────── */}
      <section className="articles-header">
        <div className="container">
          <div className="eyebrow">The technical journal</div>
          <h1 className="articles-heading">
            Notes from the terminal, and the thoughts in between.
          </h1>
          <p className="articles-sub">
            Deep dives, troubleshooting logs, and practical walkthroughs across
            Linux, cloud, and DevOps.
          </p>
        </div>
      </section>

      {/* ── CONTROLS ─────────────────────────────────── */}
      <section className="articles-controls">
        <div className="container">
          <div className="articles-search">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search articles…"
            />
          </div>
          <div className="articles-filters">
            <FilterBar
              label="Category"
              options={categories}
              active={category}
              onSelect={setCategory}
            />
          </div>
          <div className="articles-count">
            {filtered.length} article{filtered.length === 1 ? "" : "s"}
            {query && ` matching "${query}"`}
          </div>
        </div>
      </section>

      {/* ── LIST ─────────────────────────────────────── */}
      <section className="articles-results">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="articles-empty">
              <p className="articles-empty-title">No articles found.</p>
              <button
                type="button"
                className="filter-pill is-active"
                onClick={() => {
                  setQuery("");
                  setCategory("all");
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="articles-list">
              {filtered.map((article) => (
                <Link
                  key={article.slug}
                  to={`/articles/${article.slug}`}
                  className="article-card"
                >
                  <div className="article-card-meta">
                    <span className="pill">{article.category.replace("-", " ")}</span>
                    <span className="dot" aria-hidden="true">·</span>
                    <span className="article-card-date">{formatDate(article.publishedAt)}</span>
                  </div>
                  <h2 className="article-card-title">{article.title}</h2>
                  <p className="article-card-summary">{article.summary}</p>
                  <div className="article-card-footer">
                    <span className="article-card-time">
                      <Clock size={14} /> {article.readingTimeMinutes} min read
                    </span>
                    <span className="article-card-arrow">
                      Read article <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
