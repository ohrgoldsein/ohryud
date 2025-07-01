import React from 'react';
import { Feather } from 'lucide-react';
import { motion } from 'framer-motion';

const stories = [
  {
    title: 'הלמה החלומית',
    image: '/stories/story1.jpg',
    link: '/stories/bird-in-coop',
  },
  {
    title: 'וידויו של מכור לעבודה זרה ',
    image: '/stories/story2.jpg',
    link: 'https://ohris.wordpress.com/2024/09/04/idols/',
  },
  {
    title: 'מעשה ממובטל',
    image: '/stories/story3.jpg',
    link: 'https://ohris.wordpress.com/2024/09/22/unemployed/',
  },
    {
    title: 'ערוץ הפסטיבל',
    image: '/stories/story4.jpg',
    link: 'https://ohris.wordpress.com/2024/09/16/romania_folk/',
  },
];

function ShortStories() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-4 text-right overflow-hidden">
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
            onClick={() => window.open(story.link, '_blank')}
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
    </div>
  );
}

export default ShortStories;
