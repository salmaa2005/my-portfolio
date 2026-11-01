import { Link } from "react-router-dom";

type Kind = "article" | "note";

interface Props {
  kind: Kind;
  to: string;
  title: string;
  summary: string;
  date: string;
  meta: string; // e.g. "8 min read" or "Beginner"
  category: string;
}

export function ArticleCard({ kind, to, title, summary, date, meta, category }: Props) {
  return (
    <Link to={to} className="article-row">
      <div className="article-row-meta">
        <span className={`kind kind-${kind}`}>{kind}</span>
        <span className="dot" aria-hidden="true">·</span>
        <span>{category.replace("-", " ")}</span>
      </div>

      <h3 className="article-row-title">{title}</h3>
      <p className="article-row-summary">{summary}</p>

      <div className="article-row-foot">
        <time>{date}</time>
        <span className="dot" aria-hidden="true">·</span>
        <span>{meta}</span>
      </div>
    </Link>
  );
}
