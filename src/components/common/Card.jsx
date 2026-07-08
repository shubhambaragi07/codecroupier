import React from "react";

export default function Card({ children, glow = "none", className = "", style = {} }) {
  return (
    <div className={`cc-card cc-glow-${glow} ${className}`} style={style}>
      {children}
    </div>
  );
}
