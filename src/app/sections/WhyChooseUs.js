"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, ShieldCheck, PartyPopper, ArrowRight, Heart } from 'lucide-react';
import { whatsappUrl } from '@/app/lib/contact';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Better Living",
      desc: "Hygienic, peaceful and beautifully designed spaces that feel like home.",
      icon: <Coffee size={24} />
    },
    {
      title: "Total Security",
      desc: "Round-the-clock CCTV surveillance and trained security for complete peace of mind.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Vibrant Community",
      desc: "Curated events, parties, and gatherings to build lasting friendships.",
      icon: <PartyPopper size={24} />
    }
  ];

  return (
    <section className="why-choose-section">
      <div className="gradient-orb orb-blue" style={{ width: 500, height: 500, top: '-10%', left: '50%', opacity: 0.1 }} />

      <div className="container">
        <div className="why-choose-grid">
          <div className="why-choose-content">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="subtitle"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Built for the way{' '}
              <span className="gradient-text">you actually live</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="section-desc"
            >
              We obsess over the details that make daily life better — so you can focus
              on everything else that matters.
            </motion.p>

            <div className="features-container">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                  className="feature-card"
                >
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon-glow" />
                    {f.icon}
                  </div>
                  <div className="feature-info">
                    <h4 className="feature-title">{f.title}</h4>
                    <p className="feature-desc">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              href={whatsappUrl("Hi! I'd like to learn more about Diamond PG.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Learn More <ArrowRight size={18} />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="why-choose-image"
          >
            <div className="image-wrapper">
              <img
                src="/images/hallway2.jpg"
                alt="Premium hostel community"
                className="main-image"
              />
              <div className="image-gradient" />
            </div>

            <div className="comfort-badge">
              <Heart size={14} fill="white" />
              <span>Premium</span>
            </div>

            <div className="stats-overlay glass-light">
              <div className="overlay-stat">
                <span className="overlay-number gradient-text">5+</span>
                <span className="overlay-label">Years</span>
              </div>
              <div className="overlay-divider" />
              <div className="overlay-stat">
                <span className="overlay-number gradient-text">100%</span>
                <span className="overlay-label">Safe</span>
              </div>
            </div>

            <div className="dot-pattern" />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .why-choose-section {
          background-color: var(--white);
          padding: 120px 5%;
          position: relative;
          overflow: hidden;
        }

        .why-choose-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .why-choose-content { padding-right: 20px; }

        .section-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .features-container {
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .feature-card {
          display: flex;
          gap: 20px;
          padding: 24px;
          background: white;
          border: 1px solid rgba(15, 23, 42, 0.06);
          border-radius: var(--radius-lg);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .feature-card:hover {
          border-color: rgba(99, 102, 241, 0.25);
          box-shadow: 0 12px 32px rgba(99, 102, 241, 0.12);
        }

        .feature-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: var(--gradient-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          position: relative;
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
          transition: transform 0.4s ease;
        }

        .feature-card:hover .feature-icon-wrapper {
          transform: scale(1.08) rotate(-3deg);
        }

        .feature-icon-glow {
          position: absolute;
          inset: -4px;
          background: var(--gradient-soft);
          border-radius: 18px;
          filter: blur(14px);
          opacity: 0.45;
          z-index: -1;
        }

        .feature-info { flex: 1; }

        .feature-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }

        .feature-desc {
          color: var(--text-muted);
          font-size: 0.92rem;
          line-height: 1.7;
        }

        .why-choose-image {
          position: relative;
          aspect-ratio: 4 / 5;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: var(--radius-2xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-wrapper:hover .main-image {
          transform: scale(1.06);
        }

        .image-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(99, 102, 241, 0.15) 100%);
          pointer-events: none;
        }

        .comfort-badge {
          position: absolute;
          top: 32px;
          left: -16px;
          background: var(--gradient-primary);
          color: white;
          padding: 10px 20px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.85rem;
          box-shadow: 0 12px 28px rgba(217, 70, 239, 0.4);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          z-index: 5;
          animation: float 5s ease-in-out infinite;
        }

        .stats-overlay {
          position: absolute;
          bottom: 30px;
          right: -20px;
          padding: 18px 24px;
          border-radius: var(--radius-lg);
          display: flex;
          gap: 24px;
          align-items: center;
          z-index: 5;
          animation: float 5s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .overlay-stat {
          text-align: center;
          display: flex;
          flex-direction: column;
        }

        .overlay-number {
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .overlay-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-top: 4px;
          font-weight: 600;
        }

        .overlay-divider {
          width: 1px;
          height: 32px;
          background: rgba(15, 23, 42, 0.12);
        }

        .dot-pattern {
          position: absolute;
          width: 140px;
          height: 140px;
          right: -32px;
          top: -32px;
          background-image: radial-gradient(circle, rgba(99, 102, 241, 0.3) 1.2px, transparent 1.2px);
          background-size: 16px 16px;
          z-index: -1;
        }

        @media (max-width: 968px) {
          .why-choose-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .why-choose-content {
            padding-right: 0;
            order: 2;
          }

          .why-choose-image {
            order: 1;
            max-width: 480px;
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .feature-card { padding: 18px; gap: 14px; }
          .stats-overlay { right: 10px; bottom: 20px; }
          .comfort-badge { left: 10px; top: 20px; }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
