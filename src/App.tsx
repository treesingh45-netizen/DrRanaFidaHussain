import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ConditionsPage from './pages/ConditionsPage';
import PediatricPage from './pages/PediatricPage';
import SportsRehabPage from './pages/SportsRehabPage';
import ContactPage from './pages/ContactPage';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from './data/clinicData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialService, setModalInitialService] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Hash-based routing synchronization for natural navigation & shareable links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'conditions',
        'pediatric',
        'sports',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceTitle?: string) => {
    if (serviceTitle) {
      setModalInitialService(serviceTitle);
    } else {
      setModalInitialService('');
    }
    setIsModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#20262B] selection:bg-[#C5B27A]/30 selection:text-[#243442]">
      {/* Top Refined Sticky Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'conditions' && (
          <ConditionsPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'pediatric' && (
          <PediatricPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'sports' && (
          <SportsRehabPage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={modalInitialService}
      />

      {/* Discreet floating quick-contact pill in bottom-right */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-10 h-10 rounded-full bg-white border border-[#243442]/15 text-[#243442] shadow-md flex items-center justify-center hover:border-[#C5B27A] hover:text-[#C5B27A] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Direct WhatsApp Message"
          className="flex items-center gap-2 py-2.5 px-4 rounded-full bg-[#243442] text-[#FAF9F5] shadow-lg border border-[#C5B27A]/50 hover:bg-[#344452] transition-all duration-200 text-xs font-semibold tracking-wide group"
        >
          <MessageSquare className="w-4 h-4 text-[#C5B27A] group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">WhatsApp Clinic</span>
        </a>
      </div>
    </div>
  );
}
