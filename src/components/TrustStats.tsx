import React from 'react';
import { Star, MessageSquareHeart, UserCheck, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const TrustStats: React.FC = () => {
  const stats = [
    {
      value: "5.0",
      label: "Google Rating",
      subtext: "100% Top Rating",
      icon: Star,
      iconColor: "text-amber-500 bg-amber-50 border-amber-200"
    },
    {
      value: `${CLINIC_INFO.reviewCount}+`,
      label: "Google Reviews",
      subtext: "Verified Local Patients",
      icon: MessageSquareHeart,
      iconColor: "text-sky-600 bg-sky-50 border-sky-200"
    },
    {
      value: "100%",
      label: "Patient Focused",
      subtext: "Comfort-First Treatment",
      icon: UserCheck,
      iconColor: "text-teal-600 bg-teal-50 border-teal-200"
    },
    {
      value: "Professional",
      label: "Dental Care",
      subtext: "Tingre Nagar, Pune",
      icon: ShieldCheck,
      iconColor: "text-indigo-600 bg-indigo-50 border-indigo-200"
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200/80 py-8 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 ${
                  idx > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
                }`}
              >
                <div className={`p-3 rounded-2xl border ${stat.iconColor} shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-800">
                    {stat.label}
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
