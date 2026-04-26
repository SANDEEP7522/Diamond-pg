"use client";
import React from 'react';
import { motion } from 'framer-motion';

/**
 * Premium luxury diamond brand mark.
 *
 * Variants:
 *  - light  : for dark / glassy backgrounds (white text, glowing gem)
 *  - dark   : for light / white backgrounds (deep slate text, gem still glows)
 */
const BrandMark = ({ size = 'md', variant = 'light' }) => {
  const dim =
    size === 'sm' ? { gem: 30, font: '1.05rem', badgeFs: '0.7rem', gap: 9 } :
    size === 'lg' ? { gem: 46, font: '1.7rem', badgeFs: '0.85rem', gap: 12 } :
                    { gem: 38, font: '1.32rem', badgeFs: '0.78rem', gap: 10 };

  return (
    <motion.span
      className={`brandmark brandmark-${variant}`}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      style={{ gap: dim.gap }}
    >
      {/* Faceted diamond */}
      <span className="bm-gem-wrap" style={{ width: dim.gem, height: dim.gem }}>
        <span className="bm-gem-glow" />
        <svg
          className="bm-gem"
          viewBox="0 0 64 64"
          width={dim.gem}
          height={dim.gem}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="bm-grad-top" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a5b4fc" />
              <stop offset="50%" stopColor="#c4b5fd" />
              <stop offset="100%" stopColor="#f0abfc" />
            </linearGradient>
            <linearGradient id="bm-grad-mid" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
            <linearGradient id="bm-grad-deep" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4338ca" />
              <stop offset="100%" stopColor="#7e22ce" />
            </linearGradient>
            <linearGradient id="bm-shine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Top crown facets */}
          <polygon points="32,4 14,22 32,22" fill="url(#bm-grad-top)" />
          <polygon points="32,4 50,22 32,22" fill="url(#bm-grad-mid)" opacity="0.92" />
          <polygon points="14,22 4,22 32,22" fill="url(#bm-grad-deep)" opacity="0.55" />
          <polygon points="50,22 60,22 32,22" fill="url(#bm-grad-deep)" opacity="0.7" />

          {/* Pavilion (bottom) */}
          <polygon points="4,22 32,60 32,22" fill="url(#bm-grad-mid)" />
          <polygon points="60,22 32,60 32,22" fill="url(#bm-grad-deep)" />
          <polygon points="14,22 32,60 32,22" fill="url(#bm-grad-top)" opacity="0.4" />

          {/* Highlight shine */}
          <polygon points="32,4 22,22 32,22" fill="url(#bm-shine)" className="bm-shine" />
        </svg>

        {/* Floating sparkles */}
        <span className="bm-sparkle bm-sparkle-1" />
        <span className="bm-sparkle bm-sparkle-2" />
        <span className="bm-sparkle bm-sparkle-3" />
      </span>

      {/* Word mark */}
      <span className="bm-word" style={{ fontSize: dim.font }}>
        <span className="bm-letters">DIAMOND</span>
        <span className="bm-badge" style={{ fontSize: dim.badgeFs }}>PG</span>
      </span>

      <style jsx>{`
        .brandmark {
          display: inline-flex;
          align-items: center;
          line-height: 1;
          white-space: nowrap;
          flex-shrink: 0;
          font-family: 'Cormorant Garamond', 'Playfair Display', 'Times New Roman', Georgia, serif;
        }

        /* GEM */
        .bm-gem-wrap {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .bm-gem-glow {
          position: absolute;
          inset: -30%;
          border-radius: 50%;
          background:
            radial-gradient(circle at 30% 30%, rgba(165, 180, 252, 0.55), transparent 55%),
            radial-gradient(circle at 70% 70%, rgba(217, 70, 239, 0.45), transparent 60%);
          filter: blur(10px);
          z-index: 0;
          animation: bm-pulse 3.6s ease-in-out infinite;
        }

        .bm-gem {
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 4px 14px rgba(99, 102, 241, 0.5));
          animation: bm-rotate 10s ease-in-out infinite;
          transform-origin: 50% 50%;
        }

        :global(.brandmark:hover) .bm-gem {
          animation: bm-rotate 4s ease-in-out infinite, bm-bounce 0.6s ease;
        }

        .bm-shine {
          animation: bm-shine 3s ease-in-out infinite;
          transform-origin: 50% 50%;
        }

        @keyframes bm-rotate {
          0%, 100% { transform: rotate(-3deg) translateY(0); }
          50%      { transform: rotate(3deg)  translateY(-1px); }
        }

        @keyframes bm-bounce {
          0%, 100% { transform: scale(1) rotate(0); }
          50%      { transform: scale(1.12) rotate(8deg); }
        }

        @keyframes bm-pulse {
          0%, 100% { opacity: 0.65; transform: scale(1); }
          50%      { opacity: 1;    transform: scale(1.08); }
        }

        @keyframes bm-shine {
          0%, 100% { opacity: 0.55; }
          50%      { opacity: 1; }
        }

        /* Sparkles */
        .bm-sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
          box-shadow:
            0 0 6px rgba(255, 255, 255, 0.95),
            0 0 12px rgba(165, 180, 252, 0.85);
          z-index: 2;
          opacity: 0;
        }

        .bm-sparkle-1 { top: -4px; right: 6px; animation: bm-twinkle 2.4s ease-in-out 0.2s infinite; }
        .bm-sparkle-2 { bottom: 4px; left: -4px; animation: bm-twinkle 2.8s ease-in-out 1s infinite; }
        .bm-sparkle-3 { top: 30%; right: -6px; width: 3px; height: 3px; animation: bm-twinkle 2s ease-in-out 1.6s infinite; }

        @keyframes bm-twinkle {
          0%, 100% { opacity: 0;   transform: scale(0.5); }
          50%      { opacity: 1;   transform: scale(1.4); }
        }

        /* WORD */
        .bm-word {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          letter-spacing: 0.18em;
          line-height: 1;
        }

        /* LIGHT VARIANT — for dark / glass backgrounds */
        .brandmark-light .bm-letters {
          color: #ffffff;
          background: linear-gradient(
            120deg,
            #ffffff 0%,
            #c7d2fe 25%,
            #ffffff 50%,
            #f5d0fe 75%,
            #ffffff 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: bm-shimmer 5s linear infinite;
          text-shadow: 0 0 22px rgba(165, 180, 252, 0.45);
          filter: drop-shadow(0 0 10px rgba(165, 180, 252, 0.35));
        }

        /* DARK VARIANT — for light / white backgrounds */
        .brandmark-dark .bm-letters {
          color: #312e81;
          background: linear-gradient(
            120deg,
            #312e81 0%,
            #4f46e5 22%,
            #8b5cf6 45%,
            #c026d3 68%,
            #4338ca 90%,
            #312e81 100%
          );
          background-size: 220% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: bm-shimmer 6s linear infinite;
          filter: drop-shadow(0 1px 0 rgba(255, 255, 255, 0.6));
        }

        .bm-letters {
          display: inline-block;
          font-weight: 700;
          letter-spacing: 0.18em;
          line-height: 1;
          padding-right: 2px;
        }

        @keyframes bm-shimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        /* PG monogram badge */
        .bm-badge {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          letter-spacing: 0.12em;
          padding: 5px 9px;
          border-radius: 7px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
          background-size: 200% 200%;
          color: #fff;
          box-shadow:
            0 4px 14px rgba(99, 102, 241, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.35),
            inset 0 -1px 0 rgba(0, 0, 0, 0.15);
          position: relative;
          overflow: hidden;
          animation: bm-badge-shift 5s ease-in-out infinite;
        }

        .bm-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -120%;
          width: 60%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.6), transparent);
          animation: bm-badge-shine 4s ease-in-out infinite;
        }

        @keyframes bm-badge-shift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        @keyframes bm-badge-shine {
          0%, 60%, 100% { left: -120%; }
          80%           { left: 220%; }
        }
      `}</style>
    </motion.span>
  );
};

export default BrandMark;
