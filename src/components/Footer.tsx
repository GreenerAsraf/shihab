"use client";

import { Scale, ArrowUp, Award, Shield } from "lucide-react";
import { SITE_DATA } from "@/lib/site-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#101B2C] text-white border-t border-[#B89A62]/30 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Attorney Brand & Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 border border-[#B89A62] bg-[#17191D] flex items-center justify-center">
                <Scale className="w-4 h-4 text-[#B89A62]" />
              </div>
              <div>
                <span className="block font-serif text-xl tracking-wider text-white font-medium">
                  {SITE_DATA.attorney.name}
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#B89A62]">
                  {SITE_DATA.attorney.credentials} • {SITE_DATA.attorney.firmName}
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              Providing dedicated legal advocacy, precise documentation, and courtroom assistance at the Judge&apos;s Court, Chittagong, Bangladesh.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.facebook.com/shihabu007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#B89A62] hover:border-[#B89A62] transition-colors"
                aria-label="Facebook Profile"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/shihabu007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#B89A62] hover:border-[#B89A62] transition-colors"
                aria-label="Professional Profile"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36M5.07 18.5h2.79v-8.37H5.07v8.37z" />
                </svg>
              </a>
              <a
                href="#about"
                className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#B89A62] hover:border-[#B89A62] transition-colors"
                aria-label="Court Standing & Credentials"
              >
                <Award className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B89A62] font-semibold">
              Practice Overview
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Attorney Biography & Philosophy
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-white transition-colors">
                  Practice Areas & Capabilities
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  Three-Stage Representation Model
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Selected Matters & Case Precedents
                </a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">
                  Legal Commentary & Articles
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Schedule Confidential Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Chambers Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B89A62] font-semibold">
              Chambers Address
            </h4>
            <div className="text-xs text-neutral-400 space-y-1 leading-relaxed">
              <p className="text-white font-medium">{SITE_DATA.attorney.firmName}</p>
              <p>{SITE_DATA.contactInfo.address.line1}</p>
              <p>
                {SITE_DATA.contactInfo.address.city}, {SITE_DATA.contactInfo.address.state} {SITE_DATA.contactInfo.address.zip}
              </p>
              <p className="pt-2 text-neutral-300 font-medium">
                Tel: {SITE_DATA.contactInfo.phone}
              </p>
              <p className="text-neutral-300">
                Email: {SITE_DATA.contactInfo.email}
              </p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box required for Attorney Websites */}
        <div className="my-8 p-4 bg-[#17191D] border border-white/5 text-[11px] text-neutral-400 leading-relaxed space-y-1.5">
          <div className="flex items-center space-x-1.5 text-neutral-300 font-semibold uppercase tracking-wider text-[10px]">
            <Shield className="w-3 h-3 text-[#B89A62]" />
            <span>Legal Notice & Attorney Advertising Disclaimer</span>
          </div>
          <p>
            The information contained on this website is intended solely for general informational purposes and does not constitute formal legal advice. Viewing this website or communicating with {SITE_DATA.attorney.name} via electronic transmission does not create an attorney-client relationship. Prior case outcomes or matter summaries do not guarantee or predict similar results in future legal proceedings.
          </p>
        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4 pt-4">
          <p>
            © {currentYear} {SITE_DATA.attorney.firmName}. All rights reserved. Attorney Advertising.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-neutral-300 hover:text-[#B89A62] transition-colors group focus:outline-none"
          >
            <span>Return to Top</span>
            <div className="w-7 h-7 rounded-full border border-white/10 group-hover:border-[#B89A62] flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-[#B89A62]" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
