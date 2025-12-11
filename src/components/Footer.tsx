// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 mt-16 border-t border-gaze-soft">
      <div 
        className="max-w-2xl mx-auto px-4 text-center text-gaze-secondary text-sm"
        itemScope 
        itemType="https://schema.org/BeautySalon"
      >
        <p itemProp="name" className="font-medium text-gaze-text">
          GAZE — студия бровей от Марии Гусейновой
        </p>
        <div 
          itemProp="address" 
          itemScope 
          itemType="https://schema.org/PostalAddress"
          className="mt-1"
        >
          <span itemProp="addressLocality">Сочи</span>,&nbsp;
          <span itemProp="streetAddress">ул.Курортный проспект, д.50</span>
        </div>
        <p className="mt-1">
          <a 
            href="tel:+79113802700" 
            itemProp="telephone"
            className="text-gaze-text hover:underline transition-colors"
          >
            +7 (911) 380-27-00
          </a>
        </p>
        <p className="mt-1">Ежедневно с 10:00 до 20:00</p>
        <meta itemProp="url" content="https://gaze-beauty.ru" />
      </div>
    </footer>
  );
};

export default Footer;
