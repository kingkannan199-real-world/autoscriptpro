import Hero from "../components/Hero";
import Services from "../components/Services"; 
import Process from "../components/Process"; 
import Impact from "../components/Impact";
import WhyChooseUs from "../components/WhyChooseUs"; 
import Team from "../components/Team"; 
import FAQ from "../components/FAQ"; // Add this import
import Contact from "../components/Contact"; 
import Footer from "../components/Footer"; 
import AIChatWidget from "../components/AIChatWidget";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen relative overflow-x-hidden">
      <Hero />
      <Services /> 
      <Process /> 
      <Impact /> 
      <WhyChooseUs /> 
      <Team /> 
      
      {/* The Objection Killer */}
      <FAQ /> 
      
      <Contact /> 
      <Footer /> 
      <AIChatWidget />
    </main>
  );
}