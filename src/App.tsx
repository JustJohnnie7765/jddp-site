/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Language, translations } from "./types";
import Gate from "./components/Gate";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import {
  TheWhy,
  OriginStory,
  SymbolsGrid,
  Philosophy,
  Waitlist,
  Connect,
  Footer
} from "./components/Sections";

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const [gateOpen, setGateOpen] = useState(true);

  const handleSelectLanguage = (newLang: Language) => {
    setLang(newLang);
    setGateOpen(false);
    // Smooth scroll to top when gate closes
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const t = translations[lang];

  // Prevent scrolling when gate is open
  useEffect(() => {
    if (gateOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [gateOpen]);

    return (
    <div className="min-h-screen selection:bg-brown selection:text-cream bg-cream">
      <Gate 
        t={translations['EN']} 
        isOpen={gateOpen} 
        onSelectLanguage={handleSelectLanguage} 
      />
      
      {!gateOpen && (
        <>
          {/* THE FIX: Nav is outside <main> and correctly linked to the language handler */}
          <Nav 
            t={t} 
            currentLang={lang} 
            onSelectLanguage={handleSelectLanguage} 
          />
          
          {/* pt-24 (approx 6rem) ensures the Hero content starts below the pinned ribbon */}
          <main className="animate-fade-up pt-24">
            <Hero t={t} />
            <TheWhy t={t} />
            <OriginStory t={t} />
            <Philosophy t={t} />
            <SymbolsGrid t={t} />
            <Waitlist t={t} />
            {/* The TikTok handle is physically removed from the component code inside Connect */}
            <Connect t={t} />
            <Footer t={t} />
          </main>
        </>
      )}
    </div>
  );
