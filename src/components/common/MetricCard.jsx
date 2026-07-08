import React from "react";
import Card from "./Card.jsx";

export default function MetricCard({ icon, label, value, accent = "silver" }) {
  return (
    <Card className="cc-metric">
      <div className={`cc-metric-icon cc-accent-${accent}`}>{icon}</div>
      <div>
        <div className="cc-metric-label">{label}</div>
        <div className="cc-metric-value cc-mono">{value}</div>
      </div>
    </Card>
  );
}
