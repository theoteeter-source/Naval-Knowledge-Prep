import React from 'react';
import { Menu, BookOpen, Layers, Edit3, BarChart2, X, Shield } from 'lucide-react';
import { MainSection } from '../types';
import { NROTCLogo } from './NROTCLogo';

interface HeaderProps {
  sectionTitle: string;
  onOpenDrawer: () => void;
  rightAction?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ sectionTitle, onOpenDrawer, rightAction }) => {
  return (
    <header className="bg-slate-900 border-b border-amber-600/30 text-white sticky top-0 z-30 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            id="drawer-toggle-btn"
            onClick={onOpenDrawer}
            className="p-2 rounded-md hover:bg-slate-800 text-amber-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500 transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-3">
            <NROTCLogo size={34} className="w-8 h-8 shrink-0" />
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <span>{sectionTitle}</span>
              </h1>
              <p className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold leading-tight">
                Naval Knowledge Prep
              </p>
            </div>
          </div>
        </div>

        {rightAction && <div className="flex items-center gap-2">{rightAction}</div>}
      </div>
    </header>
  );
};

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: MainSection;
  onSelectSection: (section: MainSection) => void;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  activeSection,
  onSelectSection,
}) => {
  const menuItems: { id: MainSection; label: string; icon: React.ReactNode }[] = [
    {
      id: 'syllabus',
      label: 'Syllabus',
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: 'flashcards',
      label: 'Flashcards',
      icon: <Layers className="w-5 h-5" />,
    },
    {
      id: 'tests',
      label: 'Tests',
      icon: <Edit3 className="w-5 h-5" />,
    },
    {
      id: 'progress',
      label: 'User Progress',
      icon: <BarChart2 className="w-5 h-5" />,
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Body */}
      <div className="relative w-72 max-w-[80vw] bg-slate-900 text-white flex flex-col h-full shadow-2xl border-r border-amber-600/30 z-10 animate-in slide-in-from-left duration-200">
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <NROTCLogo size={36} className="w-9 h-9" />
            <div>
              <h2 className="font-bold text-sm text-white tracking-wide">NAVAL KNOWLEDGE</h2>
              <p className="text-[10px] text-amber-400 font-semibold tracking-wider uppercase">NROTC / NSI PREP</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="p-3 space-y-1.5 flex-1">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`drawer-nav-${item.id}`}
                onClick={() => {
                  onSelectSection(item.id);
                  onClose();
                }}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-semibold transition-all text-left ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                    : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <span className={isActive ? 'text-slate-950' : 'text-amber-400'}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950/60 text-xs text-slate-400 flex items-center gap-2">
          <Shield className="w-4 h-4 text-amber-500 shrink-0" />
          <span>Offline gouge tool for Navy ROTC candidates</span>
        </div>
      </div>
    </div>
  );
};
