import React, { useState } from "react";
import Card from "../components/common/Card.jsx";
import ListPage from "./ListPage.jsx";

export default function PassiveBonusPage() {
  const [rows, setRows] = useState("50");
  return (
    <ListPage
      title="Passive Bonus"
      sub="Passive income generated across your downline network."
      emptyText="No passive bonus records found for the selected range."
      rows={rows}
      setRows={setRows}
      summary={
        <Card className="cc-summary-card" glow="purple">
          <span className="cc-label">My Downline Business</span>
          <span className="cc-mono cc-accent-purple">0 CCHIP</span>
        </Card>
      }
    />
  );
}
