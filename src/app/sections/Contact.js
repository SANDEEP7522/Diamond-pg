"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, MessageCircle } from 'lucide-react';
import { whatsappUrl, telUrl, mailUrl } from '@/app/lib/contact';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', roomType: '', message: ''
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi! I'd like to enquire about Diamond PG.

Name: ${form.firstName} ${form.lastName}
Email: ${form.email}
Room Type: ${form.roomType || '—'}

${form.message || ''}`.trim();
    window.open(whatsappUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="gradient-orb orb-purple" style={{ width: 600, height: 600, top: '-20%', right: '-10%', opacity: 0.5 }} />
      <div className="gradient-orb orb-blue" style={{ width: 500, height: 500, bottom: '-15%', left: '-10%', opacity: 0.5 }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <span className="subtitle">Contact Us</span>
          <h2 className="contact-heading">
            Let's start your{' '}
            <span className="gradient-text">comfort journey</span>
          </h2>
          <p className="contact-desc">
            Have questions? Want a tour? Drop us a message and we'll get back within hours.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="contact-info-side"
          >
            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Visit Us</h4>
                  <p>J9FG+HPF, Wazidpur, Sector 63<br />Noida, UP 201309</p>
                </div>
              </div>

              <a href={telUrl} className="info-card info-card-link">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 8279409255<br />+91 9876543211</p>
                </div>
              </a>

              <a href={mailUrl} className="info-card info-card-link">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>contact@diamondpg.com<br />support@diamondpg.com</p>
                </div>
              </a>

              <div className="info-card">
                <div className="info-icon"><Clock size={20} /></div>
                <div>
                  <h4>Open Hours</h4>
                  <p>Monday – Sunday<br />9:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta"
            >
              <MessageCircle size={20} />
              <div>
                <strong>Chat on WhatsApp</strong>
                <span>Get instant replies</span>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="contact-form-side"
          >
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-row">
                <div className="floating-field">
                  <input
                    type="text"
                    name="firstName"
                    placeholder=" "
                    value={form.firstName}
                    onChange={onChange}
                    required
                  />
                  <label>First Name</label>
                </div>
                <div className="floating-field">
                  <input
                    type="text"
                    name="lastName"
                    placeholder=" "
                    value={form.lastName}
                    onChange={onChange}
                    required
                  />
                  <label>Last Name</label>
                </div>
              </div>

              <div className="floating-field">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  value={form.email}
                  onChange={onChange}
                  required
                />
                <label>Email Address</label>
              </div>

              <div className="floating-field">
                <select
                  name="roomType"
                  value={form.roomType}
                  onChange={onChange}
                  required
                >
                  <option value="" disabled hidden></option>
                  <option value="single">Single Occupancy</option>
                  <option value="double">Double Sharing</option>
                  <option value="triple">Triple Sharing</option>
                </select>
                <label>Room Type</label>
              </div>

              <div className="floating-field">
                <textarea
                  name="message"
                  placeholder=" "
                  rows="4"
                  value={form.message}
                  onChange={onChange}
                ></textarea>
                <label>Your Message</label>
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: var(--gradient-dark);
          padding: 120px 5%;
          position: relative;
          overflow: hidden;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .contact-heading {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 800;
          color: white;
          margin-bottom: 16px;
          letter-spacing: -0.03em;
        }

        .contact-desc {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.05rem;
          max-width: 540px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 32px;
          position: relative;
          z-index: 2;
        }

        .contact-info-side,
        .contact-form-side {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-xl);
          padding: 40px;
        }

        .info-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        }

        .info-card {
          display: flex;
          gap: 14px;
          padding: 18px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(99, 102, 241, 0.3);
          transform: translateY(-3px);
        }

        .info-icon {
          width: 40px;
          height: 40px;
          background: var(--gradient-soft);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 6px 18px rgba(99, 102, 241, 0.35);
        }

        .info-card h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }

        .info-card p {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.55;
        }

        .whatsapp-cta {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 24px;
          background: linear-gradient(135deg, #25d366, #128c7e);
          border-radius: 16px;
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3);
        }

        .whatsapp-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 32px rgba(37, 211, 102, 0.45);
        }

        .whatsapp-cta div {
          display: flex;
          flex-direction: column;
        }

        .whatsapp-cta strong {
          font-size: 0.95rem;
          font-weight: 700;
        }

        .whatsapp-cta span {
          font-size: 0.78rem;
          opacity: 0.9;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .floating-field textarea {
          resize: none;
          font-family: inherit;
        }

        .submit-btn {
          margin-top: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          padding: 16px;
          background: var(--gradient-soft);
          color: white;
          border: none;
          border-radius: 14px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
          transition: left 0.6s ease;
        }

        .submit-btn:hover::before { left: 100%; }

        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(139, 92, 246, 0.5);
        }

        @media (max-width: 968px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-info-side, .contact-form-side { padding: 28px; }
        }

        @media (max-width: 480px) {
          .info-cards { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
