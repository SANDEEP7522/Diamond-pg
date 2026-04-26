"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    text: "I've been at Diamond PG for over a year. The facilities are top-notch — homemade food, blazing WiFi, and security that gives my family peace of mind.",
    rating: 5
  },
  {
    name: "Anjali Gupta",
    role: "MBA Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    text: "Best PG experience I've had. Clean rooms, delicious food, supportive management. It feels like a second home, especially during exam season.",
    rating: 5
  },
  {
    name: "Riya Singh",
    role: "Marketing Executive",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    text: "Living here has been transformative. The community events make it fun, the location is perfect for work, and I genuinely feel safe and at home.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="gradient-orb orb-purple" style={{ width: 600, height: 600, top: '-15%', left: '50%', transform: 'translateX(-50%)', opacity: 0.25 }} />
      <div className="grid-pattern" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="subtitle">Testimonials</span>
          <h2 className="section-title text-white">
            Loved by{' '}
            <span className="gradient-text">our residents</span>
          </h2>
          <p className="header-desc">
            Real stories from women who call Diamond PG home.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="testimonial-card"
            >
              <div className="quote-icon">
                <Quote size={20} />
              </div>

              <div className="rating">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={14} className="star-icon" fill="currentColor" />
                ))}
              </div>

              <p className="testimonial-text">"{t.text}"</p>

              <div className="testimonial-author">
                <div className="author-image">
                  <img src={t.image} alt={t.name} />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{t.name}</h4>
                  <p className="author-role">{t.role}</p>
                </div>
              </div>

              <div className="card-glow" />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background: var(--dark-bg);
          padding: 120px 5%;
          position: relative;
          overflow: hidden;
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 70px;
          position: relative;
          z-index: 2;
        }

        .header-desc {
          color: rgba(255, 255, 255, 0.65);
          font-size: 1.05rem;
          max-width: 520px;
          margin: 16px auto 0;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-xl);
          padding: 36px 32px;
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .testimonial-card:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(99, 102, 241, 0.4);
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
        }

        .card-glow {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 50%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 0;
        }

        .testimonial-card:hover .card-glow { opacity: 1; }

        .quote-icon {
          position: absolute;
          top: 28px;
          right: 28px;
          width: 44px;
          height: 44px;
          background: var(--gradient-soft);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
          z-index: 2;
        }

        .rating {
          display: flex;
          gap: 4px;
          margin-bottom: 18px;
          position: relative;
          z-index: 2;
        }

        .star-icon { color: #fbbf24; }

        .testimonial-text {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.98rem;
          line-height: 1.75;
          margin-bottom: 28px;
          position: relative;
          z-index: 2;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          z-index: 2;
        }

        .author-image {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid;
          border-image: linear-gradient(135deg, #6366f1, #8b5cf6) 1;
          padding: 2px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
        }

        .author-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        .author-name {
          font-size: 1rem;
          font-weight: 700;
          color: white;
          margin-bottom: 2px;
          letter-spacing: -0.01em;
        }

        .author-role {
          font-size: 0.75rem;
          background: var(--gradient-soft);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .testimonials-grid { grid-template-columns: 1fr; }
          .testimonial-card { padding: 28px 24px; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
