import { motion } from "motion/react";
import { Translation } from "../types";

export default function Hero({ t }: { t: Translation }) {
  return (
    <section className="relative min-h-screen w-full bg-cream overflow-hidden">
      
      {/* 1. Visual Layer: Pin to center using absolute/fixed coordinates */}
      {/* This completely detaches the images from the text flow, stopping the "pushing down" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative flex items-center justify-center">
          {/* Watermark */}
          <img 
            src="/logo.png" 
            alt="Watermark" 
            className="w-[80vmin] h-[80vmin] object-contain opacity-[0.05]" 
          />
          
          {/* Main Logo - Pinned to the center of the watermark div */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5, duration: 1 }}
             className="absolute"
          >
            <img 
              src="/logo.png" 
              alt="JDDP Logo" 
              className="w-32 h-32 object-contain" 
            />
          </motion.div>
        </div>
      </div>

      {/* 2. Content Layer: Text */}
      {/* This layer is now completely independent and won't affect the images */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="eyebrow text-brown mb-8"
        >
          {t.hero.eyebrow}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-6xl md:text-8xl font-serif text-body leading-tight"
        >
          {t.hero.title.normal}
          <em className="text-brown italic">{t.hero.title.italic}</em>
          {t.hero.title.after}
        </motion.h2>
      </div>

      {/* 3. Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 w-full flex flex-col items-center gap-4 z-20"
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
