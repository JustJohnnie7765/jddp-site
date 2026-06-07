import { motion } from "motion/react";
import { useId, useState } from "react";

interface FrogLogoProps {
  className?: string;
  color?: string;
  shadow?: boolean;
}

export default function FrogLogo({ 
  className = "w-40 h-40", 
  color = "#6B2D0E",
  shadow = true 
}: FrogLogoProps) {
  const maskId = useId();
  const [useFallback, setUseFallback] = useState(false);

  return (
    <motion.div 
      className={`${className} flex items-center justify-center`}
      style={{
        filter: shadow ? "drop-shadow(0 8px 16px rgba(107, 45, 14, 0.12))" : "none"
      }}
    >
      {!useFallback ? (
        <img 
          src="/logo.png" 
          alt="JDDP Coqui Logo" 
          className="w-full h-full object-contain"
          onError={() => setUseFallback(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <svg
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Left Half Limbs (Front Arm, Fingers, Back Thigh loop, Back Toes) */}
            <g id="left-half-limbs">
              {/* Front Arm: thick elegant limb curve */}
              <path 
                d="M 430,370 C 350,400 310,360 300,314" 
                stroke={color} 
                strokeWidth="48" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                fill="none" 
              />
              
              {/* Front Palm transition hub */}
              <circle cx="300" cy="314" r="24" fill={color} />

              {/* Front Fingers (Stalks) */}
              <g stroke={color} strokeWidth="20" strokeLinecap="round" fill="none">
                <path d="M 300,314 L 160,400" />
                <path d="M 300,314 L 115,295" />
                <path d="M 300,314 L 145,185" />
                <path d="M 300,314 L 240,120" />
                <path d="M 300,314 L 345,160" />
              </g>
              
              {/* Finger Bulbs / Pads (Taino round pads) */}
              <g fill={color}>
                <circle cx="160" cy="400" r="30" />
                <circle cx="115" cy="295" r="30" />
                <circle cx="145" cy="185" r="30" />
                <circle cx="240" cy="120" r="30" />
                <circle cx="345" cy="160" r="30" />
              </g>

              {/* Hind Leg muscle fold */}
              <path 
                d="M 415,620 C 310,580 250,715 310,800 C 330,830 365,845 380,830" 
                stroke={color} 
                strokeWidth="56" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                fill="none" 
              />
              
              {/* Back ankle transition hub */}
              <circle cx="380" cy="830" r="28" fill={color} />

              {/* Back Toes (Stalks) */}
              <g stroke={color} strokeWidth="20" strokeLinecap="round" fill="none">
                <path d="M 380,830 L 250,740" />
                <path d="M 380,830 L 200,830" />
                <path d="M 380,830 L 240,920" />
                <path d="M 380,830 L 335,970" />
                <path d="M 380,830 L 440,960" />
              </g>

              {/* Toe Bulbs / Pads */}
              <g fill={color}>
                <circle cx="250" cy="740" r="30" />
                <circle cx="200" cy="830" r="30" />
                <circle cx="240" cy="920" r="30" />
                <circle cx="335" cy="970" r="30" />
                <circle cx="440" cy="960" r="30" />
              </g>
            </g>

            {/* Mask to punch out eyes & nostrils so they adapt perfectly to outer backgrounds */}
            <mask id={maskId}>
              <rect width="1000" height="1000" fill="white" />
              
              {/* Eye Slits (Angled elegant crescents on the sides of the head) */}
              <ellipse cx="452" cy="242" rx="14" ry="28" transform="rotate(-30 452 242)" fill="black" />
              <ellipse cx="548" cy="242" rx="14" ry="28" transform="rotate(30 548 242)" fill="black" />
              
              {/* Nostrils (Small symmetrical markings near snout tip) */}
              <ellipse cx="490" cy="188" rx="5" ry="10" transform="rotate(-15 490 188)" fill="black" />
              <ellipse cx="510" cy="188" rx="5" ry="10" transform="rotate(15 510 188)" fill="black" />
            </mask>
          </defs>

          {/* Head & Torso - Masked for eye slit/nostril punchthroughs */}
          <path 
            d="M 500,160 C 460,160 415,210 420,270 C 422,290 432,310 445,330 C 380,420 370,560 415,660 C 440,720 465,755 500,755 C 535,755 560,720 585,660 C 630,560 620,420 555,330 C 568,310 578,290 580,270 C 585,210 540,160 500,160 Z" 
            fill={color} 
            mask={`url(#${maskId})`}
          />

          {/* Left Side Limbs */}
          <use href="#left-half-limbs" />

          {/* Right Side Limbs (Mirrored flawlessly) */}
          <use href="#left-half-limbs" transform="translate(1000, 0) scale(-1, 1)" />

          {/* Brand Trademark "TM" to add an official designer flair */}
          <text 
            x="830" 
            y="135" 
            fill={color} 
            fontSize="28" 
            fontFamily="system-ui, -apple-system, sans-serif" 
            fontWeight="900" 
            opacity="0.95"
          >
            TM
          </text>
        </svg>
      )}
    </motion.div>
  );
}
