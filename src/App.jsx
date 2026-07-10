import React from "react";
import { Routes, Route } from "react-router-dom";
import TopNav from "./components/layout/TopNav.jsx";
import { useWallet } from "./context/WalletContext.jsx";
import Toast from "./components/common/Toast.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import FarmingPage from "./pages/FarmingPage.jsx";
import DirectEarnedPage from "./pages/DirectEarnedPage.jsx";
import PassiveBonusPage from "./pages/PassiveBonusPage.jsx";
import TeamsPage from "./pages/TeamsPage.jsx";
import TransactionsPage from "./pages/TransactionsPage.jsx";
import WithdrawPage from "./pages/WithdrawPage.jsx";

export default function App() {
  const { address, connect, disconnect, toast } = useWallet();

  return (
    <div className="cc-root">
      <Toast toast={toast} />
      <TopNav
        walletConnected={!!address}
        walletAddress={address}
        onConnect={connect}
        onDisconnect={disconnect}
      />
      <main className="cc-main">
        <Routes>
          <Route path="/"             element={<DashboardPage />} />
          <Route path="/deposits"     element={<FarmingPage />} />
          <Route path="/direct-earned" element={<DirectEarnedPage />} />
          <Route path="/level-income" element={<PassiveBonusPage />} />
          <Route path="/teams"        element={<TeamsPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/withdraw"     element={<WithdrawPage />} />
        </Routes>
      </main>
    </div>
  );
}
