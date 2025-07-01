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
      { title: 'חגיגת חג המולד של היהודים ', url: 'https://ohris.wordpress.com/2024/12/15/nitel_nacht/' },
      { title: 'ניתוח תיאולוגי פשוט של  הומוסקסואליות', url: 'https://ohris.wordpress.com/2021/04/18/lgbt/' },
      { title: 'יוצרות ליום פאי', url: 'https://ohris.wordpress.com/2016/03/14/%d7%99%d7%95%d7%a6%d7%a8%d7%95%d7%aa-%d7%9c%d7%99%d7%95%d7%9d-%d7%a4%d7%90%d7%99/' },
      { title: 'איך היהודים רצחו את השטן', url: 'https://ohris.wordpress.com/2015/06/03/kill-the-devil/' },
      { title: 'עמוד מעורער -  מחלוקות שלא לשם שמיים ', url: 'https://ohris.wordpress.com/2014/04/23/%d7%a2%d7%9e%d7%95%d7%93%d7%99%d7%9d-%d7%9e%d7%a2%d7%95%d7%a8%d7%a2%d7%a8%d7%99%d7%9d-%d7%9e%d7%97%d7%9c%d7%95%d7%a7%d7%95%d7%aa-%d7%a9%d7%9c%d7%90-%d7%9c%d7%a9%d7%9d-%d7%a9%d7%9e%d7%99/' },
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

  return (
    <div className="w-full flex flex-col items-center justify-center text-right overflow-hidden relative">
      <div className="flex items-center space-x-2 mb-4 text-gray-100">
        <BookOpen size={28} className="relative -top-2 -right-2 " />
        <span className="text-2xl sm:text-4xl font-bold mb-4 text-white">פרסומים</span>
      </div>

      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" 
        >
          {publications.map((pub, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-full max-w-[320px] mx-auto"
            >
              <PublicationCard {...pub} />
            </motion.div>
          ))}
        </motion.div>
      </div>


    </div>
  );
}

export default Publications;
