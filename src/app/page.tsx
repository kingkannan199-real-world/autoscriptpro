"use client";

import { useState } from "react";
import CinematicIntro from "../components/CinematicIntro";
import Hero from "../components/Hero";
import Services from "../components/Services"; 
import Process from "../components/Process"; 
import Impact from "../components/Impact";
import WhyChooseUs from "../components/WhyChooseUs"; 
import WhatDrivesUs from "../components/WhatDrivesUs"; 
import FAQ from "../components/FAQ"; 
import Contact from "../components/Contact"; 
import Footer from "../components/Footer"; 
import CaseStudies from "../components/CaseStudies"; 

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <main className="bg-white min-h-screen relative overflow-x-hidden">
      {/* 1. Play the 3D Intro First */}
      {!introFinished && (
        <CinematicIntro onComplete={() => setIntroFinished(true)} />
      )}

      {/* 2. Reveal the site once the laptop zooms past the camera */}
      {introFinished && (
        <div className="animate-fade-in">
          <Hero />
          <Services /> 
          <Process /> 
          <Impact /> 
          <WhyChooseUs /> 
          <CaseStudies /> 
          <WhatDrivesUs /> 
          <FAQ /> 
          <Contact /> 
          <Footer /> 
        </div>
      )}
    </main>
  );
}