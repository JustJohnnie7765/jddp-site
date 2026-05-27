import { motion } from "motion/react";
import { Translation } from "../types";

export default function Hero({ t }: { t: Translation }) {
  const maskStyle = {
    WebkitMaskImage: "url('/watermark.png')",
    maskImage: "url('/watermark.png')",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  };

  return (
    <section
      className="w-full bg-cream overflow-hidden flex flex-col items-center justify-center"
      style={{ height: 'calc(100vh - 64px)' }}
    >
      <div className="relative flex-shrink-0" style={{ width: 'min(100vw, 96vh)' }}>

        <div className="relative w-full" style={{ paddingTop: '82%' }}>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-display uppercase text-brown font-light z-10"
            style={{ top: '5%', fontSize: '0.55rem', letterSpacing: '0.3em' }}
          >
            {t.hero.eyebrow}
          </motion.span>

          <motion.img
            src="/watermark.png"
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.18 }}
            transition={{ delay: 0.2, duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="absolute z-10"
            style={{
              top: '48%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '19%',
              height: '19%',
              backgroundColor: '#6B2D0E',
              ...maskStyle,
            }}
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="w-full font-serif text-body text-center z-10 px-2"
          style={{ marginTop: '-38%', lineHeight: 1.08 }}
        >
          <span className="block text-6xl md:text-8xl font-normal">
            {t.hero.title.normal}
            <em className="text-brown italic">{t.hero.title.italic}</em>
          </span>
          <span className="block text-6xl md:text-8xl font-normal">
            {t.hero.title.after.trim()}
          </span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="mt-4 flex flex-col items-center gap-1 text-brown"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="font-display uppercase font-light" style={{ fontSize: '0.5rem', letterSpacing: '0.3em' }}>
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
