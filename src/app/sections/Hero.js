"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { whatsappUrl } from '@/app/lib/contact';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }
  })
};

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <div
          className="hero-bg-image"
          style={{ backgroundImage: `url('/images/exterior.jpg')` }}
        />
        <div className="hero-overlay" />
      </div>

      <div className="gradient-orb orb-blue" style={{ width: 500, height: 500, top: '-15%', right: '-10%', opacity: 0.4 }} />
      <div className="gradient-orb orb-purple" style={{ width: 450, height: 450, bottom: '-20%', left: '-15%', opacity: 0.45 }} />
      <div className="gradient-orb orb-pink" style={{ width: 300, height: 300, top: '40%', right: '20%', opacity: 0.25 }} />

      <div className="grid-pattern" />

      <div className="container hero-content">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="hero-badge"
        >
          <Sparkles size={14} />
          <span>Premium Living Near Fortis Hospital</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="hero-title"
        >
          Where comfort meets <br />
          <span className="gradient-text">modern luxury</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="hero-subtitle"
        >
          Step into a curated living experience designed for ambitious women.
          Premium rooms, thoughtful amenities, and a community that feels like home.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="hero-buttons"
        >
          <a
            href={whatsappUrl("Hi! I'd like to book a tour of Diamond PG.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book a Tour <ArrowRight size={18} />
          </a>
          <a href="#facilities" className="btn-glass">
            <span className="play-icon"><Play size={12} fill="white" /></span>
            View Rooms
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="hero-stats glass-morphism"
        >
          <div className="stat">
            <span className="stat-number gradient-text">485+</span>
            <span className="stat-label">Happy Residents</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number gradient-text">252+</span>
            <span className="stat-label">Premium Rooms</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number gradient-text">₹8,500</span>
            <span className="stat-label">Starting Price</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="scroll-cue"
      >
        <div className="scroll-dot" />
        <span>Scroll</span>
      </motion.div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 140px 5% 80px;
          overflow: hidden;
          background: var(--dark-bg);
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-bg-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: blur(2px) brightness(0.5);
          transform: scale(1.05);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(10, 10, 15, 0.6) 0%, rgba(10, 10, 15, 0.85) 60%, rgba(10, 10, 15, 0.95) 100%),
            radial-gradient(ellipse at top, rgba(99, 102, 241, 0.3), transparent 50%);
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 920px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.95);
          font-size: 0.82rem;
          font-weight: 500;
          margin-bottom: 28px;
        }

        .hero-badge :global(svg) {
          color: var(--primary-light);
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 800;
          color: white;
          margin-bottom: 24px;
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 1.4vw, 1.18rem);
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 40px;
          max-width: 640px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 14px;
          justify-content: center;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .btn-glass {
          padding: 12px 24px 12px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: var(--transition);
          font-family: inherit;
        }

        .btn-glass:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.25);
          border-color: rgba(255, 255, 255, 0.35);
        }

        .play-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--gradient-soft);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding-left: 2px;
        }

        .hero-stats {
          display: inline-flex;
          align-items: center;
          gap: 40px;
          padding: 20px 40px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.05);
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 1.85rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-top: 2px;
        }

        .stat-divider {
          width: 1px;
          height: 32px;
          background: rgba(255, 255, 255, 0.15);
        }

        .scroll-cue {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.7rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          z-index: 5;
        }

        .scroll-dot {
          width: 22px;
          height: 36px;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          border-radius: 999px;
          position: relative;
        }

        .scroll-dot::after {
          content: '';
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 8px;
          border-radius: 999px;
          background: var(--primary-light);
          animation: scroll-bounce 2s infinite;
        }

        @keyframes scroll-bounce {
          0% { transform: translate(-50%, 0); opacity: 1; }
          80% { transform: translate(-50%, 14px); opacity: 0; }
          100% { transform: translate(-50%, 0); opacity: 0; }
        }

        @media (max-width: 768px) {
          .hero-section { padding: 120px 5% 100px; }
          .hero-buttons { flex-direction: column; align-items: stretch; }
          .hero-stats {
            gap: 16px;
            padding: 16px 24px;
            flex-wrap: wrap;
          }
          .stat-divider { display: none; }
          .scroll-cue { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
