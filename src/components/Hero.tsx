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
    <section style={{
      width: '100%',
      height: 'calc(100vh - 64px)',
      background: '#F5F0E8',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0px',
      padding: '0',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>

      {/* EYEBROW */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.7rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 300,
          color: '#6B2D0E',
          textAlign: 'center',
          flexShrink: 0,
          marginBottom: '8px',
        }}
      >
        {t.hero.eyebrow}
      </motion.span>

      {/* FROG ZONE */}
      <div style={{
        position: 'relative',
        width: '85vw',
        maxWidth: '480px',
        aspectRatio: '1/1',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* WATERMARK */}
        <motion.img
          src="/watermark.png"
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.17 }}
          transition={{ delay: 0.2, duration: 2 }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            pointerEvents: 'none',
          }}
        />

        {/* SMALL BROWN FROG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.4, type: 'spring', bounce: 0.4 }}
          style={{
            position: 'relative',
            width: '14%',
            aspectRatio: '1/1',
            backgroundColor: '#6B2D0E',
            zIndex: 2,
            ...maskStyle,
          }}
        />
      </div>

      {/* HEADLINE — negative margin pulls up into frog legs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        style={{
          textAlign: 'center',
          width: '100%',
          padding: '0 24px',
          boxSizing: 'border-box',
          marginTop: '-15%',
          flexShrink: 0,
        }}
      >
        <span style={{
          display: 'block',
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.8rem, 8vw, 4rem)',
          fontWeight: 400,
          color: '#2A2A28',
          lineHeight: 1.05,
        }}>
          {t.hero.title.normal}
          <em style={{ fontStyle: 'italic', color: '#6B2D0E' }}>
            {t.hero.title.italic}
          </em>
        </span>
        <span style={{
          display: 'block',
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(1.8rem, 8vw, 4rem)',
          fontWeight: 400,
          color: '#2A2A28',
          lineHeight: 1.05,
        }}>
          {t.hero.title.after.trim()}
        </span>
      </motion.div>

      {/* TAGLINE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.45rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          fontWeight: 300,
          color: '#7A7870',
          textAlign: 'center',
          flexShrink: 0,
          marginTop: '10px',
        }}
      >
        {t.hero.tagline}
      </motion.p>

      {/* DISCOVER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          color: '#6B2D0E',
          flexShrink: 0,
          marginTop: '10px',
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
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
