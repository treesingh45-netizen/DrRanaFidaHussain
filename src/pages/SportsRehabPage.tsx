import React from 'react';
import {
  Activity,
  Zap,
  Target,
  ShieldCheck,
  RotateCw,
  Gauge,
  Phone,
  ArrowRight,
  TrendingUp,
  Check,
  Award,
} from 'lucide-react';
import { PageId } from '../types';
import { LogoEmblem } from '../components/Logo';
import { CLINIC_INFO } from '../data/clinicData';

interface SportsRehabPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceTitle?: string) => void;
}

export const SportsRehabPage: React.FC<SportsRehabPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const rehabStages = [
    {
      stage: '01',
      title: 'Assess',
      desc: 'Clinical evaluation of acute joint instability, ligament strain, pain limits, and movement compensation.',
    },
    {
      stage: '02',
      title: 'Recover',
      desc: 'Swelling management, early protected mobilization, and pain-free gentle joint range-of-motion recovery.',
    },
    {
      stage: '03',
      title: 'Strengthen',
      desc: 'Progressive resistance training, eccentric tissue loading, and kinetic chain muscular activation.',
    },
    {
      stage: '04',
      title: 'Rebuild',
      desc: 'Neuromuscular balance, sport-specific agility drills, deceleration mechanics, and plyometric conditioning.',
    },
    {
      stage: '05',
      title: 'Return',
      desc: 'Objective return-to-sport testing criteria, high-load confidence testing, and re-injury prevention.',
    },
  ];

  return (
    <div className="space-y-20 md:space-y-28 pb-20">
      {/* ==================================================
          HERO SECTION
          ================================================== */}
      <section
        id="sports-hero"
        className="pt-6 md:pt-12 border-b border-[#243442]/8 pb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#243442]/5 border border-[#243442]/10 text-xs font-semibold text-[#243442]">
                <Activity className="w-3.5 h-3.5 text-[#C5B27A]" />
                <span>Athletic Rehabilitation & Performance Recovery</span>
              </div>

              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5B27A] font-semibold block">
                  Dr. Rana Fida Hussain • Sialkot
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#243442] tracking-tight leading-[1.18]">
                  Sports Rehabilitation & Return-to-Play Care
                </h1>
              </div>

              <p className="font-serif text-lg md:text-xl text-[#243442] italic leading-relaxed">
                Structured rehabilitation designed to help athletes rebuild movement, strength and confidence after injury.
              </p>

              <p className="text-xs sm:text-sm text-[#344452] leading-relaxed font-normal">
                Whether you are a competitive athlete, a youth player, or an active individual, recovering from sports trauma requires more than passive rest. Dr. Rana Fida Hussain applies structured, progressive biomechanical conditioning to bridge the gap between initial injury healing and confident competitive play.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBooking('Sports Rehabilitation')}
                  className="px-5 py-2.5 rounded-full bg-[#243442] text-[#FAF9F5] text-xs font-semibold tracking-wider hover:bg-[#344452] transition-colors shadow-xs cursor-pointer"
                >
                  Consult Sports Physiotherapist
                </button>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="text-xs font-semibold text-[#243442] hover:text-[#C5B27A] inline-flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5B27A]" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Authentic Sports Physical Therapy Protocol Board (No AI Image) */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl border border-[#C5B27A]/30 pointer-events-none hidden sm:block" />

                <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#243442]/12 bg-[#243442] text-[#FAF9F5] p-6 sm:p-8 space-y-6">
                  {/* Top: Header with Logo */}
                  <div className="flex items-center justify-between border-b border-[#344452] pb-5">
                    <div className="flex items-center gap-3">
                      <LogoEmblem size={48} />
                      <div>
                        <h2 className="font-serif text-lg font-semibold text-[#FAF9F5]">
                          Dr. Rana Fida Hussain
                        </h2>
                        <p className="text-xs uppercase tracking-wider text-[#C5B27A] font-medium">
                          Sports Injury Rehabilitation
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] px-2 py-1 rounded bg-[#FAF9F5]/10 text-[#C5B27A] border border-[#C5B27A]/20">
                      Active Recovery
                    </span>
                  </div>

                  {/* Sports Rehabilitation Clinical Photography */}
                  <div className="relative rounded-lg overflow-hidden border border-[#344452] aspect-[16/8]">
                    <img
                      src="/services/sports-rehabilitation.jpg"
                      alt="Sports Injury Rehabilitation and Conditioning"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#243442] via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-2 left-3 text-[11px] font-medium text-[#FAF9F5] tracking-wide">
                      Targeted Athletic Recovery & Return-to-Play Progression
                    </span>
                  </div>

                  {/* Sports Rehabilitation Pillars */}
                  <div className="space-y-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold block">
                      Evidence-Based Sports Protocols
                    </span>
                    <div className="space-y-2 text-xs text-[#FAF9F5]/90">
                      <div className="flex items-start gap-2.5 bg-[#344452]/50 p-2.5 rounded-lg border border-white/5">
                        <Check className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block font-medium">ACL & Ligament Knee Rehabilitation</strong>
                          <span className="text-[#A7A9AA] text-[11px]">Post-operative recovery, joint stability & dynamic quad-hamstring balance</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 bg-[#344452]/50 p-2.5 rounded-lg border border-white/5">
                        <Check className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block font-medium">Rotator Cuff & Shoulder Stabilization</strong>
                          <span className="text-[#A7A9AA] text-[11px]">Scapulothoracic mechanics, impingement recovery & overhead strength</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 bg-[#344452]/50 p-2.5 rounded-lg border border-white/5">
                        <Check className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block font-medium">Agility & Return-To-Sport Criteria</strong>
                          <span className="text-[#A7A9AA] text-[11px]">Deceleration mechanics, cutting drills & objective limb symmetry index</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Clinical Philosophy Tag */}
                  <div className="p-3 bg-[#FAF9F5]/5 rounded-lg border border-white/10 text-xs text-[#A7A9AA] flex items-start gap-2.5">
                    <TrendingUp className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                    <span>
                      Graded load exposure ensures tissues rebuild tensile capacity, reducing the risk of recurrence upon returning to full training.
                    </span>
                  </div>

                  {/* Direct Contact */}
                  <div className="pt-2 border-t border-[#344452] flex items-center justify-between text-xs">
                    <span className="text-[#A7A9AA]">
                      Consultant Physiotherapist • Sialkot
                    </span>
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="text-[#C5B27A] font-semibold hover:underline"
                    >
                      Call {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          REHABILITATION JOURNEY (Elegant Visual Timeline)
          ================================================== */}
      <section id="sports-rehabilitation-timeline" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
            Progressive Timeline
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#243442]">
            The Rehabilitation Journey
          </h2>
          <div className="w-12 h-[2px] bg-[#C5B27A] mx-auto my-2" />
          <p className="text-xs sm:text-sm text-[#344452] leading-relaxed">
            A 5-phase pathway designed to systematically rebuild athletic capability without risking setback or premature re-injury.
          </p>
        </div>

        {/* Timeline Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {/* Connector line for large screens */}
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-[2px] bg-[#243442]/15 -z-0" />

          {rehabStages.map((st, idx) => (
            <div
              key={st.stage}
              className="relative z-10 bg-white p-5 rounded-xl border border-[#243442]/10 space-y-3 shadow-2xs hover:border-[#C5B27A] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#243442] text-[#FAF9F5] flex items-center justify-center font-serif text-xs font-semibold">
                    {st.stage}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#C5B27A] font-semibold">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="font-serif text-base font-semibold text-[#243442]">
                  {st.title}
                </h3>

                <p className="text-xs text-[#344452] leading-relaxed mt-1.5 font-normal">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          6 CORE SPORTS REHABILITATION MODULES
          ================================================== */}
      <section id="sports-core-modules" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
            Clinical Protocols
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#243442] mt-1">
            Sports Rehabilitation Focus Areas
          </h2>
          <p className="text-xs sm:text-sm text-[#344452] mt-2 leading-relaxed">
            Targeting each anatomical layer necessary for complete return-to-sport confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Sports Injury Rehabilitation',
              desc: 'Structured management of acute ligament sprains (ACL, MCL, ankle), hamstring/groin muscle strains, and repetitive overuse tendinopathies.',
              icon: Activity,
            },
            {
              title: 'Mobility Restoration',
              desc: 'Specific joint mobilization and capsular stretching to restore the full anatomical degrees of freedom required for athletic agility.',
              icon: RotateCw,
            },
            {
              title: 'Strength Development',
              desc: 'Progressive overload, isolated muscle activation, and eccentric loading to rebuild force capacity and protect vulnerable joints from impact.',
              icon: Zap,
            },
            {
              title: 'Balance Training',
              desc: 'Proprioceptive and vestibular neuromuscular challenge on unstable surfaces to re-educate fast postural corrections during play.',
              icon: Target,
            },
            {
              title: 'Functional Rehabilitation',
              desc: 'Translating gym strength into multi-planar running, cutting, jumping, and deceleration movement patterns specific to the athlete’s sport.',
              icon: TrendingUp,
            },
            {
              title: 'Return-to-Play Progression',
              desc: 'Objective clinical criteria benchmarks ensuring the athlete demonstrates limb symmetry, explosive power, and psychological readiness before returning to competition.',
              icon: Gauge,
            },
          ].map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#243442]/10 space-y-3 hover:border-[#C5B27A]/70 transition-colors shadow-2xs"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#243442]/10 flex items-center justify-center text-[#243442]">
                  <IconComp className="w-5 h-5 text-[#C5B27A]" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#243442]">
                  {sec.title}
                </h3>
                <p className="text-xs text-[#344452] leading-relaxed font-normal">
                  {sec.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==================================================
          ATHLETE-FOCUSED CARE
          ================================================== */}
      <section
        id="sports-athlete-focused"
        className="bg-[#243442] text-[#FAF9F5] py-16 border-y border-[#344452]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5B27A] font-semibold">
              The Athlete’s Mind & Body
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FAF9F5]">
              Restoring Complete Athletic Performance
            </h2>
            <div className="w-12 h-[2px] bg-[#C5B27A] mx-auto my-2" />
            <p className="text-xs sm:text-sm text-[#A7A9AA] leading-relaxed">
              True sports rehabilitation extends beyond resolving resting discomfort. We systematically restore all six essential performance pillars:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Strength', desc: 'Symmetrical force generation and joint protection.' },
              { label: 'Mobility', desc: 'Fluid, unrestricted joint and muscle range.' },
              { label: 'Balance', desc: 'Rapid proprioceptive response during dynamic shifts.' },
              { label: 'Coordination', desc: 'Seamless kinetic integration across all movement chains.' },
              { label: 'Functional Movement', desc: 'Sport-specific jumping, cutting, and acceleration.' },
              { label: 'Confidence', desc: 'Trusting the injured limb without mental hesitation.' },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAF9F5]/5 border border-[#FAF9F5]/10 text-center space-y-1.5"
              >
                <div className="w-7 h-7 rounded-full bg-[#C5B27A]/20 flex items-center justify-center text-[#C5B27A] mx-auto text-xs font-semibold">
                  {idx + 1}
                </div>
                <h4 className="text-xs font-semibold text-[#FAF9F5]">
                  {pillar.label}
                </h4>
                <p className="text-[11px] text-[#A7A9AA] leading-snug font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-10 text-center">
            <button
              onClick={() => onOpenBooking('Sports Rehabilitation Consultation')}
              className="px-6 py-3 rounded-full bg-[#C5B27A] text-[#243442] text-xs font-semibold tracking-wider hover:bg-[#D2C49A] transition-colors shadow-xs cursor-pointer"
            >
              Discuss Your Sports Recovery
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsRehabPage;
