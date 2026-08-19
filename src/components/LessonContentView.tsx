import React from 'react';
import { ChevronLeft, ArrowRight, BookOpen } from 'lucide-react';
import { Lesson } from '../types';
import { LessonImage } from './LessonImage';

interface LessonContentViewProps {
  lesson: Lesson;
  unitName: string;
  onBack: () => void;
  onNext: () => void;
}

export const LessonContentView: React.FC<LessonContentViewProps> = ({
  lesson,
  unitName,
  onBack,
  onNext,
}) => {
  const renderContentItem = (text: string, index: number) => {
    // Check for image placeholder format: [IMAGE PLACEHOLDER: description]
    const placeholderRegex = /\[IMAGE PLACEHOLDER:\s*(.*?)\]/g;
    const match = text.match(placeholderRegex);

    if (match) {
      // Split and render actual lesson images
      const parts = text.split(/(\[IMAGE PLACEHOLDER:\s*.*?\])/g);
      return (
        <div key={index} className="space-y-4">
          {parts.map((part, pIdx) => {
            const phMatch = part.match(/\[IMAGE PLACEHOLDER:\s*(.*?)\]/);
            if (phMatch) {
              return <LessonImage key={pIdx} description={phMatch[1]} />;
            }
            if (!part.trim()) return null;
            return (
              <p key={pIdx} className="text-slate-800 leading-relaxed whitespace-pre-line text-[15px]">
                {part}
              </p>
            );
          })}
        </div>
      );
    }

    return (
      <p key={index} className="text-slate-800 leading-relaxed whitespace-pre-line text-[15px]">
        {text}
      </p>
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
        <button
          onClick={onBack}
          className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Lessons
        </button>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Lesson {lesson.number}
        </span>
      </div>

      {/* Lesson Header */}
      <div className="bg-slate-900 text-white rounded-xl p-5 md:p-6 mb-6 shadow-md border border-amber-600/30">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase mb-1.5">
          <BookOpen className="w-4 h-4" />
          <span>{unitName}</span>
        </div>
        <h2 className="text-xl md:text-2xl font-black tracking-tight text-white">
          Lesson {lesson.number}: {lesson.title}
        </h2>
      </div>

      {/* Lesson Body Content */}
      <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-6 md:p-8 space-y-4">
        {lesson.content.map((block, idx) => renderContentItem(block, idx))}
      </div>

      {/* Next Button */}
      <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
        <button
          id="lesson-next-btn"
          onClick={onNext}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold rounded-lg shadow-md transition-all active:scale-98"
        >
          <span>Next: Review Quiz</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
