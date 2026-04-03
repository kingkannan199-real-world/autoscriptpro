import Hero from "../components/Hero";
import LogoTicker from "../components/LogoTicker";
import Services from "../components/Services";
import TechMarquee from "../components/TechMarquee";
import Process from "../components/Process";
import Impact from "../components/Impact";
import WhyChooseUs from "../components/WhyChooseUs";
import CaseStudies from "../components/CaseStudies";
import WhatDrivesUs from "../components/WhatDrivesUs";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen relative overflow-x-hidden">
      <Hero />
      <LogoTicker />
      <Services />
      <TechMarquee />
      <Process />
      <Impact />
      <WhyChooseUs />
      <CaseStudies />
      <WhatDrivesUs />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}