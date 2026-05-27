import { useState, useEffect } from "react";
import { Language, translations } from "./types";
import Gate from "./components/Gate";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import {
  TheWhy, OriginStory, SymbolsGrid,
  Philosophy, Waitlist, Connect, Footer
} from "./components/Sections";

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const [gateOpen, setGateOpen] = useState(true);

  const handleSelectLanguage = (newLang: Language) => {
    setLang(newLang);
    setGateOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const t = translations[lang];

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
          <Nav t={t} currentLang={lang} onSelectLanguage={handleSelectLanguage} />
          <Hero t={t} />
          <main className="animate-fade-up pt-24">
            <TheWhy t={t} />
            <OriginStory t={t} />
            <Philosophy t={t} />
            <SymbolsGrid t={t} />
            <Waitlist t={t} />
            <Connect t={t} />
            <Footer t={t} />
          </main>
        </>
      )}
    </div>
  );
}
