import React from 'react';
import { Sparkles, Heart, Smile, ShieldCheck } from 'lucide-react';

export const PatientExperience: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 sm:p-12 lg:p-16 rounded-3xl border border-slate-700/80 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Thoughtful Dental Care</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Your Comfort Matters
            </h2>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-light">
              "From consultation to treatment, our goal is to make your dental experience comfortable, clear and reassuring."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-700/80">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400 shrink-0">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Gentle Hands</h3>
                  <p className="text-xs text-slate-400 mt-1">Soft-spoken care designed for anxious patients.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-teal-500/20 text-teal-400 shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">No Pressure</h3>
                  <p className="text-xs text-slate-400 mt-1">Honest advice tailored to your true dental needs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Clean & Safe</h3>
                  <p className="text-xs text-slate-400 mt-1">Strict sterilization protocol for peace of mind.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
