import React, { useState } from "react";
import SectionTitle from "../components/common/SectionTitle.jsx";
import SearchBar from "../components/common/SearchBar.jsx";
import Pagination from "../components/common/Pagination.jsx";
import EmptyState from "../components/common/EmptyState.jsx";
import { TX_TABS } from "../constants/nav.js";

export default function TransactionsPage() {
  const [tab, setTab] = useState(TX_TABS[0]);
  const [rows, setRows] = useState("50");

  return (
    <div className="cc-page">
      <SectionTitle>Transactions</SectionTitle>

      <div className="cc-tx-tabs">
        {TX_TABS.map((t) => (
          <button
            key={t}
            className={`cc-tx-tab ${tab === t ? "cc-tx-tab-active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <SearchBar rows={rows} onRowsChange={setRows} onSearch={() => {}} />
      <div className="cc-list-body">
        <EmptyState text={`No ${tab.toLowerCase()} transactions found for the selected range.`} />
      </div>
      <Pagination />
    </div>
  );
}
