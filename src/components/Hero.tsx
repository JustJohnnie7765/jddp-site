import { motion } from "motion/react";
import { Translation } from "../types";

export default function Hero({ t }: { t: Translation }) {
  return (
    <section className="relative h-screen w-full bg-cream overflow-hidden flex items-center justify-center">

      {/* VISUAL LAYER: Watermark + Logo */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Large background watermark frog */}
        <img
          src="/watermark.png"
          alt=""
          className="absolute w-[78vmin] h-[78vmin] object-contain opacity-[0.18]"
        />

        {/* Small TM logo centered on watermark */}
        <motion.img
          src="/logo.png"
          alt="JDDP Logo"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          className="absolute w-[13vmin] h-[13vmin] object-contain"
        />
      </div>

      {/* CONTENT LAYER: Eyebrow + Headline */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">

        {/* Eyebrow label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="eyebrow text-brown mb-8 tracking-widest uppercase text-sm"
        >
          {t.hero.eyebrow}
        </motion.span>

        {/* Main headline — two explicit lines, works for all 3 languages */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
          className="font-serif text-body leading-[1.05] text-center"
        >
          {/* Line 1: normal + italic accent word */}
          <span className="block text-6xl md:text-8xl">
            {t.hero.title.normal}
            <em className="text-brown italic">{t.hero.title.italic}</em>
          </span>

          {/* Line 2: closing word — trim() removes the leading space */}
          <span className="block text-6xl md:text-8xl">
            {t.hero.title.after.trim()}
          </span>
        </motion.h2>

      </div>
    </section>
  );
}
