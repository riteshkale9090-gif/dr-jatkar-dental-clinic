/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedOrthodontics } from './components/FeaturedOrthodontics';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PatientExperience } from './components/PatientExperience';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedBookingService, setSelectedBookingService] = useState('');

  const handleOpenBookingWithService = (serviceName: string) => {
    setSelectedBookingService(serviceName);
    setBookingOpen(true);
  };

  const handleOpenBooking = () => {
    setSelectedBookingService('');
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Fixed Glass-Effect Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main App Content */}
      <main className="flex-grow">
        <Hero onOpenBooking={handleOpenBooking} />
        <TrustStats />
        <AboutSection onOpenBooking={handleOpenBooking} />
        <ServicesSection onOpenBookingWithService={handleOpenBookingWithService} />
        <FeaturedOrthodontics onOpenBookingWithService={handleOpenBookingWithService} />
        <WhyChooseUs />
        <PatientExperience />
        <ReviewsSection />
        <GallerySection />
        <AppointmentSection onOpenBooking={handleOpenBooking} />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Appointment Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialService={selectedBookingService}
      />
    </div>
  );
}
