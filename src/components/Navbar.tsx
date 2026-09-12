import React, { useState, useEffect } from 'react';
import {
  Phone,
  Menu,
  X,
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  Calendar,
} from 'lucide-react';
import { PageId } from '../types';
import Logo from './Logo';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'conditions', label: 'Conditions' },
    { id: 'pediatric', label: 'Pediatric Care' },
    { id: 'sports', label: 'Sports Rehab' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="clinic-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F5]/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(36,52,66,0.08)] py-2.5 border-b border-[#243442]/8'
          : 'bg-[#FAF9F5] py-3.5 border-b border-[#243442]/5'
      }`}
    >
      {/* Top micro-bar for clinical trust details on desktop */}
      <div className="hidden lg:block border-b border-[#243442]/5 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#344452]">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 font-medium tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-[#C5B27A]" />
              Allama Iqbal Children Hospital, Commissioner Rd, Sialkot
            </span>
            <span className="text-[#A7A9AA]">|</span>
            {/* Top-side short one line: Pediatric Care • Sports Rehabilitation */}
            <div className="flex items-center gap-1.5 whitespace-nowrap text-xs">
              <span className="text-[#C5B27A] font-semibold uppercase tracking-wider text-[11px]">Specialties:</span>
              <strong className="font-semibold text-[#243442]">Pediatric Care • Sports Rehabilitation</strong>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#344452] whitespace-nowrap">Mon – Sat: 10:00 AM – 8:00 PM</span>
            <div className="flex items-center gap-2.5 text-[#344452]">
              <a
                href={CLINIC_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Clinic Instagram"
                className="hover:text-[#C5B27A] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={CLINIC_INFO.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Clinic Facebook"
                className="hover:text-[#C5B27A] transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={CLINIC_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Clinic LinkedIn"
                className="hover:text-[#C5B27A] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Clinic Logo */}
        <Logo
          size={isScrolled ? 'sm' : 'md'}
          variant="full"
          onClick={() => handleNavClick('home')}
        />

        {/* Center: Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13px] tracking-wide font-medium text-[#344452]"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#243442] font-semibold'
                    : 'text-[#344452] hover:text-[#243442]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5B27A] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right side: Clean Primary Action */}
        <div className="hidden lg:flex items-center">
          <button
            id="header-book-appointment-btn"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-[#FAF9F5] bg-[#243442] hover:bg-[#344452] transition-all duration-200 cursor-pointer shadow-xs whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5B27A]" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="sm:hidden p-2 text-[#243442] hover:text-[#C5B27A] transition-colors"
            aria-label="Call clinic phone"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            id="mobile-menu-toggle-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#243442] hover:text-[#C5B27A] focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#FAF9F5] border-b border-[#243442]/10 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2.5 pt-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#243442]/8 text-[#243442] font-semibold'
                      : 'text-[#344452] hover:bg-[#243442]/4 hover:text-[#243442]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-[#243442]/10 space-y-3">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-[#243442] bg-[#243442] text-[#FAF9F5] text-xs font-semibold tracking-wider hover:bg-[#344452] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Clinic ({CLINIC_INFO.phone})
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-[#C5B27A] text-[#243442] text-xs font-semibold tracking-wider hover:bg-[#C5B27A]/10 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5B27A]" />
                Request Appointment
              </button>

              <div className="flex items-center justify-center gap-5 pt-2 text-[#344452]">
                <a
                  href={CLINIC_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C5B27A] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C5B27A] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C5B27A] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
