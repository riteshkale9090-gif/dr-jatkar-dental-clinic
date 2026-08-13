import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={CLINIC_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 group"
        aria-label="Chat with Dr. Jatkar's Dental Clinic on WhatsApp"
        title="WhatsApp Us"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500 group-hover:rotate-12 transition-transform" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${CLINIC_INFO.formattedPhone}`}
        className="w-13 h-13 sm:w-14 sm:h-14 bg-sky-600 hover:bg-sky-700 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 group"
        aria-label="Call Dr. Jatkar's Dental Clinic"
        title="Call Clinic"
      >
        <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
