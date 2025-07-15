'use client';

import { useState, useEffect } from 'react';
import { socialLinks, getSocialIcon } from '@/config/social-links';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show message after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Changed from 1000 to 500 for faster appearance

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 hidden md:flex items-end">
      {/* Message Bubble */}
      {isVisible && (
        <div className="mr-4 mb-2 bg-white rounded-lg shadow-lg p-4 max-w-[250px] relative">
          {/* Close Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-700 focus:outline-none"
            aria-label="Close message"
          >
            ×
          </button>
          <p className="text-gray-800 text-sm">
            Need expert services in Kathmandu Valley? Chat with us now! 🏢
          </p>
          <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
            <div className="w-4 h-4 bg-white transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={() => window.open(socialLinks.whatsapp, '_blank')}
        className="bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={getSocialIcon('whatsapp')} />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppButton;