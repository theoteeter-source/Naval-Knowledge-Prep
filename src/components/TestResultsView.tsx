import React from 'react';
import { Award, Clock, CheckCircle2, RotateCcw, ArrowLeft, BarChart2 } from 'lucide-react';
import { TestResult } from '../types';

interface TestResultsViewProps {
  result: TestResult;
  onRetake: () => void;
  onGoToTests: () => void;
  onGoToProgress: () => void;
}

export const TestResultsView: React.FC<TestResultsViewProps> = ({
  result,
  onRetake,
  onGoToTests,
  onGoToProgress,
}) => {
  const isPassed = result.scorePercentage >= 80;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden text-center">
        {/* Result Header */}
        <div
          className={`p-8 ${
            isPassed ? 'bg-slate-900 text-white' : 'bg-slate-900 text-white'
          } border-b border-amber-600/30`}
        >
          <div className="w-16 h-16 rounded-full bg-slate-800 text-amber-400 border border-amber-500/40 flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
            Examination Results
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white">{result.unitName}</h2>
          <p className="text-xs text-slate-300 mt-1">Recorded on {result.dateFormatted}</p>
        </div>

        {/* Score Display */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="py-2">
            <div
              className={`text-5xl md:text-6xl font-black ${
                isPassed ? 'text-emerald-600' : 'text-amber-600'
              }`}
            >
              {result.scorePercentage}%
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-slate-500 mt-2">
              {isPassed ? 'Passed — Ready for NSI' : 'Needs Review — Retake Recommended'}
            </p>
          </div>

          {/* Breakdown Stats */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Correct Answers</span>
              </div>
              <p className="text-xl font-bold text-slate-900">
                {result.correctAnswers} / {result.totalQuestions}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left">
              <div className="flex items-center gap-1.5 text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4 text-blue-900" />
                <span>Time Taken</span>
              </div>
              <p className="text-xl font-bold text-slate-900">{result.durationFormatted}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-slate-100 max-w-md mx-auto">
            <button
              id="retake-test-btn"
              onClick={onRetake}
              className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Test</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                id="view-all-tests-btn"
                onClick={onGoToTests}
                className="py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Tests</span>
              </button>

              <button
                id="view-user-progress-btn"
                onClick={onGoToProgress}
                className="py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <BarChart2 className="w-4 h-4 text-amber-600" />
                <span>View Progress</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
