// src/sections/Publications.jsx
import React, { useRef } from 'react';
import { BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import PublicationCard from '../components/PublicationCard';
import { motion } from 'framer-motion';

const publications = [
  {
    image: '/publications/journal1.JPG',
    title: 'התלמיד הנבוך - הבלוג שלי',
    blogUrl: 'https://ohris.wordpress.com/',
    articles: [
      { title: 'חגיגת חג המולד של היהודים – ה"ניטל-נאכט"', url: 'https://ohris.wordpress.com/2024/12/15/nitel_nacht/' },
      { title: 'וידויו של מכור לעבודה זרה (מעשה בדיוני)', url: 'https://ohris.wordpress.com/2024/09/04/idols/' },
      { title: 'ניתוח תיאולוגי פשוט של הסוגיא ההומוסקסואלית', url: 'https://ohris.wordpress.com/2021/04/18/lgbt/' },
      { title: 'יוצרות ליום פאי', url: 'https://ohris.wordpress.com/2016/03/14/%d7%99%d7%95%d7%a6%d7%a8%d7%95%d7%aa-%d7%9c%d7%99%d7%95%d7%9d-%d7%a4%d7%90%d7%99/' },
      { title: 'איך היהודים רצחו את השטן', url: 'https://ohris.wordpress.com/2015/06/03/kill-the-devil/' },
      { title: 'עמודים מעורערים – מחלוקות שלא לשם שמיים בהלכה', url: 'https://ohris.wordpress.com/2014/04/23/%d7%a2%d7%9e%d7%95%d7%93%d7%99%d7%9d-%d7%9e%d7%a2%d7%95%d7%a8%d7%a2%d7%a8%d7%99%d7%9d-%d7%9e%d7%97%d7%9c%d7%95%d7%a7%d7%95%d7%aa-%d7%a9%d7%9c%d7%90-%d7%9c%d7%a9%d7%9d-%d7%a9%d7%9e%d7%99/' },
      { title: 'איך הגיעה אייץ\' לשם שלי?', url: 'https://ohris.wordpress.com/2013/05/06/h-in-ohr/' },
      { title: 'מדריך הנבוכים לגלקסיה', url: 'https://ohris.wordpress.com/2013/04/09/hg2/' },
      { title: 'תולדות ה"אוי" היהודי', url: 'https://ohris.wordpress.com/2013/12/02/%d7%aa%d7%95%d7%9c%d7%93%d7%95%d7%aa-%d7%94%d7%90%d7%95%d7%99-%d7%94%d7%99%d7%94%d7%95%d7%93%d7%99/' },
    ],
  },
  {
    image: '/publications/journal2.jpg',
    title: 'קרוב אליך - כתבות מרכזיות',
    blogUrl: 'https://ohris.wordpress.com/',
    articles: [
      { title: 'האנטי-רבי מקוצק', url: 'https://ohris.wordpress.com/2014/01/25/%d7%94%d7%90%d7%a0%d7%98%d7%99-%d7%a8%d7%91%d7%99-%d7%9e%d7%a7%d7%95%d7%a6%d7%a7/' },
      { title: 'מסע הקסם המיסתורי עם נ-נח', url: 'https://ohris.wordpress.com/wp-content/uploads/2014/03/nanach.pdf' },
      { title: 'שושן פורים משוגע', url: 'https://ohris.wordpress.com/wp-content/uploads/2016/03/bait-page-001.jpg' },
    ],
  },
  {
    image: '/publications/journal3.jpg',
    title: 'שבתון ',
    blogUrl: 'https://ohris.wordpress.com/',
    articles: [
      { title: 'קינת השבעה באוקטובר', url: 'https://ohris.wordpress.com/wp-content/uploads/2025/06/kina.jpg' },
    ],
  },];

function Publications() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-8">
      {/* Title with Icon */}
      <div className="flex items-center space-x-2 mb-4 text-gray-100">
        <BookOpen size={28} className="relative -top-2 -right-2" />
        <span className="text-4xl font-bold mb-4 text-white">פרסומים</span>
      </div>

      {/* Scrollable Container */}
      <div className="relative w-full max-w-6xl px-6">
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#1a1a1a] rounded-full p-2 hover:bg-[#333] transition">
          <ChevronLeft className="text-white" size={28} />
        </button>

        <motion.div
          ref={scrollRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="overflow-x-auto scroll-smooth no-scrollbar"
        >
          <div className="flex space-x-6 rtl:space-x-reverse px-10">
            {publications.map((pub, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }} className="flex-shrink-0">
                <PublicationCard {...pub} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#1a1a1a] rounded-full p-2 hover:bg-[#333] transition">
          <ChevronRight className="text-white" size={28} />
        </button>
      </div>
    </div>
  );
}

export default Publications;
