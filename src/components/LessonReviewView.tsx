import React, { useState } from 'react';
import { ChevronLeft, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { Lesson, Question } from '../types';
import { QUESTIONS } from '../data/questionsData';

interface LessonReviewViewProps {
  lesson: Lesson;
  onFinish: () => void;
  onCancel: () => void;
}

export const LessonReviewView: React.FC<LessonReviewViewProps> = ({
  lesson,
  onFinish,
  onCancel,
}) => {
  // Get questions for this lesson from pool
  const [reviewQuestions] = useState<Question[]>(() => {
    let pool = QUESTIONS.filter((q) => q.lessonId === lesson.id);
    if (pool.length === 0) {
      pool = QUESTIONS.filter((q) => q.unitId === lesson.unitId);
    }
    // Shuffle pool
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    // Select between 3 and 5 questions (or all if fewer)
    const count = Math.min(Math.max(3, Math.min(5, shuffled.length)), shuffled.length);
    return shuffled.slice(0, count);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleSelectOption = (optionIndex: number) => {
    const nextAnswers = [...selectedAnswers];
    nextAnswers[currentIndex] = optionIndex;
    setSelectedAnswers(nextAnswers);

    if (currentIndex + 1 < reviewQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const currentQ = reviewQuestions[currentIndex];

  // Feedback calculation
  const correctCount = reviewQuestions.reduce((acc, q, idx) => {
    return acc + (selectedAnswers[idx] === q.correctAnswer ? 1 : 0);
  }, 0);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
        <button
          onClick={onCancel}
          className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Lesson
        </button>
        <span className="text-xs font-bold uppercase tracking-wider bg-slate-900 text-amber-400 px-2.5 py-1 rounded">
          Lesson Review Quiz
        </span>
      </div>

      {!isQuizComplete ? (
        /* Active Question */
        <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">
              Question {currentIndex + 1} of {reviewQuestions.length}
            </span>
            <div className="w-24 bg-slate-100 rounded-full h-2">
              <div
                className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / reviewQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-6">{currentQ?.question}</h3>

          <div className="space-y-3">
            {currentQ?.options.map((option, idx) => {
              const letters = ['A', 'B', 'C', 'D'];
              return (
                <button
                  key={idx}
                  id={`review-option-${idx}`}
                  onClick={() => handleSelectOption(idx)}
                  className="w-full text-left p-4 rounded-lg border border-slate-300 hover:border-blue-900 hover:bg-slate-50 transition-all flex items-start gap-3 text-slate-800 font-medium group"
                >
                  <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-slate-900 group-hover:text-amber-400 text-slate-700 flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                    {letters[idx]}
                  </span>
                  <span className="text-sm leading-relaxed pt-0.5">{option}</span>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Quiz Complete & Feedback Screen */
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-slate-900 text-white rounded-xl p-6 border border-amber-600/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Lesson Review Complete</h3>
                <p className="text-sm text-slate-300">
                  {lesson.title} — Unit {lesson.unitId.replace('_', ' ')}
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-extrabold text-amber-400">
                  {Math.round((correctCount / reviewQuestions.length) * 100)}%
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  {correctCount} of {reviewQuestions.length} Correct
                </div>
              </div>
            </div>
          </div>

          {/* Question-by-Question Review Breakdown */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-600">Question Feedback</h4>
            {reviewQuestions.map((q, qIndex) => {
              const userAnswer = selectedAnswers[qIndex];
              const isCorrect = userAnswer === q.correctAnswer;
              const letters = ['A', 'B', 'C', 'D'];

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border ${
                    isCorrect ? 'bg-emerald-50/60 border-emerald-300' : 'bg-rose-50/60 border-rose-300'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Question {qIndex + 1}</p>
                      <p className="text-sm font-bold text-slate-900">{q.question}</p>
                    </div>
                  </div>

                  <div className="pl-8 space-y-1.5 text-xs">
                    <p className={`font-medium ${isCorrect ? 'text-emerald-800' : 'text-rose-800'}`}>
                      <span className="font-bold">Your answer:</span> {letters[userAnswer]}. {q.options[userAnswer]}
                    </p>
                    {!isCorrect && (
                      <p className="text-emerald-800 font-semibold">
                        <span className="font-bold">Correct answer:</span> {letters[q.correctAnswer]}. {q.options[q.correctAnswer]}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Finish Button */}
          <div className="pt-2">
            <button
              id="review-finish-btn"
              onClick={onFinish}
              className="w-full py-3.5 px-6 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
            >
              <span>Finish & Mark Complete</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
