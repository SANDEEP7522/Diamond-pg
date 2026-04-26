"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Wifi, Utensils, Droplets } from 'lucide-react';

const features = [
  { icon: <ShieldCheck size={18} />, label: '24/7 CCTV & Security' },
  { icon: <Wifi size={18} />, label: 'High-Speed WiFi' },
  { icon: <Utensils size={18} />, label: 'Homemade Meals' },
  { icon: <Droplets size={18} />, label: 'RO Purified Water' }
];

const Intro = () => {
  return (
    <section id="about" className="intro-section">
      <div className="gradient-orb orb-blue" style={{ width: 400, height: 400, top: '10%', left: '-15%', opacity: 0.15 }} />
      <div className="gradient-orb orb-purple" style={{ width: 350, height: 350, bottom: '5%', right: '-10%', opacity: 0.18 }} />

      <div className="container">
        <div className="intro-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="intro-image-wrapper"
          >
            <div className="image-stack">
              <div className="image-main">
                <img src="/images/hallway1.jpg" alt="Premium living spaces" />
              </div>
              <div className="image-secondary">
                <img src="/images/exterior2.jpg" alt="Building exterior" />
              </div>
            </div>

            <div className="floating-card discount-card">
              <div className="discount-percent">15%</div>
              <div className="discount-text">
                <span>Limited</span>
                <span>Discount</span>
              </div>
            </div>

            <div className="floating-card experience-card">
              <div className="exp-number">5+</div>
              <div className="exp-text">Years of<br />Excellence</div>
            </div>

            <div className="orbit-ring" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="intro-content"
          >
            <span className="subtitle">About Us</span>
            <h2 className="section-title">
              A new standard for{' '}
              <span className="gradient-text">premium living</span>
            </h2>
            <p className="intro-text">
              Diamond PG redefines hostel living for ambitious women in Noida. We blend
              boutique-hotel sensibilities with the warmth of home — offering thoughtfully
              designed spaces, modern amenities, and a genuine community.
            </p>

            <ul className="features-list">
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="feature-icon">{f.icon}</span>
                  <span>{f.label}</span>
                </motion.li>
              ))}
            </ul>

            <div className="intro-cta">
              <button className="btn btn-primary">
                Discover More <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline">Schedule a Visit</button>
            </div>

            <div className="stats-grid">
              <div className="stat-item">
                <h3 className="stat-number gradient-text">485+</h3>
                <p className="stat-label">Happy Residents</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number gradient-text">252+</h3>
                <p className="stat-label">Modern Rooms</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number gradient-text">4.9★</h3>
                <p className="stat-label">Average Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .intro-section {
          background-color: var(--white);
          padding: 120px 5%;
          position: relative;
          overflow: hidden;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .intro-image-wrapper {
          position: relative;
          padding: 30px;
        }

        .image-stack {
          position: relative;
          aspect-ratio: 4 / 5;
        }

        .image-main {
          position: absolute;
          inset: 0;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          z-index: 2;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .image-main:hover img {
          transform: scale(1.08);
        }

        .image-secondary {
          position: absolute;
          width: 60%;
          aspect-ratio: 1;
          bottom: -40px;
          right: -40px;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: 6px solid white;
          box-shadow: var(--shadow-xl);
          z-index: 3;
          transition: transform 0.6s ease;
        }

        .image-secondary:hover {
          transform: scale(1.04);
        }

        .image-secondary img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .floating-card {
          position: absolute;
          background: white;
          border-radius: var(--radius-lg);
          padding: 18px 22px;
          box-shadow: var(--shadow-xl);
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 14px;
          animation: float 6s ease-in-out infinite;
        }

        .discount-card {
          top: 10%;
          right: -20px;
          background: var(--gradient-primary);
          color: white;
        }

        .discount-percent {
          font-size: 2rem;
          font-weight: 800;
          line-height: 1;
        }

        .discount-text {
          display: flex;
          flex-direction: column;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.3;
        }

        .experience-card {
          bottom: 5%;
          left: -10px;
          animation-delay: 1.5s;
        }

        .exp-number {
          font-size: 1.8rem;
          font-weight: 800;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
        }

        .exp-text {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
          line-height: 1.3;
        }

        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 110%;
          aspect-ratio: 1;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1.5px dashed rgba(99, 102, 241, 0.2);
          animation: spin 30s linear infinite;
          z-index: 1;
        }

        @keyframes spin {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .intro-content { padding-left: 20px; }

        .intro-text {
          color: var(--text-muted);
          margin-bottom: 32px;
          line-height: 1.85;
          font-size: 1.05rem;
        }

        .features-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 36px;
        }

        .features-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--text);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .feature-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: var(--primary);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .intro-cta {
          display: flex;
          gap: 12px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          padding-top: 36px;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
        }

        .stat-item { text-align: left; }

        .stat-number {
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1.2px;
        }

        @media (max-width: 968px) {
          .intro-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .intro-content { padding-left: 0; }
          .image-stack { max-width: 480px; margin: 0 auto; }
        }

        @media (max-width: 600px) {
          .features-list { grid-template-columns: 1fr; }
          .stats-grid { gap: 18px; }
          .stat-number { font-size: 1.6rem; }
          .image-secondary { width: 50%; bottom: -20px; right: -20px; }
          .floating-card { padding: 12px 16px; }
        }
      `}</style>
    </section>
  );
};

export default Intro;
