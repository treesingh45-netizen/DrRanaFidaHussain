import React from 'react';
import {
  ArrowRight,
  Baby,
  Activity,
  ShieldCheck,
  ClipboardCheck,
  FileText,
  HeartPulse,
  TrendingUp,
  MapPin,
  Check,
  ChevronRight,
  Phone,
  Calendar,
  Clock,
} from 'lucide-react';
import { PageId } from '../types';
import Logo, { LogoEmblem } from '../components/Logo';
import { CLINIC_INFO, TRUST_POINTS, TREATMENT_PROCESS } from '../data/clinicData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-24 md:space-y-32 pb-20">
      {/* ==================================================
          HERO SECTION
          ================================================== */}
      <section
        id="home-hero"
        className="pt-6 md:pt-12 border-b border-[#243442]/8 pb-16 md:pb-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text & Editorial Introduction */}
            <div className="lg:col-span-6 space-y-7">
              {/* Refined emblem & doctor badge with top-side short one line */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="inline-flex items-center gap-2.5 py-1.5 px-3 rounded-full bg-[#243442]/5 border border-[#243442]/10">
                  <LogoEmblem size={24} />
                  <div className="text-left leading-tight">
                    <span className="font-serif text-xs font-semibold text-[#243442] tracking-wider uppercase">
                      Dr. Rana Fida Hussain
                    </span>
                    <span className="text-[10px] text-[#C5B27A] font-medium tracking-widest block uppercase">
                      Consultant Physiotherapist
                    </span>
                  </div>
                </div>

                {/* Top side short one line: Pediatric Care • Sports Rehabilitation */}
                <div className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#C5B27A]/15 border border-[#C5B27A]/30 text-xs text-[#243442] font-semibold whitespace-nowrap">
                  <span className="text-[#C5B27A]">★</span>
                  <span>Pediatric Care • Sports Rehabilitation</span>
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#344452] font-semibold block">
                  Physiotherapy Clinic • Sialkot
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#243442] tracking-tight leading-[1.18]">
                  Physiotherapy Care Designed Around Your Recovery
                </h1>
              </div>

              {/* Supporting Text */}
              <p className="text-sm md:text-base text-[#344452] leading-relaxed max-w-xl font-normal">
                Personalized physiotherapy for children, athletes and adults, with focused care for movement difficulties, sports injuries, chronic pain and rehabilitation.
              </p>

              {/* Top side highlight: Pediatric Care & Sports Rehabilitation short one line */}
              <div className="pt-1 space-y-2">
                <span className="text-xs uppercase tracking-[0.18em] text-[#243442] font-medium block">
                  Special Interests:
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-xs px-3 py-1.5 rounded-md bg-white border border-[#243442]/10 text-[#243442] font-medium whitespace-nowrap">
                    Pediatric Care
                  </span>
                  <span className="text-xs px-3 py-1.5 rounded-md bg-white border border-[#243442]/10 text-[#243442] font-medium whitespace-nowrap">
                    Sports Rehabilitation
                  </span>
                  <span className="text-xs px-3 py-1.5 rounded-md bg-white border border-[#243442]/10 text-[#243442] font-medium whitespace-nowrap">
                    Chronic Pain Management
                  </span>
                </div>
              </div>

              {/* Refined Small Text Links */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-sm">
                <button
                  onClick={() => onNavigate('services')}
                  className="group inline-flex items-center gap-2 font-semibold text-[#243442] hover:text-[#C5B27A] transition-colors cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C5B27A]" />
                </button>

                <button
                  onClick={() => onNavigate('about')}
                  className="text-[#344452] hover:text-[#243442] hover:underline underline-offset-4 transition-colors text-xs tracking-wider uppercase font-medium cursor-pointer"
                >
                  Meet Dr. Rana Fida Hussain
                </button>
              </div>

              {/* Micro clinic notice */}
              <div className="pt-2 flex items-center gap-2 text-xs text-[#344452]/90 border-t border-[#243442]/10">
                <MapPin className="w-3.5 h-3.5 text-[#C5B27A] shrink-0" />
                <span>
                  Allama Iqbal Children Hospital, Commissioner Rd, Sialkot • Home visits available
                </span>
              </div>
            </div>

            {/* Right Column: Institutional Clinical Overview Board (Authentic, No AI Images) */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Decorative subtle border frame */}
                <div className="absolute -inset-2 rounded-2xl border border-[#C5B27A]/30 pointer-events-none hidden sm:block" />

                <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#243442]/12 bg-[#243442] text-[#FAF9F5] p-6 sm:p-8 space-y-6">
                  {/* Top Bar inside card with Doctor Portrait & Official Logo */}
                  <div className="flex items-center justify-between border-b border-[#344452] pb-5">
                    <div className="flex items-center gap-3.5">
                      <div className="relative shrink-0">
                        <img
                          src={CLINIC_INFO.doctorImage}
                          alt="Dr. Rana Fida Hussain"
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border-2 border-[#C5B27A] shadow-xs"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-[#243442] p-0.5 rounded-full border border-[#C5B27A]">
                          <LogoEmblem size={18} />
                        </div>
                      </div>
                      <div>
                        <h2 className="font-serif text-lg sm:text-xl font-semibold text-[#FAF9F5]">
                          Dr. Rana Fida Hussain
                        </h2>
                        <p className="text-xs uppercase tracking-widest text-[#C5B27A] font-medium">
                          Consultant Physiotherapist
                        </p>
                        <p className="text-[11px] text-[#A7A9AA] pt-0.5">
                          Dr Fida Hussain Physiotherapy Centre
                        </p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block text-[11px] px-2.5 py-1 rounded bg-[#FAF9F5]/10 text-[#C5B27A] border border-[#C5B27A]/30 font-medium">
                      Sialkot Practice
                    </span>
                  </div>

                  {/* Core Clinical Practice Highlights */}
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
                      Clinical Focus & Direct Care
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#FAF9F5]/90">
                      <div className="flex items-start gap-2 bg-[#344452]/50 p-2.5 rounded-lg border border-white/5">
                        <Check className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-white font-medium">Pediatric Physiotherapy</strong>
                          <span className="text-[#A7A9AA] text-[11px]">Developmental delay & milestones</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 bg-[#344452]/50 p-2.5 rounded-lg border border-white/5">
                        <Check className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-white font-medium">Sports Rehabilitation</strong>
                          <span className="text-[#A7A9AA] text-[11px]">Sprains, ACL & return-to-play</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 bg-[#344452]/50 p-2.5 rounded-lg border border-white/5">
                        <Check className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-white font-medium">Chronic Pain Relief</strong>
                          <span className="text-[#A7A9AA] text-[11px]">Spine, neck, joints & sciatica</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 bg-[#344452]/50 p-2.5 rounded-lg border border-white/5">
                        <Check className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-white font-medium">Home Physiotherapy</strong>
                          <span className="text-[#A7A9AA] text-[11px]">Direct patient visits in Sialkot</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hospital & Location Details */}
                  <div className="p-3.5 rounded-lg bg-[#FAF9F5]/5 border border-white/10 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-[#C5B27A]">
                      <MapPin className="w-4 h-4 shrink-0" />
                      <span className="font-semibold text-white">Clinical Base</span>
                    </div>
                    <p className="text-[#A7A9AA] pl-6 leading-relaxed">
                      Allama Iqbal Children Hospital, Commissioner Rd, Opposite Civil Hospital, Sialkot
                    </p>
                    <div className="flex items-center gap-4 pl-6 pt-1 text-[11px] text-[#A7A9AA]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#C5B27A]" /> Mon – Sat: 10 AM – 8 PM
                      </span>
                    </div>
                  </div>

                  {/* Direct Contact & Appointment Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#C5B27A] hover:bg-[#D2C49A] text-[#243442] font-semibold text-xs tracking-wider uppercase transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call {CLINIC_INFO.phone}</span>
                    </a>
                    <button
                      onClick={onOpenBooking}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-transparent hover:bg-white/10 text-white border border-white/20 font-medium text-xs tracking-wider transition-colors cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#C5B27A]" />
                      <span>Request Consultation</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          INTRODUCTION
          ================================================== */}
      <section id="home-introduction" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.22em] text-[#C5B27A] font-semibold">
            Clinical Philosophy
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#243442]">
            Professional Physiotherapy With a Personal Approach
          </h2>
          <div className="w-12 h-[2px] bg-[#C5B27A] mx-auto my-3" />
          <p className="text-sm md:text-base text-[#344452] leading-relaxed">
            Every patient brings a unique set of circumstances, anatomical considerations, and personal recovery goals. Whether supporting a child achieving developmental independence, an athlete returning to competitive sport, or an adult overcoming chronic spine or joint pain, our clinical focus remains anchored in structured, individualized progression.
          </p>
        </div>

        {/* 6 Key Pillars from Prompt */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            {
              title: 'Individual Assessment',
              desc: 'Thorough evaluation of movement, posture, and biomechanics.',
            },
            {
              title: 'Personalized Treatment',
              desc: 'Protocols tailored strictly to your condition and pace.',
            },
            {
              title: 'Functional Rehabilitation',
              desc: 'Restoring real-world independence and daily physical capacity.',
            },
            {
              title: 'Progressive Exercise',
              desc: 'Graded loading and movement drills to rebuild tissue capacity.',
            },
            {
              title: 'Patient Education',
              desc: 'Clear guidance on posture, joint safety, and ergonomics.',
            },
            {
              title: 'Progress Monitoring',
              desc: 'Regular clinical reviews to ensure measurable improvement.',
            },
          ].map((pillar, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-lg border border-[#243442]/8 hover:border-[#C5B27A]/50 transition-colors text-left space-y-1.5"
            >
              <div className="w-6 h-6 rounded-full bg-[#243442]/6 flex items-center justify-center text-[#243442] mb-2">
                <Check className="w-3.5 h-3.5 text-[#C5B27A]" />
              </div>
              <h3 className="text-xs font-semibold text-[#243442] leading-snug">
                {pillar.title}
              </h3>
              <p className="text-[11px] text-[#344452] leading-normal font-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          SPECIALIST AREAS (Authentic Clinical Cards, No AI Images)
          ================================================== */}
      <section id="home-specialist-areas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#243442]/10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
              Primary Disciplines
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#243442] mt-1">
              Specialist Areas of Practice
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="text-xs uppercase tracking-wider font-semibold text-[#243442] hover:text-[#C5B27A] transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <span>View All Services</span>
            <ChevronRight className="w-4 h-4 text-[#C5B27A]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Pediatric Physiotherapy */}
          <div className="bg-white rounded-xl border border-[#243442]/10 overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col">
            <div className="aspect-[16/10] overflow-hidden bg-[#243442]/5 relative">
              <img
                src="/services/pediatric-physiotherapy.jpg"
                alt="Pediatric Physiotherapy"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-[#FAF9F5]/90 backdrop-blur-xs flex items-center justify-center shadow-xs">
                <Baby className="w-5 h-5 text-[#243442]" />
              </div>
              <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider text-[#243442] font-semibold px-2 py-0.5 rounded-full bg-[#C5B27A] shadow-xs">
                Infants & Children
              </span>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-semibold text-[#243442]">
                  Pediatric Physiotherapy
                </h3>
                <p className="text-xs text-[#344452] leading-relaxed">
                  Gentle, child-friendly care for infants and children experiencing developmental delays, delayed motor milestones, cerebral palsy, toe walking, and balance challenges in Sialkot.
                </p>
                <ul className="text-xs text-[#344452] space-y-1.5 pt-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A]" />
                    Delayed motor milestones & sitting support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A]" />
                    Cerebral palsy & neuromuscular guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A]" />
                    Torticollis, toe walking & gait re-education
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#243442]/8 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('pediatric')}
                  className="text-xs font-semibold text-[#243442] group-hover:text-[#C5B27A] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Pediatric Care Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5B27A] transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-[11px] text-[#A7A9AA]">In-Clinic & Home</span>
              </div>
            </div>
          </div>

          {/* Card 2: Sports Rehabilitation */}
          <div className="bg-white rounded-xl border border-[#243442]/10 overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col">
            <div className="aspect-[16/10] overflow-hidden bg-[#243442]/5 relative">
              <img
                src="/services/sports-rehabilitation.jpg"
                alt="Sports Rehabilitation"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-[#FAF9F5]/90 backdrop-blur-xs flex items-center justify-center shadow-xs">
                <Activity className="w-5 h-5 text-[#243442]" />
              </div>
              <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider text-[#243442] font-semibold px-2 py-0.5 rounded-full bg-[#C5B27A] shadow-xs">
                Athletes & Recovery
              </span>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-semibold text-[#243442]">
                  Sports Rehabilitation
                </h3>
                <p className="text-xs text-[#344452] leading-relaxed">
                  Evidence-based rehabilitation protocols for acute ligament sprains, muscle strains, knee and shoulder injuries, and structured return-to-play conditioning.
                </p>
                <ul className="text-xs text-[#344452] space-y-1.5 pt-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A]" />
                    Ligament sprains, tears & tendon recovery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A]" />
                    ACL, meniscus & knee stability training
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A]" />
                    Objective return-to-sport testing criteria
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#243442]/8 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('sports')}
                  className="text-xs font-semibold text-[#243442] group-hover:text-[#C5B27A] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Sports Rehab Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5B27A] transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-[11px] text-[#A7A9AA]">Graded Loading</span>
              </div>
            </div>
          </div>

          {/* Card 3: Chronic Pain Management */}
          <div className="bg-white rounded-xl border border-[#243442]/10 overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col">
            <div className="aspect-[16/10] overflow-hidden bg-[#243442]/5 relative">
              <img
                src="/services/chronic-pain-management.jpg"
                alt="Chronic Pain Management"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-[#FAF9F5]/90 backdrop-blur-xs flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#243442]" />
              </div>
              <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider text-[#243442] font-semibold px-2 py-0.5 rounded-full bg-[#C5B27A] shadow-xs">
                Spine & Joint Health
              </span>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-semibold text-[#243442]">
                  Chronic Pain Management
                </h3>
                <p className="text-xs text-[#344452] leading-relaxed">
                  Targeted, movement-centered support for long-standing back pain, neck stiffness, sciatica, knee osteoarthritis, and posture-related muscular tension.
                </p>
                <ul className="text-xs text-[#344452] space-y-1.5 pt-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A]" />
                    Persistent lumbar, thoracic & cervical pain
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A]" />
                    Sciatica nerve flossing & decompression
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A]" />
                    Joint mobilization & active re-education
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#243442]/8 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-semibold text-[#243442] group-hover:text-[#C5B27A] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Explore Care Plan</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5B27A] transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-[11px] text-[#A7A9AA]">Individualized</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          WHY PATIENTS CHOOSE THE CLINIC (Refined Trust Section)
          ================================================== */}
      <section
        id="home-why-choose"
        className="bg-[#243442]/4 py-16 border-y border-[#243442]/8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
              Clinical Standards
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#243442] mt-1">
              Why Patients Choose The Clinic
            </h2>
            <p className="text-xs sm:text-sm text-[#344452] mt-2 leading-relaxed">
              We focus strictly on authentic, compassionate clinical care and evidence-informed physiotherapy methods tailored to the patient’s real recovery requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRUST_POINTS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-white rounded-xl border border-[#243442]/10 space-y-2 hover:border-[#C5B27A]/60 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#C5B27A]" />
                  <h3 className="text-sm font-semibold text-[#243442]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#344452] leading-relaxed pl-4 font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          TREATMENT APPROACH (Visual Process With Lines)
          ================================================== */}
      <section id="home-treatment-approach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
            Patient Pathway
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#243442]">
            Our Treatment Approach
          </h2>
          <p className="text-xs sm:text-sm text-[#344452] leading-relaxed">
            A structured, step-by-step pathway from the initial diagnostic physical assessment through functional restoration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Subtle line connection on desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-[#243442]/15 -z-0" />

          {TREATMENT_PROCESS.map((proc, index) => {
            const icons = [ClipboardCheck, FileText, HeartPulse, TrendingUp];
            const StepIcon = icons[index];

            return (
              <div
                key={proc.step}
                className="relative bg-white p-6 rounded-xl border border-[#243442]/10 space-y-3 z-10 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-full bg-[#FAF9F5] border border-[#243442]/15 flex items-center justify-center text-[#243442] shadow-xs">
                      <StepIcon className="w-5 h-5 text-[#C5B27A]" />
                    </div>
                    <span className="font-serif text-sm font-semibold text-[#A7A9AA]">
                      {proc.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-base font-semibold text-[#243442]">
                    {proc.title}
                  </h3>
                  <p className="text-xs text-[#344452] leading-relaxed mt-2">
                    {proc.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          FINAL HOME SECTION
          ================================================== */}
      <section
        id="home-final-section"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8"
      >
        <div className="p-8 sm:p-12 rounded-2xl bg-[#243442] text-[#FAF9F5] space-y-5 shadow-sm border border-[#344452]">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5B27A] font-semibold">
            Dr. Rana Fida Hussain • Consultant Physiotherapist
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#FAF9F5] leading-snug">
            Better Movement Begins With the Right Care
          </h2>

          <p className="text-xs sm:text-sm text-[#A7A9AA] max-w-xl mx-auto leading-relaxed">
            Explore our physiotherapy services and find the right approach for your rehabilitation needs.
          </p>

          <div className="pt-3">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#FAF9F5] hover:text-[#C5B27A] border-b border-[#C5B27A] pb-1 transition-colors cursor-pointer"
            >
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5B27A]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
