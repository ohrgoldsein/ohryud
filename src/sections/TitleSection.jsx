// src/sections/TitleSection.jsx
import React from 'react';
import DownArrow from '../components/DownArrow';

const TitleSection = () => {
  return (
    <section
      id="title"
      className="snap-start h-screen relative bg-cover bg-center bg-no-repeat m-0 p-0"
      style={{ backgroundImage: "url('/ardon.jpg')" }}
    >
      {/* Overlay filter */}
      <div className="absolute inset-0 bg-black/60 backdrop-brightness-50" />

      {/* Centered name + subtitle */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center tinos-bold">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">אור י. גולדשטיין</h1>
        <h2 className="text-2xl md:text-3xl font-light">פילוסופיה ✶ חסידות ✶ טכנולוגיה</h2>
      </div>
    
    <DownArrow nextSectionId="biography"/>

    </section>
  );
};


export default TitleSection;