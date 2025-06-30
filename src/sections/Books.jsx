// src/sections/Books.jsx
import React, { useRef } from 'react';
import BookCard from '../components/BookCard';
import { Book, ChevronRight, ChevronLeft } from 'lucide-react';

function Books() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const books = [
    {
      image: "/covers/book1.png",
      title: "נקודת האמת",
              description:"הרבי מקוצק, 'הילד הרע' של החסידות, מוצג לראשונה באור בין-תחומי. הספר עוקב אחרי שמונה פרסונות שונות של הקוצקאי נוכח האגדות עליו, ומראה כי דמותו המיתולוגית מכילה צדיק למדן, אירוניקן משתובב, פילוסוף ספקן וגורו שתקן.",
      buttonText: "לרכישה",
      buttonDisabled: false,
      link: "https://www.magnespress.co.il/",
    },
    {
      image: "/covers/book2.png",
      title: "אוהב חוכמה",
              description:"דרוש באורך מלא על מגילת קהלת על דרך הפילוסופיה והסוד הקבלי. ניתוח אנליטי-תורני של דבריו האניגמטיים של שלמה המלך, לנוכח עקרונות הפילוסופיה העכשווית.",
      buttonText: "לרכישה",
      buttonDisabled: false,
      link: "https://your-purchase-link.com/book1",
    },
    {
      image: "/covers/book3.JPG",
      title: "עופר האילים",
              description:"פרשנות תיאטרלית על מגילת שיר השירים. ביאור תיאולוגי-תורני של משל האהובים בנוסח מדרשי חכמים.",
      buttonText: "בקרוב מאוד!",
      buttonDisabled: true,
      link: "https://your-purchase-link.com/book1",
    },
    {
      image: "/covers/book4.JPG",
      title: "מעשה מעולם עליון",
              description:"רומן בלשי העוסק בשאלות הגדולות ביותר. מי שולט בכול? האם יש לי בחירה? מהי אמונה? מה חשוב בחיים? טרם פורסם.",
      buttonText: "בקרוב מאוד!",
      buttonDisabled: true,
      link: "https://your-purchase-link.com/book1",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-4 text-right overflow-hidden">
      {/* Header */}
      <div className="flex items-center space-x-2 text-gray-100">
        <Book size={32} className="relative -top-2 -right-2" />
        <span className="text-2xl sm:text-4xl font-bold mb-4 text-white">הספרים שלי</span>
      </div>

      {/* Responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </div>
  );
}

export default Books;