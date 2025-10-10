import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, BookOpen, Crown, Globe, Youtube, Mail, Menu, X } from 'lucide-react';

export default function KoheletPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div dir="rtl" className="font-[Tinos] text-[#1D2D50]">
            {/* Sticky Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#E1C582]/90 backdrop-blur-sm shadow-md flex justify-between items-center px-4 md:px-12 py-8">
                <button
                    onClick={() => window.open("http://textratz.co.il/", "_blank")}
                    className="bg-[#b8860b] text-black font-semibold px-4 py-2 rounded-full hover:bg-[#d4a017] transition-colors text-sm md:text-base"
                >
                    רכישה
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-lg">
                    <a href="#book" className="hover:text-[#b8860b] transition-colors">על הספר</a>
                    <a href="#author" className="hover:text-[#b8860b] transition-colors">על המחבר</a>
                    <a href="#intro" className="hover:text-[#b8860b] transition-colors">מתוך הספר</a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-[#1D2D50]"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-full right-0 w-full bg-[#E1C582] flex flex-col items-center gap-4 py-4 text-lg shadow-lg md:hidden">
                        <a onClick={() => setMenuOpen(false)} href="#book">על הספר</a>
                        <a onClick={() => setMenuOpen(false)} href="#author">על המחבר</a>
                        <a onClick={() => setMenuOpen(false)} href="#intro">מתוך הספר</a>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section id="hero" className="flex flex-col md:flex-row min-h-screen pt-24 md:pt-20">
                {/* Left Section */}
                <div className="flex-1 bg-[#E1C582] flex flex-col justify-center px-6 md:px-16 relative overflow-hidden">
                    <Star className="absolute top-10 left-6 text-[#d4af37] opacity-20 w-8 h-8 md:w-10 md:h-10" />
                    <BookOpen className="absolute bottom-10 right-10 text-[#d4af37] opacity-20 w-10 h-10 md:w-12 md:h-12" />
                    <Crown className="absolute top-1/2 left-1/3 text-[#d4af37] opacity-10 w-16 h-16 md:w-20 md:h-20" />

                    <div className="max-w-xl z-10 text-justify leading-relaxed space-y-4 md:space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8 leading-snug text-right">מגילת קהלת <br /> כפי שלא נראתה <br /> אף פעם.</h1>
                        <p className="text-[#3a3a4a] mb-6 md:mb-10 text-lg md:text-xl leading-loose font-quote italic pl-4">
                            "קריאה חדשה ומעמיקה במגילת קהלת, החושפת מאחורי סתירותיה את ליבת האמונה היהודית.
                            ד"ר אור י. גולדשטיין מציע פרשנות תורנית־הגותית המשלבת פילוסופיה, חסידות וחכמת העמים." (טקסט רץ)
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                            <div className="text-xl text-[#b8860b] text-center sm:text-right">
                                <div className="line-through text-gray-500 text-lg">₪60</div>
                                <div className="text-3xl font-bold">₪45</div>
                            </div>
                            <button
                                onClick={() => window.open("http://textratz.co.il/", "_blank")}
                                className="bg-[#1D2D50] hover:bg-[#133B5C] text-[#f7e7b4] px-8 py-3 md:px-10 md:py-4 rounded-full shadow-2xl text-xl md:text-2xl transition-transform transform hover:scale-105">
                                לרכישה
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex-1 bg-[#0f162e] flex justify-center items-center p-6 md:p-0 relative overflow-hidden">
                    <motion.div
                        initial={{ rotate: 10, y: 40, opacity: 0 }}
                        animate={{ rotate: 10, y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="shadow-[0_0_60px_rgba(184,134,11,0.6)]"
                    >
                        <img
                            src="/covers/book2.jpg"
                            alt="מגילת קהלת"
                            className="w-64 sm:w-80 md:w-[28rem] rounded-lg shadow-[0_0_50px_rgba(184,134,11,0.5)] border-4 border-[#b8860b]"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Section A - The Book */}
            <section id="book" className="flex flex-col md:flex-row min-h-screen">
                <div className="flex-[1] bg-[#1E5F74] flex justify-center items-center p-4 md:p-8">
                    <iframe
                        className="rounded-2xl shadow-lg w-[90%] max-w-[360px] aspect-[9/16]"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Kohelet Video"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="flex-[1.5] bg-[#133B5C] flex flex-col justify-center items-center p-6 md:p-12 text-[#E1C582] text-center">
                    <h2 className="font-quote text-3xl md:text-5xl italic text-[#b8860b] transform -rotate-10 mb-6">
                        על הספר
                    </h2>
                    <div className="text-base md:text-xl leading-loose max-w-xl text-justify space-y-3 md:space-y-4">
                        <p>״ביקשו חכמים לגנוז ספר קהלת מפני שדבריו סותרים זה את זה. ומפני מה לא גנזוהו? מפני שתחילתו דברי תורה וסופו דברי תורה״ (שבת ל, א)</p>
                        <p>התלבטו חכמים בשאלה אם לספר קהלת יש מסר ברור כלשהו או שכולו בניין וסתירה מתמשכים. לאחר עיון הם הסבירו את סודו הנפלא: מהלכו של קהלת כמכלול, מתחילתו ועד סופו, מתאר את ליבת האמונה היהודית.</p>
                        <p>״אוהב חכמה״ מציע פרשנות תורנית־הגותית מעמיקה על מגילת קהלת, תוך כדי התמודדות עם הקשיים הפילוסופיים והתיאולוגיים העולים ממנה. המחבר קורא את ספר קהלת כספר חידות מחשבתיות, מנסה לפצח את הסתירות המהותיות שבו ומציע תשובות מפתיעות לקושיות שהעסיקו את הקוראים במשך דורות.</p>
                        <p>פרשנות זו פונה ישירות אל הפסוקים הסתומים ואל השאלות הנצחיות העולות מדבריו של שלמה המלך, ומגלה כיצד האמונה הדתית השלמה מסתתרת מאחורי גל התהיות והספקות האינסופי. המחבר סומך את דבריו על שלל מאמרי חז״ל, חכמי ימי הביניים והפילוסופים של התקופה המודרנית והעכשווית. בתוך כך, הוא מבין לידי מיזוג מסעיר של עולם הרוח היהודי עם חוכמת האומות.</p>
                    </div>
                </div>
            </section>

            {/* Section B - The Author */}
            <section id="author" className="flex flex-col-reverse md:flex-row min-h-screen">
                <div className="flex-1 bg-[#0f162e] flex justify-center items-center p-6 md:p-8">
                    <img
                        src="/me.png"
                        alt="Author photo"
                        className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover shadow-[0_0_50px_rgba(184,134,11,0.4)] border-4 border-[#b8860b]"
                    />
                </div>
                <div className="flex-1 bg-[#1D2D50] text-[#b8860b] flex flex-col justify-center items-center p-6 md:p-12 text-center">
                    <h2 className="font-quote text-3xl md:text-5xl italic text-[#b8860b] transform -rotate-10 mb-6">
                        על המחבר
                    </h2>
                    <p className="text-lg md:text-2xl max-w-lg leading-loose mb-6 text-justify">
                        ד״ר אור י. גולדשטיין, חוקר פילוסופיה וחסידות הכותב על המפגש שבין המחשבה היהודית לחוכמת העולם.
                        תחום התמחותו רחב ונפרש על תורתם של אדמו״רי בית פשיסחא, התפתחותו של המדע וגלגולה של המחשבה
                        הסוקרטית. גולדשטיין בעל תארים בהנדסת תוכנה, פילוסופיה וספרות משווה, ומגדיר מחדש בספריו את
                        היחס שבין השכל, האמונה והמציאות.
                    </p>
                    <div className="flex gap-6 text-[#b8860b] mt-4">
                        <a href="https://ohryud.vercel.app/" target="_blank" rel="noopener noreferrer"><Globe className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform" /></a>
                        <a href="https://www.youtube.com/@t.navoch" target="_blank" rel="noopener noreferrer"><Youtube className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform" /></a>
                        <a href="mailto:ohr.yud@gmail.com"><Mail className="w-6 h-6 md:w-8 md:h-8 hover:scale-110 transition-transform" /></a>
                    </div>
                </div>
            </section>

            {/* Section C - Intro */}
            <section id="intro" className="flex flex-col md:flex-row min-h-screen">
                <div className="flex-1 bg-[#1E5F74] flex justify-center items-center p-4 md:p-8">
                    <img
                        src="/from_book.jpg"
                        alt="Intro image"
                        className="w-64 sm:w-80 md:w-96 rounded-lg shadow-[0_0_50px_rgba(184,134,11,0.4)] border-4 border-[#b8860b]"
                    />
                </div>
                <div className="flex-1 bg-[#133B5C] text-[#f7e7b4] flex flex-col justify-center items-center p-6 md:p-12">
                    <h2 className="font-quote text-3xl md:text-5xl italic text-[#b8860b] transform -rotate-10 mb-6">
                        מתוך ההקדמה
                    </h2>
                    <div className="max-h-[70vh] overflow-y-auto bg-[#0f162e]/60 p-4 md:p-6 rounded-lg shadow-inner border border-[#b8860b]/30 text-base md:text-lg leading-loose text-justify space-y-6">
                        <p>עניין מגילת קהלת סבוך ומוסתר מאוד. גם מי שניסה לכוונו ולבארו הצליח אך מעט, פסוק פה פסוק שם, צו לצו זעיר שם זעיר שם, ויש לבאר תכלית חיבור זה. ראשית הוא נקרא בשם מגילה, ואין מגילה אלא לשון גילוי, שהיה דבר מוסתר ועתה הוא מגולה רק משום סיפור המעשה. באסתר היה צריך לבאר כל השתלשלות העניינים כדי שיכירו בעלי הנס בניסם המוסתר בטבע. במגילת רות הוצרך היה לגלות ייחוסו של דוד המלך עליו השלום. גם במגילת שיר השירים לפי מאמרם ז"ל, חיבה יתרה נודעת להם שנקראו בנים למקום (אבות ג, יד), ולא זאת אלא שבסוף קראם רעייתי ואימי (שמות רבה נב, ה), ועצם ידיעת החיבה בשיר השירים, דהיינו הגילוי, הוא חיבה יתירה. גם עניין איכה הוא גילוי איום ונורא, כמו שכתוב שם, "כי ראו ערוותה" (איכה א, ח), כי הוא דבר מיוחד רק אצל עם ישראל. לא תמצא אצל אומות העולם שמגלים חרפתם ובושתם על מנת שיתחזקו מכן, ישובו מרעתם ויתקנו דרכיהם, ולא נמצא אצל שום אומה שיספרו מתבוסתם. לכן מגילת איכה קרי שמיה גלוי. גם קהלת היא עניין גילוי, שאדם המיושב אינו מסוגל לראות העניינים לאמיתתם, עושה מעשיו ללא ראייה ומחשבה וסובר שאם יעשה מעשה זה ייטב לו, ואם יעשה מעשה אחר ירע לו, כאילו עושה כל זאת מכסילותו ועצלנותו. על כן מגילת קהלת באה לגלות כי השקפות רבות ומעשים רבים אינם כפי הנראה לאדם המיושב, וכל קהלת עניינה גילוי הנסתר.</p>
                        <p>גילוי הנסתר ייראה בראשונה כאילו יאמר דבר שאין סופו להישמע, ויש מי שאמר שביקשו לגנוז ספר קהלת (שבת ל, ב). אומנם לא ביקשו לגנוזו משום שסותר דברי תורה, חס ושלום! אלא משום שדבריו סותרין זה את זה, אבל נתרצו, כיוון שתחילתו וסופו דברי תורה, ויש לבאר היטב מאמר זה. וכי אם יש בתחילתו ובסופו דברי תורה, אין דבריו סותרים? אלא מבואר על פי אדוננו, הנשר הגדול, שפעמים יהיו סתירות בכתוב כדי להסביר העניין בכמה אופנים , ויתואר הכתוב הסותר כדבר שהוא רק משכיות כסף לתפוחי הזהב (פתיחת מורה נבוכים), ולכן אין הסתירה קשה לכשעצמה. עיינו חז"ל בספר וראו כי למרות הסתירות, תפוחי הזהב היו דברי תורה, ומהם ד"ת? עקירת עבודה זרה מלבבות בני האדם. עיקר העבודה הזרה הוא האדרת הקיים וביטחון שווא בממון ובאדם, ורוצה קהלת לערער על כל זה, למען תישאר לנו רק יראת ה' טהורה. מכל מקום עניין הספר ללמדך כי אם חשבת שהיה דבר בעניין ישר וניתן לסמוך עליו, למעשה אינו כזה, ואין כלל שאתה יכול ללכת אחריו תמיד. פעמים תצטרך לנטוע ופעמים לעקור, פעמים האישה מרה ממוות, ופעמים ראה חיים עם אישה אשר אהבת. הכלל הזה, המתגלה בסתירות, הוא דברי תורה שהורה.</p>
                        <p>קהלת הספר ילך בזוגות, וידוע מאמרם ז"ל שעין הרע שולט על זוגות (פסחים קט, ב), ועניין עין הרע שם הוא לא כישוף או כוח הרס, אלא איסור תורה של קנאות ותחרות. בזוגות תרבה תמיד הקנאה והתחרות, שאם יהיו שלוש, יהיה לפחות קצת איחוד בשנאתם לשלישי. לכן מהיות העולם זוגי, תמיד תשלוט בו עין הרעה. על כן כל הספר בנוי זוגות של כסיל וחכם, מלך וילד ועל זו הדרך. פעמים שצד א' יצדק ופעמים שצד ב', ולכן אין ביטחון בעולם הזה חוץ מהיחיד המיוחד בייחודו, אלופו של עולם, ה' אחד ושמו אחד.</p>
                        <p>בעניין זה ראיתי לנכון לבאר עניין הכפירה. לשון כפירה מלשון כופר תעשה לתיבה, לשון כיסוי, וכפרה היא כיסוי העוונות. כך הכופר מכסה את מציאות ההשגחה והאמונה בדעות גשמיות ונכזבות, לכן "אמר נבל בליבו אין אלוהים" (תהילים יד, א). כי חייב הכופר לכסות עובדות ותצפיות רבות, כדי לחזק עמדתו, ולרוב יכסה גם כתובים, יזכיר חלקי מימרות ויתלשם מההקשר לחזק דעתו. זה עניין כפירה – הכיסוי וההיעלם. ביארנו פה שקהלת מגלה המציאות, ומתוך גילוי המציאות על כל סתירותיה וקשייה לא יבואו לאיבוד האמונה, חס ושלום, אלא יבואו לערעור הדעות הנפסדות, ויתפשטו כל הקליפות עד שיישארו עם אמונה זכה ותמימה בהשם יתברך.</p>
                    </div>
                </div>
            </section>

            <footer className="bg-[#E1C582] text-center py-4 md:py-6 text-[#1D2D50] border-t border-[#284574]/40 text-sm md:text-base">
                <p>© כל הזכויות שמורות · <a href="#hero" className="text-[#284574] hover:underline">חזרה למעלה</a></p>
            </footer>
        </div>
    );
}
