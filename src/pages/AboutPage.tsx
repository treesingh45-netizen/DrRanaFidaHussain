import React from 'react';
import {
  Baby,
  Activity,
  HeartPulse,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  Award,
  Hospital,
  MapPin,
  Clock,
  Check,
} from 'lucide-react';
import { PageId } from '../types';
import { LogoEmblem } from '../components/Logo';
import { CLINIC_INFO } from '../data/clinicData';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <div className="space-y-20 md:space-y-28 pb-20">
      {/* ==================================================
          HERO & PORTRAIT / CREDENTIALS BOARD
          ================================================== */}
      <section
        id="about-hero"
        className="pt-6 md:pt-10 border-b border-[#243442]/8 pb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Authentic Consultant Credential Panel (No AI Image) */}
            <div className="lg:col-span-5">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-2.5 rounded-2xl border border-[#C5B27A]/30 pointer-events-none hidden sm:block" />

                <div className="relative rounded-xl overflow-hidden shadow-md border border-[#243442]/12 bg-[#243442] text-[#FAF9F5] p-7 space-y-6">
                  {/* Top: Doctor Portrait, Official Clinic Logo & Title */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-[#344452] pb-6">
                    <div className="relative shrink-0">
                      <img
                        src={CLINIC_INFO.doctorImage}
                        alt="Dr. Rana Fida Hussain - Consultant Physiotherapist"
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover border-2 border-[#C5B27A] shadow-md"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-[#243442] p-1 rounded-full border border-[#C5B27A]">
                        <LogoEmblem size={24} />
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5B27A] font-semibold block">
                        Professional Profile
                      </span>
                      <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#FAF9F5] mt-1">
                        Dr. Rana Fida Hussain
                      </h2>
                      <p className="text-xs text-[#A7A9AA] font-medium tracking-wide">
                        Consultant Physiotherapist
                      </p>
                      <p className="text-[11px] text-[#C5B27A] pt-1">
                        Sialkot, Pakistan • In-Clinic & Home
                      </p>
                    </div>
                  </div>

                  {/* Key Practice Credibility Indicators */}
                  <div className="space-y-3 text-xs">
                    <div className="flex items-start gap-3 bg-[#344452]/40 p-3 rounded-lg border border-white/5">
                      <Hospital className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-medium block">Clinical Affiliation</strong>
                        <span className="text-[#A7A9AA] text-[11px] leading-relaxed">
                          Allama Iqbal Children Hospital, Commissioner Rd, Sialkot
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-[#344452]/40 p-3 rounded-lg border border-white/5">
                      <Award className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-medium block">Clinical Specialization</strong>
                        <span className="text-[#A7A9AA] text-[11px] leading-relaxed">
                          Pediatric Physiotherapy • Sports Rehabilitation • Chronic Pain
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-[#344452]/40 p-3 rounded-lg border border-white/5">
                      <Clock className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-medium block">Consultation Availability</strong>
                        <span className="text-[#A7A9AA] text-[11px] leading-relaxed">
                          Monday – Saturday: 10:00 AM – 8:00 PM • Home visits by arrangement
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Button */}
                  <div className="pt-2 border-t border-[#344452] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#A7A9AA] block">
                        Direct Patient Line
                      </span>
                      <a
                        href={`tel:${CLINIC_INFO.phone}`}
                        className="text-sm font-semibold text-[#C5B27A] hover:underline"
                      >
                        {CLINIC_INFO.phone}
                      </a>
                    </div>
                    <button
                      onClick={onOpenBooking}
                      className="px-3.5 py-2 rounded-lg bg-[#C5B27A] text-[#243442] text-xs font-semibold hover:bg-[#D2C49A] transition-colors cursor-pointer"
                    >
                      Book Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Content & Profile Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5B27A] font-semibold block">
                  Clinical Profile
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#243442] tracking-tight">
                  Meet Dr. Rana Fida Hussain
                </h1>
                <p className="text-sm uppercase tracking-[0.2em] text-[#344452] font-medium">
                  Consultant Physiotherapist
                </p>
              </div>

              <div className="space-y-4 text-sm text-[#344452] leading-relaxed font-normal">
                <p>
                  Dr. Rana Fida Hussain is a dedicated Consultant Physiotherapist based in Sialkot, Pakistan. His clinical practice centers on restoring physical movement, relieving pain, and helping individuals—from infants to athletes and older adults—regain functional independence.
                </p>
                <p>
                  With specialized clinical interests in Pediatric Physiotherapy, Sports Rehabilitation, Chronic Pain Management, Post-Surgical Rehabilitation, and Home Physiotherapy, Dr. Rana Fida Hussain emphasizes thorough individual physical assessment, evidence-informed manual techniques, and patient-centered rehabilitation programs.
                </p>
                <p>
                  Practicing at Allama Iqbal Children Hospital on Commissioner Road in Sialkot, Dr. Rana Fida Hussain provides both dedicated in-clinic treatment and convenient home physiotherapy visits for patients with mobility limitations or post-operative restrictions throughout the city.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-lg bg-white border border-[#243442]/10 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#A7A9AA] font-semibold block">
                    Clinical Location
                  </span>
                  <p className="text-xs font-semibold text-[#243442]">
                    Allama Iqbal Children Hospital
                  </p>
                  <p className="text-[11px] text-[#344452]">
                    Commissioner Rd, Muhammadpura, Sialkot
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-white border border-[#243442]/10 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#A7A9AA] font-semibold block">
                    Direct Contact
                  </span>
                  <p className="text-xs font-semibold text-[#243442]">
                    {CLINIC_INFO.phone}
                  </p>
                  <p className="text-[11px] text-[#344452]">
                    Clinic Consultation & Home Visits
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#243442] hover:text-[#C5B27A] border-b border-[#243442] hover:border-[#C5B27A] pb-1 transition-colors cursor-pointer"
                >
                  <span>Contact Clinic</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5B27A]" />
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs text-[#344452] hover:text-[#243442] transition-colors uppercase tracking-wider font-medium cursor-pointer"
                >
                  Explore Treatment Disciplines
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SPECIAL INTERESTS (4 Elegant Cards)
          ================================================== */}
      <section id="about-special-interests" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
            Dedicated Focus Areas
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#243442]">
            Clinical Special Interests
          </h2>
          <div className="w-12 h-[2px] bg-[#C5B27A] mx-auto my-2" />
          <p className="text-xs sm:text-sm text-[#344452] leading-relaxed">
            Focused disciplines where specialized clinical knowledge and targeted movement protocols create tangible recovery outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Item 1 */}
          <div className="bg-white p-6 rounded-xl border border-[#243442]/10 space-y-3 hover:border-[#C5B27A] transition-colors shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#243442]/10 flex items-center justify-center text-[#243442]">
              <Baby className="w-5 h-5 text-[#C5B27A]" />
            </div>
            <h3 className="font-serif text-base font-semibold text-[#243442]">
              Pediatric Physiotherapy
            </h3>
            <p className="text-xs text-[#344452] leading-relaxed">
              Early motor facilitation, developmental milestones, cerebral palsy support, and pediatric posture rehabilitation adapted warmly for growing children.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-white p-6 rounded-xl border border-[#243442]/10 space-y-3 hover:border-[#C5B27A] transition-colors shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#243442]/10 flex items-center justify-center text-[#243442]">
              <Activity className="w-5 h-5 text-[#C5B27A]" />
            </div>
            <h3 className="font-serif text-base font-semibold text-[#243442]">
              Sports Injuries & Return-to-Play
            </h3>
            <p className="text-xs text-[#344452] leading-relaxed">
              Targeted ligament sprain recovery, muscle strain healing, joint stabilization drills, and safe, progressive return-to-sport protocols for athletes.
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-white p-6 rounded-xl border border-[#243442]/10 space-y-3 hover:border-[#C5B27A] transition-colors shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#243442]/10 flex items-center justify-center text-[#243442]">
              <HeartPulse className="w-5 h-5 text-[#C5B27A]" />
            </div>
            <h3 className="font-serif text-base font-semibold text-[#243442]">
              Post-Surgical Rehabilitation
            </h3>
            <p className="text-xs text-[#344452] leading-relaxed">
              Phased post-operative movement re-education, swelling resolution, joint mobilization, and strength rebuilding after orthopedic or spinal surgeries.
            </p>
          </div>

          {/* Item 4 */}
          <div className="bg-white p-6 rounded-xl border border-[#243442]/10 space-y-3 hover:border-[#C5B27A] transition-colors shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#243442]/10 flex items-center justify-center text-[#243442]">
              <ShieldCheck className="w-5 h-5 text-[#C5B27A]" />
            </div>
            <h3 className="font-serif text-base font-semibold text-[#243442]">
              Chronic Pain & Long-Term Conditions
            </h3>
            <p className="text-xs text-[#344452] leading-relaxed">
              Comprehensive movement strategies for persistent lumbar and neck pain, joint osteoarthritis, and repetitive strain with long-term functional goals.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          PHILOSOPHY (Editorial-Style Statement)
          ================================================== */}
      <section
        id="about-philosophy"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="py-12 px-6 sm:px-12 bg-white rounded-2xl border border-[#243442]/12 shadow-xs space-y-6 relative overflow-hidden">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5B27A] font-semibold">
            Clinical Philosophy
          </span>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#243442] italic leading-snug font-normal max-w-2xl mx-auto">
            “Movement is not only about strength. It is about confidence, independence and quality of life.”
          </blockquote>

          {/* Subtle signature-style script font for personal branding */}
          <div className="pt-2">
            <span className="font-signature text-3xl sm:text-4xl text-[#243442] block">
              Dr. Rana Fida Hussain
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#A7A9AA] font-medium">
              Consultant Physiotherapist
            </span>
          </div>
        </div>
      </section>

      {/* ==================================================
          WHAT PATIENTS CAN EXPECT (5 Clear Steps)
          ================================================== */}
      <section id="about-what-to-expect" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
            Patient Journey
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#243442] mt-1">
            What Patients Can Expect
          </h2>
          <p className="text-xs sm:text-sm text-[#344452] mt-2 leading-relaxed">
            Every clinical encounter is structured to provide clarity, comfort, and professional accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {[
            {
              step: '01',
              title: 'Assessment',
              desc: 'In-depth diagnostic evaluation of physical movement, joint range, strength, and individual pain patterns.',
            },
            {
              step: '02',
              title: 'Personalized Plan',
              desc: 'Tailored rehabilitation strategy formulated collaboratively according to your physical capabilities and lifestyle.',
            },
            {
              step: '03',
              title: 'Guided Treatment',
              desc: 'Hands-on clinical therapy, corrective exercise instructions, and safe movement facilitation during each session.',
            },
            {
              step: '04',
              title: 'Progress Tracking',
              desc: 'Continuous re-evaluation of functional milestones, range improvements, and pain reduction.',
            },
            {
              step: '05',
              title: 'Practical Home Guidance',
              desc: 'Empowering home exercise routines, ergonomics, and daily posture advice for sustained long-term well-being.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="p-5 bg-white rounded-xl border border-[#243442]/10 space-y-2 text-left shadow-2xs hover:border-[#C5B27A]/60 transition-colors"
            >
              <span className="font-serif text-xs font-semibold text-[#C5B27A] block">
                Step {item.step}
              </span>
              <h3 className="text-sm font-semibold text-[#243442]">
                {item.title}
              </h3>
              <p className="text-xs text-[#344452] leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
