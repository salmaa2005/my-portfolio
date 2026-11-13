import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

import { noteCourses } from "../data/notes-courses";
import { HighlightTerm } from "../components/notes/HighlightTerm";
import { CodeBlock } from "../components/content/CodeBlock";
import { NotFound } from "./NotFound";
import { Quiz } from "../components/notes/Quiz";
import { LabBlock } from "../components/notes/LabBlock";

import "../styles/notes.css";

/**
 * Parses text containing ```code fences``` and [highlighted terms].
 */
function renderRich(
  text: string,
  highlights: { term: string; explanation: string }[] = [],
) {
  const lines = text.split("\n");
  const nodes: React.ReactNode[] = [];
  let buffer: string[] = [];
  let codeLang: string | null = null;
  let codeBuf: string[] = [];
  let key = 0;

  const flushBuffer = () => {
    if (buffer.length === 0) return;
    // Join paragraphs (double newlines or single)
    const joined = buffer.join("\n");
    // Split by double newlines to keep paragraphs separate
    const paragraphs = joined.split(/\n\n+/);
    paragraphs.forEach((p, i) => {
      if (!p.trim()) return;
      nodes.push(renderInline(p, highlights, key++));
    });
    buffer = [];
  };

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      if (codeLang === null) {
        flushBuffer();
        codeLang = line.trim().replace(/^```/, "") || "text";
        codeBuf = [];
      } else {
        nodes.push(
          <CodeBlock
            key={`code-${key++}`}
            language={codeLang}
            value={codeBuf.join("\n")}
          />,
        );
        codeLang = null;
        codeBuf = [];
      }
    } else if (codeLang !== null) {
      codeBuf.push(line);
    } else {
      buffer.push(line);
    }
  }
  flushBuffer();
  return nodes;
}

function renderInline(
  text: string,
  highlights: { term: string; explanation: string }[],
  keyBase: number,
) {
  if (highlights.length === 0) {
    return (
      <p key={keyBase} className="note-para">
        {text}
      </p>
    );
  }

  // Build regex for the highlighted terms e.g. /(\[Term A\]|\[Term B\])/
  const pattern = new RegExp(
    "\\[(" + highlights.map((h) => escapeRegex(h.term)).join("|") + ")\\]",
    "g",
  );

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const found = highlights.find((h) => h.term === match![1]);
    if (found) {
      parts.push(
        <HighlightTerm
          key={`hl-${keyBase}-${key++}`}
          term={found.term}
          explanation={found.explanation}
        />,
      );
    } else {
      parts.push(match[0]);
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));

  return (
    <p key={keyBase} className="note-para">
      {parts}
    </p>
  );
}

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function NoteChapter() {
  const { courseSlug, chapterSlug } = useParams();
  const course = noteCourses.find((c) => c.slug === courseSlug);
  const chapter = course?.chapters.find((c) => c.slug === chapterSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseSlug, chapterSlug]);

  const chapters = useMemo(
    () => (course ? [...course.chapters].sort((a, b) => a.order - b.order) : []),
    [course],
  );

  if (!course || !chapter) return <NotFound />;

  const currentIndex = chapters.findIndex((c) => c.slug === chapter.slug);
  const prev = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const next = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  // Render the main chapter body using our custom parser
  const bodyNodes = renderRich(chapter.body, chapter.highlights);

  return (
    <div className="note-chapter-page">
      <div className="container note-back">
        <Link to={`/notes/${course.slug}`} className="back-link">
          <ArrowLeft size={14} /> {course.title}
        </Link>
      </div>

      <header className="note-chapter-header">
        <div className="container container-narrow">
          <div className="eyebrow">
            Chapter {currentIndex + 1} of {chapters.length}
          </div>
          <h1 className="note-chapter-heading">{chapter.title}</h1>
          <p className="note-chapter-sub">{chapter.summary}</p>
          <div className="note-chapter-meta">
            <span>
              <Clock size={12} /> {chapter.readingTime} min read
            </span>
          </div>
        </div>
      </header>

      <article className="container container-narrow note-chapter-body">
        {/* Main chapter content */}
        {bodyNodes}

        {/* Subsections */}
        {chapter.subsections?.map((sub) => (
          <section key={sub.id} className="note-subsection">
            <h2 className="note-subsection-title">{sub.title}</h2>
            {renderRich(sub.body, sub.highlights)}
            {sub.code?.map((c, i) => (
              <CodeBlock
                key={`sub-code-${sub.id}-${i}`}
                language={c.language}
                value={c.code}
              />
            ))}
          </section>
        ))}
        {/* Quiz */}
        {chapter.quiz && chapter.quiz.length > 0 && (
          <Quiz questions={chapter.quiz} />
        )}
        {chapter.labs?.map((lab, i) => (
          <LabBlock key={`lab-${i}`} lab={lab} />
        ))}
      </article>

      <nav className="container container-narrow note-chapter-nav">
        {prev ? (
          <Link to={`/notes/${course.slug}/${prev.slug}`} className="note-chapter-nav-link prev">
            <span className="note-chapter-nav-label">
              <ArrowLeft size={12} /> Previous
            </span>
            <span className="note-chapter-nav-title">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={`/notes/${course.slug}/${next.slug}`} className="note-chapter-nav-link next">
            <span className="note-chapter-nav-label">
              Next <ArrowRight size={12} />
            </span>
            <span className="note-chapter-nav-title">{next.title}</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
