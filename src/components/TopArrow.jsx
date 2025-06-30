// src/components/TopArrow.jsx
import React from 'react';

const TopArrow = ({ targetSectionId }) => (
  <div
    className="hidden sm:block absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 opacity-70 animate-bounce cursor-pointer"
    onClick={() => {
      if (targetSectionId) {
        document.getElementById(targetSectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white rotate-180"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
);

export default TopArrow;
