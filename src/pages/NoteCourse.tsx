import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight, BookOpen } from "lucide-react";
import { noteCourses } from "../data/notes-courses";
import { NotFound } from "./NotFound";

import "../styles/notes.css";

export function NoteCourse() {
  const { courseSlug } = useParams();
  const course = noteCourses.find((c) => c.slug === courseSlug);

  if (!course) return <NotFound />;

  const chapters = [...course.chapters].sort((a, b) => a.order - b.order);
  const totalMinutes = chapters.reduce((sum, c) => sum + c.readingTime, 0);

  return (
    <div className="note-course-page">
      <div className="container note-back">
        <Link to="/notes" className="back-link">
          <ArrowLeft size={14} /> All topics
        </Link>
      </div>

      <header className="note-course-header">
        <div className="container">
          <div className="eyebrow">{course.category}</div>
          <h1 className="note-course-heading">{course.title}</h1>
          <p className="note-course-sub">{course.summary}</p>
          <div className="note-course-meta-badges">
            <span className="meta-badge">
              <BookOpen size={14} /> {chapters.length} Chapters
            </span>
            <span className="meta-badge">
              <Clock size={14} /> {totalMinutes} min read
            </span>
          </div>
        </div>
      </header>

      <section className="note-map">
        <div className="container">
          <ol className="note-timeline">
            {chapters.map((ch, i) => (
              <li key={ch.slug} className="note-timeline-item">
                <div className="note-timeline-track" aria-hidden="true">
                  <div className="note-timeline-node">
                    <span>{i + 1}</span>
                  </div>
                  {i < chapters.length - 1 && <div className="note-timeline-line" />}
                </div>

                <Link
                  to={`/notes/${course.slug}/${ch.slug}`}
                  className="note-milestone-card"
                >
                  <div className="note-milestone-content">
                    <span className="note-milestone-label">Chapter {i + 1}</span>
                    <h3 className="note-milestone-title">{ch.title}</h3>
                    <p className="note-milestone-summary">{ch.summary}</p>
                  </div>
                  
                  <div className="note-milestone-action">
                    <span className="note-milestone-time">
                      {ch.readingTime} min
                    </span>
                    <div className="note-milestone-arrow-wrapper">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
