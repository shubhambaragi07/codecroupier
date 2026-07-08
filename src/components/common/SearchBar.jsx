import React from "react";
import Card from "./Card.jsx";
import { PrimaryButton } from "./Buttons.jsx";

export default function SearchBar({ rows, onRowsChange, onSearch }) {
  return (
    <Card className="cc-searchbar">
      <div className="cc-searchbar-fields">
        <input type="date" className="cc-input" aria-label="Start date" />
        <input type="date" className="cc-input" aria-label="End date" />
        <PrimaryButton onClick={onSearch}>Search</PrimaryButton>
      </div>
      <select
        className="cc-select"
        value={rows}
        onChange={(e) => onRowsChange?.(e.target.value)}
        aria-label="Rows per page"
      >
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
    </Card>
  );
}
