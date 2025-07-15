'use client';

import { useState, useEffect } from 'react';
import { socialLinks, getSocialIcon } from '@/config/social-links';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [wasManuallyClosed, setWasManuallyClosed] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Show message after a short delay when component mounts
    // Only show if it wasn't manually closed
    if (!wasManuallyClosed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);

      // Auto-hide message after 5 seconds on mobile
      let hideTimer: NodeJS.Timeout;
      if (isMobile && isVisible) {
        hideTimer = setTimeout(() => {
          setIsVisible(false);
        }, 5000);
      }

      return () => {
        clearTimeout(timer);
        if (hideTimer) clearTimeout(hideTimer);
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile, isVisible, wasManuallyClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setWasManuallyClosed(true);
  };

  return (
    <div className={`fixed z-50 flex items-end ${isMobile ? 'bottom-10 right-4' : 'bottom-5 right-4'}`}>
      {/* Message Bubble */}
      {isVisible && (
        <div className={`
          ${isMobile ? 'mb-3 mr-2 max-w-[200px]' : 'mr-4 mb-2 max-w-[250px]'}
          bg-white rounded-lg shadow-lg p-3 relative
        `}>
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-gray-700 focus:outline-none"
            aria-label="Close message"
          >
            ×
          </button>
          <p className={`text-gray-800 ${isMobile ? 'text-xs' : 'text-sm'}`}>
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
        className={`
          bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg 
          transform hover:scale-110 transition-all duration-300
          ${isMobile ? 'p-3' : 'p-4'}
        `}
        aria-label="Chat on WhatsApp"
      >
        <svg
          className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`}
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