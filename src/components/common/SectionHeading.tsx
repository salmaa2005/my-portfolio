import { Link } from "react-router-dom";

interface Props {
  eyebrow: string;
  title: string;
  to?: string;
  linkLabel?: string;
}

export function SectionHeading({ eyebrow, title, to, linkLabel }: Props) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="section-title">{title}</h2>
      </div>
      {to && linkLabel && (
        <Link to={to} className="section-link">
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}
