// src/sections/ShortStories.jsx

import React, { useState } from 'react';
import { Feather, X } from 'lucide-react';
import { motion } from 'framer-motion';

const stories = [
  {
    title: 'הלמה החלומית',
    image: '/stories/story1.jpg',
    file: '/stories/lema.txt',
  },
  {
    title: 'וידויו של מכור לעבודה זרה ',
    image: '/stories/story2.jpg',
    file: '/stories/idol.txt',
  },
  {
    title: 'מעשה ממובטל',
    image: '/stories/story3.jpg',
    file: '/stories/movtal.txt',
  },
  {
    title: 'ערוץ הפסטיבל',
    image: '/stories/story4.jpg',
    file: '/stories/festival.txt',
  },
];

function ShortStories() {
  const [modalOpen, setModalOpen] = useState(false);
  const [storyText, setStoryText] = useState('');
  const [storyTitle, setStoryTitle] = useState('');

  const openStory = async (story) => {
    if (story.file) {
      try {
        const response = await fetch(story.file);
        const text = await response.text();
        setStoryText(text);
        setStoryTitle(story.title);
        setModalOpen(true);
      } catch (error) {
        console.error('Error loading story:', error);
      }
    } else if (story.link) {
      window.open(story.link, '_blank');
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setStoryText('');
    setStoryTitle('');
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-0 text-right overflow-hidden">
      {/* Title with Icon */}
      <div className="flex items-center space-x-2 text-gray-100 mb-6">
        <Feather size={26} className="relative -top-1 -right-2" />
        <span className="text-2xl sm:text-4xl font-bold text-white">סיפורים קצרים</span>
      </div>

      {/* Responsive Grid of Story Boxes */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl"
      >
        {stories.map((story, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => openStory(story)}
            className="relative cursor-pointer rounded-xl overflow-hidden h-40 sm:h-48 md:h-56 group"
          >
            <img
              src={story.image}
              alt={story.title}
              className="absolute inset-0 w-full h-full object-cover filter brightness-50 group-hover:brightness-75 transition duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center px-2 text-center">
              <span className="text-white text-lg sm:text-xl font-bold drop-shadow-lg">
                {story.title}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Popup */}
{modalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-start p-4 sm:p-8 overflow-y-auto text-white">
    {/* Header */}
    <div className="w-full flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">{storyTitle}</h2>
      <button onClick={closeModal} className="text-white hover:text-red-500 transition">
        <X size={32} />
      </button>
    </div>

    {/* Story Content */}
    <div className="whitespace-pre-wrap text-base leading-loose max-w-4xl w-full">
      {storyText}
    </div>

    {/* Footer Close Button */}
    <div className="w-full flex justify-center mt-8">
      <button
        onClick={closeModal}
        className="flex items-center space-x-2 border border-gray-500 rounded-full px-4 py-2 hover:bg-red-600 hover:border-red-600 transition"
      >
        <X size={20} />
        <span>סגור</span>
      </button>
    </div>
  </div>
)}

    </div>
  );
}

export default ShortStories;
