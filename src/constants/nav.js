import {
  LayoutDashboard,
  Layers,
  UserCircle2,
  Waves,
  Users2,
  Receipt,
} from "lucide-react";

export const NAV_ITEMS = [
  { key: "dashboard",    label: "Dashboard",    icon: LayoutDashboard, path: "/" },
  { key: "farming",      label: "Deposits",      icon: Layers,          path: "/deposits" },
  { key: "direct",       label: "Direct Earned", icon: UserCircle2,     path: "/direct-earned" },
  { key: "passive",      label: "Level Income",  icon: Waves,           path: "/level-income" },
  { key: "teams",        label: "Teams",         icon: Users2,          path: "/teams" },
  { key: "transactions", label: "Transactions",  icon: Receipt,         path: "/transactions" },
];

export const TX_TABS = [
  "Farming Bonus",
  "Direct Bonus",
  "Pool Bonus",
  "Rank Pool Bonus",
  "Passive Bonus",
  "Withdrawal",
];
