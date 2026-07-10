import React, { useState } from "react";
import { Wallet, Gift } from "lucide-react";
import SectionTitle from "../components/common/SectionTitle.jsx";
import Card from "../components/common/Card.jsx";
import { PrimaryButton, SecondaryButton } from "../components/common/Buttons.jsx";
import EmptyState from "../components/common/EmptyState.jsx";
import { useWallet } from "../context/WalletContext.jsx";

const WITHDRAW_TABS = [
  { key: "self", label: "Self Withdrawal", icon: Wallet },
  { key: "reward", label: "Reward Withdrawal", icon: Gift },
];

export default function WithdrawPage() {
  // NOTE: assuming WalletContext also exposes `rewardBalance` (the combined
  // farming / referral / pool / rank bonus total). Rename this if your
  // context uses a different key.
  const { cchipBalance, rewardBalance } = useWallet();

  const [activeTab, setActiveTab] = useState("self");
  const [amount, setAmount] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const isReward = activeTab === "reward";
  const balance = isReward ? (rewardBalance ?? 0) : cchipBalance;

  const handleTabChange = (key) => {
    setActiveTab(key);
    setAmount("");
  };

  return (
    <div className="cc-page">
      <SectionTitle>Withdraw</SectionTitle>

      <div className="cc-tx-tabs">
        {WITHDRAW_TABS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            className={`cc-tx-tab ${activeTab === key ? "cc-tx-tab-active" : ""}`}
            onClick={() => handleTabChange(key)}
          >
            <Icon size={14} style={{ marginRight: 6, verticalAlign: "-2px" }} />
            {label}
          </button>
        ))}
      </div>

      <div className="cc-withdraw-layout">
        {/* Left: Withdraw form */}
        <Card glow="red" className="cc-withdraw-form-card">
          <div className="cc-withdraw-balance-row">
            <div className="cc-withdraw-icon">
              {isReward ? <Gift size={28} /> : <Wallet size={28} />}
            </div>
            <div>
              <div className="cc-label">
                {isReward ? "Available Reward Balance" : "Available Balance"}
              </div>
              <div className="cc-withdraw-balance cc-mono">{balance} CCHIP</div>
            </div>
          </div>

          <div className="cc-withdraw-divider" />

          <div className="cc-withdraw-field-wrap">
            <label className="cc-label">Amount</label>
            <div className="cc-withdraw-input-row">
              <input
                className="cc-withdraw-input cc-mono"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
              />
              <button className="cc-withdraw-max" onClick={() => setAmount(balance)}>
                MAX
              </button>
            </div>
          </div>

          <PrimaryButton full onClick={() => {}}>
            {isReward ? "Withdraw Rewards" : "Withdrawal"}
          </PrimaryButton>

          <p className="cc-note">
            {isReward
              ? "Reward withdrawals combine your farming, referral, pool and rank bonuses. Minimum withdrawal is 10 CCHIP. Fees are paid by the user."
              : "Minimum withdrawal is 10 CCHIP. Fees are paid by the user."}
          </p>
        </Card>

        {/* Right: History */}
        <Card className="cc-withdraw-history-card">
          <h3 className="cc-card-title">
            {isReward ? "Reward Withdrawal History" : "Self Withdrawal History"}
          </h3>

          <div className="cc-withdraw-filter-row">
            <input
              className="cc-withdraw-date cc-mono"
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
            <input
              className="cc-withdraw-date cc-mono"
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
            <SecondaryButton onClick={() => {}}>Search</SecondaryButton>
          </div>

          <EmptyState
            text={
              isReward
                ? "No reward withdrawal history found."
                : "No withdrawal history found."
            }
          />

          <div className="cc-withdraw-pagination">
            <SecondaryButton onClick={() => {}}>← Previous</SecondaryButton>
            <SecondaryButton onClick={() => {}}>Next →</SecondaryButton>
          </div>
        </Card>
      </div>
    </div>
  );
}