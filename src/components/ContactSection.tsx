import React from 'react';
import { Phone, MapPin, MessageCircle, Navigation, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full inline-block border border-sky-100">
            Location & Contact Info
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Visit Our Clinic
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We are conveniently located on Tingre Nagar Road, opposite Axis Bank ATM in Vishrantwadi, Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl border border-slate-200/80 space-y-6 shadow-xs">
            <div>
              <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
                {CLINIC_INFO.marathiName}
              </span>
              <h3 className="font-serif-heading text-2xl font-bold text-slate-900 mt-1">
                {CLINIC_INFO.name}
              </h3>
              <p className="text-xs text-slate-500 font-medium">Doctor In-Charge: {CLINIC_INFO.doctorName}</p>
            </div>

            <div className="space-y-4 text-sm pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-sky-100 text-sky-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Full Address</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-[11px] text-sky-700 font-semibold mt-1">
                    Plus Code: {CLINIC_INFO.plusCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-sky-100 text-sky-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Phone Number</h4>
                  <a
                    href={`tel:${CLINIC_INFO.formattedPhone}`}
                    className="text-sm font-semibold text-sky-700 hover:underline block mt-0.5"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">WhatsApp</h4>
                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-700 hover:underline block mt-0.5"
                  >
                    Chat on WhatsApp (+91 74999 31696)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-700 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Clinic Timings</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Monday – Saturday: 10:00 AM – 2:00 PM | 5:00 PM – 9:00 PM <br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${CLINIC_INFO.formattedPhone}`}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Clinic</span>
              </a>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-sky-600" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

          {/* Interactive Google Map Embed Card */}
          <div className="lg:col-span-7 bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative min-h-[420px] flex flex-col justify-between">
            <iframe
              title="Dr. Jatkar's Dental Clinic Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.32766863116!2d73.8821033153697!3d18.57723228737385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14041e21b8d%3A0xa64503348be8486f!2sDr.%20Jatkar's%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[420px]"
            />

            {/* Overlay banner at bottom of map */}
            <div className="p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Shop No. 6, Raviraj Apartment, Tingre Nagar, Pune 411032</span>
              </div>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 transition-colors shrink-0 flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
