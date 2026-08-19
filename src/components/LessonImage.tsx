import React, { useState } from 'react';
import { ZoomIn, X, Info } from 'lucide-react';

import navyEnlistedImg from '../assets/images/navy_enlisted_ranks_1786903316314.jpg';
import navyOfficerImg from '../assets/images/navy_officer_ranks_1786903327750.jpg';
import usmcEnlistedImg from '../assets/images/usmc_enlisted_ranks_1786903341394.jpg';
import usmcOfficerImg from '../assets/images/usmc_officer_ranks_1786903352598.jpg';
import mooringFittingsImg from '../assets/images/mooring_fittings_1786903363072.jpg';
import flagFoldingImg from '../assets/images/flag_folding_1786903376296.jpg';
import navalKnotsImg from '../assets/images/naval_knots_1786903395957.jpg';
import navyPrtChartImg from '../assets/images/navy_prt_chart_1786903409137.jpg';
import usmcPftChartImg from '../assets/images/usmc_pft_chart_1786903421505.jpg';

interface LessonImageProps {
  description: string;
  className?: string;
}

interface ImageDetails {
  src: string;
  title: string;
  caption: string;
  badge: string;
  extraTable?: React.ReactNode;
}

export const getImageDetails = (desc: string): ImageDetails => {
  const lower = desc.toLowerCase();

  if (lower.includes('navy enlisted') || lower.includes('e-1 through e-9') && lower.includes('navy')) {
    return {
      src: navyEnlistedImg,
      title: 'U.S. Navy Enlisted Ranks & Insignia (E-1 to E-9)',
      caption: 'Official collar devices, rating badges, and sleeve insignia for Seaman Recruit (E-1) through Master Chief Petty Officer of the Navy (E-9).',
      badge: 'NAVY ENLISTED',
    };
  }

  if (lower.includes('navy officer') || lower.includes('o-1 through o-10') && lower.includes('navy')) {
    return {
      src: navyOfficerImg,
      title: 'U.S. Navy Officer Ranks & Insignia (O-1 to O-10)',
      caption: 'Collar devices, shoulder boards, and gold sleeve lace stripes for Ensign (O-1) through Admiral of the Fleet (O-10).',
      badge: 'NAVY OFFICER',
    };
  }

  if (lower.includes('marine corps enlisted') || lower.includes('usmc enlisted') || lower.includes('marine enlisted')) {
    return {
      src: usmcEnlistedImg,
      title: 'U.S. Marine Corps Enlisted Ranks (E-1 to E-9)',
      caption: 'Scarlet and gold chevrons, crossed rifles NCO insignia, and senior enlisted diamonds, stars, and bursting bombs.',
      badge: 'USMC ENLISTED',
    };
  }

  if (lower.includes('marine corps officer') || lower.includes('usmc officer') || lower.includes('marine officer')) {
    return {
      src: usmcOfficerImg,
      title: 'U.S. Marine Corps Officer Ranks (O-1 to O-10)',
      caption: 'Commissioned officer rank insignia from 2nd Lieutenant (O-1) through General (O-10).',
      badge: 'USMC OFFICER',
    };
  }

  if (
    lower.includes('bollard') ||
    lower.includes('cleat') ||
    lower.includes('bitts') ||
    lower.includes('chock') ||
    lower.includes('pad eye') ||
    lower.includes('mooring')
  ) {
    return {
      src: mooringFittingsImg,
      title: `Deck Mooring Hardware: ${desc}`,
      caption: 'Shipboard and pier mooring fittings used to secure vessels safely alongside piers and quays.',
      badge: 'MOORING HARDWARE',
    };
  }

  if (lower.includes('flag folding') || lower.includes('ensign')) {
    return {
      src: flagFoldingImg,
      title: `National Ensign Folding: ${desc}`,
      caption: 'Official military ceremony flag folding sequence from lengthwise folds to the crisp triangular cocked-hat finish.',
      badge: 'HONORS & CEREMONIES',
    };
  }

  if (
    lower.includes('bowline') ||
    lower.includes('knot') ||
    lower.includes('hitch') ||
    lower.includes('figure 8') ||
    lower.includes('square knot')
  ) {
    return {
      src: navalKnotsImg,
      title: `Nautical Knot Reference: ${desc}`,
      caption: 'Standard marlinespike seamanship knots and hitches required for line handling and boat operations.',
      badge: 'SEAMANSHIP KNOTS',
    };
  }

  if (lower.includes('navy prt') || lower.includes('prt standards')) {
    return {
      src: navyPrtChartImg,
      title: `Navy Physical Readiness Test (PRT) Standards — ${desc.replace(/Navy PRT Standards Chart — /i, '')}`,
      caption: 'Official scoring performance matrix across Push-Ups, Forearm Plank, and the 1.5-Mile Run.',
      badge: 'NAVY PRT STANDARDS',
    };
  }

  if (lower.includes('usmc pft') || lower.includes('pft standards')) {
    return {
      src: usmcPftChartImg,
      title: `USMC Physical Fitness Test (PFT) Standards — ${desc.replace(/USMC PFT Standards Chart — /i, '')}`,
      caption: 'Marine Corps semi-annual PFT scoring standards for Pull-Ups, Push-Ups, Plank, and 3-Mile Run.',
      badge: 'USMC PFT STANDARDS',
    };
  }

  // Generic fallback to naval knots or mooring
  return {
    src: navalKnotsImg,
    title: desc,
    caption: 'Official naval reference illustration.',
    badge: 'NAVAL REFERENCE',
  };
};

export const LessonImage: React.FC<LessonImageProps> = ({ description, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const details = getImageDetails(description);

  return (
    <>
      <figure className={`my-6 rounded-xl overflow-hidden border border-slate-300 bg-slate-50 shadow-sm transition-all hover:shadow-md ${className}`}>
        {/* Image Container with Zoom overlay */}
        <div 
          onClick={() => setIsOpen(true)}
          className="relative group cursor-pointer overflow-hidden bg-slate-950 aspect-video flex items-center justify-center"
        >
          <img
            src={details.src}
            alt={details.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-102"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 text-amber-300 text-xs font-semibold backdrop-blur-xs shadow-lg">
              <ZoomIn className="w-3.5 h-3.5" />
              Click to Enlarge
            </span>
          </div>

          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase bg-slate-900/90 text-amber-400 rounded-md border border-amber-400/30 backdrop-blur-xs shadow-sm">
              {details.badge}
            </span>
          </div>
        </div>

        {/* Caption and Information */}
        <figcaption className="p-3.5 sm:p-4 bg-slate-100/90 border-t border-slate-200">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900">{details.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{details.caption}</p>
            </div>
          </div>
        </figcaption>
      </figure>

      {/* Fullscreen Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 rounded border border-amber-400/30">
                  {details.badge}
                </span>
                <h3 className="text-base font-bold text-white tracking-wide">{details.title}</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="p-4 flex-1 flex items-center justify-center bg-black/60 overflow-auto">
              <img
                src={details.src}
                alt={details.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Footer */}
            <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-950/80 text-xs text-slate-400">
              {details.caption}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
