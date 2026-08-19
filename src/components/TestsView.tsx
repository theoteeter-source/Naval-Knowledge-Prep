import React from 'react';
import { ChevronRight, Award, Clock, HelpCircle } from 'lucide-react';
import { Unit } from '../types';
import { UNITS, FULL_KNOWLEDGE_EXAM_INFO } from '../data/unitsData';
import { QUESTIONS } from '../data/questionsData';
import { UnitIcon, getAlternatingCardBg } from './UnitIcon';

interface TestsViewProps {
  onSelectUnitTest: (unit: Unit) => void;
  onSelectFullExam: () => void;
}

export const TestsView: React.FC<TestsViewProps> = ({
  onSelectUnitTest,
  onSelectFullExam,
}) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-600">Knowledge Examinations</h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Select a unit test or take the comprehensive 50-question NSI Full Knowledge Exam.
        </p>
      </div>

      <div className="space-y-4">
        {/* 6 alternating unit cards */}
        {UNITS.map((unit, index) => {
          const unitQuestions = QUESTIONS.filter((q) => q.unitId === unit.id);
          const totalQ = unitQuestions.length;
          const timeLimit = Math.ceil(totalQ / 5) * 5;

          return (
            <button
              key={unit.id}
              id={`test-unit-card-${unit.id}`}
              onClick={() => onSelectUnitTest(unit)}
              className={`w-full rounded-xl border p-5 flex items-center justify-between transition-all duration-150 shadow-xs hover:shadow-md cursor-pointer text-left group active:scale-99 ${getAlternatingCardBg(
                index
              )}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <UnitIcon name={unit.iconName} className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                      Unit {unit.number} Test
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 leading-tight">
                    {unit.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-600 mt-1">
                    <span className="flex items-center gap-1">
                      <HelpCircle className="w-3.5 h-3.5" />
                      {totalQ} questions
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {timeLimit} min limit
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
              </div>
            </button>
          );
        })}

        {/* Additional card: Full Knowledge Exam styled identically with alternating color pattern */}
        <button
          id="test-card-full-knowledge-exam"
          onClick={onSelectFullExam}
          className={`w-full rounded-xl border p-5 flex items-center justify-between transition-all duration-150 shadow-xs hover:shadow-md cursor-pointer text-left group active:scale-99 ${getAlternatingCardBg(
            6 // Index 6 continues repeating pattern: light gray
          )}`}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-900">
                  Standardized Assessment
                </span>
              </div>
              <h3 className="text-base md:text-lg font-black text-slate-900 leading-tight">
                {FULL_KNOWLEDGE_EXAM_INFO.name}
              </h3>
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-700 mt-1">
                <span className="flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5" />
                  50 questions
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  45 min hard limit
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
          </div>
        </button>
      </div>
    </div>
  );
};
