"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Battery, Droplets, Shield, Utensils, Zap, ArrowRight, Star, Sparkles } from 'lucide-react';

const facilitiesList = [
  { icon: <Wifi size={20} />, name: "High-Speed WiFi" },
  { icon: <Battery size={20} />, name: "24/7 Power Backup" },
  { icon: <Droplets size={20} />, name: "RO Water" },
  { icon: <Shield size={20} />, name: "CCTV Security" },
  { icon: <Utensils size={20} />, name: "Homemade Meals" },
  { icon: <Zap size={20} />, name: "Hot Water" }
];

const roomsList = [
  {
    type: "Single Occupancy",
    price: "8,500",
    img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
    tag: "Premium",
    tagColor: "premium",
    features: ["Attached Bathroom", "AC Available", "Study Table"]
  },
  {
    type: "Double Sharing",
    price: "9,000",
    img: "https://images.unsplash.com/photo-1536376074432-8d642fed43f7?q=80&w=2070&auto=format&fit=crop",
    tag: "Bestseller",
    tagColor: "bestseller",
    features: ["Furnished", "Wardrobe", "Study Lamp"]
  },
  {
    type: "Triple Sharing",
    price: "15,000",
    img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop",
    tag: "Budget",
    tagColor: "budget",
    features: ["Economical", "Comfortable", "Basic Amenities"]
  }
];

const Facilities = () => {
  return (
    <section id="facilities" className="facilities-section">
      <div className="gradient-orb orb-purple" style={{ width: 500, height: 500, top: '5%', right: '-20%', opacity: 0.12 }} />
      <div className="gradient-orb orb-blue" style={{ width: 400, height: 400, bottom: '10%', left: '-15%', opacity: 0.12 }} />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <div className="header-content">
            <span className="subtitle">Our Rooms & Facilities</span>
            <h2 className="section-title">
              Choose your perfect{' '}
              <span className="gradient-text">private sanctuary</span>
            </h2>
            <p className="header-desc">
              Every room is designed with intention — light, space, and the small details
              that turn a place to stay into a place you love.
            </p>
            <ul className="facilities-list">
              {facilitiesList.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="facility-item"
                >
                  <span className="facility-icon">{f.icon}</span>
                  <span>{f.name}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="rooms-grid">
          {roomsList.map((room, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="room-card"
            >
              <div className="room-image-wrapper">
                <img src={room.img} alt={room.type} className="room-image" />
                <div className={`room-tag tag-${room.tagColor}`}>
                  <Sparkles size={12} />
                  {room.tag}
                </div>
                <div className="room-overlay">
                  <button className="view-details-btn">
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              <div className="room-content">
                <h3 className="room-title">{room.type}</h3>
                <p className="room-desc">
                  Fully furnished with premium amenities and thoughtful design touches.
                </p>
                <ul className="room-features">
                  {room.features.map((feature, idx) => (
                    <li key={idx}>
                      <Star size={11} className="feature-star" fill="currentColor" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="room-footer">
                  <div className="room-price">
                    <span className="price-from">From</span>
                    <span className="price-amount">₹{room.price}</span>
                    <span className="price-period">/month</span>
                  </div>
                  <button className="book-btn">
                    Book <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .facilities-section {
          background-color: var(--light-bg);
          padding: 120px 5%;
          position: relative;
          overflow: hidden;
        }

        .section-header {
          margin-bottom: 60px;
          text-align: center;
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 2;
        }

        .header-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto 32px;
        }

        .facilities-list {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
          margin-top: 24px;
        }

        .facility-item {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px 10px 10px;
          background: #ffffff;
          border: 1px solid rgba(99, 102, 241, 0.12);
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.88rem;
          color: var(--text);
          box-shadow:
            0 4px 14px rgba(15, 23, 42, 0.06),
            0 0 0 1px rgba(255, 255, 255, 0.6) inset;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .facility-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(217, 70, 239, 0.06));
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .facility-item:hover {
          transform: translateY(-4px);
          box-shadow:
            0 12px 28px rgba(99, 102, 241, 0.18),
            0 0 0 1px rgba(99, 102, 241, 0.25) inset;
          border-color: rgba(99, 102, 241, 0.4);
        }

        .facility-item:hover::before { opacity: 1; }

        .facility-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--gradient-soft);
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
          position: relative;
          z-index: 1;
        }

        .facility-icon :global(svg) {
          width: 16px;
          height: 16px;
        }

        .facility-item > span:last-child {
          position: relative;
          z-index: 1;
        }

        .rooms-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          position: relative;
          z-index: 2;
        }

        .room-card {
          background: white;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(15, 23, 42, 0.04);
        }

        .room-card:hover {
          box-shadow: var(--shadow-xl);
          border-color: rgba(99, 102, 241, 0.2);
        }

        .room-image-wrapper {
          position: relative;
          height: 260px;
          overflow: hidden;
        }

        .room-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .room-card:hover .room-image {
          transform: scale(1.12);
        }

        .room-tag {
          position: absolute;
          top: 16px;
          left: 16px;
          color: white;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          backdrop-filter: blur(20px);
        }

        .tag-premium { background: linear-gradient(135deg, #6366f1, #8b5cf6); box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4); }
        .tag-bestseller { background: linear-gradient(135deg, #d946ef, #8b5cf6); box-shadow: 0 6px 20px rgba(217, 70, 239, 0.4); }
        .tag-budget { background: linear-gradient(135deg, #06b6d4, #6366f1); box-shadow: 0 6px 20px rgba(6, 182, 212, 0.4); }

        .room-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.85) 100%);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 24px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .room-card:hover .room-overlay { opacity: 1; }

        .view-details-btn {
          background: rgba(255, 255, 255, 0.95);
          color: var(--text);
          border: none;
          padding: 10px 22px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transform: translateY(20px);
          transition: transform 0.4s ease;
          font-family: inherit;
          backdrop-filter: blur(10px);
        }

        .room-card:hover .view-details-btn {
          transform: translateY(0);
        }

        .room-content { padding: 26px; }

        .room-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .room-desc {
          color: var(--text-muted);
          font-size: 0.88rem;
          line-height: 1.6;
          margin-bottom: 18px;
        }

        .room-features {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 22px;
        }

        .room-features li {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.72rem;
          font-weight: 500;
          color: var(--text-muted);
          background: var(--light-bg);
          padding: 5px 11px;
          border-radius: 999px;
        }

        .feature-star {
          color: #f59e0b;
        }

        .room-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 18px;
          border-top: 1px solid rgba(15, 23, 42, 0.06);
        }

        .room-price {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .price-from {
          font-size: 0.65rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-weight: 600;
        }

        .price-amount {
          font-size: 1.5rem;
          font-weight: 800;
          background: var(--gradient-soft);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
        }

        .price-period {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .book-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--gradient-soft);
          border: none;
          color: white;
          font-weight: 600;
          font-size: 0.85rem;
          padding: 10px 18px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
        }

        .book-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(139, 92, 246, 0.45);
          gap: 10px;
        }

        @media (max-width: 1024px) {
          .rooms-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .rooms-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Facilities;
