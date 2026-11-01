import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, GraduationCap } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { profile } from "../data/profile";
import { journey } from "../data/journey";
import { timeline } from "../data/timeline";
import { education } from "../data/education";
import {
  earnedCertifications,
  trainingPrograms,
  currentlyStudying,
} from "../data/certifications";
import { skills } from "../data/skills";
import { pillars } from "../data/pillars";

import { SectionHeading } from "../components/common/SectionHeading";

import "../styles/about.css";

export function About() {
  return (
    <>
      {/* ── INTRO / JOURNEY ─────────────────────────────── */}
      <section className="journey">
        <div className="container journey-grid">
          <div>
            <div className="eyebrow">{journey.intro.eyebrow}</div>
            <h1 className="journey-heading">
              A journey into the <em>systems</em> behind the software.
            </h1>

            <div className="journey-body">
              {journey.intro.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <aside className="journey-aside">
            <div className="eyebrow">At a glance</div>
            <ul className="journey-aside-list">
              <li>
                <span className="tick" aria-hidden="true" />
                <div>
                  <strong>{profile.title}</strong>
                  Building toward reliable systems, one lab at a time.
                </div>
              </li>
              <li>
                <span className="tick" aria-hidden="true" />
                <div>
                  <strong>Currently focused on</strong>
                  Red Hat System Administration, networking fundamentals, and
                  infrastructure automation.
                </div>
              </li>
              <li>
                <span className="tick" aria-hidden="true" />
                <div>
                  <strong>Also writing about</strong>
                  Linux, databases, cloud, and the small discoveries in between.
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* ── TIMELINE ────────────────────────────────────── */}
      <section className="about-section">
        <div className="container">
          <SectionHeading
            eyebrow="Technical journey"
            title="How it unfolded"
          />

          <ol className="timeline">
            {timeline.map((entry) => (
              <li key={entry.title} className="timeline-item">
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-meta">
                  <span className="timeline-tag">{entry.tag}</span>
                  {entry.period && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{entry.period}</span>
                    </>
                  )}
                </div>
                <h3 className="timeline-title">{entry.title}</h3>
                <p className="timeline-description">{entry.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── EDUCATION ───────────────────────────────────── */}
      <section className="about-section">
        <div className="container">
          <SectionHeading
            eyebrow="Academic background"
            title="Education"
          />

          {education.map((edu) => (
            <article key={edu.institution} className="edu-card">
              <div className="edu-head">
                <h3 className="edu-institution">
                  <GraduationCap
                    size={18}
                    style={{
                      display: "inline",
                      marginRight: 8,
                      verticalAlign: "-3px",
                    }}
                  />
                  {edu.institution}
                </h3>
                <span
                  className={
                    "edu-status" +
                    (edu.status === "in-progress" ? " is-current" : "")
                  }
                >
                  {edu.status === "in-progress" ? "In progress" : "Graduated"}
                </span>
              </div>

              <dl className="edu-grid">
                <div className="edu-field">
                  <dt>Faculty</dt>
                  <dd>{edu.faculty}</dd>
                </div>
                <div className="edu-field">
                  <dt>Degree</dt>
                  <dd>{edu.degree}</dd>
                </div>
                <div className="edu-field">
                  <dt>Period</dt>
                  <dd>{edu.period}</dd>
                </div>
                {edu.gpa && (
                  <div className="edu-field">
                    <dt>GPA</dt>
                    <dd>{edu.gpa}</dd>
                  </div>
                )}
              </dl>

              {edu.highlights && edu.highlights.length > 0 && (
                <ul className="edu-highlights">
                  {edu.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ── CERTIFICATIONS ──────────────────────────────── */}
      <section className="about-section">
        <div className="container">
          <SectionHeading
            eyebrow="Certifications & training"
            title="Programs and progress"
          />

          <div className="cert-grid">
            <div>
              <h3 className="cert-col-title">Earned certifications</h3>
              {earnedCertifications.length === 0 ? (
                <p className="cert-empty">
                  None listed yet — this section is intentionally empty until a
                  certification is genuinely earned.
                </p>
              ) : (
                earnedCertifications.map((c) => (
                  <article key={c.name} className="cert-item">
                    <h4 className="cert-name">{c.name}</h4>
                    <p className="cert-provider">{c.provider}</p>
                    {c.description && (
                      <p className="cert-desc">{c.description}</p>
                    )}
                  </article>
                ))
              )}
            </div>

            <div>
              <h3 className="cert-col-title">Training programs</h3>
              {trainingPrograms.length === 0 ? (
                <p className="cert-empty">
                  Training programs are listed separately from certifications,
                  so nothing is overstated.
                </p>
              ) : (
                trainingPrograms.map((c) => (
                  <article key={c.name} className="cert-item">
                    <h4 className="cert-name">{c.name}</h4>
                    <p className="cert-provider">{c.provider}</p>
                    {c.description && (
                      <p className="cert-desc">{c.description}</p>
                    )}
                  </article>
                ))
              )}
            </div>

            <div>
              <h3 className="cert-col-title">Currently studying</h3>
              {currentlyStudying.map((c) => (
                <article key={c.name} className="cert-item">
                  <h4 className="cert-name">{c.name}</h4>
                  <p className="cert-provider">{c.provider}</p>
                  {c.description && (
                    <p className="cert-desc">{c.description}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNICAL INTERESTS ─────────────────────────── */}
      <section className="about-section">
        <div className="container">
          <SectionHeading
            eyebrow="Technical interests"
            title="Areas I keep returning to"
            to="/explore"
            linkLabel="Explore my notes"
          />

          <div className="interests-grid">
            {pillars.map((p) => (
              <article key={p.id} className="interest">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────── */}
      <section className="about-section">
        <div className="container">
          <SectionHeading
            eyebrow="Skills & technologies"
            title="What I use and what I'm learning"
          />

          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.group} className="skill-group">
                <h3>{group.group}</h3>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="skill-item"
                      data-status={item.status}
                    >
                      <span className="skill-dot" aria-hidden="true" />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="skill-legend">
            <span>
              <span
                className="skill-dot"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              />
              Practicing (used in labs & projects)
            </span>
            <span>
              <span
                className="skill-dot"
                style={{ background: "var(--border-strong)" }}
                aria-hidden="true"
              />
              Currently learning
            </span>
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL ACCOUNTS ───────────────────────── */}
      <section className="about-section">
        <div className="container">
          <SectionHeading
            eyebrow="Professional accounts"
            title="Where to find me"
          />

          <div className="accounts">
            <a
              href={profile.github}
              className="account-card"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="account-icon">
                <FaGithub size={18} />
              </span>
              <span className="account-body">
                <p className="account-label">GitHub</p>
                <p className="account-handle">
                  github.com/{profile.github.split("/").pop()}
                </p>
              </span>
              <ArrowUpRight className="account-arrow" size={16} />
            </a>

            {profile.linkedin ? (
              <a
                href={profile.linkedin}
                className="account-card"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="account-icon">
                  <FaLinkedin size={18} />
                </span>
                <span className="account-body">
                  <p className="account-label">LinkedIn</p>
                  <p className="account-handle">Connect professionally</p>
                </span>
                <ArrowUpRight className="account-arrow" size={16} />
              </a>
            ) : (
              <div className="account-card" aria-disabled="true">
                <span className="account-icon">
                  <FaLinkedin size={18} />
                </span>
                <span className="account-body">
                  <p className="account-label">LinkedIn</p>
                  <p className="account-handle">URL not yet added</p>
                </span>
              </div>
            )}

            {profile.email ? (
              <a href={`mailto:${profile.email}`} className="account-card">
                <span className="account-icon">
                  <Mail size={18} />
                </span>
                <span className="account-body">
                  <p className="account-label">Email</p>
                  <p className="account-handle">{profile.email}</p>
                </span>
                <ArrowUpRight className="account-arrow" size={16} />
              </a>
            ) : (
              <div className="account-card" aria-disabled="true">
                <span className="account-icon">
                  <Mail size={18} />
                </span>
                <span className="account-body">
                  <p className="account-label">Email</p>
                  <p className="account-handle">Address not yet added</p>
                </span>
              </div>
            )}

            <Link to="/articles" className="account-card">
              <span className="account-icon">
                <ArrowUpRight size={18} />
              </span>
              <span className="account-body">
                <p className="account-label">Articles</p>
                <p className="account-handle">The technical journal</p>
              </span>
              <ArrowUpRight className="account-arrow" size={16} />
            </Link>
          </div>

          <p className="accounts-note">
            Some links (LinkedIn, email) are hidden until a real URL is added
            to <code>src/data/profile.ts</code>.
          </p>
        </div>
      </section>
    </>
  );
}
