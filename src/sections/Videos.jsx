// src/sections/Videos.jsx
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Youtube } from 'lucide-react';

const videos = [
  {
    id: 'video1',
    youtubeId: '159GZmCCs8M',
    description: 'וידאו מס׳ 1 – רעיונות וחזון',
  },
  {
    id: 'video2',
    youtubeId: '7VBOb3oEA8w',
    description: 'וידאו מס׳ 2 – מסע אישי',
  },
  {
    id: 'video3',
    youtubeId: '3rXZflCwu2o',
    description: 'וידאו מס׳ 3 – מחשבות על כתיבה',
  },
  {
    id: 'video4',
    youtubeId: 'He2oNQRp5uo',
    description: 'וידאו מס׳ 4 – שיחה עם הקהל',
  },
  {
    id: 'video5',
    youtubeId: 'zJcNh5g_w6E',
    description: 'וידאו מס׳ 5 – הגות וזמן',
  },
];

const Videos = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-4 text-right overflow-hidden relative">
      <div className="flex items-center space-x-2 text-gray-100 space-y-0">
        <Youtube size={38} className="relative top-0 -right-2"/>
        <span className="text-2xl sm:text-4xl font-bold mb-4 text-white">ספריית הווידאו</span>
      </div>

      <div className="relative w-full flex items-center justify-center">
        {/* Arrows */}
        <button
          onClick={() => scroll('right')}
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll('left')}
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-2"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Video list */}
        <div
          ref={scrollRef}
          className="flex gap-[0px] overflow-x-auto snap-x snap-mandatory px-1 -py-2 hide-scrollbar"
          dir="rtl"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="transform scale-[0.7] min-w-[250px] flex-shrink-0 snap-center bg-[#1f1f1f] rounded-2xl overflow-hidden shadow-md shadow-black/40 transition-transform duration-300"
            >
              <div className="w-full aspect-[9/16]">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={`YouTube video ${video.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
