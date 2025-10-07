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
      className="fixed bottom-6 right-6 z-50 rounded-full bg-[#ed3838] p-4 text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#d32f2f] focus:outline-none focus:ring-4 focus:ring-[#ed3838]/40"
      aria-label="Chat with Ideal Asphalt on WhatsApp"
      title="Chat with Ideal Asphalt on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
