import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FileText, FlaskConical, Clock, ArrowUpRight } from "lucide-react";

import { notes } from "../data/notes";
import { labs } from "../data/labs";
import type { Note, Lab, Category, Difficulty } from "../types/content";

import { SectionHeading } from "../components/common/SectionHeading";
import { SearchBar } from "../components/common/SearchBar";
import { FilterBar } from "../components/common/FilterBar";

import "../styles/explore.css";

type Tab = "notes" | "labs";

const categoryLabels: Record<Category, string> = {
  linux: "Linux",
  networking: "Networking",
  cloud: "Cloud",
  devops: "DevOps",
  databases: "Databases",
  "big-data": "Big Data",
  "software-engineering": "Software Eng.",
  troubleshooting: "Troubleshooting",
};

const difficultyLabels: Record<Difficulty, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const categoryOptions = Object.entries(categoryLabels).map(([value, label]) => ({
  value,
  label,
}));

const difficultyOptions = Object.entries(difficultyLabels).map(
  ([value, label]) => ({ value, label }),
);

function matchesSearch<T extends { title: string; summary: string; tags: string[] }>(
  item: T,
  q: string,
) {
  if (!q) return true;
  const s = q.toLowerCase();
  return (
    item.title.toLowerCase().includes(s) ||
    item.summary.toLowerCase().includes(s) ||
    item.tags.some((t) => t.toLowerCase().includes(s))
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function Explore() {
  const [tab, setTab] = useState<Tab>("notes");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [difficulty, setDifficulty] = useState<string>("all");

  const filteredNotes = useMemo(
    () =>
      notes
        .filter((n) => matchesSearch(n, query))
        .filter((n) => category === "all" || n.category === category)
        .filter((n) => difficulty === "all" || n.difficulty === difficulty)
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime(),
        ),
    [query, category, difficulty],
  );

  const filteredLabs = useMemo(
    () =>
      labs
        .filter((l) => matchesSearch(l, query))
        .filter((l) => category === "all" || l.category === category)
        .filter((l) => difficulty === "all" || l.difficulty === difficulty)
        .sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime(),
        ),
    [query, category, difficulty],
  );

  const items = tab === "notes" ? filteredNotes : filteredLabs;

  return (
    <div className="explore">
      {/* ── HEADER ──────────────────────────────────────── */}
      <section className="explore-header">
        <div className="container">
          <div className="eyebrow">Knowledge base</div>
          <h1 className="explore-heading">
            Notes, labs, and the small discoveries in between.
          </h1>
          <p className="explore-sub">
            A growing set of reference notes and reproducible labs — built as
            I study, experiment, and troubleshoot.
          </p>
        </div>
      </section>

      {/* ── CONTROLS ────────────────────────────────────── */}
      <section className="explore-controls">
        <div className="container">
          <div className="explore-tabs" role="tablist">
            <button
              role="tab"
              aria-selected={tab === "notes"}
              className={"explore-tab" + (tab === "notes" ? " is-active" : "")}
              onClick={() => setTab("notes")}
            >
              <FileText size={16} /> Notes
              <span className="tab-count">{notes.length}</span>
            </button>
            <button
              role="tab"
              aria-selected={tab === "labs"}
              className={"explore-tab" + (tab === "labs" ? " is-active" : "")}
              onClick={() => setTab("labs")}
            >
              <FlaskConical size={16} /> Labs
              <span className="tab-count">{labs.length}</span>
            </button>
          </div>

          <div className="explore-search">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder={`Search ${tab}…`}
            />
          </div>

          <div className="explore-filters">
            <FilterBar
              label="Category"
              options={categoryOptions}
              active={category}
              onSelect={setCategory}
            />
            <FilterBar
              label="Level"
              options={difficultyOptions}
              active={difficulty}
              onSelect={setDifficulty}
            />
          </div>

          <div className="explore-result-count">
            {items.length} {tab === "notes" ? "note" : "lab"}
            {items.length === 1 ? "" : "s"}
            {query && ` matching "${query}"`}
          </div>
        </div>
      </section>

      {/* ── RESULTS ─────────────────────────────────────── */}
      <section className="explore-results">
        <div className="container">
          {items.length === 0 ? (
            <div className="explore-empty">
              <p className="explore-empty-title">Nothing here yet.</p>
              <p className="explore-empty-text">
                Try clearing filters or search for something else.
              </p>
              <button
                type="button"
                className="filter-pill is-active"
                onClick={() => {
                  setQuery("");
                  setCategory("all");
                  setDifficulty("all");
                }}
              >
                Clear everything
              </button>
            </div>
          ) : (
            <div className="explore-list">
              {tab === "notes"
                ? filteredNotes.map((n) => <NoteRow key={n.slug} note={n} />)
                : filteredLabs.map((l) => <LabRow key={l.slug} lab={l} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/* ── Row components ────────────────────────────────────────── */

function NoteRow({ note }: { note: Note }) {
  return (
    <Link to={`/explore/notes/${note.slug}`} className="explore-row">
      <div className="explore-row-meta">
        <span className="pill">{categoryLabels[note.category]}</span>
        <span className={"level level-" + note.difficulty}>
          {difficultyLabels[note.difficulty]}
        </span>
        <span className="dot" aria-hidden="true">·</span>
        <span className="explore-row-date">
          <Clock size={12} /> {formatDate(note.publishedAt)}
        </span>
      </div>

      <h3 className="explore-row-title">{note.title}</h3>
      <p className="explore-row-summary">{note.summary}</p>

      <ul className="chip-row">
        {note.tags.map((t) => (
          <li key={t} className="chip">{t}</li>
        ))}
      </ul>

      <span className="explore-row-arrow">
        <ArrowUpRight size={16} />
      </span>
    </Link>
  );
}

function LabRow({ lab }: { lab: Lab }) {
  return (
    <Link to={`/explore/labs/${lab.slug}`} className="explore-row">
      <div className="explore-row-meta">
        <span className="pill pill-lab">Lab</span>
        <span className="pill">{categoryLabels[lab.category]}</span>
        <span className={"level level-" + lab.difficulty}>
          {difficultyLabels[lab.difficulty]}
        </span>
        <span className="dot" aria-hidden="true">·</span>
        <span className="explore-row-date">
          <Clock size={12} /> {formatDate(lab.publishedAt)}
        </span>
      </div>

      <h3 className="explore-row-title">{lab.title}</h3>
      <p className="explore-row-summary">{lab.summary}</p>

      <ul className="chip-row">
        {lab.tags.map((t) => (
          <li key={t} className="chip">{t}</li>
        ))}
      </ul>

      <span className="explore-row-arrow">
        <ArrowUpRight size={16} />
      </span>
    </Link>
  );
}
