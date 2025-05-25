
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // WhatsApp number for AfriHub Capital
  const whatsappNumber = '254710235750';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Outward pulsing rings */}
      <div className="absolute inset-0 bg-blue-500 rounded-full animate-[pulse-outward_2s_ease-out_infinite] opacity-75"></div>
      <div className="absolute inset-0 bg-blue-500 rounded-full animate-[pulse-outward_2s_ease-out_infinite_1s] opacity-50"></div>
      
      {/* Button - made bigger */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 relative z-10"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
