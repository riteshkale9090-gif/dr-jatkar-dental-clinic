import React from 'react';
import { Calendar, CheckCircle2, Grid, Eye, ArrowRight } from 'lucide-react';

interface FeaturedOrthodonticsProps {
  onOpenBookingWithService: (serviceName: string) => void;
}

export const FeaturedOrthodontics: React.FC<FeaturedOrthodonticsProps> = ({
  onOpenBookingWithService,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-sky-50/40 to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-800 bg-sky-100/90 px-3.5 py-1.5 rounded-full inline-block border border-sky-200">
            Featured Orthodontic Care
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Braces or Clear Aligners? <br className="hidden sm:inline" />
            <span className="text-sky-700">We'll Help You Choose.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
            Deciding between traditional braces and clear aligners can be confusing. Our dental team evaluates your specific oral health needs and helps you understand which orthodontic option may be appropriate for you.
          </p>
        </div>

        {/* 2 Main Cards: Braces vs Aligners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* TRADITIONAL BRACES CARD */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110 pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md shadow-sky-600/20">
                  <Grid className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Proven & Durable
                </span>
              </div>

              <div>
                <h3 className="font-serif-heading text-2xl font-bold text-slate-900">
                  Traditional Braces
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Time-tested metal or tooth-colored ceramic brackets designed for precision tooth movement and resolving complex bite discrepancies.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Key Advantages:
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Highly effective for complex teeth misalignments",
                    "Fixed in place — no risk of misplacing aligner trays",
                    "Available in ceramic option for reduced visibility",
                    "Continuous, reliable orthodontic movement"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100 relative z-10">
              <button
                onClick={() => onOpenBookingWithService('Traditional Braces')}
                className="w-full py-3.5 rounded-xl font-semibold text-sm text-sky-700 bg-sky-50 hover:bg-sky-600 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Consult for Braces</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CLEAR ALIGNERS CARD */}
          <div className="bg-white p-8 rounded-3xl border border-sky-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md shadow-teal-600/20">
                  <Eye className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full uppercase tracking-wider">
                  Nearly Invisible
                </span>
              </div>

              <div>
                <h3 className="font-serif-heading text-2xl font-bold text-slate-900">
                  Clear Aligners
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Transparent, removable aligner trays custom-molded to gently shift your teeth without metal wires or brackets.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Key Advantages:
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Discreet appearance for social & professional life",
                    "Removable while eating your favorite meals",
                    "Easier daily brushing and flossing routine",
                    "Smooth plastic trays gentle on inner cheeks & gums"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100 relative z-10">
              <button
                onClick={() => onOpenBookingWithService('Clear Aligners')}
                className="w-full py-3.5 rounded-xl font-semibold text-sm text-teal-700 bg-teal-50 hover:bg-teal-600 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Consult for Clear Aligners</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Orthodontics Pillars / Consultation Benefits */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-sky-600 font-bold text-base sm:text-lg mb-1">Accurate Assessment</div>
            <div className="text-xs text-slate-500">Thorough oral evaluation to determine suitability</div>
          </div>
          <div>
            <div className="text-sky-600 font-bold text-base sm:text-lg mb-1">Clear Timelines</div>
            <div className="text-xs text-slate-500">Realistic expectations for duration of treatment</div>
          </div>
          <div>
            <div className="text-sky-600 font-bold text-base sm:text-lg mb-1">Lifestyle Fit</div>
            <div className="text-xs text-slate-500">Matching aligner choice to your daily routine</div>
          </div>
          <div>
            <div className="text-sky-600 font-bold text-base sm:text-lg mb-1">Financial Clarity</div>
            <div className="text-xs text-slate-500">Transparent guidance on total treatment costs</div>
          </div>
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onOpenBookingWithService('Orthodontic Consultation')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-sky-600 hover:bg-sky-700 shadow-lg shadow-sky-600/20 transition-all cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Book an Orthodontic Consultation</span>
          </button>
        </div>

      </div>
    </section>
  );
};
