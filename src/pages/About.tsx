import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  GraduationCap,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { profile } from "../data/profile";
import { journey } from "../data/journey";
import { timeline } from "../data/timeline";
import { education } from "../data/education";
import {
  earnedCertifications,
  courseAttendance,
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
                  Software Engineering graduate building toward reliable
                  systems, one lab at a time.
                </div>
              </li>
              <li>
                <span className="tick" aria-hidden="true" />
                <div>
                  <strong>Currently focused on</strong>
                  Red Hat System Administration, Ansible automation, Kubernetes
                  &amp; OpenShift, and Infrastructure as Code.
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
                <span className="edu-status">Graduated</span>
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
                    <dd>
                      {edu.gpa} (Excellent)
                    </dd>
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
            title="Credentials and progress"
          />

          <div className="cert-stack">
            
            {/* 1. Industry Certifications */}
            <div className="cert-group">
              <h3 className="cert-col-title">Industry Certifications</h3>
              <div className="cert-list">
                {earnedCertifications.map((c) => (
                  <article key={c.name} className="cert-item">
                    <h4 className="cert-name">{c.name}</h4>
                    <p className="cert-provider">{c.provider} {c.date && `· ${c.date}`}</p>
                    
                    {c.skills && (
                      <div className="cert-skills">
                        {c.skills.map(s => <span key={s} className="cert-skill">{s}</span>)}
                      </div>
                    )}

                    {c.credentialUrl && (
                      <a href={c.credentialUrl} target="_blank" rel="noreferrer" className="btn-credential">
                        Show credential <ExternalLink size={14} />
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>

            {/* 2. Red Hat Academy */}
            <div className="cert-group">
              <h3 className="cert-col-title">Red Hat Academy</h3>
              <div className="cert-list">
                {courseAttendance.map((c) => (
                  <article key={c.name} className="cert-item">
                    <h4 className="cert-name">{c.name}</h4>
                    <p className="cert-provider">{c.provider} {c.date && `· ${c.date}`}</p>
                    
                    {c.credentialUrl && (
                      <a href={c.credentialUrl} target="_blank" rel="noreferrer" className="btn-credential">
                        Show credential <ExternalLink size={14} />
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>

            {/* 3. Intensive Training */}
            <div className="cert-group">
              <h3 className="cert-col-title">Intensive Training Programs</h3>
              <div className="cert-list">
                {trainingPrograms.map((c) => (
                  <article key={c.name} className="cert-item">
                    <h4 className="cert-name">{c.name}</h4>
                    <p className="cert-provider">
                      {c.provider}
                      {c.date ? ` · ${c.date}` : ""}
                    </p>
                    {c.description && (
                      <p className="cert-desc">{c.description}</p>
                    )}
                  </article>
                ))}
              </div>
            </div>

            {/* 4. Currently Studying */}
            <div className="cert-group">
              <h3 className="cert-col-title">Currently Studying</h3>
              <div className="cert-list">
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
            title="What I work with"
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
              Practicing (used in labs &amp; projects)
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
                <p className="account-handle">
                  linkedin.com/in/{profile.linkedin.split("/in/").pop()}
                </p>
              </span>
              <ArrowUpRight className="account-arrow" size={16} />
            </a>

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
        </div>
      </section>
    </>
  );
}