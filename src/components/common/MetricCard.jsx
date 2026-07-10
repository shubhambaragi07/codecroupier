import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card.jsx";

export default function MetricCard({ icon, label, value, accent = "silver", to }) {
  const navigate = useNavigate();
  return (
    <Card
      className="cc-metric"
      style={to ? { cursor: "pointer" } : undefined}
      onClick={to ? () => navigate(to) : undefined}
    >
      <div className={`cc-metric-icon cc-accent-${accent}`}>{icon}</div>
      <div>
        <div className="cc-metric-label">{label}</div>
        <div className="cc-metric-value cc-mono">{value}</div>
      </div>
    </Card>
  );
}
