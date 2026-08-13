import React, { useState } from 'react';
import { Phone, MapPin, Calendar, Star, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [logoError, setLogoError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#home" className="inline-block">
              {!logoError ? (
                <img
                  src="/assets/logo.png"
                  alt={CLINIC_INFO.name}
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  className="h-12 w-auto bg-white/90 p-1 rounded-xl"
                />
              ) : (
                <div className="text-white font-serif-heading font-bold text-2xl">
                  Dr. Jatkar's Dental Clinic
                </div>
              )}
            </a>

            <div>
              <p className="font-serif-heading font-bold text-white text-xl">
                {CLINIC_INFO.name}
              </p>
              <p className="text-sm text-sky-400 font-medium">
                {CLINIC_INFO.marathiName}
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing patient-focused dental care in Tingre Nagar & Vishrantwadi, Pune. Dedicated to comfort, clean standards, and healthy smiles.
            </p>

            <div className="inline-flex items-center gap-2 bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800 text-xs">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">5.0 / 5.0 Google Rating</span>
              <span className="text-slate-500">({CLINIC_INFO.reviewCount} Reviews)</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs font-medium text-slate-400">
              <li><a href="#home" className="hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition-colors">About Dr. Rohit Jatkar</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Dental Treatments</a></li>
              <li><a href="#why-us" className="hover:text-sky-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-sky-400 transition-colors">Patient Reviews</a></li>
              <li><a href="#gallery" className="hover:text-sky-400 transition-colors">Inside Our Clinic</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact & Directions</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact & Hours
            </h3>

            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Shop No. 6, Raviraj Apartment, Gangakamal, Road No. 7, Tingre Nagar Rd, Opp. Axis Bank ATM, Vishrantwadi, Pune, Maharashtra 411032
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.formattedPhone}`} className="text-white hover:text-sky-400 font-semibold">
                  +91 74999 31696
                </a>
              </div>

              <div className="pt-2 border-t border-slate-900">
                <p className="text-[11px] font-semibold text-slate-300">Working Hours:</p>
                <p className="text-slate-400 mt-0.5">Mon – Sat: 10:00 AM – 2:00 PM | 5:00 PM – 9:00 PM</p>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Dr. Jatkar's Dental Clinic. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Tingre Nagar, Vishrantwadi, Pune</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
