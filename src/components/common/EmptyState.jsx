import React from "react";

export default function EmptyState({ text }) {
  return (
    <div className="cc-empty">
      <div className="cc-empty-dot" />
      {text}
    </div>
  );
}
