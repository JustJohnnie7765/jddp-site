import React from "react";
import { motion } from "motion/react";
import FrogLogo from "./FrogLogo";
import { Language, Translation } from "../types";

interface NavProps {
  t: Translation;
  currentLang: Language;
  onSelectLanguage: (lang: Language) => void;
}

export default function Nav({ t, currentLang, onSelectLanguage }: NavProps) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      /* FIX: Added !important to position and top via style tag.
         z-[9999] ensures it stays above every single element.
         inset-x-0 ensures it stretches across the screen.
      */
      className="fixed inset-x-0 top-0 w-full z-[9999] bg-cream/90 backdrop-blur-md border-b border-brown/10 px-6 py-4 flex items-center justify-between"
      style={{ position: 'fixed', top: 0, left: 0, right: 0 }} 
    >
      <div className="flex items-center gap-4">
        <FrogLogo className="w-8 h-8" color="#6B2D0E" shadow={false} />
        <span className="font-display text-[0.65rem] tracking-[0.2em] font-bold text-brown uppercase">JDDP</span>
      </div>

      <div className="hidden md:flex items-center gap-12">
        <NavLink href="#story">{t.nav.story}</NavLink>
        <NavLink href="#symbols">{t.nav.symbols}</NavLink>
        <NavLink href="#waitlist">{t.nav.waitlist}</NavLink>
        <NavLink href="#connect">{t.nav.connect}</NavLink>
      </div>

      <div className="flex items-center gap-3">
        {(['EN', 'AF', 'XH'] as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => onSelectLanguage(lang)}
            className={`font-display text-[0.6rem] tracking-widest px-2 py-1 transition-colors ${
              currentLang === lang 
                ? "text-brown font-bold border-b border-brown" 
                : "text-muted hover:text-brown"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="font-display text-[0.52rem] tracking-[0.25em] text-body/60 hover:text-brown hover:opacity-100 transition-all uppercase"
    >
      {children}
    </a>
  );
}
