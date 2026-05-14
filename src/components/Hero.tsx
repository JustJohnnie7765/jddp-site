import { motion } from "motion/react";
import FrogLogo from "./FrogLogo";
import { Translation } from "../types";

interface HeroProps {
  t: Translation;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream px-6">
      {/* Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
        <FrogLogo className="w-[95vmin] h-[95vmin]" color="#6B2D0E" shadow={false} />
      </div>

      <div className="relative z-10 text-center max-w-4xl flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="eyebrow text-brown mb-12"
        >
          {t.hero.eyebrow}
        </motion.span>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5, duration: 1 }}
           className="mb-12"
        >
          <FrogLogo className="w-24 h-24" color="#6B2D0E" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          /* Action Taken: Increased drama as requested.
             Bumped from text-5xl md:text-7xl to text-6xl md:text-8xl
          */
          className="text-6xl md:text-8xl font-serif text-body leading-tight"
        >
          {t.hero.title.normal}
          <em className="text-brown italic">{t.hero.title.italic}</em>
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
        <span className="eyebrow text-warm text-[0.45rem] tracking-[0.4em]">{t.hero.scroll}</span>
        <motion.div
          animate={{ height: [0, 40, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-warm"
        />
      </motion.div>
    </section>
  );
}
