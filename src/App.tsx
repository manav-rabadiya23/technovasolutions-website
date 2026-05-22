import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactSection from "./components/sections/ContactSection";
import AboutSection from "./components/sections/AboutSection";
import InternshipSection from "./components/sections/InternshipSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import TeamSection from "./components/sections/TeamSection";
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
  return <HeroSection />;
}

function ServicesPage() {
  return <ServicesSection />;
}

function AboutPage() {
  return <AboutSection />;
}

function InternshipPage() {
  return <InternshipSection />;
}

function PortfolioPage() {
  return <PortfolioSection />;
}

function ContactPage() {
  return <ContactSection />;
}

export default function App() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <main className="min-h-screen bg-white pt-18 text-slate-950 transition-colors duration-300 dark:bg-[#050816] dark:text-white">
      <Header dark={dark} setDark={setDark} />

      <ScrollToTop />

      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/internship" element={<InternshipPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamSection />} />
        </Routes>
      </div>

      <Footer />
    </main>
  );
}
