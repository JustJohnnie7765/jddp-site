import React, { useState } from "react";
import { motion } from "motion/react";
import FrogLogo from "./FrogLogo";
import { Translation } from "../types";

export function TheWhy({ t }: { t: Translation }) {
  return (
    <section id="story" className="py-24 px-6 bg-cream flex justify-center scroll-mt-24">
      <div className="max-w-[820px] w-full">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="brand-section-header text-brown block mb-8"
        >
          {t.why.eyebrow}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="brand-heading mb-12 text-body"
        >
          {t.why.title}
        </motion.h3>
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="brand-body text-body"
          >
            {t.why.body1}
          </motion.p>
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l border-warm pl-8 py-2 brand-quote text-brown"
          >
            "{t.why.quote1}"
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="brand-body text-body"
          >
            {t.why.body2}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="brand-body text-body"
          >
            {t.why.body3}
          </motion.p>
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border-l border-warm pl-8 py-2 brand-quote text-brown"
          >
            "{t.why.quote2}"
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="brand-body text-body"
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
          className="brand-section-header text-warm block mb-8"
        >
          {t.origin.eyebrow}
        </motion.span>
        <div className="mb-12">
          <span className="brand-caption text-muted block mb-2 opacity-60 font-medium">{t.origin.date}</span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="brand-heading text-cream"
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
              className="brand-body text-border"
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
            <p className="brand-quote text-warm text-center font-serif">
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
    <section id="symbols" className="py-24 px-6 bg-cream-dark flex justify-center scroll-mt-24">
      <div className="max-w-[820px] w-full">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="brand-section-header text-brown mb-16 text-center block"
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
              <h4 className="brand-subheading mb-2 text-brown font-serif">{item.word}</h4>
              <span className="brand-section-header text-muted block mb-4">{item.translation}</span>
              <p className="brand-body text-muted italic">{item.desc}</p>
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
            className="brand-subtitle text-brown mb-12 block"
          >
            "{t.payoff}"
          </motion.h2>
          <span className="brand-section-header text-brown/60 mb-4 block">
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
              className="brand-body text-body/90 text-center max-w-xl mx-auto font-serif"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Shop({ t }: { t: Translation }) {
  // CONFIG: Put your WooCommerce site link here when ready! (e.g. "https://jddp.africa/shop" or "https://your-store-url.com")
  const WOOCOMMERCE_STORE_URL = ""; 

  const isLive = WOOCOMMERCE_STORE_URL.trim() !== "";

  return (
    <section id="shop" className="py-24 px-6 bg-cream flex justify-center scroll-mt-24">
      <div className="max-w-[820px] w-full text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="brand-section-header text-brown block mb-8"
        >
          {t.shop.eyebrow}
        </motion.span>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="brand-heading text-body mb-6 font-serif"
        >
          {t.shop.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="brand-body text-body/85 max-w-xl mx-auto mb-16 text-center"
        >
          {t.shop.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left max-w-2xl mx-auto p-8 border border-brown/10 bg-cream-dark/20 sharp-edge">
          {/* Product Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-64 h-64 mx-auto flex items-center justify-center bg-brown/5 border border-brown/10 overflow-hidden sharp-edge shadow-md"
          >
            <img
              src="/shop-hoodie.jpg"
              alt="JDDP Signature Hoodie"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                // If shop-hoodie.jpg fails or isn't loaded, reveal the guidance fallback UI
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = parent.querySelector('.shop-fallback');
                  if (fallback) {
                    fallback.classList.remove('hidden');
                    fallback.classList.add('flex');
                  }
                }
              }}
            />
            {/* Elegant guidance fallback when user hasn't uploaded shop-hoodie.jpg to public/ yet */}
            <div className="shop-fallback absolute inset-0 hidden flex-col items-center justify-center p-6 bg-cream text-center">
              <FrogLogo className="w-12 h-12 opacity-30 mb-3" color="#6B2D0E" shadow={false} />
              <span className="brand-caption text-[0.55rem] tracking-wider text-brown uppercase block font-bold leading-normal mb-1">
                PLACEHOLDER ACTIVE
              </span>
              <p className="text-[0.5rem] tracking-tight text-brown/60 leading-normal max-w-[180px]">
                Please upload your image to the <strong>public/</strong> folder and name it <strong>shop-hoodie.jpg</strong>
              </p>
            </div>
          </motion.div>

          {/* Product details and store connection info */}
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <span className="brand-caption text-cream bg-brown text-[0.5rem] px-2 py-0.5 tracking-widest font-bold inline-block mb-2 rounded-sm">
                {isLive ? "AVAILABLE NOW" : t.shop.comingSoon}
              </span>
              <h4 className="brand-subheading text-brown font-serif">{t.shop.productTitle}</h4>
              <p className="brand-caption text-muted/80 text-[0.55rem] tracking-wider leading-relaxed mt-1">
                {t.shop.productDesc}
              </p>
            </div>

            <p className="brand-body text-body/75 text-xs leading-relaxed">
              {t.shop.subtext}
            </p>

            <div className="pt-2">
              {isLive ? (
                <a
                  href={WOOCOMMERCE_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full py-3 bg-brown text-cream hover:bg-brown/90 text-center brand-section-header text-[0.6rem] font-bold sharp-edge transition-all shadow-sm"
                >
                  VISIT ONLINE STORE
                </a>
              ) : (
                <div className="space-y-2">
                  <div className="w-full py-3 bg-brown/5 border border-brown/20 text-brown/65 text-center brand-section-header text-[0.6rem] font-bold sharp-edge select-none">
                    {t.shop.buttonText}
                  </div>
                </div>
              )}
            </div>
          </div>
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

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate Formspree or similar
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-24 px-6 bg-dark text-cream flex justify-center scroll-mt-24">
      <div className="max-w-md w-full text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="brand-section-header text-warm block mb-8"
        >
          {t.waitlist.eyebrow}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="brand-heading text-cream mb-12 font-serif"
        >
          {t.waitlist.title.before}
          <em className="text-warm italic font-bold">{t.waitlist.title.highlight}</em>
          {t.waitlist.title.after}
        </motion.h3>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            <div>
              <label className="brand-caption text-cream opacity-60 mb-2 block">{t.waitlist.name}</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border border-border/30 px-4 py-3 sharp-edge focus:border-warm outline-none font-sans text-sm transition-all placeholder:text-muted"
              />
            </div>
            <div>
              <label className="brand-caption text-cream opacity-60 mb-2 block">{t.waitlist.email}</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border border-border/30 px-4 py-3 sharp-edge focus:border-warm outline-none font-sans text-sm transition-all placeholder:text-muted"
              />
            </div>
            <div>
              <label className="brand-caption text-cream opacity-60 mb-4 block">{t.waitlist.sizeLabel}</label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`flex-1 min-w-[3rem] py-2 border brand-section-header text-[0.6rem] sharp-edge transition-all ${
                      size === s 
                        ? "bg-warm text-dark border-warm" 
                        : "bg-transparent border-border/30 text-cream/60 hover:border-warm/60"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <button
              type="submit"
              disabled={!size}
              className="w-full py-4 bg-warm text-dark brand-section-header text-[0.65rem] font-bold sharp-edge hover:bg-cream transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {t.waitlist.button}
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 border border-olive/30"
          >
            <p className="brand-quote text-warm">{t.waitlist.success}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function Connect({ t }: { t: Translation }) {
  return (
    <section id="connect" className="py-32 px-6 bg-cream flex flex-col items-center text-center scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <FrogLogo className="w-20 h-20" color="#6B2D0E" shadow={false} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl space-y-6 mb-16 animate-fade-up"
      >
        <h3 className="brand-subheading text-brown uppercase">
          {t.connect.title}
        </h3>
        <p className="brand-subtitle text-body/80 mt-2">
          {t.connect.subtitle}
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center gap-6 mb-24"
      >
        <SocialLink href="https://instagram.com/jddpbrand">{t.connect.instagram}</SocialLink>
        <SocialLink href="https://facebook.com/jddpbrand">{t.connect.facebook}</SocialLink>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="brand-section-header text-[0.55rem] text-body/60 hover:text-brown hover:opacity-100 border-b border-transparent hover:border-brown pb-1 transition-all"
    >
      {children}
    </a>
  );
}

export function Footer({ t }: { t: Translation }) {
  return (
    <footer className="py-12 px-6 bg-body text-cream/40 flex flex-col items-center gap-8 relative pb-16">
      <div className="w-full flex items-center justify-between opacity-50">
        <div>
          <span className="brand-section-header text-[0.55rem] block mb-2 text-cream">{t.footer.brand}</span>
          <span className="brand-caption text-[0.45rem] block text-cream/60">{t.footer.rights}</span>
        </div>
        <FrogLogo className="w-10 h-10 opacity-35 animate-pulse" color="currentColor" shadow={false} />
      </div>

      <div className="text-center pt-8 border-t border-cream/5 w-full">
        <p className="brand-quote text-sm md:text-base tracking-wide opacity-60">
          "{t.connect.signoff || t.payoff}"
        </p>
      </div>
    </footer>
  );
}
