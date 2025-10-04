import React, {useState} from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";

function KoheletBook() {
    const [showForm, setShowForm] = useState(false);
    const [status, setStatus] = useState(null); // null | "success" | "error"
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        amount: 1,
    });

    const bookPrice = 60;
    const bookName = "אוהב חוכמה - קהלת על דרך הסוד והפילוסופיה";
    const coverImage = "/covers/book2.jpg";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const serviceId = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_JS_KOHELET_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_KOHELET_PUBLIC_KEY;
    console.log("Data...");
    console.log(serviceId);
    console.log(templateId);
    console.log(publicKey);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus(null);

        // 1. Send email
        emailjs
            .send(
                serviceId,
                templateId,
                {
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                    city: formData.city,
                    amount: formData.amount,
                    price: 60*formData.amount,
                    bookName,
                },
                publicKey
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    setStatus("success");

                    // Open PayPal
                    const total = formData.amount * bookPrice;
                    const paypalUrl = `https://www.paypal.com/paypalme/ohryud/${total}ISL/`;
                    window.open(paypalUrl, "_blank");
                },
                (error) => {
                    console.error("Email sending failed:", error);
                    setStatus("error");
                }
            );
    };

    return (
        <div className="flex flex-col items-center justify-center h-full space-y-10">
            {/* Section Title */}
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center text-gray-100"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                חדש! {bookName}
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
                        src={coverImage}
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
                        <button
                            onClick={() => {
                                setShowForm(true);
                                setStatus(null);
                            }}
                            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-lg font-semibold shadow-md transition-transform transform hover:scale-105"
                        >
                            לרכישה
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Purchase Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-[#222] rounded-2xl p-8 w-full max-w-md shadow-xl relative">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl text-white mb-4">פרטי רכישה</h2>
                        <img
                            src={coverImage}
                            alt="Book cover"
                            className="w-32 mb-4 mx-auto rounded-lg"
                        />
                        <p className="text-center text-gray-200 mb-4">{bookName}</p>

                        {status === null ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="שם מלא"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="כתובת אימייל"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="טלפון"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
                                />
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="כתובת"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
                                />
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="עיר"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
                                />

                                <div>
                                    <label className="text-white mr-2">כמות:</label>
                                    <input
                                        type="number"
                                        name="amount"
                                        value={formData.amount}
                                        min="1"
                                        onChange={handleChange}
                                        className="w-20 px-2 py-1 rounded-lg bg-gray-700 text-white"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white font-bold"
                                >
                                    תשלום
                                </button>
                            </form>
                        ) : status === "success" ? (
                            <p className="text-green-400 text-center text-lg font-semibold">
                                ✅ הפרטים התקבלו בהצלחה
                            </p>
                        ) : (
                            <p className="text-red-400 text-center text-lg font-semibold">
                                ❌ אירעה שגיאה, נסה שוב
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default KoheletBook;
