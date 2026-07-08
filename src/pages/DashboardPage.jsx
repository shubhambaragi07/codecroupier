import React, { useState } from "react";
import {
  Wallet,
  Layers,
  UserCircle2,
  Waves,
  ArrowDownToLine,
  Copy,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Trophy,
} from "lucide-react";
import Card from "../components/common/Card.jsx";
import MetricCard from "../components/common/MetricCard.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import EmptyState from "../components/common/EmptyState.jsx";
import { PrimaryButton, SecondaryButton } from "../components/common/Buttons.jsx";

export default function DashboardPage() {
  const [topFarmingOpen, setTopFarmingOpen] = useState(true);
  const [rankOpen, setRankOpen] = useState(false);

  return (
    <div className="cc-page">
      <SectionTitle>Dashboard</SectionTitle>

      <div className="cc-dash-layout">
        {/* Left column: Overview + Farming, stacked */}
        <div className="cc-dash-left">
          <Card glow="red" className="cc-overview">
            <div className="cc-overview-head">
              <div>
                <div className="cc-overview-name">C-Chip (CCHIP)</div>
                <div className="cc-overview-sub">$CCHIP &middot; Live Price</div>
              </div>
              <div className="cc-overview-price">N/A</div>
            </div>
            <div className="cc-overview-stats">
              <div>
                <span className="cc-label">Farming Bonus / month</span>
                <span className="cc-mono cc-accent-green">8%</span>
              </div>
              <div>
                <span className="cc-label">Farming Duration</span>
                <span className="cc-mono">750 Days</span>
              </div>
            </div>
            <p className="cc-note">
              Farming only in multiples of 100. Maximum 1,00,000 tokens per
              transaction. Farming is disabled once earnings reach 2X.
            </p>
            <div className="cc-contract-row">
              <span className="cc-label">Contract</span>
              <span className="cc-mono cc-contract-addr">
                0x8402b160dE808c69ec2a8e0296...
              </span>
              <button className="cc-icon-btn" aria-label="Copy contract address">
                <Copy size={14} />
              </button>
              <button className="cc-icon-btn" aria-label="View on explorer">
                <ExternalLink size={14} />
              </button>
            </div>
          </Card>

          <Card className="cc-farming-panel">
            <h3 className="cc-card-title">Farming</h3>
            <div className="cc-kv-row">
              <span>Total Farming</span>
              <span className="cc-mono">0.0000 PV</span>
            </div>
            <div className="cc-kv-row">
              <span>Total Active Farming</span>
              <span className="cc-mono">0.0000 PV</span>
            </div>
            <div className="cc-kv-row">
              <span>Total Bonuses</span>
              <span className="cc-mono">0 PV</span>
            </div>
            <div className="cc-kv-row">
              <span>Farming ROI / Second</span>
              <span className="cc-mono cc-accent-green">0.00000000 PV</span>
            </div>
            <SecondaryButton>Claim ROI</SecondaryButton>
          </Card>
        </div>

        {/* Right column: Balance grid + Pool Bonus / Rank Bonus / Wallet row */}
        <div className="cc-dash-right">
          <div className="cc-balance-heading-wrap">
            <h2 className="cc-balance-heading">Balance</h2>
          </div>
          <div className="cc-grid-3">
            <MetricCard icon={<Wallet size={18} />} label="Wallet Balance (CCHIP)" value="0 CCHIP" accent="silver" />
            <MetricCard icon={<Wallet size={18} />} label="Wallet Balance (BNB)" value="0 BNB" accent="silver" />
            <MetricCard icon={<Layers size={18} />} label="Total Farming Bonus" value="0 CCHIP" accent="cyan" />
            <MetricCard icon={<UserCircle2 size={18} />} label="Total Direct Referral Bonus" value="0 CCHIP" accent="purple" />
            <MetricCard icon={<Waves size={18} />} label="Passive Bonus" value="0 CCHIP" accent="purple" />
            <MetricCard icon={<ArrowDownToLine size={18} />} label="Total Withdrawal" value="0 CCHIP" accent="pink" />
          </div>

          <div className="cc-dash-bottom-row">
            <Card className="cc-pool-panel">
              <h3 className="cc-card-title">Pool Bonus</h3>
              <div className="cc-kv-row">
                <span>Total Pool Bonus</span>
                <span className="cc-mono">0 CCHIP</span>
              </div>
              <div className="cc-kv-row">
                <span>Today's Pool Bonus</span>
                <span className="cc-mono">0.00 CCHIP</span>
              </div>
              <p className="cc-note">Pool Bonus is credited daily at 12:00 AM UTC.</p>
            </Card>

            <Card className="cc-rank-panel">
              <h3 className="cc-card-title">Rank Bonus</h3>
              <div className="cc-kv-row">
                <span>Total Rank Bonus</span>
                <span className="cc-mono">0 CCHIP</span>
              </div>
              <div className="cc-kv-row">
                <span>Current Rank</span>
                <span className="cc-mono cc-accent-purple">No Rank</span>
              </div>
            </Card>

            <Card glow="purple" className="cc-wallet-card">
              <div className="cc-label">TSDT Wallet Balance</div>
              <div className="cc-wallet-balance cc-mono">0.0000 CCHIP</div>
              <PrimaryButton full>
                <ArrowDownToLine size={16} /> Withdraw
              </PrimaryButton>
              <p className="cc-note">
                Minimum withdrawal amount is 10 tokens. Deposit and withdrawal
                fees are paid by the user.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <Card className="cc-collapsible">
        <button
          className="cc-collapsible-head"
          onClick={() => setTopFarmingOpen((v) => !v)}
        >
          <ChevronDown
            size={16}
            style={{
              transform: topFarmingOpen ? "rotate(0deg)" : "rotate(-90deg)",
              transition: "transform .15s ease",
            }}
          />
          Today&apos;s Top 5 Farming
        </button>
        {topFarmingOpen && (
          <div className="cc-collapsible-body cc-ticker-row">
            <span>
              Today Rewards: <b className="cc-mono cc-accent-green">16.50 CCHIP</b>
            </span>
            <span>
              Previous Carry Forward Balance:{" "}
              <b className="cc-mono">66.01 CCHIP</b>
            </span>
          </div>
        )}
      </Card>

      <Card className="cc-referral-bar">
        <span>Referrals</span>
        <ChevronRight size={16} />
        <span className="cc-mono">0</span>
        <span className="cc-referral-label">Downline Total Active Farming (CCHIP)</span>
        <ChevronRight size={16} />
        <span className="cc-mono">0 CCHIP</span>
      </Card>

      <Card className="cc-collapsible">
        <button className="cc-collapsible-head" onClick={() => setRankOpen((v) => !v)}>
          <ChevronDown
            size={16}
            style={{
              transform: rankOpen ? "rotate(0deg)" : "rotate(-90deg)",
              transition: "transform .15s ease",
            }}
          />
          Rank Bonus
        </button>
        {rankOpen && (
          <div className="cc-collapsible-body">
            <EmptyState text="No rank data available yet." />
          </div>
        )}
      </Card>
    </div>
  );
}