import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Unit } from '../types';
import { UNITS } from '../data/unitsData';
import { FLASHCARDS } from '../data/flashcardsData';
import { UnitIcon, getAlternatingCardBg } from './UnitIcon';

interface FlashcardsViewProps {
  hiddenCardIds: string[];
  customCards: any[];
  onSelectUnit: (unit: Unit) => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  hiddenCardIds,
  customCards,
  onSelectUnit,
}) => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-600">Flashcard Decks</h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Select a unit deck to drill naval gouge flashcards, add custom cards, or remove mastered cards.
        </p>
      </div>

      <div className="space-y-4">
        {UNITS.map((unit, index) => {
          // Count active default cards + custom cards
          const defaultInUnit = FLASHCARDS.filter(
            (c) => c.unitId === unit.id && !hiddenCardIds.includes(c.id)
          ).length;
          const customInUnit = customCards.filter((c) => c.unitId === unit.id).length;
          const totalActiveCards = defaultInUnit + customInUnit;

          return (
            <button
              key={unit.id}
              id={`flashcards-unit-card-${unit.id}`}
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
                      Unit {unit.number} Deck
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 leading-tight">
                    {unit.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 mt-1">
                    {totalActiveCards} {totalActiveCards === 1 ? 'card' : 'cards'} in deck
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
