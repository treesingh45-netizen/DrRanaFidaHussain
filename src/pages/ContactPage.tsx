import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Calendar,
  Home,
  MessageSquare,
  CheckCircle2,
  Instagram,
  Facebook,
  Linkedin,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from 'lucide-react';
import { PageId, AppointmentFormData } from '../types';
import { CLINIC_INFO, SERVICES_DATA, FAQS_DATA } from '../data/clinicData';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    patientAge: '',
    serviceRequired: 'Pediatric Physiotherapy',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppForward = () => {
    const message = encodeURIComponent(
      `Hello Dr. Rana Fida Hussain Clinic,\n\nI would like to request an appointment:\nName: ${formData.fullName}\nPhone: ${formData.phone}\nAge: ${formData.patientAge || 'N/A'}\nService: ${formData.serviceRequired}\nPreferred Date: ${formData.preferredDate || 'Earliest available'}\nNotes: ${formData.message || 'None'}`
    );
    window.open(`https://wa.me/923354199317?text=${message}`, '_blank');
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const mapDirectionsUrl = CLINIC_INFO.mapsUrl;

  return (
    <div className="space-y-20 md:space-y-28 pb-20">
      {/* ==================================================
          HERO
          ================================================== */}
      <section
        id="contact-hero"
        className="pt-6 md:pt-12 border-b border-[#243442]/8 pb-12 text-center"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C5B27A] font-semibold">
            Appointments & Enquiries
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#243442] tracking-tight">
            Let’s Talk About Your Recovery
          </h1>
          <div className="w-12 h-[2px] bg-[#C5B27A] mx-auto my-2" />
          <p className="text-sm md:text-base text-[#344452] leading-relaxed">
            Contact Dr. Rana Fida Hussain Physiotherapy Clinic to discuss physiotherapy, rehabilitation or home treatment.
          </p>
        </div>
      </section>

      {/* ==================================================
          CONTACT OPTIONS (4 Realistic Professional Cards)
          ================================================== */}
      <section id="contact-options-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Phone */}
          <div className="bg-white p-6 rounded-xl border border-[#243442]/10 space-y-3 shadow-2xs hover:border-[#C5B27A] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#243442]/10 flex items-center justify-center text-[#243442]">
              <Phone className="w-5 h-5 text-[#C5B27A]" />
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#A7A9AA] font-semibold block">
              Direct Phone Call
            </span>
            <h3 className="font-serif text-lg font-semibold text-[#243442]">
              {CLINIC_INFO.phone}
            </h3>
            <p className="text-xs text-[#344452] leading-relaxed font-normal">
              Speak directly with our clinic desk to schedule consultations or inquire about home visits.
            </p>
            <div className="pt-1">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="text-xs font-semibold text-[#243442] hover:text-[#C5B27A] underline"
              >
                Call Clinic Now
              </a>
            </div>
          </div>

          {/* 2. Location */}
          <div className="bg-white p-6 rounded-xl border border-[#243442]/10 space-y-3 shadow-2xs hover:border-[#C5B27A] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#243442]/10 flex items-center justify-center text-[#243442]">
              <MapPin className="w-5 h-5 text-[#C5B27A]" />
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#A7A9AA] font-semibold block">
              Clinic Location
            </span>
            <h3 className="font-serif text-lg font-semibold text-[#243442]">
              Commissioner Rd, Sialkot
            </h3>
            <p className="text-xs text-[#344452] leading-relaxed font-normal">
              Allama Iqbal Children Hospital, opposite Civil Hospital, Muhammadpura, Sialkot.
            </p>
            <div className="pt-1">
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#243442] hover:text-[#C5B27A] underline inline-flex items-center gap-1"
              >
                <span>View On Map</span>
                <ExternalLink className="w-3 h-3 text-[#C5B27A]" />
              </a>
            </div>
          </div>

          {/* 3. Appointment */}
          <div className="bg-white p-6 rounded-xl border border-[#243442]/10 space-y-3 shadow-2xs hover:border-[#C5B27A] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#243442]/10 flex items-center justify-center text-[#243442]">
              <Calendar className="w-5 h-5 text-[#C5B27A]" />
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#A7A9AA] font-semibold block">
              Consultation Schedule
            </span>
            <h3 className="font-serif text-lg font-semibold text-[#243442]">
              Mon – Sat (10am – 8pm)
            </h3>
            <p className="text-xs text-[#344452] leading-relaxed font-normal">
              Organized appointment slots to ensure thorough, unhurried assessment time for each patient.
            </p>
            <div className="pt-1">
              <a
                href="#appointment-form"
                className="text-xs font-semibold text-[#243442] hover:text-[#C5B27A] underline"
              >
                Complete Enquiry Form
              </a>
            </div>
          </div>

          {/* 4. Home Physiotherapy */}
          <div className="bg-white p-6 rounded-xl border border-[#243442]/10 space-y-3 shadow-2xs hover:border-[#C5B27A] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#243442]/10 flex items-center justify-center text-[#243442]">
              <Home className="w-5 h-5 text-[#C5B27A]" />
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#A7A9AA] font-semibold block">
              Home Service
            </span>
            <h3 className="font-serif text-lg font-semibold text-[#243442]">
              Sialkot Home Visits
            </h3>
            <p className="text-xs text-[#344452] leading-relaxed font-normal">
              Home-based rehabilitation in Sialkot for stroke recovery, post-surgery, elderly care, or bedridden patients.
            </p>
            <div className="pt-1">
              <a
                href={`https://wa.me/923354199317?text=${encodeURIComponent('Hello Dr. Rana Fida Hussain Clinic, I would like to inquire about home physiotherapy in Sialkot.')}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#243442] hover:text-[#C5B27A] underline"
              >
                Inquire For Home Visit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SPLIT SECTION: APPOINTMENT FORM (PRIMARY CTA) & CLINIC DETAILS
          ================================================== */}
      <section
        id="appointment-form"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Clinic Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
                Clinical Practice
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#243442] mt-1">
                Dr. Rana Fida Hussain Physiotherapy Clinic
              </h2>
              <p className="text-xs uppercase tracking-wider text-[#344452] font-medium mt-1">
                Dr. Rana Fida Hussain • Consultant Physiotherapist
              </p>
            </div>

            {/* Consultant Profile Card with Real Photo */}
            <div className="p-4 sm:p-5 bg-[#243442] text-[#FAF9F5] rounded-xl border border-[#344452] flex items-center gap-4 shadow-xs">
              <div className="relative shrink-0">
                <img
                  src={CLINIC_INFO.doctorImage}
                  alt="Dr. Rana Fida Hussain - Consultant Physiotherapist"
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl object-cover border-2 border-[#C5B27A]"
                />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase tracking-wider text-[#C5B27A] font-semibold block">
                  Consultant In Charge
                </span>
                <h3 className="font-serif text-base sm:text-lg font-semibold text-[#FAF9F5]">
                  Dr. Rana Fida Hussain
                </h3>
                <p className="text-xs text-[#A7A9AA]">
                  Consultant Physiotherapist
                </p>
                <p className="text-[11px] text-[#C5B27A] pt-0.5">
                  Dr Fida Hussain Physiotherapy Centre • Sialkot
                </p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#243442]/10 space-y-4">
              <div className="flex items-start gap-3 text-sm text-[#344452]">
                <Phone className="w-4 h-4 text-[#C5B27A] shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#A7A9AA]">
                    Phone Number
                  </p>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="font-semibold text-base text-[#243442] hover:text-[#C5B27A] transition-colors"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#344452] pt-2 border-t border-[#243442]/8">
                <MapPin className="w-4 h-4 text-[#C5B27A] shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#A7A9AA]">
                    Exact Clinic Address
                  </p>
                  <p className="font-semibold text-[#243442] text-xs leading-snug">
                    Allama Iqbal Children Hospital
                  </p>
                  <p className="text-xs text-[#344452] pt-0.5 leading-relaxed">
                    Commissioner Rd, opposite to Civil Hospital, Muhammadpura, Sialkot, 51300, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-[#344452] pt-2 border-t border-[#243442]/8">
                <Clock className="w-4 h-4 text-[#C5B27A] shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#A7A9AA]">
                    Consultation Hours
                  </p>
                  <p className="font-semibold text-[#243442] text-xs">
                    Monday – Saturday: 10:00 AM – 8:00 PM
                  </p>
                  <p className="text-[11px] text-[#A7A9AA]">
                    Prior booking recommended to minimize wait times
                  </p>
                </div>
              </div>
            </div>

            {/* Official Social Links */}
            <div className="p-6 bg-white rounded-xl border border-[#243442]/10 space-y-3">
              <span className="text-xs uppercase tracking-wider text-[#243442] font-semibold block">
                Official Channels
              </span>
              <div className="flex items-center gap-4 text-xs text-[#344452]">
                <a
                  href={CLINIC_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#C5B27A] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#243442]" />
                  <span>Instagram</span>
                </a>
                <a
                  href={CLINIC_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#C5B27A] transition-colors"
                >
                  <Facebook className="w-4 h-4 text-[#243442]" />
                  <span>Facebook</span>
                </a>
                <a
                  href={CLINIC_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#C5B27A] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#243442]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: APPOINTMENT FORM (Main CTA of the Website) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#243442]/12 shadow-sm">
              {!submitted ? (
                <div>
                  <div className="mb-6 space-y-1">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
                      Schedule Your Consultation
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#243442]">
                      Request an Appointment
                    </h2>
                    <p className="text-xs text-[#344452] leading-relaxed">
                      Complete this form to reserve your clinical assessment slot with Dr. Rana Fida Hussain in Sialkot.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#243442] mb-1">
                        Full Name <span className="text-[#C5B27A]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Patient or guardian name"
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#243442]/20 bg-[#FAF9F5] focus:bg-white focus:outline-none focus:border-[#C5B27A] focus:ring-1 focus:ring-[#C5B27A] text-[#20262B]"
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#243442] mb-1">
                          Phone Number <span className="text-[#C5B27A]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="03XX XXXXXXX"
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#243442]/20 bg-[#FAF9F5] focus:bg-white focus:outline-none focus:border-[#C5B27A] focus:ring-1 focus:ring-[#C5B27A] text-[#20262B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#243442] mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#243442]/20 bg-[#FAF9F5] focus:bg-white focus:outline-none focus:border-[#C5B27A] focus:ring-1 focus:ring-[#C5B27A] text-[#20262B]"
                        />
                      </div>
                    </div>

                    {/* Patient Age & Preferred Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#243442] mb-1">
                          Patient Age
                        </label>
                        <input
                          type="text"
                          name="patientAge"
                          value={formData.patientAge}
                          onChange={handleChange}
                          placeholder="e.g. 4 years (pediatric) / 32 years"
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#243442]/20 bg-[#FAF9F5] focus:bg-white focus:outline-none focus:border-[#C5B27A] focus:ring-1 focus:ring-[#C5B27A] text-[#20262B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#243442] mb-1">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#243442]/20 bg-[#FAF9F5] focus:bg-white focus:outline-none focus:border-[#C5B27A] focus:ring-1 focus:ring-[#C5B27A] text-[#20262B]"
                        />
                      </div>
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-semibold text-[#243442] mb-1">
                        Service Required <span className="text-[#C5B27A]">*</span>
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#243442]/20 bg-[#FAF9F5] focus:bg-white focus:outline-none focus:border-[#C5B27A] focus:ring-1 focus:ring-[#C5B27A] text-[#20262B]"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title}
                          </option>
                        ))}
                        <option value="Home Physiotherapy in Sialkot">
                          Home Physiotherapy in Sialkot
                        </option>
                        <option value="General Physical Assessment">
                          General Physical Assessment
                        </option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-[#243442] mb-1">
                        Message / Symptoms Overview
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please share details about movement limitations, injury onset, past surgery, or milestones..."
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#243442]/20 bg-[#FAF9F5] focus:bg-white focus:outline-none focus:border-[#C5B27A] focus:ring-1 focus:ring-[#C5B27A] text-[#20262B] resize-none"
                      ></textarea>
                    </div>

                    {/* Primary CTA Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        id="primary-appointment-cta-btn"
                        className="w-full py-3.5 px-6 rounded-full bg-[#243442] text-[#FAF9F5] text-xs font-semibold tracking-wider hover:bg-[#344452] transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? 'Submitting Request...' : 'Request an Appointment'}
                      </button>
                    </div>

                    <div className="pt-3 text-center">
                      <p className="text-[11px] text-[#A7A9AA]">
                        Or connect via direct call:{' '}
                        <a
                          href={`tel:${CLINIC_INFO.phone}`}
                          className="font-semibold text-[#243442] hover:text-[#C5B27A]"
                        >
                          {CLINIC_INFO.phone}
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#C5B27A]/20 text-[#243442] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#243442]" />
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#243442]">
                    Appointment Request Submitted
                  </h3>

                  <p className="text-xs text-[#344452] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#243442]">{formData.fullName}</strong>. Dr. Rana Fida Hussain’s clinic coordinator has received your consultation enquiry for{' '}
                    <span className="font-semibold text-[#243442]">{formData.serviceRequired}</span>. We will contact you at{' '}
                    <span className="font-semibold text-[#243442]">{formData.phone}</span> to finalize your appointment time.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      type="button"
                      onClick={handleWhatsAppForward}
                      className="py-2.5 px-5 rounded-full bg-[#243442] text-[#FAF9F5] text-xs font-semibold tracking-wider hover:bg-[#344452] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#C5B27A]" />
                      <span>Confirm via WhatsApp ({CLINIC_INFO.phone})</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="py-2.5 px-5 rounded-full border border-[#243442]/20 text-xs font-semibold text-[#344452] hover:bg-[#243442]/5 transition-colors cursor-pointer"
                    >
                      New Request
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          LOCATION SECTION (Exact Google Maps Location & Embed)
          ================================================== */}
      <section id="clinic-location-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#243442]/12 overflow-hidden shadow-xs">
          <div className="p-6 sm:p-8 border-b border-[#243442]/8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
                Sialkot Facility • Verified Location
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#243442] mt-1">
                Dr Fida Hussain Physiotherapy Centre
              </h2>
              <p className="text-xs text-[#344452] mt-1">
                Allama Iqbal Children Hospital, Commissioner Rd, opposite Civil Hospital, Muhammadpura, Sialkot, 51300, Pakistan
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-[#243442] text-[#FAF9F5] text-xs font-semibold tracking-wider hover:bg-[#344452] transition-colors cursor-pointer shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5B27A]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C5B27A]" />
              </a>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-full border border-[#243442]/20 text-xs font-semibold text-[#243442] hover:border-[#C5B27A] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5B27A]" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Interactive Responsive Google Map Iframe */}
          <div className="w-full h-[360px] sm:h-[440px] bg-[#FAF9F5] relative border-b border-[#243442]/10">
            <iframe
              title="Dr Fida Hussain Physiotherapy Centre Location Map"
              src={CLINIC_INFO.mapsEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Refined clean location canvas card */}
          <div className="p-6 sm:p-8 bg-[#FAF9F5] grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-xl border border-[#243442]/10 space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-[#C5B27A] font-semibold">
                Major Landmark
              </span>
              <h4 className="text-xs font-semibold text-[#243442]">
                Opposite to Civil Hospital
              </h4>
              <p className="text-[11px] text-[#344452]">
                Easily accessible via Commissioner Road in Muhammadpura, central Sialkot.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#243442]/10 space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-[#C5B27A] font-semibold">
                Clinical Facility
              </span>
              <h4 className="text-xs font-semibold text-[#243442]">
                Allama Iqbal Children Hospital
              </h4>
              <p className="text-[11px] text-[#344452]">
                Dedicated therapy rooms inside Allama Iqbal Children Hospital equipped for mobility training.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-[#243442]/10 space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-[#C5B27A] font-semibold">
                Home Visit Option
              </span>
              <h4 className="text-xs font-semibold text-[#243442]">
                Sialkot Citywide Coverage
              </h4>
              <p className="text-[11px] text-[#344452]">
                Home physiotherapy services available for patients unable to commute to Commissioner Road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FAQ SECTION (All 6 Required Questions)
          ================================================== */}
      <section id="contact-faq-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
            Common Inquiries
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#243442]">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[2px] bg-[#C5B27A] mx-auto my-2" />
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = expandedFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#243442]/10 overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF9F5]/80 transition-colors cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base font-semibold text-[#243442]">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[#C5B27A]">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 text-xs text-[#344452] leading-relaxed border-t border-[#243442]/5 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
