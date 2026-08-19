import React, { useState } from 'react';
import { BookOpen, Edit3, Award, Calendar, Clock, CheckCircle } from 'lucide-react';
import { TestResult } from '../types';
import { UNITS } from '../data/unitsData';
import { LESSONS } from '../data/lessonsData';
import { UnitIcon, getAlternatingCardBg } from './UnitIcon';

interface UserProgressViewProps {
  completedLessonIds: string[];
  testResults: TestResult[];
}

type ProgressTab = 'syllabus' | 'unit_tests' | 'knowledge_exam';

export const UserProgressView: React.FC<UserProgressViewProps> = ({
  completedLessonIds,
  testResults,
}) => {
  const [activeTab, setActiveTab] = useState<ProgressTab>('syllabus');

  // Filter unit test results vs full knowledge exam results
  const unitTestResults = testResults.filter((r) => r.testType === 'unit');
  const knowledgeExamResults = testResults.filter((r) => r.testType === 'full_knowledge');

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Three Tabs */}
      <div className="flex border-b border-slate-200 mb-6 bg-slate-100 p-1 rounded-xl">
        <button
          id="tab-syllabus-progress"
          onClick={() => setActiveTab('syllabus')}
          className={`flex-1 py-2.5 px-3 rounded-lg text-xs md:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'syllabus'
              ? 'bg-slate-900 text-amber-400 shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Syllabus</span>
        </button>

        <button
          id="tab-unit-tests-progress"
          onClick={() => setActiveTab('unit_tests')}
          className={`flex-1 py-2.5 px-3 rounded-lg text-xs md:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'unit_tests'
              ? 'bg-slate-900 text-amber-400 shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
          }`}
        >
          <Edit3 className="w-4 h-4" />
          <span>Unit Test Scores</span>
        </button>

        <button
          id="tab-knowledge-exam-progress"
          onClick={() => setActiveTab('knowledge_exam')}
          className={`flex-1 py-2.5 px-3 rounded-lg text-xs md:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'knowledge_exam'
              ? 'bg-slate-900 text-amber-400 shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Knowledge Exam Scores</span>
        </button>
      </div>

      {/* 1. Syllabus Tab */}
      {activeTab === 'syllabus' && (
        <div className="space-y-4">
          <div className="mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Unit Completion Status</h3>
          </div>

          {UNITS.map((unit, index) => {
            const unitLessons = LESSONS.filter((l) => l.unitId === unit.id);
            const completedCount = unitLessons.filter((l) =>
              completedLessonIds.includes(l.id)
            ).length;
            const progressPercent =
              unit.totalLessons > 0 ? (completedCount / unit.totalLessons) * 100 : 0;

            return (
              <div
                key={unit.id}
                id={`progress-unit-card-${unit.id}`}
                className={`rounded-xl border p-5 transition-all shadow-xs ${getAlternatingCardBg(
                  index
                )}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
                      <UnitIcon name={unit.iconName} className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 leading-tight">
                        {unit.name}
                      </h4>
                      <p className="text-xs font-semibold text-slate-600">
                        {unit.totalLessons} total lessons
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-700">
                      {completedCount} / {unit.totalLessons} done
                    </span>
                  </div>
                </div>

                {/* Horizontal progress bar: gray track fills with green proportionally */}
                <div className="w-full bg-slate-300 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-emerald-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 2. Unit Test Scores Tab */}
      {activeTab === 'unit_tests' && (
        <div className="space-y-4">
          {unitTestResults.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-xs my-6">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                <Edit3 className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-slate-600 max-w-sm mx-auto">
                Once you complete a unit test, you can review your test data here.
              </p>
            </div>
          ) : (
            unitTestResults.map((res) => (
              <div
                key={res.id}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
                    Unit Test
                  </span>
                  <h4 className="text-base font-black text-slate-900 mt-1 uppercase">
                    {res.unitName}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 mt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      Duration: {res.durationFormatted}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      Date: {res.dateFormatted}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <div className="text-left md:text-right">
                    <span
                      className={`text-xl font-black ${
                        res.scorePercentage >= 80 ? 'text-emerald-600' : 'text-amber-600'
                      }`}
                    >
                      Grade: {res.scorePercentage}%
                    </span>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {res.correctAnswers} / {res.totalQuestions} correct
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* 3. Knowledge Exam Scores Tab */}
      {activeTab === 'knowledge_exam' && (
        <div className="space-y-4">
          {knowledgeExamResults.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center shadow-xs my-6">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-slate-600 max-w-sm mx-auto">
                Once you complete a full knowledge exam, you can review your test data here.
              </p>
            </div>
          ) : (
            knowledgeExamResults.map((res) => (
              <div
                key={res.id}
                className="bg-white rounded-xl border border-amber-200/80 p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                    Comprehensive Exam
                  </span>
                  <h4 className="text-base font-black text-slate-900 mt-1 uppercase">
                    {res.unitName}
                  </h4>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 mt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      Duration: {res.durationFormatted}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      Date: {res.dateFormatted}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <div className="text-left md:text-right">
                    <span
                      className={`text-xl font-black ${
                        res.scorePercentage >= 80 ? 'text-emerald-600' : 'text-amber-600'
                      }`}
                    >
                      Grade: {res.scorePercentage}%
                    </span>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {res.correctAnswers} / {res.totalQuestions} correct
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
