// src/sections/Lectures.jsx
import React from 'react';
import { Mic } from 'lucide-react';
import LectureCard from '../components/LectureCard';
import { motion } from 'framer-motion';

const lectures = [
  {
    image: '/lectures/lecture1.jpg',
    title: 'מתי הם יחליפו אותנו?',
    description:
      'ההיסטוריה של הבינה המלאכותית במבט פילוסופי וספרותי. איפה בינה מלאכותית מוזכרת בתלמוד? האם ניתן להוכיח שכוחה של מכונה מוגבל? האם סופנו קרב? הרצאה שתשאיר אתכם עם הרהורים עמוקים לזמן רב.',
  },
  {
    image: '/lectures/lecture2.jpg',
    title: 'קטורת או סמים?',
    description:
      'הקשר המפתיע למדי של היהדות והיהודים עם צמח הקנאביס. האם השתמשו בו במקדש? מה עישן הבעל-שם-טוב? סיפורים משני תודעה ממזרח וממערב. לא לסטלנים בלבד!',
  },
  {
    image: '/lectures/lecture3.jpg',
    title: 'החצר האחורית',
    description:
      'שעת סיפור חסידי קצת אחרת. מה עשה האדמו"ר מויז\'ניץ במלחמת העצמאות? האם הרבי מקוצק כיבה את נרות השבת? ומה גילה מנהיג חב"ד לפרויד על ספת הפסיכולוג? מעשיות לא קדושות מעולמה של החסידות.',
  },
  // Add more lectures as needed
];

function Lectures() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-4 text-right overflow-hidden">
      {/* Title with Icon */}
      <div className="flex items-center space-x-2 text-gray-100">
        <Mic size={28} className="relative -top-2 -right-2" />
        <span className="text-2xl sm:text-4xl font-bold mb-4 text-white">הרצאות</span>
      </div>

      {/* Responsive Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        {lectures.map((lecture, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <LectureCard {...lecture} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Lectures;
