import React from 'react';
import { Heart, Feather, Compass, Shield, Users, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/clinicData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart': return Heart;
      case 'Feather': return Feather;
      case 'Compass': return Compass;
      case 'Shield': return Shield;
      case 'Users': return Users;
      case 'CheckCircle2': return CheckCircle2;
      default: return CheckCircle2;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full inline-block border border-sky-100">
            Patient Trust & Commitment
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Why Patients Choose <br className="hidden sm:inline" />
            Dr. Jatkar's Dental Clinic
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We focus on providing honest advice, gentle treatments, and a reassuring atmosphere for every member of your family in Tingre Nagar, Pune.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.title}
                className="bg-slate-50 hover:bg-sky-50/50 p-6 sm:p-7 rounded-2xl border border-slate-200/80 hover:border-sky-300 transition-all duration-300 space-y-3 shadow-xs hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-heading text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
