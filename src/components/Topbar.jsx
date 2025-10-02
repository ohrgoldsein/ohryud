// src/components/Topbar.jsx

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: 'biography', label: 'ביוגרפיה' },
    { id: 'kohelet_book', label: 'הספרים שלי' },
    { id: 'videos', label: 'וידאו' },
    { id: 'short_stories', label: 'סיפורים קצרים' },
    { id: 'publications', label: 'פרסומים' },
    { id: 'lectures', label: 'הרצאות' },
    { id: 'contact', label: 'צור קשר' },
  ];

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // close menu on selection
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-[#141414] text-gray-100 shadow-lg font-tinos px-6 py-4 backdrop-blur-sm bg-opacity-90">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo or home button */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:text-white hover:drop-shadow-[0_0_4px_#ffffff]"
          onClick={() => handleScroll('title_section')}
        >
          <span className="text-xl font-bold hidden sm:block">ראשי</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 rtl:space-x-reverse text-lg">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(s.id);
                }}
                className="hover:text-white hover:drop-shadow-[0_0_4px_#ffffff]"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-2 text-right text-lg bg-[#1f1f1f] rounded-md py-4">
          {sections.map((s) => (
            <div key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(s.id);
                }}
                className="block text-gray-200 hover:text-white py-1"
              >
                {s.label}
              </a>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Topbar;
