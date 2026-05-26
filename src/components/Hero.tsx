import { motion } from "motion/react";
import { Translation } from "../types";

export default function Hero({ t }: { t: Translation }) {
  return (
    <section className="relative h-screen w-full bg-cream overflow-hidden">

      {/* WATERMARK — 85vh tall, centered in viewport, always fills the screen */}
      <motion.img
        src="/watermark.png"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22 }}
        transition={{ delay: 0.2, duration: 1.2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[85vh] w-auto object-contain pointer-events-none"
      />

      {/* EYEBROW — sits above frog head */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute top-[13vh] left-1/2 -translate-x-1/2 whitespace-nowrap eyebrow text-brown tracking-widest uppercase text-sm z-20"
      >
        {t.hero.eyebrow}
      </motion.span>

      {/* TM LOGO — on frog torso, not head */}
      <motion.img
        src="/logo.png"
        alt="JDDP Logo"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        className="absolute top-[42vh] left-1/2 -translate-x-1/2 -translate-y-1/2 h-[7vh] w-auto object-contain z-10"
      />

      {/* HEADLINE — overlaps lower frog body and legs */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
        className="absolute top-[58vh] left-1/2 -translate-x-1/2 w-[90vw] font-serif text-body leading-[1.1] text-center z-10"
      >
        <span className="block text-6xl md:text-8xl">
          {t.hero.title.normal}
          <em className="text-brown italic">{t.hero.title.italic}</em>
        </span>
        <span className="block text-6xl md:text-8xl">
          {t.hero.title.after.trim()}
        </span>
      </motion.h2>

      {/* DISCOVER — always at 88vh, always on screen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute top-[88vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-brown z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
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
