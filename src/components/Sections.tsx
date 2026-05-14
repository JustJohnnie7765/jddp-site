import React, { useState } from "react";
import { motion } from "motion/react";
import FrogLogo from "./FrogLogo";
import { Translation } from "../types";

export function TheWhy({ t }: { t: Translation }) {
  return (
    <section id="story" className="py-24 px-6 bg-cream flex justify-center">
      <div className="max-w-[820px] w-full">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          /* Checklist 2A: standardizing eyebrow text-base and tracking */
          className="text-base tracking-[0.3em] uppercase text-brown block mb-8"
        >
          {t.why.eyebrow}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          /* Checklist 3: text-3xl md:text-5xl -> text-4xl md:text-6xl */
          className="text-4xl md:text-6xl font-serif mb-12"
        >
          {t.why.title}
        </motion.h3>
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-body leading-relaxed"
          >
            {t.why.body1}
          </motion.p>
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-warm pl-8 py-4 italic text-2xl text-brown"
          >
            "{t.why.quote1}"
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-body leading-relaxed"
          >
            {t.why.body2}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-body leading-relaxed"
          >
            {t.why.body3}
          </motion.p>
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-warm pl-8 py-4 italic text-2xl text-brown"
          >
            {t.why.quote2}
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-body leading-relaxed"
          >
            {t.why.body4}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export function OriginStory({ t }: { t: Translation }) {
  return (
    <section className="py-24 px-6 bg-dark text-cream flex justify-center overflow-hidden relative">
      <div className="max-w-[820px] w-full relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          /* Checklist 2B: Added text-base */
          className="eyebrow text-base text-warm block mb-8"
        >
          {t.origin.eyebrow}
        </motion.span>
        <div className="mb-12">
          {/* Checklist 2B Date Check: text-[0.6rem] -> text-[0.8rem] */}
          <span className="font-display text-[0.8rem] tracking-[0.2em] text-muted block mb-2">{t.origin.date}</span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            /* Checklist 3: text-3xl md:text-5xl -> text-4xl md:text-6xl */
            className="text-4xl md:text-6xl font-serif"
          >
            {t.origin.title}
          </motion.h3>
        </div>
        <div className="space-y-8">
          {t.origin.body.map((para, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="text-lg md:text-xl text-muted leading-relaxed"
            >
              {para}
            </motion.p>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 border border-olive/30 relative"
          >
            <p className="text-2xl md:text-3xl text-warm italic font-serif text-center">
              "{t.origin.quote}"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SymbolsGrid({ t }: { t: Translation }) {
  return (
    <section id="symbols" className="py-24 px-6 bg-cream-dark flex justify-center">
      <div className="max-w-[820px] w-full">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          /* Checklist 2C: text-sm -> text-base */
          className="text-base font-display tracking-[0.4em] uppercase text-brown mb-16 text-center"
        >
          {t.symbols.title}
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {t.symbols.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="pt-8 border-t border-border"
            >
              <h4 className="text-2xl font-serif mb-2">{item.word}</h4>
              <span className="eyebrow text-muted block mb-4">{item.translation}</span>
              <p className="text-muted leading-relaxed italic">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Philosophy({ t }: { t: Translation }) {
  return (
    <section className="py-32 px-6 bg-olive-light text-body">
      <div className="max-w-3xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            /* Checklist 3: text-3xl md:text-5xl -> text-4xl md:text-6xl */
            className="text-4xl md:text-6xl font-serif italic mb-12 block text-brown"
          >
            "{t.payoff}"
          </motion.h2>
          {/* Checklist 2D: Added text-base */}
          <span className="eyebrow text-base text-brown/60 mb-4 block">
            {t.philosophy.title}
          </span>
        </motion.div>

        <div className="space-y-12">
          {t.philosophy.body.map((para, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-lg md:text-xl text-body/90 leading-relaxed font-serif"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Waitlist({ t }: { t: Translation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const FORMSPREE_URL = "https://formspree.io/f/xnjodblo";
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ name, email, size, _subject: `New JDDP Waitlist Entry: ${name}` }),
      });
      if (response.ok) setSubmitted(true);
    } catch (error) {
      alert("Error connecting to server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 px-6 bg-dark text-cream flex justify-center">
      <div className="max-w-md w-full text-center">
        {/* Checklist 2D: Added text-base */}
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow text-base text-warm block mb-8">
          {t.waitlist.eyebrow}
        </motion.span>
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-serif mb-12">
          {t.waitlist.title.before} <em className="text-warm italic">{t.waitlist.title.highlight}</em>{t.waitlist.title.after}
        </motion.h3>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            <div>
              <label className="eyebrow text-[0.45rem] mb-2 block opacity-60">{t.waitlist.name}</label>
              <input type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-transparent border border-border/30 px-4 py-3 sharp-edge focus:border-warm outline-none transition-all placeholder:text-muted" />
            </div>
            <div>
              <label className="eyebrow text-[0.45rem] mb-2 block opacity-60">{t.waitlist.email}</label>
              <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border border-border/30 px-4 py-3 sharp-edge focus:border-warm outline-none transition-all placeholder:text-muted" />
            </div>
            <div>
              <label className="eyebrow text-[0.45rem] mb-4 block opacity-60">{t.waitlist.sizeLabel}</label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button key={s} type="button" onClick={() => setSize(s)} className={`flex-1 min-w-[3rem] py-2 border font-display text-[0.6rem] tracking-widest sharp-edge transition-all ${size === s ? "bg-warm text-dark border-warm" : "bg-transparent border-border/30 text-cream/60 hover:border-warm/60"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <button type="submit" disabled={!size || isSubmitting} className="w-full py-4 bg-warm text-dark font-display text-[0.65rem] tracking-[0.3em] font-bold sharp-edge hover:bg-cream transition-all disabled:opacity-30">
              {isSubmitting ? "PROCESSING..." : t.waitlist.button}
            </button>
          </form>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-12 border border-olive/30">
            <p className="font-serif italic text-xl text-warm">{t.waitlist.success}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function Connect({ t }: { t: Translation }) {
  return (
    <section id="connect" className="py-32 px-6 bg-cream flex flex-col items-center text-center">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mb-12">
        <FrogLogo className="w-16 h-16" color="#6B2D0E" shadow={false} />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-xl space-y-6 mb-16">
        <h3 className="font-display text-[0.65rem] tracking-[0.35em] text-brown font-bold uppercase">{t.connect.title}</h3>
        <p className="font-serif italic text-xl text-body/80">{t.connect.subtitle}</p>
      </motion.div>
      <div className="flex flex-col items-center gap-6 mb-24">
        <SocialLink href="https://instagram.com/jddpbrand">{t.connect.instagram}</SocialLink>
        <SocialLink href="https://tiktok.com/@jddpbrand">{t.connect.tiktok}</SocialLink>
        <SocialLink href="https://facebook.com/jddpbrand">{t.connect.facebook}</SocialLink>
      </div>
    </section>
  );
}

function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="font-display text-[0.55rem] tracking-[0.3em] text-body/60 hover:text-brown border-b border-transparent hover:border-brown pb-1 transition-all">
      {children}
    </a>
  );
}

export function Footer({ t }: { t: Translation }) {
  return (
    <footer className="py-12 px-6 bg-body text-cream/40 flex flex-col items-center gap-8 relative">
      <div className="w-full flex items-center justify-between opacity-50">
        <div className="space-y-4">
          <div>
            <span className="font-display text-[0.55rem] tracking-[0.3em] block mb-2 uppercase">
              JDDP &ndash; CAPE TOWN
            </span>
            <div className="font-display text-[0.45rem] tracking-[0.2em] opacity-80 leading-relaxed">
              <p>JDDP&trade; is a brand of JUSTJOHNNIE (Pty) Ltd.</p>
              <p>"Johannie die Dapper Paddatjie" is a pending trademark.</p>
            </div>
          </div>
          <span className="font-display text-[0.45rem] tracking-[0.2em] block pt-2">
            ALL RIGHTS RESERVED &copy; 2026
          </span>
        </div>
        <FrogLogo className="w-8 h-8 opacity-20" color="currentColor" shadow={false} />
      </div>
    </footer>
  );
}
