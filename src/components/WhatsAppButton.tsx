
import React from 'react';
import { WhatsApp } from 'lucide-react';

const WhatsAppButton = () => {
  // WhatsApp number - replace with actual number
  const whatsappNumber = '254721429839'; // Kenya code + number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulsing rings */}
      <div className="absolute inset-0 bg-primary rounded-full animate-[pulse-ring_1.5s_cubic-bezier(0.24,_0,_0.38,_1)_infinite]"></div>
      <div className="absolute inset-0 bg-primary rounded-full animate-[pulse-ring_1.5s_cubic-bezier(0.24,_0,_0.38,_1)_infinite_0.5s]"></div>
      
      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary-hover text-white rounded-full shadow-lg transition-all duration-300 relative z-10"
        aria-label="Chat on WhatsApp"
      >
        <WhatsApp size={28} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
