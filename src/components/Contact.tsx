"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  AlertTriangle,
  CheckCircle2,
  Shield,
  Loader2,
} from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    practiceArea: "",
    message: "",
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required.";
    if (!formData.email.trim()) errs.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Please enter a valid email address.";
    if (!formData.phone.trim()) errs.phone = "Phone number is required for verification.";
    if (!formData.practiceArea) errs.practiceArea = "Please select a relevant practice area.";
    if (!formData.message.trim() || formData.message.trim().length < 15) errs.message = "Please provide a brief description (at least 15 characters).";
    if (!formData.privacyConsent) errs.privacyConsent = "You must acknowledge the consultation privacy terms.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 1200);
  };

  const inputBase = "w-full px-4 py-3 text-sm bg-white/5 border focus:bg-white/10 focus:outline-none transition-colors text-white placeholder:text-white/25";
  const inputError = "border-red-500/60";
  const inputNormal = "border-white/10 focus:border-white/40";

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#050505] text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-white/40" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
              Confidential Inquiry
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Initiate a Legal Consultation
          </h2>
          <p className="text-sm sm:text-base text-white/40 font-light leading-relaxed">
            Please complete the confidential inquiry form below. We review all submissions within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Attorney Info Panel */}
          <div className="lg:col-span-5 space-y-8 bg-[#111] text-white p-8 sm:p-10 border border-white/10 shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 shrink-0 overflow-hidden border border-white/20 shadow-lg">
                <Image
                  src={SITE_DATA.attorney.portraitImage}
                  alt={SITE_DATA.attorney.portraitAlt}
                  fill
                  sizes="64px"
                  className="object-cover object-[center_15%] grayscale"
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium">
                  Direct Chambers
                </span>
                <h3 className="text-2xl text-white font-semibold mt-0.5">
                  {SITE_DATA.attorney.name}
                </h3>
                <p className="text-xs text-white/40 font-light mt-0.5">
                  {SITE_DATA.attorney.title}
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-white/10 text-xs">

              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-white/30 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                    Primary Office
                  </span>
                  <p className="text-white/50">{SITE_DATA.contactInfo.address.line1}</p>
                  <p className="text-white/35">
                    {SITE_DATA.contactInfo.address.city}, {SITE_DATA.contactInfo.address.state} {SITE_DATA.contactInfo.address.zip}
                  </p>
                  <p className="text-white/35">{SITE_DATA.contactInfo.address.country}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-white/30 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                    Telephone Inquiries
                  </span>
                  <a
                    href={`tel:${SITE_DATA.contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {SITE_DATA.contactInfo.phone}
                  </a>
                  <p className="text-white/30 text-[11px] mt-0.5">Direct partner line</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-white/30 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                    Discrete Electronic Mail
                  </span>
                  <a
                    href={`mailto:${SITE_DATA.contactInfo.email}`}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {SITE_DATA.contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 text-white/30 shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                    Consultation Hours
                  </span>
                  <p className="text-white/50">{SITE_DATA.contactInfo.hours}</p>
                  <p className="text-white/30 text-[11px] mt-1 leading-normal">
                    {SITE_DATA.contactInfo.emergencyNote}
                  </p>
                </div>
              </div>

            </div>

            {/* Confidentiality Notice */}
            <div className="p-4 bg-white/5 border-l-2 border-white/30 text-[11px] text-white/35 space-y-1">
              <div className="flex items-center space-x-1.5 text-white/60 font-semibold">
                <Shield className="w-3.5 h-3.5" />
                <span>Confidentiality Notice</span>
              </div>
              <p className="leading-relaxed">
                Transmission of information via this form does not establish an attorney-client relationship. Please refrain from transmitting confidential or time-sensitive details until formal engagement terms are executed.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7 bg-[#111] p-8 sm:p-12 border border-white/10 shadow-sm relative">

            {submittedSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-16 h-16 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto border border-white/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl text-white font-bold">
                    Consultation Request Received
                  </h3>
                  <p className="text-sm text-white/50 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Your inquiry has been routed directly to counsel chambers. An initial review and response will be furnished within one business day.
                  </p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 text-xs text-white/35 max-w-md mx-auto text-left">
                  <p className="font-semibold text-white/60 mb-1">Demonstration Notice:</p>
                  <p>
                    Client-side validation and simulated state handled successfully. To integrate live email dispatch, attach an API endpoint (e.g., Resend, SendGrid, or custom route) in <code>src/components/Contact.tsx</code>.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSubmittedSuccess(false);
                    setFormData({ fullName: "", email: "", phone: "", practiceArea: "", message: "", privacyConsent: false });
                  }}
                  className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-semibold text-white/60 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => { setFormData({ ...formData, fullName: e.target.value }); if (errors.fullName) setErrors({ ...errors, fullName: "" }); }}
                      placeholder="e.g. Mohammed Rahman"
                      className={`${inputBase} ${errors.fullName ? inputError : inputNormal}`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center space-x-1">
                        <AlertTriangle className="w-3 h-3 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-white/60 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); if (errors.phone) setErrors({ ...errors, phone: "" }); }}
                      placeholder="+880 1800-000000"
                      className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center space-x-1">
                        <AlertTriangle className="w-3 h-3 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-white/60 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => { setFormData({ ...formData, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: "" }); }}
                      placeholder="e.g. client@example.com"
                      className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center space-x-1">
                        <AlertTriangle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="practiceArea" className="block text-xs uppercase tracking-wider font-semibold text-white/60 mb-2">
                      Practice Area of Interest *
                    </label>
                    <select
                      id="practiceArea"
                      value={formData.practiceArea}
                      onChange={(e) => { setFormData({ ...formData, practiceArea: e.target.value }); if (errors.practiceArea) setErrors({ ...errors, practiceArea: "" }); }}
                      className={`${inputBase} ${errors.practiceArea ? inputError : inputNormal}`}
                    >
                      <option value="">Select practice area...</option>
                      {SITE_DATA.practiceAreas.map((pa) => (
                        <option key={pa.id} value={pa.title}>{pa.title}</option>
                      ))}
                      <option value="General Commercial Inquiries">General Commercial Inquiries</option>
                    </select>
                    {errors.practiceArea && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center space-x-1">
                        <AlertTriangle className="w-3 h-3 shrink-0" />
                        <span>{errors.practiceArea}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-white/60 mb-2">
                    Brief Description of Matter *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => { setFormData({ ...formData, message: e.target.value }); if (errors.message) setErrors({ ...errors, message: "" }); }}
                    placeholder="Please outline the nature of your inquiry without disclosing confidential proprietary or time-sensitive trial documents..."
                    className={`${inputBase} ${errors.message ? inputError : inputNormal}`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center space-x-1">
                      <AlertTriangle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.privacyConsent}
                      onChange={(e) => { setFormData({ ...formData, privacyConsent: e.target.checked }); if (errors.privacyConsent) setErrors({ ...errors, privacyConsent: "" }); }}
                      className="mt-1 w-4 h-4 text-white border-white/30 focus:ring-white/30 bg-white/10"
                    />
                    <span className="text-xs text-white/40 leading-normal">
                      I understand that submitting this inquiry does not create an attorney-client relationship and that this form should not contain sensitive or confidential evidence.
                    </span>
                  </label>
                  {errors.privacyConsent && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center space-x-1">
                      <AlertTriangle className="w-3 h-3 shrink-0" />
                      <span>{errors.privacyConsent}</span>
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center space-x-3 py-4 px-8 bg-white hover:bg-white/90 text-black text-xs uppercase tracking-[0.2em] font-bold transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black/60" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
