import { motion } from "motion/react";
import { Translation } from "../types";

export default function Hero({ t }: { t: Translation }) {
  return (
    <section className="relative h-screen w-full bg-cream overflow-hidden flex flex-col items-center justify-center">

      {/* Eyebrow */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="eyebrow text-brown tracking-widest uppercase text-sm mb-3 z-20"
      >
        {t.hero.eyebrow}
      </motion.span>

      {/* Frog container — text is anchored INSIDE this so it's one unit */}
      <div className="relative w-[58vmin] h-[58vmin] flex-shrink-0 overflow-visible">

        {/* Watermark */}
        <motion.img
          src="/watermark.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* TM Logo — centered on frog body */}
        <motion.img
          src="/logo.png"
          alt="JDDP Logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[16%] h-[16%] object-contain z-10"
        />

        {/* Headline — starts at 68% down the frog, overlaps legs, overflows below */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
          className="absolute top-[68%] left-1/2 -translate-x-1/2 w-[92vw] font-serif text-body leading-[1.05] text-center z-10"
        >
          <span className="block text-6xl md:text-8xl">
            {t.hero.title.normal}
            <em className="text-brown italic">{t.hero.title.italic}</em>
          </span>
          <span className="block text-6xl md:text-8xl">
            {t.hero.title.after.trim()}
          </span>
        </motion.h2>
      </div>

      {/* Spacer — matches the text overflow height so flex centering stays accurate */}
      <div className="h-[22vmin] flex-shrink-0" />

      {/* Scroll indicator — pinned to bottom, breathing animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-brown"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="eyebrow tracking-widest uppercase text-xs">
            {t.hero.scroll}
          </span>
          <svg width="16" height="20" viewBox="0 0 16 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 0 L8 16 M2 10 L8 16 L14 10" />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  );
}
