import { motion } from "motion/react";
import { Translation } from "../types";

export default function Hero({ t }: { t: Translation }) {
  return (
    <section className="relative h-screen w-full bg-cream overflow-hidden flex items-center justify-center">
      
      {/* Visual Layer: Background Watermark + Main Logo */}
      {/* 'absolute inset-0' pins this to the background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative flex items-center justify-center">
          {/* Watermark: Increased to 110vmin to make it larger and more dominant */}
          <img 
            src="/watermark.png" 
            alt="Watermark" 
            className="w-[110vmin] h-[110vmin] object-contain opacity-[0.15]" 
          />
          
          {/* Main Logo: Pinned absolutely to the center of the watermark div */}
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

      {/* Content Layer: Text */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
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
    </section>
  );
}
