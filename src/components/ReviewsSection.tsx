import React from 'react';
import { Star, ExternalLink, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS, CLINIC_INFO } from '../data/clinicData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-3.5 py-1 rounded-full inline-block">
            Verified Patient Testimonials
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            What Our Patients Say
          </h2>
          
          {/* Overall Rating Score Banner */}
          <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-slate-200 shadow-xs mt-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-slate-900 text-lg">5.0 / 5.0</span>
            <span className="text-slate-500 text-sm">({CLINIC_INFO.reviewCount} Google Reviews)</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-sky-100 group-hover:text-sky-200 transition-colors" />
                </div>

                {review.highlight && (
                  <div className="text-xs font-bold text-sky-800 bg-sky-50 px-3 py-1 rounded-md inline-block">
                    {review.highlight}
                  </div>
                )}

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span>— {review.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" title="Verified Patient" />
                  </h3>
                  <span className="text-xs text-slate-400 block">{review.date}</span>
                </div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                  Google
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View on Google Button */}
        <div className="mt-12 text-center">
          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 shadow-xs transition-all"
          >
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>View All Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
