import React from "react";
import { motion } from "motion/react";
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
      className="fixed inset-x-0 top-0 w-full z-[9999] bg-cream/90 backdrop-blur-md border-b border-brown/10 px-6 py-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-4 shrink-0">
        <img src="/logo.png" alt="JDDP Logo" className="w-8 h-8 object-contain" />
        <span className="font-display text-[0.65rem] tracking-[0.2em] font-bold text-brown uppercase">JDDP</span>
      </div>

      <div className="hidden md:flex items-center gap-12">
        <NavLink href="#story">{t.nav.story}</NavLink>
        <NavLink href="#symbols">{t.nav.symbols}</NavLink>
        <NavLink href="#waitlist">{t.nav.waitlist}</NavLink>
        <NavLink href="#connect">{t.nav.connect}</NavLink>
      </div>

      <div className="flex items-center gap-3 shrink-0">
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
    <a href={href} className="font-display text-[0.52rem] tracking-[0.25em] text-body/60 hover:text-brown hover:opacity-100 transition-all uppercase">
      {children}
    </a>
  );
}
