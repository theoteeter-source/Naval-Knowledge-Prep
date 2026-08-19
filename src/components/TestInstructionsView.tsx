import React from 'react';
import { ChevronLeft, Clock, HelpCircle, ShieldCheck, Play } from 'lucide-react';

interface TestInstructionsViewProps {
  testName: string;
  description: string;
  questionCount: number;
  timeLimitMinutes: number;
  onBack: () => void;
  onStartTest: () => void;
}

export const TestInstructionsView: React.FC<TestInstructionsViewProps> = ({
  testName,
  description,
  questionCount,
  timeLimitMinutes,
  onBack,
  onStartTest,
}) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Back button */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
        <button
          onClick={onBack}
          className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Tests
        </button>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Exam Briefing
        </span>
      </div>

      {/* Main Instructions Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-900 text-white p-6 md:p-8 border-b border-amber-600/30">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1 block">
            Military Knowledge Examination
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white">{testName}</h2>
          <p className="text-slate-300 text-sm mt-3 leading-relaxed">{description}</p>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          {/* Key Parameters */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                <HelpCircle className="w-4 h-4 text-blue-900" />
                <span>Questions</span>
              </div>
              <p className="text-2xl font-black text-slate-900">{questionCount}</p>
              <p className="text-xs text-slate-500 mt-0.5">Multiple choice questions</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Time Limit</span>
              </div>
              <p className="text-2xl font-black text-slate-900">{timeLimitMinutes} min</p>
              <p className="text-xs text-slate-500 mt-0.5">Automatic countdown</p>
            </div>
          </div>

          {/* Test Protocol Notes */}
          <div className="space-y-2.5 text-xs text-slate-600 bg-amber-50/70 border border-amber-200/80 p-4 rounded-xl">
            <div className="flex items-center gap-1.5 font-bold text-amber-900">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Examination Rules</span>
            </div>
            <ul className="list-disc pl-4 space-y-1 text-slate-700">
              <li>Questions are drawn and shuffled in random presentation order.</li>
              <li>You may select one answer per question.</li>
              <li>The test ends immediately when all questions are answered or when time expires.</li>
              <li>Your results and duration will be saved to your military profile.</li>
            </ul>
          </div>

          {/* Start Test Button */}
          <div className="pt-2">
            <button
              id="start-test-btn"
              onClick={onStartTest}
              className="w-full py-4 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-black text-base flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98"
            >
              <Play className="w-5 h-5 fill-amber-400" />
              <span>Start Test</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
