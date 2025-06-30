// src/sections/Contact.jsx
import React from 'react';
import { FaEnvelope, FaPhone, FaTelegramPlane } from 'react-icons/fa';
import { Mail, Phone, Instagram, MessageCircleMore } from 'lucide-react';
import TopArrow from '../components/TopArrow';

const Contact = () => (
  <div className="flex flex-col h-full justify-center items-center text-center relative">
      <h2 className="text-4xl font-bold mb-4 text-white">צור קשר</h2>
      <p className="text-lg mb-8 text-gray-400">
        אפשר לפנות אליי להרצאות, ראיונות, שיחות פילוסופיות או סתם התייעצות.
      </p>

    <div className="flex flex-col gap-4 items-center text-gray-300">
        <div className="flex items-center gap-3">
          <a href="mailto:ohr.yud@gmail.com" className="hover:text-white transition">
            <Mail size={24} />
          </a>
          <span className="text-md">ohr.yud@gmail.com</span>
        </div>

        <div className="flex items-center gap-3">
        <a href="tel:+972547630878" className="hover:text-white transition">
          <Phone size={24} />
        </a>
          <span className="text-md">054-763-0878</span>
        </div>


        <div className="flex items-center gap-3">
         <a href="https://wa.me/972547630878" className="hover:text-white transition">
          <MessageCircleMore size={24} />
        </a>
          <span className="text-md">054-763-0878</span>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Instagram size={24} />
          </a>
          <span className="text-md">@ohryud</span>
        </div>
      </div>

        <div className="w-40 h-auto -ml-80">
          <img
            src="/sig_bw.png"
            alt="חתימה"
            className="w-full h-auto object-contain opacity-70 -rotate-45"
          />
        </div>
        <TopArrow targetSectionId="title_section" />
  </div>
);

export default Contact;
