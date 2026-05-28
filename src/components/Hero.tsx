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
      position: 'relative',
      width: '100%',
      height: 'calc(100vh - 64px)',
      background: '#F5F0E8',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>

      {/* WATERMARK — absolute, top 35% */}
      <motion.img
        src="/watermark.png"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ delay: 0.2, duration: 2 }}
        style={{
          position: 'absolute',
          width: '140vw',
          height: '110vw',
          top: '38%',
          left: '43%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'contain',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* EYEBROW — absolute, sits above watermark center */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2 }}
        style={{
          position: 'absolute',
          top: '13%',
          left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-display)',
          fontSize: '0.55rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontWeight: 300,
          color: '#6B2D0E',
          zIndex: 5,
        }}
      >
        {t.hero.eyebrow}
      </motion.span>

      {/* BROWN FROG — absolute, on watermark body */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1.4, type: 'spring', bounce: 0.4 }}
        style={{
          position: 'absolute',
          width: '14vw',
          height: '14vw',
          top: '29%',
          left: '47%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#6B2D0E',
          zIndex: 3,
          ...maskStyle,
        }}
      />

      {/* HEADLINE — absolute, bottom half */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        style={{
          position: 'absolute',
          top: '42%',
          left: '0%',
          right: '0%',
          width: '90vw',
          margin: '0 auto',
          textAlign: 'center',
          zIndex: 5,
        }}
      >
        <span style={{
          display: 'block',
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2rem, 9vw, 4rem)',
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
          fontSize: 'clamp(2rem, 9vw, 4rem)',
          fontWeight: 400,
          color: '#2A2A28',
          lineHeight: 1.05,
        }}>
          {t.hero.title.after.trim()}
        </span>
      </motion.div>

      {/* TAGLINE — absolute */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{
          position: 'absolute',
          top: '68%',
          left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-display)',
          fontSize: '0.45rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 300,
          color: '#7A7870',
          zIndex: 5,
        }}
      >
        {t.hero.tagline}
      </motion.p>

      {/* DISCOVER — absolute, bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: 'absolute',
          top: '76%',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          color: '#6B2D0E',
          zIndex: 5,
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
