/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MainSection, Unit, Lesson, Flashcard, TestResult, Question } from './types';
import { UNITS, FULL_KNOWLEDGE_EXAM_INFO } from './data/unitsData';
import { QUESTIONS } from './data/questionsData';
import {
  getCompletedLessons,
  saveCompletedLesson,
  getHiddenFlashcardIds,
  addHiddenFlashcard,
  getCustomFlashcards,
  saveCustomFlashcard,
  deleteCustomFlashcard,
  getTestResults,
  saveTestResult,
} from './utils/storage';
import { Header, Drawer } from './components/Header';
import { SyllabusView } from './components/SyllabusView';
import { LessonListView } from './components/LessonListView';
import { LessonContentView } from './components/LessonContentView';
import { LessonReviewView } from './components/LessonReviewView';
import { FlashcardsView } from './components/FlashcardsView';
import { FlashcardDeckView } from './components/FlashcardDeckView';
import { TestsView } from './components/TestsView';
import { TestInstructionsView } from './components/TestInstructionsView';
import { TestActiveView } from './components/TestActiveView';
import { TestResultsView } from './components/TestResultsView';
import { UserProgressView } from './components/UserProgressView';

export default function App() {
  // Navigation State
  const [activeSection, setActiveSection] = useState<MainSection>('syllabus');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Syllabus Sub-Navigation
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [isLessonReviewMode, setIsLessonReviewMode] = useState(false);

  // Flashcards Sub-Navigation
  const [selectedFlashcardUnit, setSelectedFlashcardUnit] = useState<Unit | null>(null);

  // Tests Sub-Navigation
  const [activeTestState, setActiveTestState] = useState<{
    stage: 'list' | 'instructions' | 'active' | 'results';
    testType: 'unit' | 'full_knowledge';
    unit?: Unit;
    testName: string;
    description: string;
    questionCount: number;
    timeLimitMinutes: number;
    questions: Question[];
    latestResult?: TestResult;
  }>({
    stage: 'list',
    testType: 'unit',
    testName: '',
    description: '',
    questionCount: 0,
    timeLimitMinutes: 0,
    questions: [],
  });

  // Local Storage State
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const [hiddenCardIds, setHiddenCardIds] = useState<string[]>([]);
  const [customCards, setCustomCards] = useState<Flashcard[]>([]);
  const [testResults, setTestResults] = useState<TestResult[]>([]);

  // Load from local storage on mount
  useEffect(() => {
    setCompletedLessonIds(getCompletedLessons());
    setHiddenCardIds(getHiddenFlashcardIds());
    setCustomCards(getCustomFlashcards());
    setTestResults(getTestResults());
  }, []);

  // Section Change Handler
  const handleSelectSection = (section: MainSection) => {
    setActiveSection(section);
    // Reset sub-navigation when switching main section
    if (section === 'syllabus') {
      setSelectedUnit(null);
      setSelectedLesson(null);
      setIsLessonReviewMode(false);
    } else if (section === 'flashcards') {
      setSelectedFlashcardUnit(null);
    } else if (section === 'tests') {
      setActiveTestState((prev) => ({ ...prev, stage: 'list' }));
    }
  };

  // Lesson Review Completion Handler
  const handleFinishLessonReview = () => {
    if (selectedLesson) {
      saveCompletedLesson(selectedLesson.id);
      setCompletedLessonIds(getCompletedLessons());
    }
    // Return to lesson list
    setIsLessonReviewMode(false);
    setSelectedLesson(null);
  };

  // Flashcard Handlers
  const handleAddFlashcard = (newCard: Flashcard) => {
    saveCustomFlashcard(newCard);
    setCustomCards(getCustomFlashcards());
  };

  const handleRemoveFlashcard = (card: Flashcard) => {
    if (card.isCustom) {
      deleteCustomFlashcard(card.id);
      setCustomCards(getCustomFlashcards());
    } else {
      addHiddenFlashcard(card.id);
      setHiddenCardIds(getHiddenFlashcardIds());
    }
  };

  // Test Selection Handlers
  const handleSelectUnitTest = (unit: Unit) => {
    const unitQuestions = QUESTIONS.filter((q) => q.unitId === unit.id);
    const count = unitQuestions.length;
    const timeLimit = Math.ceil(count / 5) * 5;

    // Shuffle questions
    const shuffled = [...unitQuestions].sort(() => Math.random() - 0.5);

    setActiveTestState({
      stage: 'instructions',
      testType: 'unit',
      unit,
      testName: `${unit.name} Test`,
      description: unit.testDescription,
      questionCount: count,
      timeLimitMinutes: timeLimit,
      questions: shuffled,
    });
  };

  const handleSelectFullExam = () => {
    // Generate 50 questions for Full Knowledge Exam per Part 6
    // 1. Randomly select 1 question from each of the 6 units
    const selectedQIds = new Set<string>();
    const initialSix: Question[] = [];

    UNITS.forEach((u) => {
      const unitPool = QUESTIONS.filter((q) => q.unitId === u.id);
      if (unitPool.length > 0) {
        const randomQ = unitPool[Math.floor(Math.random() * unitPool.length)];
        selectedQIds.add(randomQ.id);
        initialSix.push(randomQ);
      }
    });

    // 2. Remaining 44 slots drawn from combined pool of all remaining questions
    const remainingPool = QUESTIONS.filter((q) => !selectedQIds.has(q.id));
    const shuffledRemaining = [...remainingPool].sort(() => Math.random() - 0.5);
    const remaining44 = shuffledRemaining.slice(0, 44);

    // 3. Combine and shuffle final 50 questions
    const final50 = [...initialSix, ...remaining44].sort(() => Math.random() - 0.5);

    setActiveTestState({
      stage: 'instructions',
      testType: 'full_knowledge',
      testName: FULL_KNOWLEDGE_EXAM_INFO.name,
      description: FULL_KNOWLEDGE_EXAM_INFO.testDescription,
      questionCount: 50,
      timeLimitMinutes: FULL_KNOWLEDGE_EXAM_INFO.timeLimitMinutes,
      questions: final50,
    });
  };

  const handleStartTest = () => {
    setActiveTestState((prev) => ({
      ...prev,
      stage: 'active',
    }));
  };

  const handleTestComplete = (result: TestResult) => {
    saveTestResult(result);
    setTestResults(getTestResults());
    setActiveTestState((prev) => ({
      ...prev,
      stage: 'results',
      latestResult: result,
    }));
  };

  const handleRetakeCurrentTest = () => {
    if (activeTestState.testType === 'full_knowledge') {
      handleSelectFullExam();
      setActiveTestState((prev) => ({ ...prev, stage: 'active' }));
    } else if (activeTestState.unit) {
      handleSelectUnitTest(activeTestState.unit);
      setActiveTestState((prev) => ({ ...prev, stage: 'active' }));
    }
  };

  // Compute Section Title for Header
  const getSectionTitle = () => {
    switch (activeSection) {
      case 'syllabus':
        return 'Syllabus';
      case 'flashcards':
        return 'Flashcards';
      case 'tests':
        return 'Tests';
      case 'progress':
        return 'User Progress';
      default:
        return 'Syllabus';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased selection:bg-amber-200 selection:text-slate-900">
      {/* Top Header with NROTC logo and Section title in bold */}
      <Header
        sectionTitle={getSectionTitle()}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />

      {/* Side Drawer Navigation Menu */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-12">
        {/* ============================================================ */}
        {/* 1. SYLLABUS SECTION FLOW */}
        {/* ============================================================ */}
        {activeSection === 'syllabus' && (
          <>
            {isLessonReviewMode && selectedLesson && (
              <LessonReviewView
                lesson={selectedLesson}
                onFinish={handleFinishLessonReview}
                onCancel={() => setIsLessonReviewMode(false)}
              />
            )}

            {!isLessonReviewMode && selectedLesson && selectedUnit && (
              <LessonContentView
                lesson={selectedLesson}
                unitName={selectedUnit.name}
                onBack={() => setSelectedLesson(null)}
                onNext={() => setIsLessonReviewMode(true)}
              />
            )}

            {!isLessonReviewMode && !selectedLesson && selectedUnit && (
              <LessonListView
                unit={selectedUnit}
                completedLessonIds={completedLessonIds}
                onBack={() => setSelectedUnit(null)}
                onSelectLesson={(lesson) => setSelectedLesson(lesson)}
              />
            )}

            {!isLessonReviewMode && !selectedLesson && !selectedUnit && (
              <SyllabusView
                completedLessonIds={completedLessonIds}
                onSelectUnit={(unit) => setSelectedUnit(unit)}
              />
            )}
          </>
        )}

        {/* ============================================================ */}
        {/* 2. FLASHCARDS SECTION FLOW */}
        {/* ============================================================ */}
        {activeSection === 'flashcards' && (
          <>
            {selectedFlashcardUnit ? (
              <FlashcardDeckView
                unit={selectedFlashcardUnit}
                hiddenCardIds={hiddenCardIds}
                customCards={customCards}
                onBack={() => setSelectedFlashcardUnit(null)}
                onAddCard={handleAddFlashcard}
                onRemoveCard={handleRemoveFlashcard}
              />
            ) : (
              <FlashcardsView
                hiddenCardIds={hiddenCardIds}
                customCards={customCards}
                onSelectUnit={(unit) => setSelectedFlashcardUnit(unit)}
              />
            )}
          </>
        )}

        {/* ============================================================ */}
        {/* 3. TESTS SECTION FLOW */}
        {/* ============================================================ */}
        {activeSection === 'tests' && (
          <>
            {activeTestState.stage === 'list' && (
              <TestsView
                onSelectUnitTest={handleSelectUnitTest}
                onSelectFullExam={handleSelectFullExam}
              />
            )}

            {activeTestState.stage === 'instructions' && (
              <TestInstructionsView
                testName={activeTestState.testName}
                description={activeTestState.description}
                questionCount={activeTestState.questionCount}
                timeLimitMinutes={activeTestState.timeLimitMinutes}
                onBack={() => setActiveTestState((prev) => ({ ...prev, stage: 'list' }))}
                onStartTest={handleStartTest}
              />
            )}

            {activeTestState.stage === 'active' && (
              <TestActiveView
                testName={activeTestState.testName}
                testType={activeTestState.testType}
                unitId={activeTestState.unit?.id}
                questions={activeTestState.questions}
                timeLimitMinutes={activeTestState.timeLimitMinutes}
                onCompleteTest={handleTestComplete}
                onCancelTest={() => setActiveTestState((prev) => ({ ...prev, stage: 'list' }))}
              />
            )}

            {activeTestState.stage === 'results' && activeTestState.latestResult && (
              <TestResultsView
                result={activeTestState.latestResult}
                onRetake={handleRetakeCurrentTest}
                onGoToTests={() => setActiveTestState((prev) => ({ ...prev, stage: 'list' }))}
                onGoToProgress={() => {
                  setActiveSection('progress');
                  setActiveTestState((prev) => ({ ...prev, stage: 'list' }));
                }}
              />
            )}
          </>
        )}

        {/* ============================================================ */}
        {/* 4. USER PROGRESS SECTION */}
        {/* ============================================================ */}
        {activeSection === 'progress' && (
          <UserProgressView
            completedLessonIds={completedLessonIds}
            testResults={testResults}
          />
        )}
      </main>
    </div>
  );
}
