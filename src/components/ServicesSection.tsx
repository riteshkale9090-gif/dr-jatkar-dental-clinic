import React, { useState } from 'react';
import { 
  ShieldCheck, Sparkles, Crown, Maximize2, Grid, EyeOff, 
  Smile, Activity, ChevronRight, CheckCircle, Calendar, X 
} from 'lucide-react';
import { SERVICES } from '../data/clinicData';
import { DentalService } from '../types';

interface ServicesSectionProps {
  onOpenBookingWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBookingWithService }) => {
  const [selectedService, setSelectedService] = useState<DentalService | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Sparkles': return Sparkles;
      case 'Crown': return Crown;
      case 'Maximize2': return Maximize2;
      case 'Grid': return Grid;
      case 'EyeOff': return EyeOff;
      case 'Smile': return Smile;
      case 'Sparkle': return Sparkles;
      case 'Activity': return Activity;
      default: return Activity;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full inline-block border border-sky-100">
            Comprehensive Dental Solutions
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Complete Dental Care for Your Smile
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From routine checkups to specialized root canals and orthodontics, Dr. Rohit Jatkar provides gentle, practical treatment tailored to your oral health needs.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const IconComponent = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group bg-slate-50 hover:bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 hover:border-sky-300 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10 flex flex-col justify-between relative"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif-heading text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 pt-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1 group-hover:underline cursor-pointer"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBookingWithService(service.title)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-sky-800 bg-sky-100/80 hover:bg-sky-600 hover:text-white transition-all"
                  >
                    Book Treatment
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
                {React.createElement(getServiceIcon(selectedService.iconName), { className: 'w-7 h-7' })}
              </div>
              <div>
                <h3 className="font-serif-heading text-2xl font-bold text-slate-900">
                  {selectedService.title}
                </h3>
                <p className="text-xs text-sky-600 font-semibold">Dr. Jatkar's Dental Clinic</p>
              </div>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              {selectedService.description}
            </p>

            <div className="bg-sky-50 p-4 rounded-xl space-y-2 border border-sky-100">
              <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block">
                Recommended For
              </span>
              <p className="text-xs text-slate-700">
                {selectedService.recommendedFor}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Key Care Benefits
              </span>
              <ul className="space-y-2">
                {selectedService.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onOpenBookingWithService(title);
                }}
                className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation for {selectedService.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
