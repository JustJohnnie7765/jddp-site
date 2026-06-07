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
      className="fixed top-0 left-0 w-full z-50 glass border-b border-border/20 px-6 py-4 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <FrogLogo className="w-8 h-8" color="#6B2D0E" shadow={false} />
        <span className="brand-wordmark-jddp text-[0.65rem] text-brown">JDDP</span>
      </div>

      <div className="hidden md:flex items-center gap-12">
        <NavLink href="#story">{t.nav.story}</NavLink>
        <NavLink href="#symbols">{t.nav.symbols}</NavLink>
        <NavLink href="#shop">{t.nav.shop}</NavLink>
        <NavLink href="#waitlist">{t.nav.waitlist}</NavLink>
        <NavLink href="#connect">{t.nav.connect}</NavLink>
      </div>

      <div className="flex items-center gap-3">
        {(['EN', 'AF', 'XH'] as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => onSelectLanguage(lang)}
            className={`brand-section-header text-[0.6rem] px-2 py-1 ${
              currentLang === lang ? "text-brown font-bold" : "text-muted hover:text-brown"
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
      className="brand-section-header text-[0.52rem] text-body/60 hover:text-brown hover:opacity-100 transition-all"
    >
      {children}
    </a>
  );
}
