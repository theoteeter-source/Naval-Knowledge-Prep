import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Plus, Trash2, RotateCw, RefreshCw, X } from 'lucide-react';
import { Flashcard, Unit } from '../types';
import { FLASHCARDS } from '../data/flashcardsData';
import { UnitIcon } from './UnitIcon';

interface FlashcardDeckViewProps {
  unit: Unit;
  hiddenCardIds: string[];
  customCards: Flashcard[];
  onBack: () => void;
  onAddCard: (card: Flashcard) => void;
  onRemoveCard: (card: Flashcard) => void;
  onRestoreDefaultCards?: () => void;
}

export const FlashcardDeckView: React.FC<FlashcardDeckViewProps> = ({
  unit,
  hiddenCardIds,
  customCards,
  onBack,
  onAddCard,
  onRemoveCard,
}) => {
  // Build active deck
  const [deck, setDeck] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  // Add Card form state
  const [customQuestion, setCustomQuestion] = useState('');
  const [customAnswer, setCustomAnswer] = useState('');

  // Touch gesture support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Initialize and shuffle deck for this session
  useEffect(() => {
    const defaultCards = FLASHCARDS.filter(
      (c) => c.unitId === unit.id && !hiddenCardIds.includes(c.id)
    );
    const unitCustom = customCards.filter((c) => c.unitId === unit.id);
    const combined = [...defaultCards, ...unitCustom];

    // Shuffle at the start of each session
    const shuffled = [...combined].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [unit.id, hiddenCardIds, customCards]);

  const handleNext = () => {
    if (deck.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % deck.length);
  };

  const handlePrev = () => {
    if (deck.length === 0) return;
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + deck.length) % deck.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setDeck((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
  };

  const handleRemoveCurrent = () => {
    if (deck.length === 0) return;
    const cardToRemove = deck[currentIndex];
    onRemoveCard(cardToRemove);

    // Update local active deck
    const updated = deck.filter((_, idx) => idx !== currentIndex);
    setDeck(updated);
    setIsFlipped(false);
    if (currentIndex >= updated.length && updated.length > 0) {
      setCurrentIndex(updated.length - 1);
    }
  };

  const handleSaveCustomCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim() || !customAnswer.trim()) return;

    const newCard: Flashcard = {
      id: `custom_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      unitId: unit.id,
      front: customQuestion.trim(),
      back: customAnswer.trim(),
      isCustom: true,
    };

    onAddCard(newCard);
    setDeck((prev) => [newCard, ...prev]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setCustomQuestion('');
    setCustomAnswer('');
    setShowAddModal(false);
  };

  // Touch handlers for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      // Swiped left -> next
      handleNext();
    } else if (diff < -minSwipeDistance) {
      // Swiped right -> prev
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentCard = deck[currentIndex];

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
        <button
          onClick={onBack}
          className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Decks
        </button>
        <button
          onClick={handleShuffle}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-md transition-colors"
          title="Shuffle Deck"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>Shuffle</span>
        </button>
      </div>

      {/* Unit Title Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-slate-900 text-amber-400 rounded-md">
            <UnitIcon name={unit.iconName} className="w-4 h-4" />
          </div>
          <h2 className="text-base font-bold text-slate-900">{unit.name} Flashcards</h2>
        </div>
        {deck.length > 0 && (
          <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            Card {currentIndex + 1} of {deck.length}
          </span>
        )}
      </div>

      {deck.length === 0 ? (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-xs my-8">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
            <RefreshCw className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800 mb-1">Deck is Empty</h3>
          <p className="text-xs text-slate-500 mb-6">
            All cards in this deck have been removed or no custom cards exist yet.
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-amber-400 font-bold text-xs rounded-lg shadow-sm hover:bg-slate-800 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Custom Card</span>
          </button>
        </div>
      ) : (
        /* Interactive Flashcard */
        <div>
          <div
            id="flashcard-interactive-box"
            onClick={() => setIsFlipped(!isFlipped)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="cursor-pointer select-none perspective-1000 my-4"
          >
            <div
              className={`relative min-h-[300px] md:min-h-[340px] w-full rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-transform duration-500 transform-style-3d shadow-md border ${
                isFlipped
                  ? 'bg-slate-900 border-amber-600/40 text-white'
                  : 'bg-white border-slate-300 text-slate-900'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <span
                  className={`text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded ${
                    isFlipped ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {isFlipped ? 'Answer' : 'Question'}
                </span>
                {currentCard.isCustom && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-400/30 text-amber-500 px-2 py-0.5 rounded">
                    Custom Card
                  </span>
                )}
                <span className="text-xs font-medium text-slate-400">Tap to flip</span>
              </div>

              {/* Card Center Content */}
              <div className="my-auto py-6 text-center flex items-center justify-center">
                <p
                  className={`text-lg md:text-xl font-bold leading-relaxed ${
                    isFlipped ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {isFlipped ? currentCard.back : currentCard.front}
                </p>
              </div>

              {/* Card Footer Hint */}
              <div className="text-center">
                <p
                  className={`text-xs font-semibold ${
                    isFlipped ? 'text-amber-400/80' : 'text-slate-400'
                  }`}
                >
                  {isFlipped ? 'Tap to view question' : 'Tap to reveal answer'}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between gap-4 mt-4">
            <button
              id="flashcard-prev-btn"
              onClick={handlePrev}
              className="flex-1 py-3 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-all active:scale-98"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <button
              id="flashcard-next-btn"
              onClick={handleNext}
              className="flex-1 py-3 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-all active:scale-98"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Deck Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-200">
            <button
              id="flashcard-add-btn"
              onClick={() => setShowAddModal(true)}
              className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Card</span>
            </button>

            <button
              id="flashcard-remove-btn"
              onClick={handleRemoveCurrent}
              className="py-3 px-4 rounded-xl border border-rose-300 bg-rose-50/70 hover:bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              <span>Remove Card</span>
            </button>
          </div>
        </div>
      )}

      {/* Add Custom Card Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">Add Custom Flashcard</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCustomCard} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Card Front (Question)
                </label>
                <textarea
                  id="custom-card-front-input"
                  required
                  rows={3}
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                  placeholder="e.g. What is the 5th General Order of a Sentry?"
                  className="w-full p-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm text-slate-900 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Card Back (Answer)
                </label>
                <textarea
                  id="custom-card-back-input"
                  required
                  rows={3}
                  value={customAnswer}
                  onChange={(e) => setCustomAnswer(e.target.value)}
                  placeholder="e.g. To quit my post only when properly relieved"
                  className="w-full p-3 rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm text-slate-900 font-medium"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  id="custom-card-save-btn"
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs rounded-lg shadow-sm transition-colors"
                >
                  Save Card
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
