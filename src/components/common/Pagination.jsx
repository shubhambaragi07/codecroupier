import React from "react";
import { SecondaryButton } from "./Buttons.jsx";

export default function Pagination({ onPrevious, onNext, hasPrevious = false }) {
  return (
    <div className="cc-pagination">
      <SecondaryButton onClick={onPrevious} disabled={!hasPrevious}>
        &#9664; Previous
      </SecondaryButton>
      <SecondaryButton onClick={onNext}>Next &#9654;</SecondaryButton>
    </div>
  );
}
