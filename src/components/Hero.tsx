import { motion } from "motion/react";
import { Translation } from "../types";

export default function Hero({ t }: { t: Translation }) {
  return (
    <section className="relative h-screen w-full bg-cream overflow-hidden">

      {/* EYEBROW — pinned near top of section */}
      <div className="absolute top-[10%] left-0 right-0 flex justify-center z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="eyebrow text-brown tracking-widest uppercase text-sm"
        >
          {t.hero.eyebrow}
        </motion.span>
      </div>

      {/* FROGS — centered in the full section, behind everything */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Large watermark frog */}
        <img
          src="/watermark.png"
          alt=""
          className="absolute w-[72vmin] h-[72vmin] object-contain opacity-[0.18]"
        />

        {/* Small TM logo, centered on the watermark */}
        <motion.img
          src="/logo.png"
          alt="JDDP Logo"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          className="absolute w-[14vmin] h-[14vmin] object-contain z-10"
        />
      </div>

      {/* HEADLINE — pinned to lower portion, overlaps bottom of frogs */}
      <div className="absolute bottom-[12%] left-0 right-0 flex flex-col items-center text-center px-6 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
          className="font-serif text-body leading-[1.05] text-center"
        >
          {/* Line 1: normal + italic accent */}
          <span className="block text-6xl md:text-8xl">
            {t.hero.title.normal}
            <em className="text-brown italic">{t.hero.title.italic}</em>
          </span>

          {/* Line 2: closing word */}
          <span className="block text-6xl md:text-8xl">
            {t.hero.title.after.trim()}
          </span>
        </motion.h2>
      </div>

    </section>
  );
}
