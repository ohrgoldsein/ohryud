// src/components/LectureCard.jsx
import React from 'react';

function LectureCard({ image, title, description }) {
  return (
<div
  className="w-full max-w-[320px] sm:max-w-[280px] md:max-w-[320px] bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer transition-transform mx-auto"
  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
>
  <div className="h-10 sm:h-36 md:h-48 overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover filter brightness-75 contrast-125 sepia-[0.4] grayscale-[0.3] hover:brightness-100 transition duration-300"
    />
  </div>
  <div className="p-3 text-gray-200 space-y-2">
    <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
</div>

  );
}

export default LectureCard;
