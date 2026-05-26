import { motion } from "motion/react";
import { Translation } from "../types";

export default function Hero({ t }: { t: Translation }) {
  return (
    <section className="relative h-screen w-full bg-cream overflow-hidden flex flex-col items-center justify-between py-[8vh]">

      {/* TOP — Eyebrow */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="eyebrow text-brown tracking-widest uppercase text-sm z-20"
      >
        {t.hero.eyebrow}
      </motion.span>

      {/* MIDDLE — Frogs, fills all available space between eyebrow and text */}
      <div className="relative flex-1 w-full flex items-center justify-center">

        {/* Watermark — fills the middle space */}
        <motion.img
          src="/watermark.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.22 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          className="absolute w-[90%] h-[90%] object-contain"
        />

        {/* TM logo — on the frog body */}
        <motion.img
          src="/logo.png"
          alt="JDDP Logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          className="relative w-[7vw] h-[7vw] min-w-[48px] min-h-[48px] object-contain z-10 -mt-[4vh]"
        />
      </div>

      {/* BOTTOM — Headline then Discover, stacked tightly */}
      <div className="flex flex-col items-center text-center w-full px-6 -mt-[6vh]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
          className="font-serif text-body leading-[1.05] text-center z-10 w-full"
        >
          <span className="block text-6xl md:text-8xl">
            {t.hero.title.normal}
            <em className="text-brown italic">{t.hero.title.italic}</em>
          </span>
          <span className="block text-6xl md:text-8xl">
            {t.hero.title.after.trim()}
          </span>
        </motion.h2>

        {/* Discover — sits directly below headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-5 flex flex-col items-center gap-1 text-brown"
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
      </div>

    </section>
  );
}
