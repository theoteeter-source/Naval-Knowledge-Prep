import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Unit } from '../types';
import { UNITS } from '../data/unitsData';
import { LESSONS } from '../data/lessonsData';
import { UnitIcon, getAlternatingCardBg } from './UnitIcon';

interface SyllabusViewProps {
  completedLessonIds: string[];
  onSelectUnit: (unit: Unit) => void;
}

export const SyllabusView: React.FC<SyllabusViewProps> = ({
  completedLessonIds,
  onSelectUnit,
}) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Subtitle / Military heading */}
      <div className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-600">NROTC Curriculum Units</h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Select a unit to study foundational naval gouge and complete lesson reviews.
        </p>
      </div>

      {/* 6 alternating unit cards */}
      <div className="space-y-4">
        {UNITS.map((unit, index) => {
          const unitLessons = LESSONS.filter((l) => l.unitId === unit.id);
          const completedInUnit = unitLessons.filter((l) => completedLessonIds.includes(l.id)).length;
          const isComplete = completedInUnit === unit.totalLessons && unit.totalLessons > 0;
          const isInProgress = completedInUnit > 0 && !isComplete;

          return (
            <button
              key={unit.id}
              id={`syllabus-unit-card-${unit.id}`}
              onClick={() => onSelectUnit(unit)}
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
                      Unit {unit.number}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 leading-tight">
                    {unit.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 mt-1">
                    {unit.totalLessons} {unit.totalLessons === 1 ? 'lesson' : 'lessons'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {/* Status Badges */}
                {isInProgress && (
                  <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-amber-500 text-slate-950 shadow-xs">
                    In Progress
                  </span>
                )}
                {isComplete && (
                  <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-50 text-emerald-700 border border-emerald-600 shadow-xs">
                    Complete
                  </span>
                )}
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
