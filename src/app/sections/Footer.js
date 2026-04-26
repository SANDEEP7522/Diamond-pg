"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, AtSign, Share2, Hash, MapPin, Phone, Mail, Send, Sparkles, ArrowUp } from 'lucide-react';
import BrandMark from '../components/BrandMark';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer-section">
      <div className="gradient-orb orb-blue" style={{ width: 600, height: 600, top: '-30%', left: '50%', transform: 'translateX(-50%)', opacity: 0.15 }} />

      <div className="footer-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="newsletter-section"
        >
          <div className="newsletter-glow" />
          <div className="newsletter-inner">
            <div className="newsletter-content">
              <span className="newsletter-eyebrow">
                <Sparkles size={12} /> Newsletter
              </span>
              <h4 className="newsletter-title">
                Stay in the <span className="gradient-text">loop</span>
              </h4>
              <p className="newsletter-desc">
                Latest offers, room availability, and community news — straight to your inbox.
              </p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="newsletter-input-wrap">
                <Mail size={16} className="input-icon" />
                <input type="email" placeholder="your@email.com" className="newsletter-input" required />
                <button className="newsletter-btn" type="submit">
                  <span>Subscribe</span>
                  <Send size={15} />
                </button>
              </div>
              <p className="newsletter-note">No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </motion.div>

        <div className="footer-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="footer-brand"
          >
            <div className="brand-logo">
              <BrandMark size="lg" variant="light" />
            </div>
            <p className="brand-desc">
              Premium girls PG in Sector 63, Noida — designed for ambitious women who
              want comfort, safety, and community in equal measure.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Website"><Globe size={16} /></a>
              <a href="#" className="social-link" aria-label="Email"><AtSign size={16} /></a>
              <a href="#" className="social-link" aria-label="Share"><Share2 size={16} /></a>
              <a href="#" className="social-link" aria-label="Tag"><Hash size={16} /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="footer-column"
          >
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#facilities">Rooms</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="footer-column"
          >
            <h4 className="footer-heading">Locations</h4>
            <ul className="footer-links">
              <li><a href="#">Noida Sector 62</a></li>
              <li><a href="#">Noida Sector 63</a></li>
              <li><a href="#">Indirapuram</a></li>
              <li><a href="#">Vaishali</a></li>
              <li><a href="#">Kaushambi</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="footer-column"
          >
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={16} />
                <span>Sector 63, Noida, UP 201309</span>
              </li>
              <li>
                <Phone size={16} />
                <span>+91 8279409255</span>
              </li>
              <li>
                <Mail size={16} />
                <span>info@diamondpg.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Diamond Girls PG. Crafted with care.</p>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
          <button className="back-to-top" onClick={scrollTop} aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          background: var(--dark-bg);
          padding-top: 100px;
          position: relative;
          overflow: hidden;
        }

        .footer-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 5%;
          position: relative;
          z-index: 2;
        }

        .newsletter-section {
          position: relative;
          padding: 48px 56px;
          border-radius: 32px;
          margin-bottom: 80px;
          background:
            linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(139, 92, 246, 0.08) 50%, rgba(217, 70, 239, 0.08)),
            rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
        }

        .newsletter-glow {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%);
          top: -180px;
          right: -100px;
          filter: blur(60px);
          pointer-events: none;
        }

        .newsletter-inner {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 40px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .newsletter-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          color: var(--primary-light);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .newsletter-title {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          margin-bottom: 8px;
          letter-spacing: -0.025em;
          line-height: 1.15;
        }

        .newsletter-desc {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 380px;
        }

        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .newsletter-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          padding: 6px 6px 6px 22px;
          transition: all 0.3s ease;
        }

        .newsletter-input-wrap:focus-within {
          border-color: rgba(139, 92, 246, 0.6);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.18);
        }

        .input-icon {
          color: rgba(255, 255, 255, 0.5);
          flex-shrink: 0;
        }

        .newsletter-input {
          flex: 1;
          padding: 12px 16px;
          background: transparent;
          border: none;
          color: white;
          font-size: 0.95rem;
          min-width: 0;
        }

        .newsletter-input::placeholder { color: rgba(255, 255, 255, 0.4); }
        .newsletter-input:focus { outline: none; }

        .newsletter-btn {
          padding: 12px 22px;
          border-radius: 999px;
          background: var(--gradient-soft);
          border: none;
          color: white;
          font-weight: 600;
          font-size: 0.88rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          box-shadow: 0 6px 18px rgba(99, 102, 241, 0.45);
          flex-shrink: 0;
          white-space: nowrap;
        }

        .newsletter-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 26px rgba(139, 92, 246, 0.55);
        }

        .newsletter-note {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.75rem;
          padding-left: 22px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .brand-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
          white-space: nowrap;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: var(--gradient-primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        .logo-text {
          font-size: 1.35rem;
          font-weight: 800;
          color: white;
          letter-spacing: -0.02em;
          line-height: 1;
          display: inline-flex;
          align-items: center;
        }

        .logo-accent {
          background: var(--gradient-soft);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-left: 2px;
        }

        .brand-desc {
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.75;
          margin-bottom: 24px;
          max-width: 320px;
          font-size: 0.92rem;
        }

        .social-links {
          display: flex;
          gap: 10px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--gradient-soft);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
          border-color: transparent;
        }

        .footer-heading {
          font-size: 0.85rem;
          font-weight: 700;
          color: white;
          margin-bottom: 22px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.92rem;
          transition: all 0.3s ease;
          position: relative;
          display: inline-block;
        }

        .footer-links a::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 0;
          height: 1.5px;
          background: var(--gradient-soft);
          transition: width 0.3s ease;
        }

        .footer-links a:hover {
          color: white;
          padding-left: 14px;
        }

        .footer-links a:hover::before {
          width: 10px;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.9rem;
        }

        .contact-list li :global(svg) {
          color: var(--primary-light);
          flex-shrink: 0;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 0;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.82rem;
          gap: 24px;
        }

        .footer-legal {
          display: flex;
          gap: 24px;
        }

        .footer-legal a {
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.3s ease;
        }

        .footer-legal a:hover { color: var(--primary-light); }

        .back-to-top {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: var(--gradient-soft);
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        .back-to-top:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(139, 92, 246, 0.5);
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
          .newsletter-section { padding: 36px 32px; border-radius: 24px; }
          .newsletter-inner { grid-template-columns: 1fr; gap: 24px; text-align: center; }
          .newsletter-desc { margin: 0 auto; }
          .newsletter-eyebrow { margin: 0 auto 14px; }
          .newsletter-note { text-align: center; padding-left: 0; }
        }

        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; gap: 36px; }
          .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
          .newsletter-section { padding: 28px 22px; }
          .newsletter-title { font-size: 1.6rem; }
          .newsletter-input-wrap {
            flex-direction: column;
            border-radius: 20px;
            padding: 14px;
            gap: 10px;
          }
          .input-icon { display: none; }
          .newsletter-input {
            width: 100%;
            padding: 10px 14px;
            background: rgba(255, 255, 255, 0.06);
            border-radius: 12px;
            text-align: center;
          }
          .newsletter-btn { width: 100%; justify-content: center; padding: 14px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
