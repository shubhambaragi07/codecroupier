import React, { useState } from "react";
import ListPage from "./ListPage.jsx";

export default function DirectEarnedPage() {
  const [rows, setRows] = useState("50");
  return (
    <ListPage
      title="Direct Earned"
      sub="Bonuses earned from your direct referrals."
      emptyText="No direct earnings found for the selected range."
      rows={rows}
      setRows={setRows}
    />
  );
}
