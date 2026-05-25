import { motion } from "motion/react";
import { Translation } from "../types";

export default function Hero({ t }: { t: Translation }) {
  return (
    <section className="relative h-screen w-full bg-cream overflow-hidden">
      
      {/* Visual Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="relative flex items-center justify-center">
          {/* Debug: Opacity changed to 0.2 to confirm visibility */}
          <img 
            src="/watermark.png" 
            alt="Watermark" 
            className="w-[80vmin] h-[80vmin] object-contain opacity-[0.2]" 
          />
          
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

      {/* Content Layer */}
      <div className="relative z-10 h-screen w-full flex flex-col items-center justify-center px-6 text-center pt-32">
        <motion.span className="eyebrow text-brown mb-8">{t.hero.eyebrow}</motion.span>
        <motion.h2 className="text-6xl md:text-8xl font-serif text-body leading-tight">
          {t.hero.title.normal}
          <em className="text-brown italic">{t.hero.title.italic}</em>
          {t.hero.title.after}
        </motion.h2>
      </div>
    </section>
  );
}
