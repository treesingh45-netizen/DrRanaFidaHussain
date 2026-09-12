import React, { useState } from 'react';
import {
  Baby,
  Activity,
  ShieldCheck,
  Sparkles,
  HeartPulse,
  Home,
  ChevronRight,
  Phone,
  Calendar,
  Check,
} from 'lucide-react';
import { PageId } from '../types';
import { SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'specialized' | 'core' | 'rehabilitation'>('all');

  const filteredServices = SERVICES_DATA.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Baby':
        return <Baby className="w-5 h-5 text-[#C5B27A]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#C5B27A]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#C5B27A]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C5B27A]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-[#C5B27A]" />;
      case 'Home':
        return <Home className="w-5 h-5 text-[#C5B27A]" />;
      default:
        return <Activity className="w-5 h-5 text-[#C5B27A]" />;
    }
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Page Header */}
      <section
        id="services-header"
        className="pt-6 md:pt-12 border-b border-[#243442]/8 pb-12 text-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5B27A] font-semibold">
            Clinical Care Portfolio
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#243442] tracking-tight">
            Physiotherapy Services
          </h1>
          <div className="w-12 h-[2px] bg-[#C5B27A] mx-auto my-2" />
          <p className="text-sm md:text-base text-[#344452] leading-relaxed max-w-2xl mx-auto">
            A complete range of physiotherapy services tailored to babies, children, young athletes and adults.
          </p>

          {/* Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Services (9)' },
              { id: 'specialized', label: 'Pediatric & Specialized' },
              { id: 'core', label: 'Spine, Joint & Pain' },
              { id: 'rehabilitation', label: 'Post-Surgical & Recovery' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  selectedFilter === f.id
                    ? 'bg-[#243442] text-[#FAF9F5] shadow-xs'
                    : 'bg-white border border-[#243442]/12 text-[#344452] hover:border-[#C5B27A]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (All 9 Services) */}
      <section id="services-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-xl border border-[#243442]/10 overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                {/* Clinical Image */}
                <div className="aspect-[16/10] overflow-hidden bg-[#243442]/5 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-[#FAF9F5]/90 backdrop-blur-xs flex items-center justify-center shadow-xs">
                    {getServiceIcon(service.icon)}
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-xl font-semibold text-[#243442]">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#344452] leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2 border-t border-[#243442]/8 space-y-1.5">
                    <span className="text-[10px] uppercase tracking-wider text-[#A7A9AA] font-semibold block">
                      Key Clinical Focus:
                    </span>
                    <ul className="space-y-1 text-xs text-[#344452]">
                      {service.clinicalFocus.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A] shrink-0 mt-1.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#243442]/5">
                {service.id === 'pediatric-physiotherapy' ? (
                  <button
                    onClick={() => onNavigate('pediatric')}
                    className="text-xs font-semibold text-[#243442] hover:text-[#C5B27A] inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Full Pediatric Details</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5B27A]" />
                  </button>
                ) : service.id === 'sports-rehabilitation' ? (
                  <button
                    onClick={() => onNavigate('sports')}
                    className="text-xs font-semibold text-[#243442] hover:text-[#C5B27A] inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Sports Rehab Guide</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5B27A]" />
                  </button>
                ) : (
                  <button
                    onClick={() => onNavigate('conditions')}
                    className="text-xs font-semibold text-[#344452] hover:text-[#243442] inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Conditions</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5B27A]" />
                  </button>
                )}

                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="text-xs text-[#C5B27A] font-semibold hover:underline cursor-pointer"
                >
                  Consult
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dedicated Home Physiotherapy Notice in Sialkot */}
      <section id="services-home-physio-callout" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#243442] text-[#FAF9F5] p-8 md:p-10 rounded-2xl border border-[#344452] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5B27A] font-semibold">
              Community Care In Sialkot
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FAF9F5]">
              Home Physiotherapy Visits Across Sialkot
            </h2>
            <p className="text-xs sm:text-sm text-[#A7A9AA] leading-relaxed max-w-2xl font-normal">
              Convenient physiotherapy services at home in Sialkot for patients who have difficulty traveling, elderly family members, post-operative recovery patients, or children requiring therapy in a familiar domestic environment.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#FAF9F5]/90">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C5B27A]" /> Post-Stroke Home Care
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C5B27A]" /> Bedside Mobility Training
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C5B27A]" /> Sialkot City Coverage
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="py-3 px-5 rounded-full bg-[#FAF9F5] text-[#243442] text-xs font-semibold tracking-wider hover:bg-[#C5B27A] hover:text-[#243442] transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call For Home Care ({CLINIC_INFO.phone})</span>
            </a>
            <button
              onClick={() => onOpenBooking('Home Physiotherapy in Sialkot')}
              className="py-3 px-5 rounded-full border border-[#C5B27A] text-[#FAF9F5] text-xs font-semibold tracking-wider hover:bg-[#C5B27A]/20 transition-colors"
            >
              Request Home Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
