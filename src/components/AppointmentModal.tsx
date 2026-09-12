import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Phone, MessageSquare, Clock } from 'lucide-react';
import { AppointmentFormData } from '../types';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    patientAge: '',
    serviceRequired: defaultService || 'Pediatric Physiotherapy',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

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

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Dr. Rana Fida Hussain Clinic,\n\nI would like to request an appointment:\nName: ${formData.fullName || 'Patient'}\nPhone: ${formData.phone || 'N/A'}\nAge: ${formData.patientAge || 'N/A'}\nService: ${formData.serviceRequired}\nPreferred Date: ${formData.preferredDate || 'Earliest available'}\nNotes: ${formData.message || 'None'}`
    );
    window.open(`https://wa.me/923354199317?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      id="appointment-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#20262B]/60 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div
        id="appointment-modal-card"
        className="relative bg-[#FAF9F5] border border-[#243442]/15 rounded-xl shadow-2xl max-w-lg w-full p-6 sm:p-8 text-[#20262B]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#344452] hover:text-[#243442] transition-colors rounded-full hover:bg-[#243442]/5"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-left mb-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#C5B27A] font-semibold">
                Clinical Consultation
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#243442] mt-1">
                Request an Appointment
              </h3>
              <p className="text-xs text-[#344452] mt-1.5 leading-relaxed">
                Consultant Physiotherapist Dr. Rana Fida Hussain • Sialkot Clinic & Home Visits
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#243442] mb-1">
                  Full Name <span className="text-[#C5B27A]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Muhammad Ali"
                  className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#243442]/20 bg-white focus:outline-none focus:border-[#C5B27A] focus:ring-1 focus:ring-[#C5B27A] text-[#20262B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#243442] mb-1">
                    Phone Number <span className="text-[#C5B27A]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="03XX XXXXXXX"
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#243442]/20 bg-white focus:outline-none focus:border-[#C5B27A] focus:ring-1 focus:ring-[#C5B27A] text-[#20262B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#243442] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#243442]/20 bg-white focus:outline-none focus:border-[#C5B27A] focus:ring-1 focus:ring-[#C5B27A] text-[#20262B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#243442] mb-1">
                    Patient Age
                  </label>
                  <input
                    type="text"
                    name="patientAge"
                    value={formData.patientAge}
                    onChange={handleChange}
                    placeholder="e.g. 5 years / 34 years"
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#243442]/20 bg-white focus:outline-none focus:border-[#C5B27A] focus:ring-1 focus:ring-[#C5B27A] text-[#20262B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#243442] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#243442]/20 bg-white focus:outline-none focus:border-[#C5B27A] focus:ring-1 focus:ring-[#C5B27A] text-[#20262B]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#243442] mb-1">
                  Service Required <span className="text-[#C5B27A]">*</span>
                </label>
                <select
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#243442]/20 bg-white focus:outline-none focus:border-[#C5B27A] focus:ring-1 focus:ring-[#C5B27A] text-[#20262B]"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                  <option value="General Physiotherapy Consultation">
                    General Physiotherapy Consultation
                  </option>
                  <option value="Home Physiotherapy in Sialkot">
                    Home Physiotherapy in Sialkot
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#243442] mb-1">
                  Brief Medical Details / Symptoms
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe movement difficulties, symptom duration, or previous surgery..."
                  className="w-full text-xs px-3 py-2 rounded-lg border border-[#243442]/20 bg-white focus:outline-none focus:border-[#C5B27A] focus:ring-1 focus:ring-[#C5B27A] text-[#20262B] resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-6 rounded-full bg-[#243442] text-[#FAF9F5] text-xs font-semibold tracking-wider hover:bg-[#344452] transition-colors shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing Request...' : 'Request an Appointment'}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3 px-4 rounded-full border border-[#C5B27A] text-[#243442] hover:bg-[#C5B27A]/15 text-xs font-medium tracking-wide flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C5B27A]" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-[11px] text-[#A7A9AA]">
                  Or call directly at{' '}
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="font-semibold text-[#243442] hover:text-[#C5B27A] underline"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#C5B27A]/20 text-[#243442] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7 text-[#243442]" />
            </div>

            <h3 className="font-serif text-2xl font-semibold text-[#243442]">
              Appointment Request Received
            </h3>

            <p className="text-xs text-[#344452] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="font-medium text-[#243442]">{formData.fullName}</strong>. Dr. Rana Fida Hussain’s clinic desk has received your details for{' '}
              <span className="font-medium text-[#243442]">{formData.serviceRequired}</span>. We will call you at{' '}
              <span className="font-semibold text-[#243442]">{formData.phone}</span> shortly to confirm your consultation schedule.
            </p>

            <div className="p-3 bg-white border border-[#243442]/10 rounded-lg text-xs text-[#344452] text-left space-y-1">
              <p>
                <strong className="text-[#243442]">Clinic Location:</strong> Allama Iqbal Children Hospital, Commissioner Rd, Sialkot
              </p>
              <p>
                <strong className="text-[#243442]">Phone:</strong> {CLINIC_INFO.phone}
              </p>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="py-2.5 px-5 rounded-full bg-[#243442] text-[#FAF9F5] text-xs font-medium tracking-wide hover:bg-[#344452] transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C5B27A]" />
                Direct WhatsApp Confirmation
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="py-2.5 px-5 rounded-full border border-[#243442]/20 text-xs font-medium text-[#344452] hover:bg-[#243442]/5 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;
