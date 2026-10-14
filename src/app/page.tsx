import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustHighlights from "@/components/TrustHighlights";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import ConsultationCTA from "@/components/ConsultationCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4ED] text-[#17191D] relative selection:bg-[#B89A62]/30 selection:text-[#101B2C]">
      {/* Fixed Luxury Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trust & Professional Highlights Strip */}
      <TrustHighlights />

      {/* About the Attorney & Credentials */}
      <About />

      {/* Practice Areas */}
      <PracticeAreas />

      {/* 3-Stage Legal Methodology */}
      <Approach />

      {/* Selected Matters & Representative Work */}
      <Experience />

      {/* Client Perspectives & Testimonials */}
      <Testimonials />

      {/* Insights & Legal Commentary */}
      <Insights />

      {/* Consultation Conversion Section */}
      <ConsultationCTA />

      {/* Contact Section & Consultation Form */}
      <Contact />

      {/* Footer & Attorney Advertising Disclaimers */}
      <Footer />
    </main>
  );
}
