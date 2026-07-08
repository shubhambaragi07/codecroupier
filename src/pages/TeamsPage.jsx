import React from "react";
import Card from "../components/common/Card.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import EmptyState from "../components/common/EmptyState.jsx";

export default function TeamsPage() {
  const levels = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="cc-page">
      <SectionTitle sub="Your downline structure across 15 levels.">Teams</SectionTitle>

      <Card className="cc-summary-card cc-summary-card-centered" glow="red">
        <span className="cc-label">My Downline Business</span>
        <span className="cc-mono cc-total-pv">0.0000 PV</span>
      </Card>

      <div className="cc-level-grid">
        {levels.map((lvl) => (
          <Card key={lvl} className={`cc-level-card ${lvl === 1 ? "cc-level-card-active" : ""}`}>
            <div className="cc-level-label">Level {lvl}</div>
            <div className="cc-mono cc-level-value">
              {lvl === 1 ? "0.0000 PV" : "-- PV"}
            </div>
          </Card>
        ))}
      </div>

      <EmptyState text="No downline data found." />
    </div>
  );
}
