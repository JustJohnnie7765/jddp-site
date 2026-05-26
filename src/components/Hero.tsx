import { motion } from "motion/react";
import { Translation } from "../types";

export default function Hero({ t }: { t: Translation }) {
  return (
    <section className="w-full bg-cream overflow-hidden flex flex-col items-center justify-center px-6" style={{ height: 'calc(100vh - 60px)' }}>

      {/* Eyebrow */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="eyebrow text-brown tracking-widest uppercase text-sm z-20 mb-0"
      >
        {t.hero.eyebrow}
      </motion.span>

      {/* Frog container — fixed at 42% of usable viewport height */}
      <div className="relative w-full flex-shrink-0" style={{ height: '42vh' }}>

        {/* Watermark fills full container */}
        <motion.img
          src="/watermark.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.22 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />

        {/* TM logo — 60% down = sits on torso not head */}
        <motion.img
          src="/logo.png"
          alt="JDDP Logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[13%] w-auto object-contain z-10"
        />
      </div>

      {/* Headline — negative margin overlaps frog legs */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
        className="w-[90vw] font-serif text-body leading-[1.05] text-center z-10"
        style={{ marginTop: '-4vh' }}
      >
        <span className="block text-6xl md:text-8xl">
          {t.hero.title.normal}
          <em className="text-brown italic">{t.hero.title.italic}</em>
        </span>
        <span className="block text-6xl md:text-8xl">
          {t.hero.title.after.trim()}
        </span>
      </motion.h2>

      {/* Discover — always inside section, in normal flow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="mt-5 flex flex-col items-center gap-1 text-brown z-20"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="eyebrow tracking-widest uppercase text-xs">
            {t.hero.scroll}
          </span>
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 0 L7 14 M1 8 L7 14 L13 8" />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  );
}
