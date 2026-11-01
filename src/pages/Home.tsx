import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

import { profile } from "../data/profile";
import { pillars } from "../data/pillars";
import { projects } from "../data/projects";
import { articles } from "../data/articles";
import { notes } from "../data/notes";
import { currentlyLearning } from "../data/currentlyLearning";

import { SectionHeading } from "../components/common/SectionHeading";
import { ProjectCard } from "../components/cards/ProjectCard";
import { ArticleCard } from "../components/cards/ArticleCard";

import "../styles/home.css";

/* ── Helpers ──────────────────────────────────────────────── */

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

type FeedItem =
  | { kind: "article"; item: (typeof articles)[number] }
  | { kind: "note"; item: (typeof notes)[number] };

function buildRecentFeed(): FeedItem[] {
  const merged: FeedItem[] = [
    ...articles.map((a) => ({ kind: "article" as const, item: a })),
    ...notes.map((n) => ({ kind: "note" as const, item: n })),
  ];
  return merged
    .sort(
      (a, b) =>
        new Date(b.item.publishedAt).getTime() -
        new Date(a.item.publishedAt).getTime(),
    )
    .slice(0, 4);
}

/* ── Hero illustration ────────────────────────────────────── */

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <svg viewBox="0 0 400 400" role="presentation">
        {/* concentric dashed rings */}
        <circle className="ring" cx="200" cy="200" r="70" />
        <circle className="ring" cx="200" cy="200" r="130" />
        <circle className="ring" cx="200" cy="200" r="180" />

        {/* edges */}
        <line className="edge" x1="200" y1="200" x2="200" y2="20" />
        <line className="edge" x1="200" y1="200" x2="355" y2="120" />
        <line className="edge" x1="200" y1="200" x2="355" y2="280" />
        <line className="edge" x1="200" y1="200" x2="200" y2="380" />
        <line className="edge" x1="200" y1="200" x2="45" y2="280" />
        <line className="edge" x1="200" y1="200" x2="45" y2="120" />

        {/* accent edge — feels like an active data flow */}
        <path
          className="edge-accent"
          d="M 200 200 L 355 120"
          strokeDasharray="4 6"
        />

        {/* nodes */}
        <circle className="node" cx="200" cy="20" r="6" />
        <circle className="node-2" cx="355" cy="120" r="7" />
        <circle className="node-3" cx="355" cy="280" r="6" />
        <circle className="node" cx="200" cy="380" r="6" />
        <circle className="node-2" cx="45" cy="280" r="6" />
        <circle className="node-3" cx="45" cy="120" r="6" />

        {/* center pulse */}
        <circle className="pulse" cx="200" cy="200" r="5" />
        <circle className="node" cx="200" cy="200" r="3" />

        {/* mono labels */}
        <text className="label" x="200" y="14" textAnchor="middle">
          NET
        </text>
        <text className="label" x="372" y="124" textAnchor="start">
          CLOUD
        </text>
        <text className="label" x="372" y="284" textAnchor="start">
          DATA
        </text>
        <text className="label" x="200" y="398" textAnchor="middle">
          SOFTWARE
        </text>
        <text className="label" x="28" y="284" textAnchor="end">
          LINUX
        </text>
        <text className="label" x="28" y="124" textAnchor="end">
          AUTOMATION
        </text>
      </svg>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────── */

export function Home() {
  const recent = buildRecentFeed();

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow hero-label">{profile.heroLabel}</div>

            <h1 className="hero-heading">
              Hello, I&apos;m <em>Salma</em>.
            </h1>

            <p className="hero-tagline">{profile.tagline}</p>

            <p className="hero-description">{profile.heroDescription}</p>

            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                Explore My Work <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn btn-ghost">
                More About Me
              </Link>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      {/* ── AREAS OF EXPLORATION ───────────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Areas of exploration"
            title="Interconnected interests"
            to="/explore"
            linkLabel="Explore everything"
          />

          <div className="pillars">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.id}
                  to={pillar.to}
                  className="pillar"
                  data-accent={pillar.accent}
                >
                  <span className="pillar-icon">
                    <Icon size={20} />
                  </span>
                  <ArrowUpRight className="pillar-arrow" size={16} />
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-description">{pillar.description}</p>
                  <ul className="pillar-tech">
                    {pillar.tech.slice(0, 5).map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            to="/projects"
            linkLabel="All projects"
          />

          <div className="projects-grid">
            {projects
              .filter((p) => p.featured)
              .slice(0, 4)
              .map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
          </div>
        </div>
      </section>

      {/* ── RECENTLY PUBLISHED ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Writing & notes"
            title="Recently published"
            to="/articles"
            linkLabel="All articles"
          />

          <div className="recent-list">
            {recent.map((entry) => {
              if (entry.kind === "article") {
                const a = entry.item;
                return (
                  <ArticleCard
                    key={`a-${a.slug}`}
                    kind="article"
                    to={`/articles/${a.slug}`}
                    title={a.title}
                    summary={a.summary}
                    date={formatDate(a.publishedAt)}
                    meta={`${a.readingTimeMinutes} min read`}
                    category={a.category}
                  />
                );
              }
              const n = entry.item;
              return (
                <ArticleCard
                  key={`n-${n.slug}`}
                  kind="note"
                  to={`/explore?note=${n.slug}`}
                  title={n.title}
                  summary={n.summary}
                  date={formatDate(n.publishedAt)}
                  meta={n.difficulty}
                  category={n.category}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CURRENTLY LEARNING ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="In progress"
            title="Currently learning"
          />

          <div className="learning-card">
            <ul className="learning-list">
              {currentlyLearning.map((item) => (
                <li key={item.title} className="learning-item">
                  <span className="learning-bullet" aria-hidden="true" />
                  <div>
                    <h3 className="learning-title">{item.title}</h3>
                    {item.note && (
                      <p className="learning-note">{item.note}</p>
                    )}
                    {item.tag && (
                      <span className="learning-tag">{item.tag}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ────────────────────────────────────── */}
      <section className="closing">
        <div className="container">
          <div className="eyebrow closing-eyebrow">
            <Sparkles
              size={12}
              style={{ display: "inline", marginRight: 6, verticalAlign: "-1px" }}
            />
            Always in motion
          </div>
          <h2 className="closing-heading">
            Always <em>learning</em>. Always <em>building</em>. Always <em>curious</em>.
          </h2>
          <div className="closing-actions">
            <Link to="/projects" className="btn btn-primary">
              See what I&apos;ve built <ArrowRight size={16} />
            </Link>
            <Link to="/articles" className="btn btn-ghost">
              Read the journal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
