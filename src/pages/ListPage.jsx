import React from "react";
import SectionTitle from "../components/common/SectionTitle.jsx";
import SearchBar from "../components/common/SearchBar.jsx";
import Pagination from "../components/common/Pagination.jsx";
import EmptyState from "../components/common/EmptyState.jsx";

/**
 * Generic "search + list" page template shared by Farming, Direct Earned,
 * Passive Bonus, and Transactions so their layout stays perfectly consistent.
 */
export default function ListPage({ title, sub, emptyText, rows, setRows, summary }) {
  return (
    <div className="cc-page">
      <SectionTitle sub={sub}>{title}</SectionTitle>
      {summary}
      <SearchBar rows={rows} onRowsChange={setRows} onSearch={() => {}} />
      <div className="cc-list-body">
        <EmptyState text={emptyText} />
      </div>
      <Pagination />
    </div>
  );
}
