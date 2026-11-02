import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface Props {
  language: string;
  value: string;
}

export function CodeBlock({ language, value }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Map the syntax highlighting strictly to our CSS variables
  const customTheme: { [key: string]: React.CSSProperties } = {
    'code[class*="language-"]': {
      color: "var(--text)",
      background: "none",
      fontFamily: "var(--font-mono)",
    },
    'pre[class*="language-"]': {
      color: "var(--text)",
      background: "transparent",
      fontFamily: "var(--font-mono)",
    },
    comment: { color: "var(--text-muted)", fontStyle: "italic" },
    prolog: { color: "var(--text-muted)" },
    doctype: { color: "var(--text-muted)" },
    cdata: { color: "var(--text-muted)" },
    punctuation: { color: "var(--text-muted)" },
    property: { color: "var(--highlight)" },
    tag: { color: "var(--highlight)" },
    boolean: { color: "var(--highlight)" },
    number: { color: "var(--highlight)" },
    constant: { color: "var(--highlight)" },
    symbol: { color: "var(--highlight)" },
    deleted: { color: "var(--accent)" },
    selector: { color: "var(--secondary-accent)" },
    "attr-name": { color: "var(--secondary-accent)" },
    string: { color: "var(--secondary-accent)" },
    char: { color: "var(--secondary-accent)" },
    builtin: { color: "var(--secondary-accent)" },
    inserted: { color: "var(--secondary-accent)" },
    operator: { color: "var(--text-muted)" },
    entity: { color: "var(--text-muted)", cursor: "help" },
    url: { color: "var(--text-muted)" },
    "attr-value": { color: "var(--accent)" },
    keyword: { color: "var(--accent)", fontWeight: "bold" },
    function: { color: "var(--accent)" },
    "class-name": { color: "var(--accent)" },
    regex: { color: "var(--highlight)" },
    important: { color: "var(--highlight)", fontWeight: "bold" },
    variable: { color: "var(--text)" },
  };

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <span className="code-lang">{language || "text"}</span>
        <button
          type="button"
          className="code-copy-btn"
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={customTheme}
        customStyle={{
          margin: 0,
          padding: "var(--space-5)",
          background: "transparent",
          fontSize: "0.9rem",
          fontFamily: "var(--font-mono)",
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
}
