import React, { useState } from "react";
import ListPage from "./ListPage.jsx";

export default function FarmingPage() {
  const [rows, setRows] = useState("50");
  return (
    <ListPage
      title="C-Chip Deposits Pool"
      sub="Deposit CCHIP and earn daily, credited directly to your wallet."
      emptyText="No farming records found for the selected range."
      rows={rows}
      setRows={setRows}
    />
  );
}
