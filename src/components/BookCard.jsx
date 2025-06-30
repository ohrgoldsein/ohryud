// src/components/BookCard.jsx
import React from 'react';

function BookCard({ image, title, description, buttonText, buttonDisabled, link }) {
  const handleClick = () => {
    if (!buttonDisabled && link) {
      window.open(link, '_blank');
    }
  };

  return (
<div
  className={`
    relative group cursor-pointer
    w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[360px]
    rounded-2xl overflow-hidden shadow-lg border border-gray-700
  `}
  onClick={handleClick}
>

      {/* Book cover */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition duration-300 group-hover:brightness-50"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent text-gray-100">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-sm mb-3 text-gray-300 whitespace-normal break-words">{description}</p>

        <a
          href={buttonDisabled ? undefined : link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
            if (buttonDisabled) e.preventDefault();
          }}
        >
          <button
            disabled={buttonDisabled}
            className={`w-full py-1.5 px-3 rounded-md text-sm font-semibold transition ${
              buttonDisabled
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-[#2e2e2e] hover:bg-[#444] text-white'
            }`}
          >
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
}


export default BookCard;
