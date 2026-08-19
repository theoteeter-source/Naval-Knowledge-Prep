import React from 'react';

interface NROTCLogoProps {
  className?: string;
  size?: number;
}

export const NROTCLogo: React.FC<NROTCLogoProps> = ({ className = 'w-10 h-10', size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="NROTC Anchor and Trident Logo"
    >
      <circle cx="50" cy="50" r="46" fill="#0A192F" stroke="#C5A059" strokeWidth="3" />
      <circle cx="50" cy="50" r="41" fill="none" stroke="#C5A059" strokeWidth="1" strokeDasharray="2 2" />

      {/* Trident & Anchor Composite */}
      {/* Anchor Ring at top */}
      <circle cx="50" cy="22" r="5.5" stroke="#C5A059" strokeWidth="2.5" fill="none" />
      <rect x="36" y="27.5" width="28" height="3" rx="1.5" fill="#C5A059" />

      {/* Trident Center Prongs */}
      <path
        d="M50 12 L52.5 17 L50.5 17 L50.5 28 L49.5 28 L49.5 17 L47.5 17 Z"
        fill="#C5A059"
      />
      {/* Trident Left Prong */}
      <path
        d="M40 16 C40 22 47 24 47 27 L45 27 C44 24 38 22 38 17 L36 17 L39 12 L42 17 Z"
        fill="#C5A059"
      />
      {/* Trident Right Prong */}
      <path
        d="M60 16 C60 22 53 24 53 27 L55 27 C56 24 62 22 62 17 L64 17 L61 12 L58 17 Z"
        fill="#C5A059"
      />

      {/* Main Anchor Shaft */}
      <rect x="48" y="28" width="4" height="42" fill="#C5A059" />

      {/* Fouled Rope / Chain around shaft */}
      <path
        d="M45 32 C55 35 55 40 45 44 C55 48 55 53 45 57 C55 61 55 66 47 70"
        stroke="#E5C158"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Anchor Flukes / Base Arc */}
      <path
        d="M25 56 C25 76 75 76 75 56"
        stroke="#C5A059"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left Fluke Tip */}
      <polygon points="21,58 27,53 29,61" fill="#C5A059" />
      {/* Right Fluke Tip */}
      <polygon points="79,58 73,53 71,61" fill="#C5A059" />

      {/* Anchor Base Crown */}
      <circle cx="50" cy="71" r="3.5" fill="#C5A059" />
    </svg>
  );
};
