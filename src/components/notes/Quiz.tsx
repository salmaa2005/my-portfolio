import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import type { NoteQuizQuestion } from "../../types/notes";

interface Props {
  questions: NoteQuizQuestion[];
}

export function Quiz({ questions }: Props) {
  const [answers, setAnswers] = useState<Record<number, number | null>>({});

  return (
    <section className="quiz">
      <h3 className="quiz-title">Quick check</h3>
      {questions.map((q, qi) => {
        const answer = answers[qi] ?? null;
        const answered = answer !== null;
        const correct = answered && answer === q.correctIndex;

        return (
          <div key={qi} className="quiz-question">
            <p className="quiz-question-text">
              {qi + 1}. {q.question}
            </p>
            <ul className="quiz-choices">
              {q.choices.map((c, ci) => {
                const isPicked = answer === ci;
                const isCorrect = q.correctIndex === ci;
                return (
                  <li key={ci}>
                    <button
                      type="button"
                      className={
                        "quiz-choice" +
                        (answered && isCorrect ? " is-correct" : "") +
                        (answered && isPicked && !isCorrect ? " is-wrong" : "")
                      }
                      onClick={() =>
                        setAnswers((a) => ({ ...a, [qi]: ci }))
                      }
                      disabled={answered}
                    >
                      {c}
                    </button>
                  </li>
                );
              })}
            </ul>
            {answered && (
              <p className={"quiz-feedback " + (correct ? "ok" : "bad")}>
                {correct ? (
                  <>
                    <CheckCircle2 size={14} /> Correct.
                  </>
                ) : (
                  <>
                    <XCircle size={14} /> Not quite.
                  </>
                )}{" "}
                {q.explanation}
              </p>
            )}
          </div>
        );
      })}
    </section>
  );
}
