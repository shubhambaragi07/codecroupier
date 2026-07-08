import React from "react";

export default function SectionTitle({ children, sub }) {
  return (
    <div className="cc-section-title">
      <h1>{children}</h1>
      {sub && <p>{sub}</p>}
    </div>
  );
}
