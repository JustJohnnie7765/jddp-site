import React, { useState } from "react";
import { motion } from "motion/react";
import { Translation } from "../types";

export function TheWhy({ t }: { t: Translation }) {
  return (
    <section id="story" className="py-24 px-6 bg-cream flex justify-center">
      <div className="max-w-[820px] w-full">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base tracking-[0.3em] uppercase text-brown block mb-8">
          {t.why.eyebrow}
        </motion.span>
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-serif mb-12">
          {t.why.title}
        </motion.h3>
        <div className="space-y-8">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-lg md:text-xl text-body leading-relaxed">{t.why.body1}</motion.p>
          <motion.blockquote initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border-l-2 border-warm pl-8 py-4 italic text-2xl text-brown">
            "{t.why.quote1}"
          </motion.blockquote>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-lg md:text-xl text-body leading-relaxed">{t.why.body2}</motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-lg md:text-xl text-body leading-relaxed">{t.why.body3}</motion.p>
          <motion.blockquote initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="border-l-2 border-warm pl-8 py-4 italic text-2xl text-brown">
            "{t.why.quote2}"
          </motion.blockquote>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-lg md:text-xl text-body leading-relaxed">{t.why.body4}</motion.p>
        </div>
      </div>
    </section>
  );
}

export function OriginStory({ t }: { t: Translation }) {
  return (
    <section className="py-24 px-6 bg-dark text-cream flex justify-center overflow-hidden relative">
      <div className="max-w-[820px] w-full relative z-10">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base tracking-[0.3em] uppercase text-warm block mb-8">
          {t.origin.eyebrow}
        </motion.span>
        <div className="mb-12">
          <span className="font-display text-[0.8rem] tracking-[0.2em] text-muted block mb-2">{t.origin.date}</span>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-serif">
            {t.origin.title}
          </motion.h3>
        </div>
        <div className="space-y-8">
          {t.origin.body.map((para, idx) => (
            <motion.p key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="text-lg md:text-xl text-muted leading-relaxed">
              {para}
            </motion.p>
          ))}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="p-12 border border-olive/30 relative">
            <p className="text-2xl md:text-3xl text-warm italic font-serif text-center">"{t.origin.quote}"</p>
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
        <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-base font-display tracking-[0.4em] uppercase text-brown mb-16 text-center">
          {t.symbols.title}
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y
