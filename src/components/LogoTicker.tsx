"use client";

import { motion } from "framer-motion";
import Flags from "country-flag-icons/react/3x2";

const countries: { code: keyof typeof Flags; name: string }[] = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
  { code: "CA", name: "Canada" },
  { code: "SG", name: "Singapore" },
  { code: "AE", name: "UAE" },
  { code: "DE", name: "Germany" },
  { code: "NL", name: "Netherlands" },
  { code: "FR", name: "France" },
  { code: "NZ", name: "New Zealand" },
];

const allFlags = [...countries, ...countries];

export default function LogoTicker() {
  return (
    <div className="w-full py-12 bg-white border-t border-b border-slate-100 overflow-hidden cursor-none">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 mb-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
          Currently Working With Clients From
        </p>
      </div>

      <div className="relative flex max-w-[100vw] overflow-hidden">
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap items-center gap-10 md:gap-16 pl-10 md:pl-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {allFlags.map((country, index) => {
            const Flag = Flags[country.code];
            return (
              <div
                key={index}
                className="relative flex-shrink-0 overflow-hidden"
                style={{
                  width: "72px",
                  height: "48px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)",
                  border: "1.5px solid rgba(0,0,0,0.08)",
                }}
                title={country.name}
              >
                <Flag
                  title={country.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
