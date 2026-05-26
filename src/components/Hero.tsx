import { motion } from "motion/react";
import { Translation } from "../types";

export default function Hero({ t }: { t: Translation }) {
  return (
    <section className="relative h-screen w-full bg-cream overflow-hidden">

      {/* EYEBROW — anchored high */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute top-[16%] left-1/2 -translate-x-1/2 whitespace-nowrap eyebrow text-brown tracking-widest uppercase text-sm z-20"
      >
        {t.hero.eyebrow}
      </motion.span>

      {/* WATERMARK — large, centered at 42% of section height */}
      <motion.img
        src="/watermark.png"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.2, duration: 1.2 }}
        className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72vmin] h-[72vmin] object-contain z-0"
      />

      {/* TM LOGO — on the frog body, not the head */}
      <motion.img
        src="/logo.png"
        alt="JDDP Logo"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10vmin] h-[10vmin] object-contain z-10"
      />

      {/* HEADLINE — starts at 60%, overlaps frog legs */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
        className="absolute top-[58%] left-1/2 -translate-x-1/2 w-[90vw] font-serif text-body leading-[1.05] text-center z-10"
      >
        <span className="block text-6xl md:text-8xl">
          {t.hero.title.normal}
          <em className="text-brown italic">{t.hero.title.italic}</em>
        </span>
        <span className="block text-6xl md:text-8xl">
          {t.hero.title.after.trim()}
        </span>
      </motion.h2>

      {/* DISCOVER — always visible at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brown z-20"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="eyebrow tracking-widest uppercase text-xs">
            {t.hero.scroll}
          </span>
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 0 L7 16 M1 10 L7 16 L13 10" />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  );
}
