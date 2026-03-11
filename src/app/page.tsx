import Hero from "../components/Hero";
import Services from "../components/Services"; // Import the new component
import AIChatWidget from "../components/AIChatWidget";

export default function Home() {
  return (
    <main className="bg-slate-50 min-h-screen relative overflow-x-hidden">
      <Hero />
      <Services /> {/* Drop it here */}
      <AIChatWidget />
    </main>
  );
}