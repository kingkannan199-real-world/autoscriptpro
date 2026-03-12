import Hero from "../components/Hero";
import Services from "../components/Services"; 
import Process from "../components/Process"; 
import Impact from "../components/Impact";
import WhyChooseUs from "../components/WhyChooseUs"; 
import WhatDrivesUs from "../components/WhatDrivesUs"; // Add this!
// import Team from "../components/Team"; 
import FAQ from "../components/FAQ"; 
import Contact from "../components/Contact"; 
import Footer from "../components/Footer"; 
import SocialProofToast from "../components/SocialProofToast";
import CaseStudies from "../components/CaseStudies"; // <-- Import it here
import ScrollProgress from "../components/ScrollProgress"; // <-- Import here
// AIChatWidget IMPORT REMOVED

export default function Home() {
  return (
    // Changed bg-slate-50 to bg-white for that clean light preference
    <main className="bg-white min-h-screen relative overflow-x-hidden">
      <Hero />
      <ScrollProgress /> {/* <-- Drop it at the absolute top */}  
      <Services /> 
      <Process /> 
      <Impact /> 
      <WhyChooseUs /> 
      <CaseStudies /> {/* <-- Drop it here */}
      <WhatDrivesUs /> {/* Dropped in perfectly before the Team section */}
      {/* <Team />  */}
      <FAQ /> 
      <Contact /> 
      <SocialProofToast />
      <Footer /> 
      {/* AIChatWidget COMPONENT REMOVED */}
    </main>
  );
}