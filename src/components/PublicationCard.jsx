// src/components/PublicationCard.jsx
import React from 'react';

function PublicationCard({ image, title, articles = [], blogUrl }) {
  return (
    <div className="w-80 bg-[#1e1e1e] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-transform">
      {/* Round Image */}
<div
  className="flex justify-center pt-6 cursor-pointer"
  onClick={() => window.open(blogUrl, '_blank')}
>
  <img
    src={image}
    alt={title}
    className="w-48 h-48 rounded-full object-cover border-4 border-[#333] shadow-md hover:brightness-110 transition duration-300"
  />
</div>

      {/* Title & Article List */}
      <div className="p-4 text-gray-200 space-y-2">
        <h3 className="text-xl font-semibold text-center">{title}</h3>
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
