import React from 'react';
import { ChevronLeft, CheckCircle, ChevronRight, BookOpen } from 'lucide-react';
import { Lesson, Unit } from '../types';
import { LESSONS } from '../data/lessonsData';
import { UnitIcon } from './UnitIcon';

interface LessonListViewProps {
  unit: Unit;
  completedLessonIds: string[];
  onBack: () => void;
  onSelectLesson: (lesson: Lesson) => void;
}

export const LessonListView: React.FC<LessonListViewProps> = ({
  unit,
  completedLessonIds,
  onBack,
  onSelectLesson,
}) => {
  const unitLessons = LESSONS.filter((l) => l.unitId === unit.id).sort((a, b) => a.number - b.number);
  const completedCount = unitLessons.filter((l) => completedLessonIds.includes(l.id)).length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Back button */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
        <button
          onClick={onBack}
          className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Syllabus
        </button>
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Unit {unit.number} of 6
        </span>
      </div>

      {/* Unit Header Card */}
      <div className="bg-slate-900 text-white rounded-xl p-6 mb-6 shadow-md border border-amber-600/30 flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-slate-800 rounded-lg text-amber-400 border border-slate-700">
            <UnitIcon name={unit.iconName} className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Unit {unit.number}
            </span>
            <h2 className="text-xl md:text-2xl font-black text-white">{unit.name}</h2>
            <p className="text-xs text-slate-300 mt-1">
              {completedCount} of {unitLessons.length} lessons completed
            </p>
          </div>
        </div>
      </div>

      {/* Lessons List — Always Light Gray Rectangles with checkmark if completed */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Lessons</h3>
        {unitLessons.map((lesson) => {
          const isComplete = completedLessonIds.includes(lesson.id);

          return (
            <button
              key={lesson.id}
              id={`lesson-card-${lesson.id}`}
              onClick={() => onSelectLesson(lesson)}
              className="w-full bg-slate-100 hover:bg-slate-200/80 border border-slate-300 rounded-xl p-4.5 flex items-center justify-between text-left transition-all group shadow-xs active:scale-99"
            >
              <div className="flex items-center gap-3.5 pr-4">
                <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-slate-900 group-hover:text-amber-400 transition-colors">
                  {lesson.number}
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-slate-900 leading-snug">
                    {lesson.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Lesson {lesson.number}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {isComplete ? (
                  <div className="flex items-center gap-1 text-emerald-600 bg-emerald-100/80 px-2 py-1 rounded-md text-xs font-bold">
                    <CheckCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">Completed</span>
                  </div>
                ) : (
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
