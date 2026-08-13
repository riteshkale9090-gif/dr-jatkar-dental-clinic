import React, { useState } from 'react';
import { Phone, Calendar, Star, Shield, Heart, MapPin, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative bg-gradient-to-b from-sky-50/80 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Decorative background radial shapes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small location badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs sm:text-sm font-semibold tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>Trusted Dental Care in Tingre Nagar, Pune</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.12]">
                Confident Smiles. <br />
                <span className="text-sky-700 underline decoration-sky-300 decoration-wavy decoration-2">
                  Expert Dental Care.
                </span>
              </h1>
              <p className="text-slate-500 font-medium text-sm sm:text-base">
                {CLINIC_INFO.marathiName} • Vishrantwadi
              </p>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
              Personalized dental care focused on your comfort, oral health and long-term smile.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-4 rounded-2xl text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 transition-all shadow-lg shadow-sky-600/25 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.formattedPhone}`}
                className="px-6 py-4 rounded-2xl text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-sky-600" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>

            {/* Quick highlights / Trust badges below CTAs */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500 shrink-0">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">5.0 Rating</div>
                  <div className="text-[11px] text-slate-500">Google Verified</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">17+ Reviews</div>
                  <div className="text-[11px] text-slate-500">Happy Patients</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Patient-Focused</div>
                  <div className="text-[11px] text-slate-500">Comfort Care</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Experienced</div>
                  <div className="text-[11px] text-slate-500">Dental Care</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor Portrait Photo */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-teal-400 rounded-3xl blur-xl opacity-20" />

              {/* Main Photo Card Container */}
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-slate-100 overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/5] flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src="/assets/dr-jatkar.png"
                      alt="Dr. Rohit Jatkar - Dr. Jatkar's Dental Clinic Tingre Nagar Pune"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center text-white p-6 text-center space-y-3">
                      <div className="w-20 h-20 rounded-full bg-sky-600/30 border-2 border-sky-400 flex items-center justify-center font-bold text-3xl text-sky-300">
                        RJ
                      </div>
                      <div className="font-serif-heading text-2xl font-bold">Dr. Rohit Jatkar</div>
                      <div className="text-sky-400 text-sm font-medium">Dr. Jatkar's Dental Clinic</div>
                      <div className="text-xs text-slate-400">Tingre Nagar, Vishrantwadi, Pune</div>
                    </div>
                  )}

                  {/* Subtle Gradient overlay at bottom for crisp text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent pointer-events-none" />

                  {/* Name badge overlaid at bottom of photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                    <div>
                      <h3 className="text-slate-900 font-bold text-base sm:text-lg leading-tight">
                        Dr. Rohit Jatkar
                      </h3>
                      <p className="text-sky-700 font-medium text-xs">
                        Dental Surgeon & Specialist
                      </p>
                    </div>
                    <div className="bg-sky-100 text-sky-800 text-xs px-2.5 py-1 rounded-full font-semibold">
                      Pune
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge overlay on top-left of image */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                  ★
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">5.0 Google Score</div>
                  <div className="text-[11px] text-slate-500">100% Satisfied Patients</div>
                </div>
              </div>

              {/* Floating Badge overlay on bottom-right of image */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-slate-900 text-white p-3.5 rounded-2xl shadow-xl border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-white">100% Patient Focused</div>
                  <div className="text-[11px] text-slate-300">Gentle & Mindful Care</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
