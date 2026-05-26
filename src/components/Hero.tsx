import { motion } from "motion/react";
import { Translation } from "../types";

export default function Hero({ t }: { t: Translation }) {
  return (
    <section className="relative h-screen w-full bg-cream overflow-hidden flex flex-col items-center justify-center">

      {/* MAIN COMPOSITION — one compact centered group */}
      <div className="flex flex-col items-center text-center px-6">

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="eyebrow text-brown tracking-widest uppercase text-sm mb-4"
        >
          {t.hero.eyebrow}
        </motion.span>

        {/* Frog block — watermark + TM logo together */}
        <div className="relative w-[62vmin] h-[62vmin] flex-shrink-0">
          {/* Large watermark */}
          <motion.img
            src="/watermark.png"
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.22 }}
            transition={{ delay: 0.2, duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-contain"
          />
          {/* Small TM logo centered on watermark body */}
          <motion.img
            src="/logo.png"
            alt="JDDP Logo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[17%] h-[17%] object-contain"
          />
        </div>

        {/* Headline — pulled up to overlap lower frog */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
          className="font-serif text-body leading-[1.05] text-center -mt-[18vmin]"
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

      {/* SCROLL INDICATOR — pinned to bottom */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-brown opacity-50"
      >
        <span className="eyebrow tracking-widest uppercase text-xs">{t.hero.scroll}</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 0 L8 20 M2 14 L8 20 L14 14" />
        </svg>
      </motion.div>

    </section>
  );
}
