import React, { useState, useEffect, useRef } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { Question, TestResult } from '../types';

interface TestActiveViewProps {
  testName: string;
  testType: 'unit' | 'full_knowledge';
  unitId?: string;
  questions: Question[];
  timeLimitMinutes: number;
  onCompleteTest: (result: TestResult) => void;
  onCancelTest: () => void;
}

export const TestActiveView: React.FC<TestActiveViewProps> = ({
  testName,
  testType,
  unitId,
  questions,
  timeLimitMinutes,
  onCompleteTest,
  onCancelTest,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [secondsRemaining, setSecondsRemaining] = useState(timeLimitMinutes * 60);
  const totalSeconds = timeLimitMinutes * 60;
  const isEndingRef = useRef(false);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          if (!isEndingRef.current) {
            isEndingRef.current = true;
            handleTestFinish(userAnswers, totalSeconds);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [userAnswers, totalSeconds]);

  const handleTestFinish = (answers: number[], durationUsed: number) => {
    isEndingRef.current = true;
    const correctCount = questions.reduce((acc, q, idx) => {
      return acc + (answers[idx] === q.correctAnswer ? 1 : 0);
    }, 0);

    const scorePercentage = Math.round((correctCount / questions.length) * 100);
    const duration = Math.min(durationUsed, totalSeconds);

    // Format MM:SS
    const mins = Math.floor(duration / 60);
    const secs = duration % 60;
    const durationFormatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    // Format Date MM/DD/YYYY
    const now = new Date();
    const mm = (now.getMonth() + 1).toString().padStart(2, '0');
    const dd = now.getDate().toString().padStart(2, '0');
    const yyyy = now.getFullYear();
    const dateFormatted = `${mm}/${dd}/${yyyy}`;

    const result: TestResult = {
      id: `res_${Date.now()}`,
      testType,
      unitId,
      unitName: testName.toUpperCase(),
      scorePercentage,
      totalQuestions: questions.length,
      correctAnswers: correctCount,
      durationSeconds: duration,
      timestamp: Date.now(),
      dateFormatted,
      durationFormatted,
    };

    onCompleteTest(result);
  };

  const handleSelectOption = (optionIndex: number) => {
    const nextAnswers = [...userAnswers];
    nextAnswers[currentIndex] = optionIndex;
    setUserAnswers(nextAnswers);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const elapsed = totalSeconds - secondsRemaining;
      handleTestFinish(nextAnswers, elapsed);
    }
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ = questions[currentIndex];
  const isTimeLow = secondsRemaining <= 120; // 2 minutes or less

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 md:py-6">
      {/* Test App Bar */}
      <div className="bg-slate-900 text-white rounded-xl p-4 mb-6 shadow-md border border-amber-600/30 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
            {testName}
          </span>
          <span className="text-sm font-bold text-white">
            Question {currentIndex + 1} of {questions.length}
          </span>
        </div>

        {/* Countdown Timer */}
        <div
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg font-mono font-bold text-sm ${
            isTimeLow ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse' : 'bg-slate-800 text-amber-400 border border-slate-700'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>{formatTimer(secondsRemaining)}</span>
        </div>
      </div>

      {/* Progress Track */}
      <div className="w-full bg-slate-200 rounded-full h-1.5 mb-6 overflow-hidden">
        <div
          className="bg-amber-500 h-1.5 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {currentQ?.topic}
          </span>
          <span className="text-xs font-bold text-slate-400">
            {Math.round(((currentIndex) / questions.length) * 100)}% complete
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6 leading-snug">
          {currentQ?.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {currentQ?.options.map((option, idx) => {
            const letters = ['A', 'B', 'C', 'D'];
            return (
              <button
                key={idx}
                id={`test-option-${idx}`}
                onClick={() => handleSelectOption(idx)}
                className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-slate-900 hover:bg-slate-50 transition-all flex items-start gap-3 text-slate-800 font-medium group active:scale-99 shadow-2xs"
              >
                <span className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-slate-900 group-hover:text-amber-400 text-slate-700 flex items-center justify-center text-xs font-bold shrink-0 transition-colors">
                  {letters[idx]}
                </span>
                <span className="text-sm md:text-base leading-relaxed pt-0.5">{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Abort Test button */}
      <div className="mt-6 text-center">
        <button
          onClick={onCancelTest}
          className="text-xs font-semibold text-slate-400 hover:text-rose-600 transition-colors inline-flex items-center gap-1"
        >
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Exit Exam (Progress will not be saved)</span>
        </button>
      </div>
    </div>
  );
};
