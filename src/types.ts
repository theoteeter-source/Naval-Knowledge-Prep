export interface Lesson {
  id: string;
  unitId: string;
  number: number;
  title: string;
  content: string[]; // paragraphs and/or [IMAGE PLACEHOLDER: ...]
  questionPoolIds: string[];
}

export interface Question {
  id: string;
  unitId: string;
  lessonId: string;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0, 1, 2, or 3
}

export interface Flashcard {
  id: string;
  unitId: string;
  front: string;
  back: string;
  isCustom?: boolean;
}

export interface Unit {
  id: string;
  number: number;
  name: string;
  iconName: 'medal' | 'book' | 'anchor' | 'checklist' | 'flag' | 'dumbbell';
  totalLessons: number;
  testDescription: string;
}

export interface TestResult {
  id: string;
  testType: 'unit' | 'full_knowledge';
  unitId?: string;
  unitName: string;
  scorePercentage: number;
  totalQuestions: number;
  correctAnswers: number;
  durationSeconds: number;
  timestamp: number; // epoch ms
  dateFormatted: string; // MM/DD/YYYY
  durationFormatted: string; // MM:SS
}

export interface StoredUserData {
  completedLessons: string[]; // lesson ids e.g. "rank-1", "rank-2"
  hiddenFlashcardIds: string[]; // default flashcard ids soft-deleted
  customFlashcards: Flashcard[]; // custom user created flashcards
  testResults: TestResult[]; // list of past tests
}

export type MainSection = 'syllabus' | 'flashcards' | 'tests' | 'progress';
