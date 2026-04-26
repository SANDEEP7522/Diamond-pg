"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';
import { whatsappUrl, telUrl } from '@/app/lib/contact';

const WhatsAppFab = () => {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 3000);
    const t2 = setTimeout(() => setShowHint(false), 9000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  return (
    <div className="fab-root">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fab-menu"
          >
            <div className="fab-menu-header">
              <div>
                <h4>Need help?</h4>
                <p>We typically reply in minutes</p>
              </div>
              <button className="fab-close" onClick={() => setOpen(false)} aria-label="Close">
                <X size={16} />
              </button>
            </div>
            <a
              href={whatsappUrl("Hi! I'd like to know more about Diamond PG.")}
              target="_blank"
              rel="noopener noreferrer"
              className="fab-action whatsapp-action"
              onClick={() => setOpen(false)}
            >
              <span className="fab-action-icon whatsapp-icon">
                <MessageCircle size={18} fill="white" />
              </span>
              <span>
                <strong>Chat on WhatsApp</strong>
                <small>Get instant replies</small>
              </span>
            </a>
            <a
              href={telUrl}
              className="fab-action call-action"
              onClick={() => setOpen(false)}
            >
              <span className="fab-action-icon call-icon">
                <Phone size={16} />
              </span>
              <span>
                <strong>Call us now</strong>
                <small>+91 8279409255</small>
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showHint && !open && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fab-hint"
          >
            👋 Need help? Chat with us!
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.08, rotate: 6 }}
        className={`fab-btn ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close chat menu' : 'Open chat menu'}
      >
        <span className="fab-pulse" />
        <span className="fab-pulse-2" />
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fab-icon"
            >
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fab-icon"
            >
              <MessageCircle size={24} fill="white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <style jsx>{`
        .fab-root {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }

        .fab-btn {
          position: relative;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          border: 3px solid rgba(255, 255, 255, 0.95);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 12px 28px rgba(37, 211, 102, 0.5),
            0 4px 12px rgba(0, 0, 0, 0.15);
          transition: box-shadow 0.3s ease;
        }

        .fab-btn.open {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          box-shadow:
            0 12px 28px rgba(99, 102, 241, 0.5),
            0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .fab-icon {
          display: inline-flex;
        }

        .fab-pulse,
        .fab-pulse-2 {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.55);
          animation: fab-pulse 2.4s ease-out infinite;
          z-index: -1;
        }

        .fab-pulse-2 {
          animation-delay: 1.2s;
        }

        .fab-btn.open .fab-pulse,
        .fab-btn.open .fab-pulse-2 {
          background: rgba(99, 102, 241, 0.5);
        }

        @keyframes fab-pulse {
          0%   { transform: scale(1);   opacity: 0.8; }
          80%  { transform: scale(1.8); opacity: 0; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .fab-hint {
          background: white;
          color: var(--text);
          padding: 10px 16px;
          border-radius: 14px;
          font-size: 0.85rem;
          font-weight: 500;
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.18);
          position: relative;
          margin-right: 8px;
          white-space: nowrap;
        }

        .fab-hint::after {
          content: '';
          position: absolute;
          right: -6px;
          bottom: 18px;
          width: 12px;
          height: 12px;
          background: white;
          transform: rotate(45deg);
        }

        .fab-menu {
          background: white;
          border-radius: 20px;
          padding: 18px;
          width: 320px;
          max-width: calc(100vw - 56px);
          box-shadow:
            0 24px 60px rgba(15, 23, 42, 0.25),
            0 0 0 1px rgba(15, 23, 42, 0.04);
        }

        .fab-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          margin-bottom: 14px;
        }

        .fab-menu-header h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text);
          margin: 0;
        }

        .fab-menu-header p {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin: 2px 0 0;
        }

        .fab-close {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          background: rgba(15, 23, 42, 0.04);
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fab-action {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 14px;
          border-radius: 14px;
          color: var(--text);
          transition: all 0.3s ease;
          margin-bottom: 6px;
        }

        .fab-action:last-child { margin-bottom: 0; }

        .fab-action:hover {
          background: var(--light-bg);
          transform: translateX(2px);
        }

        .fab-action strong {
          display: block;
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text);
        }

        .fab-action small {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .fab-action-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: white;
        }

        .whatsapp-icon { background: linear-gradient(135deg, #25d366, #128c7e); box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4); }
        .call-icon     { background: linear-gradient(135deg, #6366f1, #8b5cf6); box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4); }

        @media (max-width: 480px) {
          .fab-root { bottom: 18px; right: 18px; }
          .fab-btn { width: 54px; height: 54px; }
          .fab-menu { width: 280px; padding: 14px; }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppFab;
