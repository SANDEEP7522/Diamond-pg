"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Globe, Share2, AtSign, Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import BrandMark from './BrandMark';
import { whatsappUrl } from '@/app/lib/contact';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 30);
      if (currentScroll < 80) {
        setHidden(false);
      } else if (currentScroll > lastScroll + 4) {
        setHidden(true);
      } else if (currentScroll < lastScroll - 4) {
        setHidden(false);
      }
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#facilities", label: "Rooms" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -140 : 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className={`navbar-root ${isScrolled ? 'scrolled' : ''}`}
      >
        <div className="top-bar">
          <div className="container flex justify-between items-center">
            <div className="flex gap-6 contact-info">
              <a href="tel:+918279409255" className="top-link">
                <Phone size={13} /> +91 8279409255
              </a>
              <a href="mailto:contact@diamondpg.com" className="top-link">
                <Mail size={13} /> contact@diamondpg.com
              </a>
            </div>
            <div className="flex gap-4 social-icons">
              <a href="#" aria-label="Website"><Globe size={14} /></a>
              <a href="#" aria-label="Share"><Share2 size={14} /></a>
              <a href="#" aria-label="Email"><AtSign size={14} /></a>
            </div>
          </div>
        </div>

        <nav className="main-nav">
          <div className="container nav-inner">
            <Link href="#home" className="logo">
              <BrandMark size="md" variant={isScrolled ? 'dark' : 'light'} />
            </Link>

            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <a
                href={whatsappUrl("Hi! I'd like to book a room at Diamond PG.")}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn"
              >
                Book Now <ArrowRight size={15} />
              </a>
              <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mobile-backdrop"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="mobile-menu"
            >
              <div className="mobile-menu-header">
                <Link href="#home" className="logo" onClick={() => setMobileMenuOpen(false)}>
                  <BrandMark size="md" variant="dark" />
                </Link>
                <button className="close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                  <X size={20} />
                </button>
              </div>

              <ul className="mobile-nav-links">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="mobile-nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{link.label}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-menu-footer">
                <a
                  href={whatsappUrl("Hi! I'd like to book a room at Diamond PG.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Now <ArrowRight size={16} />
                </a>
                <div className="mobile-contact">
                  <a href="tel:+918279409255"><Phone size={14} /> +91 8279409255</a>
                  <a href="mailto:contact@diamondpg.com"><Mail size={14} /> contact@diamondpg.com</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar-root {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          will-change: transform;
        }

        .top-bar {
          background: linear-gradient(90deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.95) 50%, rgba(15, 23, 42, 0.95) 100%);
          backdrop-filter: blur(16px);
          color: rgba(255, 255, 255, 0.85);
          padding: 9px 5%;
          font-size: 0.78rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          overflow: hidden;
          max-height: 40px;
          opacity: 1;
          transition: max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease;
        }

        .navbar-root.scrolled .top-bar {
          max-height: 0;
          padding-top: 0;
          padding-bottom: 0;
          opacity: 0;
          border-bottom: 0;
        }

        .top-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: rgba(255, 255, 255, 0.85);
          transition: color 0.3s ease;
        }

        .top-link:hover { color: var(--primary-light); }

        .social-icons a {
          color: rgba(255, 255, 255, 0.85);
          display: inline-flex;
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          color: var(--primary-light);
          transform: translateY(-2px);
        }

        .main-nav {
          padding: 16px 5%;
          background: transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-root.scrolled .main-nav {
          padding: 12px 5%;
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 8px 12px 8px 18px;
          border-radius: 999px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
        }

        .navbar-root.scrolled .nav-inner {
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(255, 255, 255, 0.6);
          box-shadow:
            0 12px 40px rgba(15, 23, 42, 0.12),
            0 0 0 1px rgba(99, 102, 241, 0.04) inset;
        }

        .logo {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          white-space: nowrap;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          background: var(--gradient-primary);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
          transition: var(--transition);
          flex-shrink: 0;
        }

        .logo:hover .logo-icon {
          transform: rotate(8deg) scale(1.05);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.5);
        }

        .brand-name {
          font-size: 1.25rem;
          font-weight: 800;
          color: white;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
          white-space: nowrap;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .brand-dark { color: var(--text); }

        .brand-accent {
          background: var(--gradient-soft);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-left: 2px;
        }

        .navbar-root.scrolled .brand-name { color: var(--text); }

        .nav-links {
          display: flex;
          gap: 24px;
          align-items: center;
          justify-content: center;
        }

        .nav-link {
          font-weight: 500;
          color: rgba(255, 255, 255, 0.88);
          font-size: 0.92rem;
          padding: 8px 18px;
          border-radius: 999px;
          transition: all 0.3s ease;
        }

        .navbar-root.scrolled .nav-link { color: var(--text); }

        .nav-link:hover {
          color: white;
          background: rgba(255, 255, 255, 0.12);
        }

        .navbar-root.scrolled .nav-link:hover {
          color: var(--primary);
          background: rgba(99, 102, 241, 0.1);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cta-btn {
          padding: 10px 20px;
          border-radius: 999px;
          background: var(--gradient-soft);
          color: white;
          font-weight: 600;
          font-size: 0.85rem;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: inherit;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(139, 92, 246, 0.5);
        }

        .mobile-menu-btn {
          display: none;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(10px);
          color: white;
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 11px;
          align-items: center;
          justify-content: center;
        }

        .navbar-root.scrolled .mobile-menu-btn {
          color: var(--text);
          background: rgba(99, 102, 241, 0.08);
          border-color: rgba(99, 102, 241, 0.2);
        }

        @media (max-width: 1024px) {
          .nav-links { display: none; }
          .cta-btn { display: none; }
          .mobile-menu-btn { display: flex; }
          .top-bar { display: none; }
        }

        @media (max-width: 768px) {
          .contact-info { display: none; }
        }
      `}</style>

      <style jsx global>{`
        .mobile-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(8px);
          z-index: 1500;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 320px;
          max-width: 85vw;
          height: 100vh;
          background: white;
          z-index: 1600;
          display: flex;
          flex-direction: column;
          box-shadow: -20px 0 60px rgba(15, 23, 42, 0.18);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
        }

        .mobile-menu .close-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.15);
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .mobile-nav-links {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          list-style: none;
          margin: 0;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          margin-bottom: 4px;
          color: var(--text);
          font-weight: 500;
          font-size: 0.98rem;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .mobile-nav-link :global(svg) {
          color: var(--text-muted);
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover {
          background: var(--gradient-soft);
          color: white;
          padding-left: 22px;
        }

        .mobile-nav-link:hover :global(svg) {
          color: white;
          transform: translateX(4px);
        }

        .mobile-menu-footer {
          padding: 20px 24px 28px;
          border-top: 1px solid rgba(15, 23, 42, 0.06);
        }

        .mobile-contact {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-contact a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        .mobile-contact a :global(svg) { color: var(--primary); }
      `}</style>
    </>
  );
};

export default Navbar;
