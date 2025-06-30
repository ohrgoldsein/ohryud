// src/sections/Biography.jsx
import React from 'react';
import myPhoto from '../assets/me.jpeg'; // Place your image in src/assets/me.jpg
import DownArrow from '../components/DownArrow';
import { Quote } from 'lucide-react';

const Biography = () => {
  return (
    <div className="flex flex-col md:flex-row h-full items-center justify-center gap-12">
      <div className="max-w-xl text-right space-y-4">
        <div className="flex items-center space-x-2 justify-end">
          <Quote className="w-6 h-6 text-gray-400" />
          <p className="text-xl font-semibold text-gray-200">לְלֹא קֶשֶׁר לְאֹרֶךְ הַחַיִּים עַל הַקּוֹרוֹת לִהְיוֹת קְצָרוֹת. (ו. שימבורסקה)</p>
        </div>
        <h2 className="text-2xl font-bold text-gray-100">ד"ר אור י. גולדשטיין</h2>
        <p className="text-gray-300 leading-relaxed">
חוקר, סופר ואיש תוכנה.
<br/>
מתעניין בתנועת החסידות, כשלים אפיסטמולוגיים וזרמים אנטי-נומיסטיים.
<br/>
בעל תארים בהצטיינות בהנדסה (B.Sc הטכניון),
<br/>
פילוסופיה (M.A אוניברסיטת חיפה) וספרות (Ph.D אוניברסיטת בר-אילן).
<br/>
מאמין בכוחם של ניגון וטיעון להפוך את הלב.
<br/>
תמיד בעיצומו של מסע, ותמיד בעד ללמוד עוד.
        </p>
      </div>

      <div className="w-64 h-80 overflow-hidden rounded-2xl shadow-lg shadow-black/40">
        <img
          src={myPhoto}
          alt="My portrait"
          className="w-full h-full object-cover filter grayscale contrast-125 sepia-[0.2] brightness-90"
        />
      </div>
    </div>
  );
};

export default Biography;

