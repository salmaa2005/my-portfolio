import { useEffect, useRef, useState } from "react";

interface Props {
  term: string;
  explanation: string;
}

export function HighlightTerm({ term, explanation }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  return (
    <span ref={ref} className="highlight-term-wrapper">
      <button
        type="button"
        className="highlight-term"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        {term}
      </button>
      {open && (
        <span role="dialog" className="highlight-popover">
          <span className="highlight-popover-title">{term}</span>
          <span className="highlight-popover-body">{explanation}</span>
        </span>
      )}
    </span>
  );
}
