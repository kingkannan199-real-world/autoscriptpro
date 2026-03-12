"use client";

import { motion, Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronRight, ChevronLeft } from "lucide-react";

const team = [
  { name: "Linkesh Raju", role: "Lead AI & Full-Stack Architect", bio: "Specializing in multi-agent RAG systems, custom LLM integrations, and immersive Next.js interfaces.", image: "https://ui-avatars.com/api/?name=Linkesh+Raju&background=0D1117&color=3B82F6&size=256&font-size=0.33", socials: { github: "#", linkedin: "#", email: "mailto:dev.linkeshraju@gmail.com" } },
  { name: "[Teammate 2]", role: "Backend & Systems Engineer", bio: "Architecting scalable, high-throughput backend infrastructure using Java and Spring Boot.", image: "https://ui-avatars.com/api/?name=Backend+Lead&background=F8FAFC&color=0F172A&size=256&font-size=0.33", socials: { github: "#", linkedin: "#", email: "#" } },
  { name: "[Teammate 3]", role: "Data & Automation Scientist", bio: "Connecting fragmented data silos and building autonomous workflows.", image: "https://ui-avatars.com/api/?name=Data+Lead&background=F8FAFC&color=0F172A&size=256&font-size=0.33", socials: { github: "#", linkedin: "#", email: "#" } },
  { name: "[Teammate 4]", role: "Frontend & Spatial Engineer", bio: "Crafting hyper-converting user experiences and 3D web environments.", image: "https://ui-avatars.com/api/?name=Frontend+Lead&background=F8FAFC&color=0F172A&size=256&font-size=0.33", socials: { github: "#", linkedin: "#", email: "#" } },
  { name: "[Teammate 5]", role: "Operations & Growth Strategist", bio: "Mapping client bottlenecks to exact technical solutions.", image: "https://ui-avatars.com/api/?name=Growth+Lead&background=F8FAFC&color=0F172A&size=256&font-size=0.33", socials: { github: "#", linkedin: "#", email: "#" } }
];

export default function Team() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="team" className="w-full py-28 bg-white relative z-10 border-t border-slate-100 cursor-none scroll-mt-20">
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center px-4 py-1.5 mb-4 rounded-full bg-blue-50 border border-blue-100">
              <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">The Engineering Core</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Architects.</span>
            </motion.h2>
          </div>
          
          {/* Desktop Navigation Arrows */}
          <div className="hidden md:flex gap-3">
            <button onClick={() => scroll("left")} disabled={!canScrollLeft} className={`p-3 rounded-full border transition-all cursor-none ${canScrollLeft ? "border-slate-300 hover:bg-slate-50 text-slate-900" : "border-slate-100 text-slate-300"}`}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll("right")} disabled={!canScrollRight} className={`p-3 rounded-full border transition-all cursor-none ${canScrollRight ? "border-slate-300 hover:bg-slate-50 text-slate-900" : "border-slate-100 text-slate-300"}`}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* --- DRIBBBLE SLIDER --- */}
        <div className="relative -mx-6 px-6 lg:-mx-8 lg:px-8">
          <div 
            ref={carouselRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-10 pt-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {team.map((member, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8 }}
                className="snap-start snap-always shrink-0 w-[85vw] md:w-[350px] bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col cursor-grab active:cursor-grabbing"
              >
                <div className="w-full h-56 bg-slate-100 relative overflow-hidden rounded-t-[2rem]">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover pointer-events-none" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-bold text-blue-500 uppercase tracking-wide mb-4">{member.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{member.bio}</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <a href={member.socials.github} className="text-slate-400 hover:text-slate-900 cursor-none"><Github size={20} /></a>
                    <a href={member.socials.linkedin} className="text-slate-400 hover:text-blue-600 cursor-none"><Linkedin size={20} /></a>
                    <a href={member.socials.email} className="text-slate-400 hover:text-red-500 cursor-none"><Mail size={20} /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}