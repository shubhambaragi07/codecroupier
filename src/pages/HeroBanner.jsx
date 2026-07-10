// components/dashboard/HeroBanner.jsx
import React from "react";
import heroImg from "../assets/hero.png.png";
import '../styles/herobanner.css';

export default function HeroBanner({ onStartDeposits }) {
  return (
    <div className="cc-hero-border">
      <div className="cc-hero">
        <div className="cc-hero-chip-wrap">
          <div className="cc-hero-img-ring">
            <div className="cc-ring cc-ring-1" />
            <div className="cc-ring cc-ring-2" />
            <div className="cc-ring cc-ring-3" />
            <img
              src={heroImg}
              alt="C-Chip Hero"
              className="cc-hero-img"
              loading="lazy"
              decoding="async"
              fetchpriority="high"
              width="280"
              height="280"
            />
          </div>
        </div>

        <div className="cc-hero-content">
          <span className="cc-hero-eyebrow">🎰 Your On-Chain Dealer is Ready</span>
          <h1 className="cc-hero-headline">
            Stake CCHIP,
            <br />
            Watch Your Chips Grow
          </h1>
          <p className="cc-hero-sub">
            Your personal C-Chip dealer is live on BSC — staking rewards,
            referral bonuses, and level income settle automatically on-chain.
            No house edge. No delays. Just pure yield.
          </p>
        </div>
      </div>
    </div>
  );
}
