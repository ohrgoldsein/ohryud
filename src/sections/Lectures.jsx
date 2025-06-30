// src/sections/Lectures.jsx
import React, { useRef } from 'react';
import { Mic, ChevronLeft, ChevronRight } from 'lucide-react';
import LectureCard from '../components/LectureCard';
import { motion } from 'framer-motion';

const lectures = [
  {
    image: '/lectures/lecture1.jpg',
    title: 'מתי הם יחליפו אותנו?',
    description: 'ההיסטוריה של הבינה המלאכותית במבט פילוסופי וספרותי. איפה בינה מלאכותית מוזכרת בתלמוד? האם ניתן להוכיח שכוחה של מכונה מוגבל? האם סופנו קרב? הרצאה שתשאיר אתכם עם הרהורים עמוקים לזמן רב.',
  },
  {
    image: '/lectures/lecture2.jpg',
    title: 'קטורת או סמים?',
    description: 'הקשר המפתיע למדי של היהדות והיהודים עם צמח הקנאביס. האם השתמשו בו במקדש? מה עישן הבעל-שם-טוב? סיפורים משני תודעה ממזרח וממערב. לא לסטלנים בלבד!',
  },
  {
    image: '/lectures/lecture3.jpg',
    title: 'החצר האחורית',
    description: 'שעת סיפור חסידי קצת אחרת. מה עשה האדמו"ר מויז\'ניץ במלחמת העצמאות? האם הרבי מקוצק כיבה את נרות השבת? ומה גילה מנהיג חב"ד לפרויד על ספת הפסיכולוג? מעשיות לא קדושות מעולמה של החסידות.',
  },
  // Add more lectures as needed
];

function Lectures() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-4 text-right overflow-hidden relative">
      {/* Title with Icon */}
      <div className="flex items-center space-x-2  text-gray-100">
        <Mic size={28} className="relative -top-2 -right-2 " />
        <span className="text-4xl font-bold mb-4 text-white">הרצאות</span>
      </div>

      {/* Scrollable Library with Buttons */}
      <div className="relative w-full max-w-6xl px-6">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#1a1a1a] rounded-full p-2 hover:bg-[#333] transition"
        >
          <ChevronLeft className="text-white" size={28} />
        </button>

        {/* Scrollable Container */}
        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="overflow-x-auto overflow-y-hidden scroll-smooth no-scrollbar"
        >
          <div className="flex space-x-6 rtl:space-x-reverse px-10">
            {lectures.map((lecture, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <LectureCard {...lecture} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#1a1a1a] rounded-full p-2 hover:bg-[#333] transition"
        >
          <ChevronRight className="text-white" size={28} />
        </button>
      </div>
    </div>
  );
}

export default Lectures;
