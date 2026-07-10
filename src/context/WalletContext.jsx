import React, { createContext, useContext, useState, useCallback } from "react";
import { ethers } from "ethers";

const CCHIP_ADDRESS = "0x8402b160dE808c69ec2a8e0296b160dE808c69ec"; // replace with real contract
const ERC20_ABI = [
  "function balanceOf(address) view returns (uint256)",
  "function decimals() view returns (uint8)",
];

const WalletContext = createContext(null);

export function WalletProvider({ children }) {
  const [address, setAddress]       = useState(null);
  const [bnbBalance, setBnbBalance] = useState("0.0000");
  const [cchipBalance, setCchipBalance] = useState("0.0000");
  const [connecting, setConnecting] = useState(false);
  const [toast, setToast]           = useState(null); // { msg, type: 'success'|'error' }

  // Dummy data — replace with real contract calls
  const [DepositsBonus, setDepositsBonus]         = useState("1,240.5000");
  const [directReferralBonus, setDirectReferralBonus] = useState("320.0000");
  const [passiveBonus, setPassiveBonus]         = useState("85.2500");
  const [totalWithdrawal, setTotalWithdrawal]   = useState("500.0000");
  const [totalDeposits, setTotalDeposits]         = useState("10,000.0000");
  const [activeDeposits, setActiveDeposits]       = useState("8,500.0000");
  const [totalBonuses, setTotalBonuses]         = useState("1,645.7500");
  const [roiPerSecond, setRoiPerSecond]         = useState("0.00003858");
  const [poolBonus, setPoolBonus]               = useState("200.0000");
  const [todayPoolBonus, setTodayPoolBonus]     = useState("12.50");
  const [rankBonus, setRankBonus]               = useState("150.0000");
  const [currentRank, setCurrentRank]           = useState("Silver");
  const [tsdtBalance, setTsdtBalance]           = useState("645.7500");
  const [referrals, setReferrals]               = useState("14");
  const [downlineActive, setDownlineActive]     = useState("42,000.0000");

  const showToast = useCallback((msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  const reset = useCallback(() => {
    setAddress(null);
    setBnbBalance("0.0000");
    setCchipBalance("0.0000");
  }, []);

  const fetchBalances = useCallback(async (account) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const bnb = await provider.getBalance(account);
      setBnbBalance(parseFloat(ethers.formatEther(bnb)).toFixed(4));

      const token = new ethers.Contract(CCHIP_ADDRESS, ERC20_ABI, provider);
      const [raw, decimals] = await Promise.all([
        token.balanceOf(account),
        token.decimals(),
      ]);
      setCchipBalance(parseFloat(ethers.formatUnits(raw, decimals)).toFixed(4));
    } catch {
      // contract may not exist on current network
    }
  }, []);

  const connect = useCallback(async () => {
    if (address) return;
    if (!window.ethereum) {
      showToast("MetaMask not found. Please install it.", "error");
      return;
    }
    setConnecting(true);
    try {
      const [account] = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAddress(account);
      await fetchBalances(account);
      showToast("Wallet connected successfully!", "success");

      window.ethereum.on("accountsChanged", ([acc]) => {
        if (acc) { setAddress(acc); fetchBalances(acc); showToast("Account switched.", "success"); }
        else { reset(); showToast("Wallet disconnected.", "error"); }
      });
      window.ethereum.on("chainChanged", () => fetchBalances(account));
    } catch (err) {
      showToast("Connection rejected.", "error");
    } finally {
      setConnecting(false);
    }
  }, [address, fetchBalances, showToast, reset]);

  const disconnect = useCallback(() => {
    reset();
    showToast("Wallet disconnected.", "error");
  }, [reset, showToast]);

  return (
    <WalletContext.Provider value={{
      address, bnbBalance, cchipBalance, connecting, connect, disconnect, toast,
      DepositsBonus, directReferralBonus, passiveBonus, totalWithdrawal,
      totalDeposits, activeDeposits, totalBonuses, roiPerSecond,
      poolBonus, todayPoolBonus, rankBonus, currentRank,
      tsdtBalance, referrals, downlineActive,
    }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => useContext(WalletContext);
