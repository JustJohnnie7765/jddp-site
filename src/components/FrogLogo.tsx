import { motion } from "motion/react";

interface FrogLogoProps {
  className?: string;
  variant?: "solid" | "outline";
  color?: string;
  shadow?: boolean;
}

export default function FrogLogo({ 
  className = "w-40 h-40", 
  color = "currentColor",
  shadow = true 
}: FrogLogoProps) {
  return (
    <motion.div 
      className={`${className} flex items-center justify-center`}
      style={{
        filter: shadow ? "drop-shadow(0 10px 20px rgba(107, 45, 14, 0.15))" : "none"
      }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Simplified Top-Down Frog Silhouette */}
        <path
          d="M50 15C35 15 25 25 25 40C25 48 28 55 32 60L20 85L30 85L40 68C43 70 47 72 50 72C53 72 57 70 60 68L70 85L80 85L68 60C72 55 75 48 75 40C75 25 65 15 50 15Z"
          fill={color}
        />
        {/* Bulged eyes area */}
        <circle cx="35" cy="22" r="6" fill={color} />
        <circle cx="65" cy="22" r="6" fill={color} />
        {/* Legs / Webbed feet details */}
        <path
          d="M25 45L15 50L12 60L22 55"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M75 45L85 50L88 60L78 55"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Trademark Symbol */}
        <text 
          x="75" 
          y="20" 
          fontSize="10" 
          fill={color} 
          fontFamily="sans-serif"
        >
          ™
        </text>
      </svg>
    </motion.div>
  );
}
