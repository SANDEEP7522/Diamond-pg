"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Home, MapPin, BedDouble } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="search-container">
      {/* <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="search-bar"
        >
          <div className="search-fields">
            <div className="search-field">
              <div className="field-icon"><Home size={18} /></div>
              <div className="field-content">
                <label>Type</label>
                <select>
                  <option>Hostel</option>
                  <option>Paying Guest</option>
                </select>
              </div>
            </div>

            <div className="field-divider" />

            <div className="search-field">
              <div className="field-icon"><MapPin size={18} /></div>
              <div className="field-content">
                <label>Location</label>
                <select>
                  <option>Sector 63, Noida</option>
                  <option>Sector 62, Noida</option>
                  <option>Indirapuram</option>
                </select>
              </div>
            </div>

            <div className="field-divider" />

            <div className="search-field">
              <div className="field-icon"><BedDouble size={18} /></div>
              <div className="field-content">
                <label>Room Type</label>
                <select>
                  <option>Single Occupancy</option>
                  <option>Double Sharing</option>
                  <option>Triple Sharing</option>
                </select>
              </div>
            </div>

            <button className="search-btn">
              <Search size={18} />
              <span>Search</span>
            </button>
          </div>
        </motion.div>
      </div> */}

      <style jsx>{`
        .search-container {
          margin-top: -70px;
          position: relative;
          z-index: 25;
          padding: 0 5%;
        }

        .search-bar {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(30px) saturate(180%);
          -webkit-backdrop-filter: blur(30px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 24px;
          padding: 14px;
          box-shadow:
            0 24px 60px rgba(15, 23, 42, 0.18),
            0 0 0 1px rgba(99, 102, 241, 0.05) inset;
        }

        .search-fields {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .search-field {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 18px;
          border-radius: 16px;
          transition: var(--transition);
          cursor: pointer;
        }

        .search-field:hover {
          background: rgba(99, 102, 241, 0.06);
        }

        .field-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: var(--gradient-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);
        }

        .field-content {
          flex: 1;
          min-width: 0;
        }

        .field-content label {
          display: block;
          color: var(--text-muted);
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin-bottom: 2px;
        }

        .field-content select {
          width: 100%;
          padding: 0;
          border: none;
          background: transparent;
          color: var(--text);
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 4px center;
          background-size: 14px;
          padding-right: 22px;
        }

        .field-divider {
          width: 1px;
          height: 40px;
          background: rgba(15, 23, 42, 0.08);
          flex-shrink: 0;
        }

        .search-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border: none;
          border-radius: 16px;
          background: var(--gradient-soft);
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition);
          box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
          flex-shrink: 0;
          font-family: inherit;
        }

        .search-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(139, 92, 246, 0.5);
        }

        @media (max-width: 968px) {
          .search-container { margin-top: -50px; }

          .search-fields {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }

          .field-divider { display: none; }

          .search-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
