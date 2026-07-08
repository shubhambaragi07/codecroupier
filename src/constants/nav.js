import {
  LayoutDashboard,
  Layers,
  UserCircle2,
  Waves,
  Users2,
  Receipt,
} from "lucide-react";

export const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "farming", label: "Farming", icon: Layers },
  { key: "direct", label: "Direct Earned", icon: UserCircle2 },
  { key: "passive", label: "Passive Bonus", icon: Waves },
  { key: "teams", label: "Teams", icon: Users2 },
  { key: "transactions", label: "Transactions", icon: Receipt },
];

export const TX_TABS = [
  "Farming Bonus",
  "Direct Bonus",
  "Pool Bonus",
  "Rank Pool Bonus",
  "Passive Bonus",
  "Withdrawal",
];
