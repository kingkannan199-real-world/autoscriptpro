"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

// The 5-Member Founding Core
const team = [
  {
    name: "Linkesh Raju",
    role: "Lead AI & Full-Stack Architect",
    bio: "Specializing in multi-agent RAG systems, custom LLM integrations, and immersive Next.js interfaces. Drives the core technical vision.",
    image: "https://ui-avatars.com/api/?name=Linkesh+Raju&background=0D1117&color=3B82F6&size=256&font-size=0.33", 
    socials: { github: "#", linkedin: "#", email: "mailto:dev.linkeshraju@gmail.com" }
  },
  {
    name: "[Teammate 2]",
    role: "Backend & Systems Engineer",
    bio: "Architecting scalable, high-throughput backend infrastructure using Java and Spring Boot. Ensures zero-downtime deployments.",
    image: "https://ui-avatars.com/api/?name=Backend+Lead&background=F8FAFC&color=0F172A&size=256&font-size=0.33", 
    socials: { github: "#", linkedin: "#", email: "#" }
  },
  {
    name: "[Teammate 3]",
    role: "Data & Automation Scientist",
    bio: "Connecting fragmented data silos and building autonomous workflows. Transforms raw business operations into highly optimized pipelines.",
    image: "https://ui-avatars.com/api/?name=Data+Lead&background=F8FAFC&color=0F172A&size=256&font-size=0.33",
    socials: { github: "#", linkedin: "#", email: "#" }
  },
  {
    name: "[Teammate 4]",
    role: "Frontend & Spatial Engineer",
    bio: "Crafting hyper-converting user experiences and 3D web environments. Bridges the gap between complex data and intuitive design.",
    image: "https://ui-avatars.com/api/?name=Frontend+Lead&background=F8FAFC&color=0F172A&size=256&font-size=0.33",
    socials: { github: "#", linkedin: "#", email: "#" }
  },
  {
    name: "[Teammate 5]",
    role: "Operations & Growth Strategist",
    bio: "Mapping client bottlenecks to exact technical solutions. Ensures every line of code deployed directly increases the client's bottom line.",
    image: "https://ui-avatars.com/api/?name=Growth+Lead&background=F8FAFC&color=0F172A&size=256&font-size=0.33",
    socials: { github: "#", linkedin: "#", email: "#" }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Team() {
  return (
    <section id="team" className="w-full py-28 bg-white relative z-10 border-t border-slate-100 cursor-none overflow-hidden scroll-mt-20">
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 cursor-none"
          >
            <span className="text-sm font-bold text-blue-600 tracking-wider uppercase">The Engineering Core</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Architects.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            A dedicated squad of computer science engineers, AI researchers, and system architects passionate about eliminating manual work.
          </motion.p>
        </div>

        {/* Changed to flex-wrap with justify-center to perfectly balance 5 items (3 on top, 2 on bottom) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-8"
        >
          {team.map((member, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }} // <-- ADD THIS LINE
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[400px] bg-white rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden cursor-none flex flex-col"
            >
              <div className="w-full h-64 bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm font-bold text-blue-500 uppercase tracking-wide mb-4">
                  {member.role}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {member.bio}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 mt-auto">
                  <a href={member.socials.github} className="text-slate-400 hover:text-slate-900 transition-colors cursor-none">
                    <Github size={20} />
                  </a>
                  <a href={member.socials.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors cursor-none">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.socials.email} className="text-slate-400 hover:text-red-500 transition-colors cursor-none">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}