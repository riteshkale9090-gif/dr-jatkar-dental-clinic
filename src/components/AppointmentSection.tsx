import React from 'react';
import { Phone, Calendar, MessageCircle, Clock, MapPin, CheckCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface AppointmentSectionProps {
  onOpenBooking: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-sky-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background glow shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left CTA Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold">
              <Calendar className="w-4 h-4 text-sky-400" />
              <span>Book Your Consultation Today</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready for a Healthier, <br className="hidden sm:inline" />
              More Confident Smile?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
              Book a consultation with Dr. Rohit Jatkar and take the next step toward better dental care in Tingre Nagar, Pune.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Personalized treatment plan tailored to your budget & goals",
                "Gentle, soft-spoken, and experienced care",
                "Convenient location opposite Axis Bank ATM, Vishrantwadi"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-4 rounded-2xl font-bold text-base bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment Online</span>
              </button>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-2xl font-semibold text-base bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Info Box */}
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/15 space-y-6">
            <h3 className="font-serif-heading text-2xl font-bold text-white border-b border-white/10 pb-4">
              Quick Contact Details
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Direct Phone Line</div>
                  <a href={`tel:${CLINIC_INFO.formattedPhone}`} className="text-base font-bold text-white hover:text-sky-300">
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Clinic Address</div>
                  <div className="text-white text-xs leading-relaxed mt-0.5">
                    {CLINIC_INFO.address}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Consultation Hours</div>
                  <div className="text-white text-xs mt-0.5">
                    Mon – Sat: 10:00 AM – 2:00 PM | 5:00 PM – 9:00 PM <br />
                    Sunday: By Prior Appointment
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${CLINIC_INFO.formattedPhone}`}
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-white text-slate-900 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Clinic Now</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
