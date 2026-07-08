import React, { useState } from "react";
import TopNav from "./components/layout/TopNav.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import FarmingPage from "./pages/FarmingPage.jsx";
import DirectEarnedPage from "./pages/DirectEarnedPage.jsx";
import PassiveBonusPage from "./pages/PassiveBonusPage.jsx";
import TeamsPage from "./pages/TeamsPage.jsx";
import TransactionsPage from "./pages/TransactionsPage.jsx";

const PAGES = {
  dashboard: DashboardPage,
  farming: FarmingPage,
  direct: DirectEarnedPage,
  passive: PassiveBonusPage,
  teams: TeamsPage,
  transactions: TransactionsPage,
};

export default function App() {
  const [active, setActive] = useState("dashboard");
  const [walletConnected, setWalletConnected] = useState(false);

  const ActivePage = PAGES[active] ?? DashboardPage;

  return (
    <div className="cc-root">
      <TopNav
        active={active}
        onChange={setActive}
        walletConnected={walletConnected}
        onConnect={() => setWalletConnected((v) => !v)}
      />
      <main className="cc-main">
        <ActivePage />
      </main>
    </div>
  );
}
