// src/components/Topbar.jsx

import React from 'react';
import { Menu } from 'lucide-react'; // Optional, could be hidden or used for mobile menu

const Topbar = () => {
  const sections = [
    { id: 'biography', label: 'ביוגרפיה' },
    { id: 'books', label: 'הספרים שלי' },
    { id: 'videos', label: 'וידאו' },
    { id: 'publications', label: 'פרסומים' },
    { id: 'lectures', label: 'הרצאות' },
    { id: 'contact', label: 'צור קשר' },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-[#141414] text-gray-100 shadow-lg font-tinos px-6 py-4 backdrop-blur-sm bg-opacity-90">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Optional logo or icon on the left */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:text-white hover:drop-shadow-[0_0_4px_#ffffff]"
          onClick={() => {
            document.getElementById('title_section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <Menu className="text-gray-400" />
          <span className="text-xl font-bold hidden sm:block">ראשי</span>
        </div>


        {/* Navigation links */}
        <ul className="flex space-x-6 rtl:space-x-reverse text-lg">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                  onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                className="hover:text-white hover:drop-shadow-[0_0_4px_#ffffff]"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
