import { motion } from "motion/react";
import { Translation } from "../types";

export default function Hero({ t }: { t: Translation }) {
  const maskStyle = {
    WebkitMaskImage: "url('/watermark.png')",
    maskImage: "url('/watermark.png')",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  };

  return (
    <section
      style={{
        position: 'relative',
        height: '100dvh',
        width: '100%',
        background: 'var(--color-cream)',
        overflow: 'hidden',
      }}
    >
      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.04) 100%)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      {/* Eyebrow */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2 }}
        style={{
          position: 'absolute',
          top: '13dvh', left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-display)',
          fontSize: '0.8rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 300,
          color: 'var(--color-brown)',
          zIndex: 2,
        }}
      >
        {t.hero.eyebrow}
      </motion.span>

      {/* Watermark */}
      <motion.img
        src="/watermark.png"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 0.17, scale: 1 }}
        transition={{ delay: 0.2, duration: 2 }}
        style={{
          position: 'absolute',
          top: '46dvh', left: '50%',
          transform: 'translate(-50%, -50%)',
          height: '72dvh', width: 'auto',
          pointerEvents: 'none', zIndex: 1,
        }}
      />

      {/* Small brown frog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1.4, type: 'spring', bounce: 0.4 }}
        style={{
          position: 'absolute',
          top: '46dvh', left: '50%',
          transform: 'translate(-50%, -50%)',
          height: '8dvh', width: 'auto',
          aspectRatio: '1/1',
          backgroundColor: '#6B2D0E',
          zIndex: 3,
          ...maskStyle,
        }}
      />

      {/* Headline */}
      <div
        style={{
          position: 'absolute',
          top: '72dvh', left: '50%',
          transform: 'translateX(-50%)',
          width: '90vw',
          textAlign: 'center',
          zIndex: 2,
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          style={{
            display: 'block',
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 5.5vw, 4.8rem)',
            fontWeight: 400,
            color: 'var(--color-body)',
            lineHeight: 1.05,
          }}
        >
          {t.hero.title.normal}
          <em style={{ fontStyle: 'italic', color: 'var(--color-brown)' }}>
            {t.hero.title.italic}
          </em>
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
          style={{
            display: 'block',
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 5.5vw, 4.8rem)',
            fontWeight: 400,
            color: 'var(--color-body)',
            lineHeight: 1.05,
          }}
        >
          {t.hero.title.after.trim()}
        </motion.span>
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{
          position: 'absolute',
          top: '88dvh', left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-display)',
          fontSize: '0.45rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          fontWeight: 300,
          color: 'var(--color-muted)',
          zIndex: 2,
        }}
      >
        {t.hero.tagline}
      </motion.p>

      {/* Discover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '3dvh', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '5px',
          color: 'var(--color-brown)',
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}
        >
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.45rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            fontWeight: 300,
          }}>
            {t.hero.scroll}
          </span>
          <svg width="12" height="18" viewBox="0 0 12 18" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M6 0 L6 14 M1 9 L6 14 L11 9" />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  );
}
