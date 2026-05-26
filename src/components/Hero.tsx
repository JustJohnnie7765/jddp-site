import { motion } from "motion/react";
import { Translation } from "../types";

export default function Hero({ t }: { t: Translation }) {
  return (
    <section
      style={{
        height: 'calc(100vh - 96px)',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto auto',
        paddingBottom: '20px',
        overflow: 'hidden',
      }}
      className="w-full bg-cream"
    >

      {/* ROW 1 — Eyebrow */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="self-center justify-self-center eyebrow text-brown tracking-widest uppercase text-sm py-3"
      >
        {t.hero.eyebrow}
      </motion.span>

      {/* ROW 2 — Frog zone: 1fr = fills every remaining pixel, zero gaps */}
      <div className="relative w-full">

        {/* Watermark fills the entire row */}
        <motion.img
          src="/watermark.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.22 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />

        {/* TM logo — 45% down = torso, not head */}
        <motion.img
          src="/logo.png"
          alt="JDDP Logo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          className="absolute w-auto object-contain z-10"
          style={{
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '11%',
          }}
        />
      </div>

      {/* ROW 3 — Headline overlaps frog legs */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
        className="w-full font-serif text-body leading-[1.05] text-center z-10 px-6"
        style={{ marginTop: '-5vh' }}
      >
        <span className="block text-6xl md:text-8xl">
          {t.hero.title.normal}
          <em className="text-brown italic">{t.hero.title.italic}</em>
        </span>
        <span className="block text-6xl md:text-8xl">
          {t.hero.title.after.trim()}
        </span>
      </motion.h2>

      {/* ROW 4 — Discover: always visible, always last */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="self-end justify-self-center flex flex-col items-center gap-1 text-brown z-20 pb-1"
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
