'use client';

import { MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/config/site';

export default function WhatsAppButton() {
  const handleClick = () => {
    const url = getWhatsAppUrl(siteConfig.whatsappMessages.default);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4"
      style={{ 
        backgroundColor: '#ed3838',
        '--tw-ring-color': '#ed3838'
      } as React.CSSProperties}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#ed3838'}
      aria-label="Chat with Ideal Asphalt on WhatsApp"
      title="Chat with Ideal Asphalt on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
