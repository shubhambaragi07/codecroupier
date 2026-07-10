import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWallet } from "../context/WalletContext.jsx";
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
import HeroBanner from "./HeroBanner.jsx";

export default function DashboardPage() {
  const navigate = useNavigate();
  const {
    address, bnbBalance, cchipBalance,
    DepositsBonus, directReferralBonus, passiveBonus, totalWithdrawal,
    totalDeposits, activeDeposits, totalBonuses, roiPerSecond,
    poolBonus, todayPoolBonus, rankBonus, currentRank,
    tsdtBalance, referrals, downlineActive,
  } = useWallet();
  const [topDepositsOpen, setTopDepositsOpen] = useState(true);
  const [rankOpen, setRankOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const CONTRACT = "0x8402b160dE808c69ec2a8e0296b160dE808c69ec";
  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="cc-page">
      <SectionTitle>Dashboard</SectionTitle>
      <HeroBanner/>

      <div className="cc-dash-layout">
        {/* Left column: Overview + Deposits, stacked */}
        <div className="cc-dash-left">
          <Card glow="red" className="cc-overview">
            <div className="cc-overview-head">
              <div>
                <div className="cc-overview-name">C-Chip (CCHIP)</div>
                <div className="cc-overview-sub">$CCHIP &middot; Live Price</div>
              </div>
              <div className="cc-overview-price">N/A</div>
            </div>
            {address && (
              <div className="cc-kv-row" style={{marginBottom: 4}}>
                <span className="cc-label">Connected Wallet</span>
                <span className="cc-mono" style={{fontSize:12,color:"var(--cc-cyan)"}}>
                  {address.slice(0,8)}...{address.slice(-6)}
                </span>
              </div>
            )}
            <div className="cc-overview-stats">
              <div>
                <span className="cc-label">Deposits Bonus / month</span>
                <span className="cc-mono cc-accent-green">8%</span>
              </div>
              <div>
                <span className="cc-label">Deposits Duration</span>
                <span className="cc-mono">750 Days</span>
              </div>
            </div>
            <p className="cc-note">
              Deposits only in multiples of 100. Maximum 1,00,000 tokens per
              transaction. Deposits is disabled once earnings reach 2X.
            </p>
            <div className="cc-contract-row">
              <span className="cc-label">Contract</span>
              <span className="cc-mono cc-contract-addr">
                {CONTRACT.slice(0, 26)}...
              </span>
              <button className="cc-icon-btn" aria-label="Copy" onClick={handleCopy}>
                <Copy size={14} />
              </button>
              <button className="cc-icon-btn" aria-label="Explorer"
                onClick={() => window.open(`https://bscscan.com/address/${CONTRACT}`, "_blank")}>
                <ExternalLink size={14} />
              </button>
              {copied && <span style={{fontSize:11,color:"var(--cc-cyan)"}}>Copied!</span>}
            </div>
          </Card>

          <Card className="cc-Deposits-panel">
            <h3 className="cc-card-title">Deposits</h3>
            <div className="cc-kv-row">
              <span>Total Deposits</span>
              <span className="cc-mono">{totalDeposits} PV</span>
            </div>
            <div className="cc-kv-row">
              <span>Total Active Deposits</span>
              <span className="cc-mono">{activeDeposits} PV</span>
            </div>
            <div className="cc-kv-row">
              <span>Total Bonuses</span>
              <span className="cc-mono">{totalBonuses} PV</span>
            </div>
            <div className="cc-kv-row">
              <span>Deposits ROI / Second</span>
              <span className="cc-mono cc-accent-green">{roiPerSecond} PV</span>
            </div>
            <SecondaryButton>Claim ROI</SecondaryButton>
          </Card>
        </div>

        {/* Right column: Balance grid + Reward Bonus  / Level Income / Wallet row */}
        <div className="cc-dash-right">
          <div className="cc-balance-heading-wrap">
            <h2 className="cc-balance-heading">Balance</h2>
          </div>
          <div className="cc-grid-3">
            <MetricCard icon={<Wallet size={18} />} label="Wallet Balance (CCHIP)" value={`${cchipBalance} CCHIP`} accent="silver" />
            <MetricCard icon={<Wallet size={18} />} label="Wallet Balance (BNB)" value={`${bnbBalance} BNB`} accent="silver" />
            <MetricCard icon={<Layers size={18} />} label="Total Deposits Bonus" value={`${DepositsBonus} CCHIP`} accent="cyan" to="/transactions" />
            <MetricCard icon={<UserCircle2 size={18} />} label="Total Direct Referral Bonus" value={`${directReferralBonus} CCHIP`} accent="purple" />
            <MetricCard icon={<Waves size={18} />} label="Passive Bonus" value={`${passiveBonus} CCHIP`} accent="purple" />
            <MetricCard icon={<ArrowDownToLine size={18} />} label="Total Withdrawal" value={`${totalWithdrawal} CCHIP`} accent="pink" to="/transactions" />
          </div>

          <div className="cc-dash-bottom-row">
            <Card className="cc-pool-panel">
              <h3 className="cc-card-title">Reward Bonus </h3>
              <div className="cc-kv-row">
                <span>Total Reward Bonus </span>
                <span className="cc-mono">{poolBonus} CCHIP</span>
              </div>
              <div className="cc-kv-row">
                <span>Today's Reward Bonus </span>
                <span className="cc-mono">{todayPoolBonus} CCHIP</span>
              </div>
              <p className="cc-note">Reward Bonus  is credited daily at 12:00 AM UTC.</p>
            </Card>

            <Card className="cc-rank-panel">
              <h3 className="cc-card-title">Level Income</h3>
              <div className="cc-kv-row">
                <span>Total Level Income</span>
                <span className="cc-mono">{rankBonus} CCHIP</span>
              </div>
              <div className="cc-kv-row">
                <span>Current Rank</span>
                <span className="cc-mono cc-accent-purple">{currentRank}</span>
              </div>
            </Card>

            <Card glow="purple" className="cc-wallet-card">
              <div className="cc-label">TSDT Wallet Balance</div>
              <div className="cc-wallet-balance cc-mono">{tsdtBalance} CCHIP</div>
              <PrimaryButton full onClick={() => navigate("/withdraw")}>
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
{/* 
      <Card className="cc-collapsible">
        <button
          className="cc-collapsible-head"
          onClick={() => setTopDepositsOpen((v) => !v)} 
        >
          <ChevronDown
            size={16}
            style={{
              transform: topDepositsOpen ? "rotate(0deg)" : "rotate(-90deg)",
              transition: "transform .15s ease",
            }}
          />
          Today&apos;s Top 5 Deposits
        </button>
        {topDepositsOpen && (
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
      </Card> */}

      <Card className="cc-referral-bar">
        <span>Referrals</span>
        <ChevronRight size={16} />
        <span className="cc-mono">{referrals}</span>
        <span className="cc-referral-label">Downline Total Active Deposits (CCHIP)</span>
        <ChevronRight size={16} />
        <span className="cc-mono">{downlineActive} CCHIP</span>
      </Card>
{/* 
      <Card className="cc-collapsible">
        <button className="cc-collapsible-head" onClick={() => setRankOpen((v) => !v)}>
          <ChevronDown
            size={16}
            style={{
              transform: rankOpen ? "rotate(0deg)" : "rotate(-90deg)",
              transition: "transform .15s ease",
            }}
          />
          Level Income
        </button>
        {rankOpen && (
          <div className="cc-collapsible-body">
            <EmptyState text="No rank data available yet." />
          </div>
        )}
      </Card> */}
    </div>
  );
}