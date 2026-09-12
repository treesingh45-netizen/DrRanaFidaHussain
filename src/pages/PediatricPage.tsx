import React from 'react';
import {
  Baby,
  Heart,
  Sparkles,
  ClipboardCheck,
  FileCheck,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  Info,
  Check,
  Shield,
} from 'lucide-react';
import { PageId } from '../types';
import { LogoEmblem } from '../components/Logo';
import { CLINIC_INFO } from '../data/clinicData';

interface PediatricPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: (serviceTitle?: string) => void;
}

export const PediatricPage: React.FC<PediatricPageProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <div className="space-y-20 md:space-y-28 pb-20">
      {/* ==================================================
          HERO SECTION
          ================================================== */}
      <section
        id="pediatric-hero"
        className="pt-6 md:pt-12 border-b border-[#243442]/8 pb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#243442]/5 border border-[#243442]/10 text-xs font-semibold text-[#243442]">
                <Baby className="w-3.5 h-3.5 text-[#C5B27A]" />
                <span>Specialist Pediatric Physiotherapy Practice</span>
              </div>

              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C5B27A] font-semibold block">
                  Allama Iqbal Children Hospital • Sialkot
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#243442] tracking-tight leading-[1.18]">
                  Pediatric Physiotherapy in Sialkot
                </h1>
              </div>

              <p className="font-serif text-lg md:text-xl text-[#243442] italic leading-relaxed">
                Helping children develop movement, strength, balance and confidence.
              </p>

              <p className="text-xs sm:text-sm text-[#344452] leading-relaxed font-normal">
                Dr. Rana Fida Hussain provides compassionate, specialized physical therapy tailored specifically to infants, toddlers, and growing children. Our clinical approach recognizes that pediatric rehabilitation requires gentle patience, play-based motivation, and consistent collaboration with parents.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBooking('Pediatric Physiotherapy')}
                  className="px-5 py-2.5 rounded-full bg-[#243442] text-[#FAF9F5] text-xs font-semibold tracking-wider hover:bg-[#344452] transition-colors shadow-xs cursor-pointer"
                >
                  Consult Pediatric Physiotherapist
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

            {/* Right Column: Authentic Clinical Framework Board (No AI Image) */}
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
                          Pediatric Physiotherapy Clinic
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] px-2 py-1 rounded bg-[#FAF9F5]/10 text-[#C5B27A] border border-[#C5B27A]/20">
                      Children Hospital
                    </span>
                  </div>

                  {/* Pediatric Clinical Photography */}
                  <div className="relative rounded-lg overflow-hidden border border-[#344452] aspect-[16/8]">
                    <img
                      src="/services/pediatric-physiotherapy.jpg"
                      alt="Pediatric Physiotherapy Gentle Care"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#243442] via-transparent to-transparent opacity-80" />
                    <span className="absolute bottom-2 left-3 text-[11px] font-medium text-[#FAF9F5] tracking-wide">
                      Gentle Pediatric Mobility & Milestone Therapy
                    </span>
                  </div>

                  {/* Focus Areas for Children */}
                  <div className="space-y-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold block">
                      Core Developmental Programs
                    </span>
                    <div className="space-y-2 text-xs text-[#FAF9F5]/90">
                      <div className="flex items-start gap-2.5 bg-[#344452]/50 p-2.5 rounded-lg border border-white/5">
                        <Check className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block font-medium">Delayed Motor Milestones</strong>
                          <span className="text-[#A7A9AA] text-[11px]">Rolling, sitting balance, crawling & unassisted standing</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 bg-[#344452]/50 p-2.5 rounded-lg border border-white/5">
                        <Check className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block font-medium">Cerebral Palsy & Neurological Support</strong>
                          <span className="text-[#A7A9AA] text-[11px]">Muscle tone management, posture control & adaptive exercises</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 bg-[#344452]/50 p-2.5 rounded-lg border border-white/5">
                        <Check className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-white block font-medium">Torticollis & Toe Walking</strong>
                          <span className="text-[#A7A9AA] text-[11px]">Gentle neck mobility stretches & symmetrical gait training</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reassurance note */}
                  <div className="p-3 bg-[#FAF9F5]/5 rounded-lg border border-white/10 text-xs text-[#A7A9AA] flex items-start gap-2.5">
                    <Heart className="w-4 h-4 text-[#C5B27A] shrink-0 mt-0.5" />
                    <span>
                      Play-based, gentle clinical exercises designed to keep children calm, safe, and actively motivated throughout each rehabilitation session.
                    </span>
                  </div>

                  {/* Direct Contact */}
                  <div className="pt-2 border-t border-[#344452] flex items-center justify-between text-xs">
                    <span className="text-[#A7A9AA]">
                      In-Clinic & Home Visits Available
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
          WHEN PEDIATRIC PHYSIOTHERAPY MAY HELP
          ================================================== */}
      <section id="pediatric-when-it-helps" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
            Clinical Indications
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#243442]">
            When Pediatric Physiotherapy May Help
          </h2>
          <div className="w-12 h-[2px] bg-[#C5B27A] mx-auto my-2" />
          <p className="text-xs sm:text-sm text-[#344452] leading-relaxed">
            Early intervention can make a meaningful difference in a child’s physical confidence, motor symmetry, and functional development.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { title: 'Developmental Delays', desc: 'Slower acquisition of fundamental physical milestones.' },
            { title: 'Delayed Milestones', desc: 'Delay in rolling, unassisted sitting, crawling, or pulling to stand.' },
            { title: 'Cerebral Palsy', desc: 'Individualized therapy to support motor tone, balance, and mobility.' },
            { title: 'Toe Walking', desc: 'Sensory-motor retraining and calf tendon flexibility.' },
            { title: 'Gait Difficulties', desc: 'Asymmetrical steps, stumbling, or unusual walking patterns.' },
            { title: 'Weakness', desc: 'Reduced muscular endurance or generalized low muscle tone.' },
            { title: 'Balance Difficulties', desc: 'Instability during standing, transitional moves, or walking.' },
            { title: 'Torticollis', desc: 'Persistent head tilting or preference for turning in one direction.' },
            { title: 'Poor Neck Control', desc: 'Difficulty holding the head upright and steady.' },
            { title: 'Difficulty Sitting', desc: 'Trouble maintaining an upright trunk without hands or supports.' },
            { title: 'Difficulty Standing', desc: 'Hesitation or weakness when bearing weight on lower limbs.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-xl border border-[#243442]/10 space-y-1.5 hover:border-[#C5B27A]/60 transition-colors shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A]" />
                <h3 className="text-xs sm:text-sm font-semibold text-[#243442]">
                  {item.title}
                </h3>
              </div>
              <p className="text-[11px] text-[#344452] leading-snug font-normal pl-3.5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          CHILD-CENTERED CARE
          ================================================== */}
      <section
        id="pediatric-child-centered"
        className="bg-[#243442]/4 py-16 border-y border-[#243442]/8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
              Our Methodology
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#243442]">
              Child-Centered Clinical Care
            </h2>
            <div className="w-12 h-[2px] bg-[#C5B27A] mx-auto my-2" />
            <p className="text-xs sm:text-sm text-[#344452] leading-relaxed">
              Every child develops at their own rate. Physiotherapy sessions are never rigid or intimidating; they are structured carefully around five fundamental child-centered dimensions:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Child’s Age', desc: 'Activities matched to developmental comprehension and attention span.' },
              { title: 'Physical Abilities', desc: 'Building on existing strengths rather than highlighting limitations.' },
              { title: 'Developmental Needs', desc: 'Focusing on the next natural developmental milestone progression.' },
              { title: 'Movement Challenges', desc: 'Targeting specific tone, stiffness, weakness, or coordination barriers.' },
              { title: 'Functional Goals', desc: 'Empowering everyday participation at home, school, and play.' },
            ].map((dim, idx) => (
              <div
                key={idx}
                className="p-5 bg-white rounded-xl border border-[#243442]/10 space-y-2 text-center shadow-2xs hover:border-[#C5B27A] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#243442]/5 flex items-center justify-center text-[#243442] mx-auto font-serif text-xs font-semibold">
                  0{idx + 1}
                </div>
                <h3 className="text-xs font-semibold text-[#243442]">
                  {dim.title}
                </h3>
                <p className="text-[11px] text-[#344452] leading-relaxed font-normal">
                  {dim.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          TREATMENT JOURNEY
          ================================================== */}
      <section id="pediatric-treatment-journey" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
            Care Pathway
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#243442] mt-1">
            Pediatric Treatment Journey
          </h2>
          <p className="text-xs sm:text-sm text-[#344452] mt-2 leading-relaxed">
            A clear and reassuring process ensuring parents and children feel comfortable every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Assessment',
              desc: 'Detailed observation of the child’s spontaneous movement, muscle tone, joint flexibility, and milestone progress in a relaxed setting.',
            },
            {
              step: '02',
              title: 'Personalized Plan',
              desc: 'Establishing clear, step-by-step physical milestones and home activity suggestions designed specifically for your child.',
            },
            {
              step: '03',
              title: 'Guided Therapy',
              desc: 'Hands-on facilitation, balance stimulation, and gentle therapeutic positioning during each interactive clinic session.',
            },
            {
              step: '04',
              title: 'Progress Review',
              desc: 'Continuous re-evaluation of milestone gains, updating exercises as the child grows and develops new motor capacities.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="p-6 bg-white rounded-xl border border-[#243442]/10 space-y-3 shadow-2xs hover:border-[#C5B27A]/60 transition-colors"
            >
              <span className="font-serif text-xs font-semibold text-[#C5B27A] block">
                Stage {item.step}
              </span>
              <h3 className="font-serif text-base font-semibold text-[#243442]">
                {item.title}
              </h3>
              <p className="text-xs text-[#344452] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          PARENT INFORMATION & WHAT TO BRING
          ================================================== */}
      <section id="pediatric-parent-info" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#243442]/12 p-8 sm:p-10 shadow-xs space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
              Parent Guidance
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#243442] mt-1">
              Information for Parents
            </h2>
            <p className="text-xs sm:text-sm text-[#344452] mt-2 leading-relaxed">
              We encourage parents to be active partners during clinical sessions. Consistent therapy combined with gentle daily reinforcement at home provides the most reliable foundation for your child’s physical progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#243442]/8">
            {/* What to expect */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[#243442] flex items-center gap-2">
                <Info className="w-4 h-4 text-[#C5B27A]" />
                What to Expect During the Initial Assessment
              </h3>
              <p className="text-xs text-[#344452] leading-relaxed">
                The first consultation lasts approximately 40–50 minutes. Dr. Rana Fida Hussain will review your child’s medical background, discuss developmental history, observe your child moving freely on comfortable mats, and assess muscle tone, joint alignment, and reflexes without causing stress or discomfort.
              </p>
              <p className="text-xs text-[#344452] leading-relaxed">
                Parents are welcome to ask questions, voice concerns, and learn practical handling techniques to use during daily feeding, carrying, or play.
              </p>
            </div>

            {/* What to bring */}
            <div className="bg-[#FAF9F5] p-6 rounded-xl border border-[#243442]/10 space-y-3">
              <h3 className="text-sm font-semibold text-[#243442] flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#C5B27A]" />
                What to Bring to Your Appointment
              </h3>
              <ul className="space-y-2 text-xs text-[#344452]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A] shrink-0 mt-1.5" />
                  <span>
                    <strong>Relevant Medical Reports:</strong> Any pediatric notes, hospital discharge summaries, or previous physical therapy reports.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A] shrink-0 mt-1.5" />
                  <span>
                    <strong>Diagnostic Assessments:</strong> Growth charts, neurologist summaries, or imaging if previously conducted.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A] shrink-0 mt-1.5" />
                  <span>
                    <strong>Comfortable Clothing:</strong> Loose, flexible clothing for your child that allows free movement of the limbs, knees, and feet.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27A] shrink-0 mt-1.5" />
                  <span>
                    <strong>Favorite Toy or Soother:</strong> Having a familiar toy can help young children feel settled and cooperative.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PediatricPage;
