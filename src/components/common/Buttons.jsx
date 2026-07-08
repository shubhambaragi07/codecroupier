import React from "react";

export function PrimaryButton({ children, onClick, full = false, type = "button" }) {
  return (
    <button
      type={type}
      className={`cc-btn-primary ${full ? "cc-btn-full" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, onClick, disabled = false, type = "button" }) {
  return (
    <button
      type={type}
      className="cc-btn-secondary"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
