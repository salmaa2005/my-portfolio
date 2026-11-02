import { useMemo, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { articles } from "../data/articles";
import { CodeBlock } from "../components/content/CodeBlock";
import { NotFound } from "./NotFound";

import "../styles/articles.css";

export function ArticleDetails() {
  const { slug } = useParams();
  const [activeId, setActiveId] = useState("");

  const articleIndex = articles.findIndex((a) => a.slug === slug);
  const article = articles[articleIndex];

  const sortedArticles = useMemo(
    () => [...articles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
    []
  );
  const currentIndex = sortedArticles.findIndex((a) => a.slug === slug);
  const prev = currentIndex > 0 ? sortedArticles[currentIndex - 1] : null;
  const next = currentIndex < sortedArticles.length - 1 ? sortedArticles[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Extract H2s for Table of Contents
  const toc = useMemo(() => {
    if (!article) return [];
    const matches = Array.from(article.body.matchAll(/^## (.*$)/gm));
    return matches.map((m) => ({
      text: m[1],
      id: m[1].toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    }));
  }, [article]);

  // Reliable Scroll Spy
  useEffect(() => {
    if (toc.length === 0) return;

    const handleScroll = () => {
      // We use a threshold (e.g., 120px from the top of the viewport)
      // to determine which section is currently being read.
      const threshold = 120; 
      let currentActive = toc[0].id;

      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the heading is above our threshold, it's the active section
          if (rect.top <= threshold) {
            currentActive = item.id;
          } else {
            // Once we find a heading below the threshold, we've gone too far
            break;
          }
        }
      }

      setActiveId(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once on mount to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  if (!article) return <NotFound />;

  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const MarkdownComponents = {
    h2: ({ children }: any) => {
      const id = children.toString().toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return <h2 id={id}>{children}</h2>;
    },
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");
      if (!inline && match) {
        return (
          <CodeBlock
            language={match[1]}
            value={String(children).replace(/\n$/, "")}
            {...props}
          />
        );
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <div className="article-detail">
      <div className="container article-detail-back">
        <Link to="/articles" className="back-link">
          <ArrowLeft size={14} /> Back to articles
        </Link>
      </div>

      <header className="article-detail-header">
        <div className="container container-narrow">
          <div className="article-detail-meta">
            <span className="pill">{article.category.replace("-", " ")}</span>
            <span className="dot" aria-hidden="true">·</span>
            <span className="article-detail-date">
              <Calendar size={14} /> {formattedDate}
            </span>
            <span className="dot" aria-hidden="true">·</span>
            <span className="article-detail-time">
              <Clock size={14} /> {article.readingTimeMinutes} min read
            </span>
          </div>

          <h1 className="article-detail-title">{article.title}</h1>
          <p className="article-detail-summary">{article.summary}</p>

          <div className="article-detail-tags">
            {article.tags.map((t) => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>
        </div>
      </header>

      <div className="container article-detail-layout">
        {/* Sticky TOC with Active State */}
        {toc.length > 0 && (
          <aside className="article-toc">
            <h4 className="article-toc-title">On this page</h4>
            <ul className="article-toc-list">
              {toc.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    className={activeId === item.id ? "is-active" : ""}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <article className="article-prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={MarkdownComponents}
          >
            {article.body || ""}
          </ReactMarkdown>
        </article>
      </div>

      <div className="container container-narrow article-nav-bottom">
        {prev && (
          <Link to={`/articles/${prev.slug}`} className="article-nav-link prev">
            <span className="article-nav-label">Previous</span>
            <span className="article-nav-title">{prev.title}</span>
          </Link>
        )}
        {next && (
          <Link to={`/articles/${next.slug}`} className="article-nav-link next">
            <span className="article-nav-label">Next</span>
            <span className="article-nav-title">{next.title}</span>
          </Link>
        )}
      </div>
    </div>
  );
}
