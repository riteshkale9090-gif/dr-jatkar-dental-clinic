import React, { useState } from 'react';
import { Maximize2, X, MapPin, ShieldCheck, Camera } from 'lucide-react';
import { GALLERY_IMAGES, CLINIC_INFO } from '../data/clinicData';
import { GalleryImage } from '../types';

export const GallerySection: React.FC = () => {
  const [activeLightboxImage, setActiveLightboxImage] = useState<GalleryImage | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3.5 py-1.5 rounded-full inline-block border border-sky-100">
            Real Clinic Photography
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Inside Our Clinic
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Take a look inside Dr. Jatkar's Dental Clinic located at Tingre Nagar, Pune. Clean, modern, and sterile environment for your family's oral care.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {GALLERY_IMAGES.map((image) => {
            const hasError = imageErrors[image.id];
            return (
              <div
                key={image.id}
                className="group relative bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-200 cursor-pointer aspect-[4/3] flex flex-col justify-end"
                onClick={() => setActiveLightboxImage(image)}
              >
                {!hasError ? (
                  <img
                    src={image.src}
                    alt={image.alt}
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(image.id)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center text-white p-6 text-center space-y-2">
                    <Camera className="w-12 h-12 text-sky-400 opacity-60" />
                    <p className="font-serif-heading font-bold text-lg">{image.title}</p>
                    <p className="text-xs text-slate-400">{CLINIC_INFO.name} • {image.category}</p>
                  </div>
                )}

                {/* Gradient overlay for caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Caption overlay at bottom */}
                <div className="relative z-10 p-6 text-white flex items-end justify-between">
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-sky-300 uppercase tracking-wider bg-sky-950/80 border border-sky-800 px-2.5 py-0.5 rounded-full inline-block">
                      {image.category}
                    </span>
                    <h3 className="font-serif-heading text-xl font-bold text-white">
                      {image.title}
                    </h3>
                    <p className="text-xs text-slate-300 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      <span>{CLINIC_INFO.area}, {CLINIC_INFO.city}</span>
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md text-white group-hover:bg-sky-600 transition-colors shrink-0">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hygiene Guarantee Banner */}
        <div className="mt-12 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Sterilization & Hygiene Standard</h3>
              <p className="text-xs text-slate-600 mt-0.5">We strictly adhere to clinical disinfection standards for every patient consultation and procedure.</p>
            </div>
          </div>

          <a
            href={`tel:${CLINIC_INFO.formattedPhone}`}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 shrink-0 transition-colors"
          >
            Visit Clinic in Person
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-4 right-4 z-20 p-2 text-white bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              {!imageErrors[activeLightboxImage.id] ? (
                <img
                  src={activeLightboxImage.src}
                  alt={activeLightboxImage.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              ) : (
                <div className="p-12 text-center text-white">
                  <p className="font-serif-heading text-2xl font-bold">{activeLightboxImage.title}</p>
                  <p className="text-sm text-slate-400 mt-2">{activeLightboxImage.alt}</p>
                </div>
              )}
            </div>

            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  {activeLightboxImage.category}
                </span>
                <h3 className="font-serif-heading text-xl font-bold text-white">
                  {activeLightboxImage.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">{activeLightboxImage.alt}</p>
              </div>

              <div className="text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                {CLINIC_INFO.name}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
