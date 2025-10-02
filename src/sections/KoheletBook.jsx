import React from "react";
import { motion } from "framer-motion";

function KoheletBook() {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-10">
            {/* Section Title */}
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-center text-gray-100"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                חדש! אוהב חוכמה - קהלת על דרך הסוף והפילוסופיה
            </motion.h2>

            {/* Tiles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
                {/* Book Cover */}
                <motion.div
                    className="bg-[#222] rounded-2xl p-6 shadow-lg flex flex-col items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src="/covers/book2.jpg"
                        alt="Kohelet Book Cover"
                        className="rounded-lg shadow-md"
                    />
                </motion.div>

                {/* Description */}
                <motion.div
                    className="bg-[#222] rounded-2xl p-6 shadow-lg flex items-center justify-center text-lg leading-relaxed text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <p>
                        חכמים התלבטו בשאלה האם לספר קהלת יש מסר ברור כלשהו או שכולו בניין וסתירה מתמשכים. לאחר עיון הם הסבירו את סודו הנפלא: מהלכו של קהלת כמכלול, מתחילתו ועד סופו, מתאר את ליבת האמונה היהודית.
                        ״אוהב חכמה״ מציע פרשנות תורנית-הגותית מעמיקה על מגילת קהלת, תוך כדי התמודדות עם הקשיים הפילוסופיים והתיאולוגיים העולים ממנה. פרשנות זו פונה ישירות את הפסוקים הסתומים ואל השאלות הנצחיות העולות מדבריו של שלמה המלך, ומגלה כיצד האמונה הדתית השלמה מסתתרת מאחורי גל התהיות והספקות האינסופי.
                    </p>
                </motion.div>

                {/* Split column: Audio + Button */}
                <div className="flex flex-col space-y-6">
                    {/* Audio Tile */}
                    <motion.div
                        className="bg-[#222] rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xl mb-4">שיחה על הספר</h3>
                        <audio controls className="w-64">
                            <source src="/audio/kohelet.wav" type="audio/mpeg" />
                            הדפדפן שלך לא תומך בנגן אודיו.
                        </audio>
                    </motion.div>

                    {/* Button Tile */}
                    <motion.div
                        className="bg-[#222] rounded-2xl p-6 shadow-lg flex items-center justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-lg font-semibold shadow-md transition-transform transform hover:scale-105">
                            לרכישה
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default KoheletBook;
