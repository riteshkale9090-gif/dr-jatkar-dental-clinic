import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, MapPin, Star } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top Banner with Quick Contact Info */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              Tingre Nagar, Vishrantwadi, Pune 411032
            </span>
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              5.0 Google Rated ({CLINIC_INFO.reviewCount} Reviews)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.formattedPhone}`}
              className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              {CLINIC_INFO.phone}
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">{CLINIC_INFO.marathiName}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-sm py-3 border-b border-slate-200/80'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              {!logoError ? (
                <img
                  src="/assets/logo.png"
                  alt={`${CLINIC_INFO.name} Logo`}
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              ) : (
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-sky-600/20">
                    DJ
                  </div>
                  <div>
                    <span className="block font-serif-heading text-lg font-bold text-slate-900 leading-tight">
                      Dr. Jatkar's
                    </span>
                    <span className="block text-xs font-semibold text-sky-600 tracking-wider">
                      DENTAL CLINIC
                    </span>
                  </div>
                </div>
              )}
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50/60 rounded-lg transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${CLINIC_INFO.formattedPhone}`}
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Now</span>
              </a>
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 transition-all shadow-md shadow-sky-600/20 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-colors flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
            <div className="text-xs font-medium text-slate-500 pb-2 border-b border-slate-100 flex justify-between items-center">
              <span>{CLINIC_INFO.marathiName}</span>
              <span className="text-amber-500 font-semibold">★ 5.0 Google Rating</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${CLINIC_INFO.formattedPhone}`}
                className="w-full py-3 rounded-xl text-center text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                Call +91 74999 31696
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl text-center text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
