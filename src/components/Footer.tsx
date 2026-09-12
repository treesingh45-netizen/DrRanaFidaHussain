import React from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';
import { PageId } from '../types';
import Logo from './Logo';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (pageId: PageId) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="clinic-footer"
      className="bg-[#243442] text-[#FAF9F5] pt-16 pb-12 border-t border-[#344452]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#344452]/70">
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <Logo
              variant="full"
              theme="dark"
              size="lg"
              onClick={() => handleNav('home')}
            />

            <p className="text-sm text-[#A7A9AA] max-w-md leading-relaxed pt-2 font-normal">
              Specialized, patient-centered physiotherapy care in Sialkot. Led by Consultant Physiotherapist <strong className="text-[#FAF9F5] font-medium">Dr. Rana Fida Hussain</strong>, supporting movement recovery, pediatric development, athletic performance, and chronic pain relief.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-medium block mb-2">
                Specialist Focus
              </span>
              <ul className="text-xs text-[#FAF9F5]/90 space-y-1.5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A]" />
                  Pediatric Physiotherapy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A]" />
                  Sports Rehabilitation & Return-to-Play
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A]" />
                  Chronic Pain Management & Post-Surgical Recovery
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
              Clinic Pages
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF9F5]/85">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#C5B27A] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#C5B27A] transition-colors cursor-pointer text-left"
                >
                  About Dr. Rana Fida Hussain
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#C5B27A] transition-colors cursor-pointer text-left"
                >
                  Physiotherapy Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('conditions')}
                  className="hover:text-[#C5B27A] transition-colors cursor-pointer text-left"
                >
                  Conditions We Treat
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pediatric')}
                  className="hover:text-[#C5B27A] transition-colors cursor-pointer text-left"
                >
                  Pediatric Care
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('sports')}
                  className="hover:text-[#C5B27A] transition-colors cursor-pointer text-left"
                >
                  Sports Rehabilitation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#C5B27A] transition-colors cursor-pointer text-left"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details & Location */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
              Contact & Location
            </h4>

            <div className="space-y-3 text-sm text-[#FAF9F5]/90">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="font-medium hover:text-[#C5B27A] transition-colors tracking-wide"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                  <p className="text-xs text-[#A7A9AA]">Direct Phone & WhatsApp Enquiry</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <p className="font-medium text-[#FAF9F5]">
                    Dr Fida Hussain Physiotherapy Centre
                  </p>
                  <p className="text-xs text-[#A7A9AA] pt-0.5">
                    Allama Iqbal Children Hospital, Commissioner Rd, opposite Civil Hospital, Sialkot
                  </p>
                  <a
                    href={CLINIC_INFO.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-[#C5B27A] hover:underline inline-flex items-center gap-1 pt-1 font-medium"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                <div className="text-xs text-[#A7A9AA] space-y-0.5">
                  <p className="text-[#FAF9F5] font-medium">Monday – Saturday</p>
                  <p>10:00 AM – 8:00 PM</p>
                  <p className="text-[11px] text-[#C5B27A]">Home Physiotherapy Available in Sialkot</p>
                </div>
              </div>
            </div>

            {/* Official Social Icons */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#A7A9AA] block mb-2">
                Connect With Clinic
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={CLINIC_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-[#344452] flex items-center justify-center text-[#FAF9F5]/80 hover:text-[#C5B27A] hover:border-[#C5B27A] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-[#344452] flex items-center justify-center text-[#FAF9F5]/80 hover:text-[#C5B27A] hover:border-[#C5B27A] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={CLINIC_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full border border-[#344452] flex items-center justify-center text-[#FAF9F5]/80 hover:text-[#C5B27A] hover:border-[#C5B27A] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom micro footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A7A9AA]">
          <p>
            © {new Date().getFullYear()} Dr. Rana Fida Hussain Physiotherapy Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px]">Sialkot, Punjab, Pakistan</span>
            <span className="w-1 h-1 rounded-full bg-[#344452]" />
            <button
              onClick={() => handleNav('contact')}
              className="text-[#C5B27A] hover:underline cursor-pointer"
            >
              Consultant Physiotherapist Care
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
