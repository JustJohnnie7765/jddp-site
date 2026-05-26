import { motion } from "motion/react";
import { Translation } from "../types";

export default function Hero({ t }: { t: Translation }) {
  return (
    <section className="relative h-screen w-full bg-cream overflow-hidden">

      {/* COMPOSITION — anchored 12% from top, flows down naturally */}
      <div className="absolute top-[12%] left-0 right-0 flex flex-col items-center text-center px-6">

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="eyebrow text-brown tracking-widest uppercase text-sm mb-4"
        >
          {t.hero.eyebrow}
        </motion.span>

        {/* Frog block */}
        <div className="relative w-[52vmin] h-[52vmin] flex-shrink-0">

          {/* Watermark */}
          <motion.img
            src="/watermark.png"
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.22 }}
            transition={{ delay: 0.2, duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-contain"
          />

          {/* TM logo — on body, not head */}
          <motion.img
            src="/logo.png"
            alt="JDDP Logo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
            className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15%] h-[15%] object-contain z-10"
          />
        </div>

        {/* Headline — overlaps frog legs */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
          className="-mt-[14vmin] w-[88vw] font-serif text-body leading-[1.05] text-center z-10"
        >
          <span className="block text-6xl md:text-8xl">
            {t.hero.title.normal}
            <em className="text-brown italic">{t.hero.title.italic}</em>
          </span>
          <span className="block text-6xl md:text-8xl">
            {t.hero.title.after.trim()}
          </span>
        </motion.h2>

        {/* Discover — in normal flow, sits directly below "Brave." */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-8 flex flex-col items-center gap-2 text-brown"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="eyebrow tracking-widest uppercase text-xs">
              {t.hero.scroll}
            </span>
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 0 L7 14 M1 8 L7 14 L13 8" />
            </svg>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
