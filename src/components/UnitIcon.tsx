import React from 'react';
import { Medal, BookOpen, Anchor, ListChecks, Flag, Dumbbell, Award } from 'lucide-react';

interface UnitIconProps {
  name: 'medal' | 'book' | 'anchor' | 'checklist' | 'flag' | 'dumbbell';
  className?: string;
}

export const UnitIcon: React.FC<UnitIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'medal':
      return <Medal className={className} />;
    case 'book':
      return <BookOpen className={className} />;
    case 'anchor':
      return <Anchor className={className} />;
    case 'checklist':
      return <ListChecks className={className} />;
    case 'flag':
      return <Flag className={className} />;
    case 'dumbbell':
      return <Dumbbell className={className} />;
    default:
      return <Award className={className} />;
  }
};

export const getAlternatingCardBg = (index: number): string => {
  const pattern = [
    'bg-slate-100 border-slate-300 hover:border-slate-400 text-slate-900', // Light Gray
    'bg-sky-100/80 border-sky-300 hover:border-sky-400 text-slate-900',     // Light Blue
    'bg-amber-100/70 border-amber-300 hover:border-amber-400 text-slate-900', // Light Yellow
  ];
  return pattern[index % 3];
};
