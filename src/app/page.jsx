"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LandingHero from "./components/LandingHero";
import FeaturesSection from "./components/FeaturesSection";
import DesignerSection from "./components/DesignerSection";
import ClassSupportSection from "./components/ClassSupportSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import InboxSection from "./components/InboxSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";


export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f2f4f5] p-3">
      <Navbar setIsOpen={setIsSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="h-full bg-white rounded-sm shadow-lg">
        <LandingHero />
        <FeaturesSection />
        <DesignerSection />
        <ClassSupportSection />
        <PricingSection />
        <FAQSection />
        <InboxSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
