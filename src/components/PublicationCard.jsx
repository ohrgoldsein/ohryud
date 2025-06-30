// src/components/PublicationCard.jsx
import React from 'react';

function PublicationCard({ image, title, articles = [], blogUrl }) {
  return (
<div className="w-full bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform">
      {/* Round Image */}
<div
  className="flex justify-center pt-6 cursor-pointer"
  onClick={() => window.open(blogUrl, '_blank')}
>
  <img
    src={image}
    alt={title}
    className="w-16 h-16 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-[#333] filter brightness-75 contrast-125 sepia-[0.4] grayscale-[0.3] shadow-md hover:brightness-110 transition duration-300"
  />
</div>

      {/* Title & Article List */}
      <div className="p-3 text-gray-200">
        <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
          {articles.map(({ title, url }, idx) => (
            <li key={idx}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PublicationCard;
