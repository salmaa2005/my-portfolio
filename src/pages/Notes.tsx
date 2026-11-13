import { Link } from "react-router-dom";
import { BookOpen, ArrowUpRight } from "lucide-react";
import { noteCourses } from "../data/notes-courses";
import { SectionHeading } from "../components/common/SectionHeading";

import "../styles/notes.css";

export function Notes() {
  return (
    <div className="notes-page">
      <section className="notes-header">
        <div className="container">
          <div className="eyebrow">Learning paths</div>
          <h1 className="notes-heading">
            Structured notes, organized as courses.
          </h1>
          <p className="notes-sub">
            Each topic is a map of chapters — from the foundational concepts
            to the practical, hands-on labs. Click a topic to open it.
          </p>
        </div>
      </section>

      <section className="notes-content">
        <div className="container">
          <SectionHeading
            eyebrow={`${noteCourses.length} topic${
              noteCourses.length === 1 ? "" : "s"
            }`}
            title="Courses & topics"
          />

          <div className="notes-grid">
            {noteCourses.map((course) => (
              <Link
                key={course.slug}
                to={`/notes/${course.slug}`}
                className="note-course-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="note-course-icon">
                  <BookOpen size={20} />
                </div>
                <div className="note-course-body">
                  <div className="note-course-meta">
                    <span className="pill">{course.category}</span>
                    <span>
                      {course.chapters.length} chapter
                      {course.chapters.length === 1 ? "" : "s"}
                    </span>
                  </div>
                  <h3 className="note-course-title">{course.title}</h3>
                  <p className="note-course-summary">{course.description}</p>
                </div>
                <ArrowUpRight className="note-course-arrow" size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
