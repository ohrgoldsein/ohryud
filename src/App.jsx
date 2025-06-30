// src/App.jsx

import React from 'react';
import Topbar from './components/Topbar';
import TitleSection from './sections/TitleSection';
import Biography from './sections/Biography';
import Books from './sections/Books';
import Videos from './sections/Videos';
import Contact from './sections/Contact';
import DownArrow from './components/DownArrow';
import Lectures from './sections/Lectures';
import Publications from './sections/Publications';

function App() {
  return (
    <div dir="rtl" className="scroll-smooth flex min-h-screen bg-[#0f0f0f] text-gray-200 tinos-regular">
      <Topbar />
      <main className="flex-1 pl-0 pr-14 space-y-0 h-screen overflow-y-scroll snap-y snap-mandatory sm:snap-none md:snap-y">
        <div className="h-full">
          {/* Title Section: already full screen */}
          <section id="title_section" className="snap-start h-screen">
            <TitleSection />
          </section>

          {/* Dark-themed sections */}
          <section
            id="biography"
            className="relative scroll-mt-20 snap-start h-screen bg-[#1a1a1a] p-6 text-gray-300 border-t border-gray-800 transition-colors duration-500 ease-in-out"
          >
            <Biography />
            <DownArrow nextSectionId="books" />

          </section>
          <section
            id="books"
            className="relative scroll-mt-20 snap-start h-screen bg-[#121212] p-6 text-gray-300 border-t border-gray-800 transition-colors duration-500 ease-in-out"
          >
            <Books />
            <DownArrow nextSectionId="videos" />
          </section>
          <section
            id="videos"
            className="relative scroll-mt-20 snap-start h-screen bg-[#1a1a1a] p-6 text-gray-300 border-t border-gray-800 transition-colors duration-500 ease-in-out"
          >
            <Videos />
            <DownArrow nextSectionId="publications" />
          </section>
          <section
            id="publications"
            className="relative scroll-mt-20 snap-start h-screen bg-[#1a1a1a] p-6 text-gray-300 border-t border-gray-800 transition-colors duration-500 ease-in-out"
          >
            <Publications />
            <DownArrow nextSectionId="lectures" />
          </section>
          <section
          id="lectures"
          className="relative scroll-mt-20 snap-start h-screen bg-[#121212] p-6 text-gray-300 border-t border-gray-800 transition-colors duration-500 ease-in-out"
        >
          <Lectures />
          <DownArrow nextSectionId="contact" />
        </section>

          <section
            id="contact"
            className="relative scroll-mt-20 snap-start h-screen bg-[#121212] p-6 text-gray-300 border-t border-gray-800 transition-colors duration-500 ease-in-out"
          >
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
