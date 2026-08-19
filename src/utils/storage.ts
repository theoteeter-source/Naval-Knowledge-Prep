import { Flashcard, TestResult } from '../types';

const STORAGE_KEYS = {
  COMPLETED_LESSONS: 'nkp_completed_lessons',
  HIDDEN_FLASHCARDS: 'nkp_hidden_flashcards',
  CUSTOM_FLASHCARDS: 'nkp_custom_flashcards',
  TEST_RESULTS: 'nkp_test_results',
};

export function getCompletedLessons(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED_LESSONS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading completed lessons from localStorage', e);
    return [];
  }
}

export function saveCompletedLesson(lessonId: string): void {
  try {
    const current = getCompletedLessons();
    if (!current.includes(lessonId)) {
      const updated = [...current, lessonId];
      localStorage.setItem(STORAGE_KEYS.COMPLETED_LESSONS, JSON.stringify(updated));
    }
  } catch (e) {
    console.error('Error saving completed lesson', e);
  }
}

export function getHiddenFlashcardIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.HIDDEN_FLASHCARDS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading hidden flashcards', e);
    return [];
  }
}

export function addHiddenFlashcard(cardId: string): void {
  try {
    const current = getHiddenFlashcardIds();
    if (!current.includes(cardId)) {
      const updated = [...current, cardId];
      localStorage.setItem(STORAGE_KEYS.HIDDEN_FLASHCARDS, JSON.stringify(updated));
    }
  } catch (e) {
    console.error('Error adding hidden flashcard', e);
  }
}

export function getCustomFlashcards(): Flashcard[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CUSTOM_FLASHCARDS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading custom flashcards', e);
    return [];
  }
}

export function saveCustomFlashcard(card: Flashcard): void {
  try {
    const current = getCustomFlashcards();
    const updated = [card, ...current];
    localStorage.setItem(STORAGE_KEYS.CUSTOM_FLASHCARDS, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving custom flashcard', e);
  }
}

export function deleteCustomFlashcard(cardId: string): void {
  try {
    const current = getCustomFlashcards();
    const updated = current.filter((c) => c.id !== cardId);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_FLASHCARDS, JSON.stringify(updated));
  } catch (e) {
    console.error('Error deleting custom flashcard', e);
  }
}

export function getTestResults(): TestResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.TEST_RESULTS);
    if (!raw) return [];
    const parsed: TestResult[] = JSON.parse(raw);
    return parsed.sort((a, b) => b.timestamp - a.timestamp);
  } catch (e) {
    console.error('Error reading test results', e);
    return [];
  }
}

export function saveTestResult(result: TestResult): void {
  try {
    const current = getTestResults();
    const updated = [result, ...current];
    localStorage.setItem(STORAGE_KEYS.TEST_RESULTS, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving test result', e);
  }
}

export function clearAllLocalData(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.COMPLETED_LESSONS);
    localStorage.removeItem(STORAGE_KEYS.HIDDEN_FLASHCARDS);
    localStorage.removeItem(STORAGE_KEYS.CUSTOM_FLASHCARDS);
    localStorage.removeItem(STORAGE_KEYS.TEST_RESULTS);
  } catch (e) {
    console.error('Error clearing local data', e);
  }
}
