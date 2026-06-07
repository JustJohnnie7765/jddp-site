import { motion } from "motion/react";
import FrogLogo from "./FrogLogo";
import { Translation } from "../types";

interface HeroProps {
  t: Translation;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream px-6">
      <div className="relative z-10 text-center max-w-2xl flex flex-col items-center -translate-y-16 md:-translate-y-24">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3, duration: 1 }}
           className="mb-8 md:mb-10 translate-y-4"
        >
          <FrogLogo className="w-[60vmin] h-[60vmin] max-w-[320px] max-h-[320px]" color="#6B2D0E" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="brand-wordmark-jddp text-[2.5rem] md:text-[3.25rem] font-black text-brown mb-3 tracking-[0.25em] translate-x-[0.125em]"
        >
          JDDP
        </motion.h1>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="brand-wordmark-full text-[0.75rem] md:text-sm text-brown mb-6 md:mb-8 block"
        >
          {t.hero.eyebrow}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="brand-title text-body whitespace-nowrap"
        >
          {t.hero.title.normal}
          <span className="font-light italic text-brown inline-block mx-1" style={{ fontWeight: 300 }}>{t.hero.title.italic}</span>
          {t.hero.title.after}
        </motion.h2>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <span className="brand-section-header text-[0.55rem] text-warm">{t.hero.scroll}</span>
        <motion.div
          animate={{ height: [0, 40, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-warm"
        />
      </motion.div>
    </section>
  );
}
