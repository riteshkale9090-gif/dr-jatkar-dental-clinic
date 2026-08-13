import React, { useState } from 'react';
import { Calendar, Phone, CheckCircle, Shield, HeartHandshake, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Doctor Image Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 bg-sky-200/50 rounded-3xl blur-lg pointer-events-none" />
              <div className="relative bg-white p-3 rounded-3xl shadow-lg border border-slate-200/80 overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-[4/5] flex items-center justify-center">
                  {!imageError ? (
                    <img
                      src="/assets/dr-jatkar.png"
                      alt="Dr. Rohit Jatkar - Lead Dentist at Dr. Jatkar's Dental Clinic Pune"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center text-white p-6 text-center">
                      <div className="text-3xl font-bold font-serif-heading">Dr. Rohit Jatkar</div>
                      <div className="text-sky-400 text-sm mt-1">Dental Care Specialist</div>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-4 text-white">
                    <p className="font-serif-heading font-bold text-lg">Dr. Rohit Jatkar</p>
                    <p className="text-xs text-sky-300">Dental Surgeon & Clinical Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-3 py-1 rounded-full inline-block">
                Dedicated Dental Care
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
                Meet Dr. Rohit Jatkar
              </h2>
            </div>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              Dr. Rohit Jatkar is dedicated to providing thoughtful, patient-focused dental care with an emphasis on comfort, clear guidance and practical treatment solutions.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              At Dr. Jatkar's Dental Clinic, every patient is treated with respect and individual attention. Whether you require routine dental checkups, root canal treatment, crowns, dentures, or orthodontic solutions like braces and clear aligners, our focus remains on delivering gentle, dependable care in a hygienic and welcoming setting.
            </p>

            {/* Guiding Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Gentle & Soft-Spoken Care</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Focusing on stress-free consultations and patient ease.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Strict Clinical Hygiene</h3>
                  <p className="text-xs text-slate-500 mt-0.5">High standards of equipment sterilization & safety.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Clear Explanations</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Understanding every step before treatment begins.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Convenient Local Location</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Opp. Axis Bank ATM, Tingre Nagar, Pune.</p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 transition-all shadow-md shadow-sky-600/20 flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Consultation</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.formattedPhone}`}
                className="px-6 py-3.5 rounded-xl text-base font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-sky-600" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
