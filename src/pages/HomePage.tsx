import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";

import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import WhyStudySection from "../components/home/WhyStudySection";
import ProgramsSection from "../components/home/ProgramsSection";
import WhoShouldEnrollSection from "../components/home/WhoShouldEnrollSection";
import CareerOutcomesSection from "../components/home/CareerOutcomesSection";
import PartnersSection from "../components/home/PartnersSection";
import TeamSection from "../components/home/TeamSection";
import ContactSection from "../components/home/ContactSection";
import FooterSection from "../components/home/FooterSection";

const HomePage: React.FC = () => {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleExpand = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  /**
   * Scroll to a section by id
   */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  /**
   * Handle scroll if location.state.scrollTo exists (from Header navigation)
   */
  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      scrollToSection(id);

      // Clear the state so it doesn't interfere with future navigations
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, location.pathname, navigate]);

  return (
    <div className="bg-white text-gray-700 font-sans leading-relaxed">
      <Header />

      <HeroSection />
      <AboutSection />
      <WhyStudySection />
      <ProgramsSection
        expandedSlug={expandedSlug}
        toggleExpand={toggleExpand}
      />
      <WhoShouldEnrollSection />
      <CareerOutcomesSection />
      <PartnersSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
