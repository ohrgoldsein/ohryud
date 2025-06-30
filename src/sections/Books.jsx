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

  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-6 py-4 text-right overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4 text-gray-100">
        <Book size={32} className="relative -top-2 -right-2"/>
        <span className="text-4xl font-bold mb-4 text-white">הספרים שלי</span>
      </div>

      {/* Scrollable container with arrows */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 z-10 bg-[#1f1f1f] hover:bg-[#2c2c2c] text-white p-2 rounded-full shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable books row */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto whitespace-nowrap px-10 py-4 scrollbar-hide"
        >
          <div className="flex space-x-4">
            <BookCard
              image="/covers/book1.png"
              title="נקודת האמת"
              description="הרבי מקוצק, 'הילד הרע' של החסידות, מוצג לראשונה באור בין-תחומי. הספר עוקב אחרי שמונה פרסונות שונות של הקוצקאי נוכח האגדות עליו, ומראה כי דמותו המיתולוגית מכילה צדיק למדן, אירוניקן משתובב, פילוסוף ספקן וגורו שתקן."
              buttonText="לרכישה"
              buttonDisabled={false}
              link="https://www.magnespress.co.il/"
            />
            <div></div>
            <BookCard
              image="/covers/book2.png"
              title="אוהב חוכמה"
              description="דרוש באורך מלא על מגילת קהלת על דרך הפילוסופיה והסוד הקבלי. ניתוח אנליטי-תורני של דבריו האניגמטיים של שלמה המלך, לנוכח עקרונות הפילוסופיה העכשווית."
              buttonText="לרכישה"
              buttonDisabled={false}
              link="https://your-purchase-link.com/book1"
            />
            <BookCard
              image="/covers/book3.JPG"
              title="עופר האילים"
              description="פרשנות תיאטרלית על מגילת שיר השירים. ביאור תיאולוגי-תורני של משל האהובים בנוסח מדרשי חכמים."
              buttonText="בקרוב מאוד!"
              buttonDisabled={true}
              link="https://your-purchase-link.com/book1"
            />
            <BookCard
              image="/covers/book4.JPG"
              title="מעשה מעולם עליון"
              description="רומן בלשי העוסק בשאלות הגדולות ביותר. מי שולט בכול? האם יש לי בחירה? מהי אמונה? מה חשוב בחיים? טרם פורסם."
              buttonText="בקרוב מאוד!"
              buttonDisabled={true}
              link="https://your-purchase-link.com/book1"
            />
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 z-10 bg-[#1f1f1f] hover:bg-[#2c2c2c] text-white p-2 rounded-full shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default Books;
