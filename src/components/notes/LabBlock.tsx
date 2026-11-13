import { useState } from "react";
import { Eye, EyeOff, Terminal } from "lucide-react";
import { CodeBlock } from "../content/CodeBlock";
import type { NoteLab } from "../../types/notes";

interface Props {
  lab: NoteLab;
}

export function LabBlock({ lab }: Props) {
  // Track revealed state per step (index → boolean)
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const toggleStep = (index: number) => {
    setRevealed((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="lab">
      <div className="lab-header">
        <div className="lab-badge">
          <Terminal size={14} /> Practical Lab
        </div>
        <h3 className="lab-title">{lab.title}</h3>
      </div>

      <div className="lab-objective">
        <strong>Objective</strong>
        <p>{lab.objective}</p>
      </div>

      <div className="lab-task-section">
        <h4 className="lab-section-label">Your Task</h4>

        <ol className="lab-step-list">
          {lab.steps.map((step, i) => {
            const isRevealed = !!revealed[i];
            return (
              <li key={i} className="lab-step">
                <div className="lab-step-instruction">{step.instruction}</div>

                <button
                  type="button"
                  className={"lab-step-toggle" + (isRevealed ? " is-open" : "")}
                  onClick={() => toggleStep(i)}
                >
                  {isRevealed ? <EyeOff size={14} /> : <Eye size={14} />}
                  {isRevealed ? "Hide command" : "Show solution"}
                </button>

                {isRevealed && (
                  <div className="lab-step-solution">
                    <CodeBlock
                      language={step.language || "bash"}
                      value={step.solution}
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        {lab.finalNote && (
          <div className="lab-final-note">{lab.finalNote}</div>
        )}
      </div>
    </section>
  );
}