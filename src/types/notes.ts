export interface NoteHighlight {
  term: string;
  explanation: string;
}

export interface NoteCode {
  language: string;
  code: string;
  caption?: string;
}

export interface NoteQuizQuestion {
  question: string;
  choices: string[];
  correctIndex: number;
  explanation?: string;
}

export interface NoteLabStep {
  /** Human-readable description of what to do */
  instruction: string;
  /** Command(s) that solve this step — hidden until revealed */
  solution: string;
  /** Optional language for the solution block (defaults to bash) */
  language?: string;
}

export interface NoteLab {
  title: string;
  objective: string;
  /** The steps you have to solve */
  steps: NoteLabStep[];
  /** Optional overall solution or explanation revealed after the steps */
  finalNote?: string;
}

export interface NoteSubsection {
  id: string;
  title: string;
  body: string;
  highlights?: NoteHighlight[];
  code?: NoteCode[];
}

export interface NoteChapter {
  slug: string;
  title: string;
  summary: string;
  order: number;
  readingTime: number;
  body: string;
  highlights?: NoteHighlight[];
  code?: NoteCode[];
  subsections?: NoteSubsection[];
  quiz?: NoteQuizQuestion[];
  labs?: NoteLab[];
}

export interface NoteCourse {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  chapters: NoteChapter[];
}