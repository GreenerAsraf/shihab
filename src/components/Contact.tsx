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
    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required.";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required for verification.";
    }
    if (!formData.practiceArea) {
      errs.practiceArea = "Please select a relevant practice area.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = "Please provide a brief description (at least 15 characters).";
    }
    if (!formData.privacyConsent) {
      errs.privacyConsent = "You must acknowledge the consultation privacy terms.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate discrete form submission (transparent mock until backend service is hooked up)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F7F4ED] text-[#17191D] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-[#B89A62]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#B89A62] font-semibold">
              Confidential Inquiry
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#101B2C]">
            Initiate a Legal Consultation
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Please complete the confidential inquiry form below. We review all submissions within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Attorney Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8 bg-[#101B2C] text-white p-8 sm:p-10 border border-[#B89A62]/30 shadow-xl">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 shrink-0 overflow-hidden border border-[#B89A62]/60 shadow-lg">
                <Image
                  src={SITE_DATA.attorney.portraitImage}
                  alt={SITE_DATA.attorney.portraitAlt}
                  fill
                  sizes="64px"
                  className="object-cover object-[center_15%]"
                />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B89A62] font-semibold">
                  Direct Chambers
                </span>
                <h3 className="font-serif text-2xl text-white mt-0.5">
                  {SITE_DATA.attorney.name}
                </h3>
                <p className="text-xs text-neutral-300 font-light mt-0.5">
                  {SITE_DATA.attorney.title}
                </p>
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-white/10 text-xs">
              
              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-[#B89A62] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                    Primary Office
                  </span>
                  <p className="text-neutral-300">{SITE_DATA.contactInfo.address.line1}</p>
                  <p className="text-neutral-400">
                    {SITE_DATA.contactInfo.address.city}, {SITE_DATA.contactInfo.address.state} {SITE_DATA.contactInfo.address.zip}
                  </p>
                  <p className="text-neutral-400">{SITE_DATA.contactInfo.address.country}</p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-[#B89A62] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                    Telephone Inquiries
                  </span>
                  <a
                    href={`tel:${SITE_DATA.contactInfo.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-neutral-200 hover:text-[#D6BD8A] transition-colors"
                  >
                    {SITE_DATA.contactInfo.phone}
                  </a>
                  <p className="text-neutral-400 text-[11px] mt-0.5">Direct partner line</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-[#B89A62] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                    Discrete Electronic Mail
                  </span>
                  <a
                    href={`mailto:${SITE_DATA.contactInfo.email}`}
                    className="text-neutral-200 hover:text-[#D6BD8A] transition-colors"
                  >
                    {SITE_DATA.contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 text-[#B89A62] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-white uppercase tracking-wider text-[11px] mb-1">
                    Consultation Hours
                  </span>
                  <p className="text-neutral-300">{SITE_DATA.contactInfo.hours}</p>
                  <p className="text-neutral-400 text-[11px] mt-1 leading-normal">
                    {SITE_DATA.contactInfo.emergencyNote}
                  </p>
                </div>
              </div>

            </div>

            {/* Confidentiality Warning Box */}
            <div className="p-4 bg-[#17191D] border-l-2 border-[#B89A62] text-[11px] text-neutral-300 space-y-1">
              <div className="flex items-center space-x-1.5 text-[#B89A62] font-semibold">
                <Shield className="w-3.5 h-3.5" />
                <span>Confidentiality Notice</span>
              </div>
              <p className="leading-relaxed">
                Transmission of information via this form does not establish an attorney-client relationship. Please refrain from transmitting confidential or time-sensitive details until formal engagement terms are executed.
              </p>
            </div>
          </div>

          {/* Right Column: Structured Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-neutral-300 shadow-sm relative">
            
            {submittedSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-16 h-16 bg-[#B89A62]/10 text-[#B89A62] rounded-full flex items-center justify-center mx-auto border border-[#B89A62]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-[#101B2C]">
                    Consultation Request Received
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Your inquiry has been routed directly to counsel chambers. An initial review and response will be furnished within one business day.
                  </p>
                </div>

                <div className="p-4 bg-[#F7F4ED] border border-neutral-200 text-xs text-neutral-500 max-w-md mx-auto text-left">
                  <p className="font-semibold text-neutral-800 mb-1">Demonstration Notice:</p>
                  <p>
                    Client-side validation and simulated state handled successfully. To integrate live email dispatch, attach an API endpoint (e.g., Resend, SendGrid, or custom route) in <code>src/components/Contact.tsx</code>.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSubmittedSuccess(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      practiceArea: "",
                      message: "",
                      privacyConsent: false,
                    });
                  }}
                  className="px-6 py-2.5 text-xs uppercase tracking-wider font-semibold border border-[#101B2C] text-[#101B2C] hover:bg-[#101B2C] hover:text-white transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Full Name & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: "" });
                      }}
                      placeholder="e.g. Mohammed Rahman"
                      className={`w-full px-4 py-3 text-sm bg-[#F7F4ED]/50 border ${
                        errors.fullName ? "border-red-500" : "border-neutral-300"
                      } focus:border-[#B89A62] focus:bg-white focus:outline-none transition-colors`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                        <AlertTriangle className="w-3 h-3 shrink-0" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: "" });
                      }}
                      placeholder="+880 1800-000000"
                      className={`w-full px-4 py-3 text-sm bg-[#F7F4ED]/50 border ${
                        errors.phone ? "border-red-500" : "border-neutral-300"
                      } focus:border-[#B89A62] focus:bg-white focus:outline-none transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                        <AlertTriangle className="w-3 h-3 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Address & Practice Area Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="e.g. client@example.com"
                      className={`w-full px-4 py-3 text-sm bg-[#F7F4ED]/50 border ${
                        errors.email ? "border-red-500" : "border-neutral-300"
                      } focus:border-[#B89A62] focus:bg-white focus:outline-none transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                        <AlertTriangle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="practiceArea"
                      className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-2"
                    >
                      Practice Area of Interest *
                    </label>
                    <select
                      id="practiceArea"
                      value={formData.practiceArea}
                      onChange={(e) => {
                        setFormData({ ...formData, practiceArea: e.target.value });
                        if (errors.practiceArea) setErrors({ ...errors, practiceArea: "" });
                      }}
                      className={`w-full px-4 py-3 text-sm bg-[#F7F4ED]/50 border ${
                        errors.practiceArea ? "border-red-500" : "border-neutral-300"
                      } focus:border-[#B89A62] focus:bg-white focus:outline-none transition-colors`}
                    >
                      <option value="">Select practice area...</option>
                      {SITE_DATA.practiceAreas.map((pa) => (
                        <option key={pa.id} value={pa.title}>
                          {pa.title}
                        </option>
                      ))}
                      <option value="General Commercial Inquiries">
                        General Commercial Inquiries
                      </option>
                    </select>
                    {errors.practiceArea && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                        <AlertTriangle className="w-3 h-3 shrink-0" />
                        <span>{errors.practiceArea}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Brief Description */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-2"
                  >
                    Brief Description of Matter *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    placeholder="Please outline the nature of your inquiry without disclosing confidential proprietary or time-sensitive trial documents..."
                    className={`w-full px-4 py-3 text-sm bg-[#F7F4ED]/50 border ${
                      errors.message ? "border-red-500" : "border-neutral-300"
                    } focus:border-[#B89A62] focus:bg-white focus:outline-none transition-colors`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                      <AlertTriangle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Privacy Consent Checkbox */}
                <div>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.privacyConsent}
                      onChange={(e) => {
                        setFormData({ ...formData, privacyConsent: e.target.checked });
                        if (errors.privacyConsent) setErrors({ ...errors, privacyConsent: "" });
                      }}
                      className="mt-1 w-4 h-4 text-[#B89A62] border-neutral-300 focus:ring-[#B89A62]"
                    />
                    <span className="text-xs text-neutral-600 leading-normal">
                      I understand that submitting this inquiry does not create an attorney-client relationship and that this form should not contain sensitive or confidential evidence.
                    </span>
                  </label>
                  {errors.privacyConsent && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                      <AlertTriangle className="w-3 h-3 shrink-0" />
                      <span>{errors.privacyConsent}</span>
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center space-x-3 py-4 px-8 bg-[#101B2C] hover:bg-[#1A283E] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all border border-[#B89A62]/40 hover:border-[#B89A62]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#B89A62]" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-4 h-4 text-[#B89A62]" />
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
