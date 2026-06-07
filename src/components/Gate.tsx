import { motion, AnimatePresence } from "motion/react";
import FrogLogo from "./FrogLogo";
import { Language, Translation } from "../types";

interface GateProps {
  onSelectLanguage: (lang: Language) => void;
  isOpen: boolean;
  t: Translation;
}

export default function Gate({ onSelectLanguage, isOpen, t }: GateProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center p-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mb-8"
          >
            <FrogLogo className="w-48 h-48 md:w-56 md:h-56" color="#6B2D0E" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="brand-wordmark-jddp text-4xl md:text-6xl text-brown mb-4">
              {t.gate.title}
            </h1>
            <p className="brand-subtitle text-brown mb-12">
              {t.gate.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center"
          >
            <span className="brand-section-header text-brown mb-6">{t.gate.prompt}</span>
            <div className="flex gap-4 flex-wrap justify-center">
              {(['EN', 'AF', 'XH'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onSelectLanguage(lang)}
                  className="px-8 py-3 border border-brown text-brown brand-section-header text-xs hover:bg-brown hover:text-cream sharp-edge transition-all"
                >
                  {lang === 'EN' ? 'ENGLISH' : lang === 'AF' ? 'AFRIKAANS' : 'ISIXHOSA'}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
