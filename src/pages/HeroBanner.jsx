// components/dashboard/HeroBanner.jsx
import React from "react";
import { ShieldCheck } from "lucide-react";
import '../styles/herobanner.css';

export default function HeroBanner({ onStartFarming }) {
  return (
    <div className="cc-hero-border">
      <div className="cc-hero">
        <div className="cc-hero-content">
          <span className="cc-hero-eyebrow">Black Diamond Protocol</span>
          <h1 className="cc-hero-headline">
            Every Round,
            <br />
            Dealt On-Chain
          </h1>
          <p className="cc-hero-sub">
            Stake CCHIP and let the table run itself. Bonuses settle
            automatically on BSC — no dealer, no delay, no house edge.
          </p>
        </div>

        <div className="cc-hero-chip-wrap">
          <svg
            className="cc-hero-chip"
            viewBox="0 0 220 220"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="chipRim" x1="0" y1="0" x2="220" y2="220">
                <stop offset="0%" stopColor="var(--cc-gold-neon)" />
                <stop offset="100%" stopColor="var(--cc-teal)" />
              </linearGradient>
              <radialGradient id="chipFace" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#181818" />
                <stop offset="100%" stopColor="#050505" />
              </radialGradient>
            </defs>

            <circle cx="110" cy="110" r="104" fill="none" stroke="url(#chipRim)" strokeWidth="10" />

            <g className="cc-chip-notches">
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x1 = 110 + 96 * Math.cos(angle);
                const y1 = 110 + 96 * Math.sin(angle);
                const x2 = 110 + 84 * Math.cos(angle);
                const y2 = 110 + 84 * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={i % 2 === 0 ? "var(--cc-cyan)" : "var(--cc-silver-border)"}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                );
              })}
            </g>

            <circle cx="110" cy="110" r="78" fill="url(#chipFace)" stroke="var(--cc-card-border)" strokeWidth="1" />
            <circle cx="110" cy="110" r="60" fill="none" stroke="var(--cc-teal)" strokeWidth="1" opacity="0.4" />

            <text
              x="110" y="124"
              textAnchor="middle"
              fontFamily="var(--cc-font-heading)"
              fontWeight="800"
              fontSize="46"
              fill="var(--cc-silver-light)"
            >
              C
            </text>

            <g className="cc-chip-sheen">
              <path
                d="M 110 30 A 80 80 0 0 1 190 110 L 110 110 Z"
                fill="rgba(255,255,255,0.05)"
              />
            </g>
          </svg>

          <div className="cc-hero-seal">
            <ShieldCheck size={12} />
            <span>Verified Contract</span>
          </div>
        </div>
      </div>
    </div>
  );
}
