import React, { useEffect, useState } from "react";
import { Wallet, Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import StatusTicker from "./StatusTicker.jsx";
import { NAV_ITEMS } from "../../constants/nav.js";

export default function TopNav({ active, onChange, walletConnected, onConnect }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the active tab changes
  useEffect(() => {
    setMenuOpen(false);
  }, [active]);

  // Lock page scroll while the full-screen mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleSelect = (key) => {
    onChange(key);
    setMenuOpen(false);
  };

  const handleConnect = () => {
    onConnect();
    setMenuOpen(false);
  };

  return (
    <>
      <header className="cc-topnav">
        <Logo />

        {/* Desktop inline nav */}
        <nav className="cc-nav cc-nav-desktop">
          {NAV_ITEMS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              className={`cc-nav-item ${active === key ? "cc-nav-item-active" : ""}`}
              onClick={() => handleSelect(key)}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="cc-topnav-actions">
          <button className="cc-btn-primary cc-wallet-btn" onClick={onConnect}>
            <Wallet size={16} />
            <span className="cc-wallet-btn-text">
              {walletConnected ? "0x84...0296" : "Connect Wallet"}
            </span>
          </button>

          {/* Mobile menu toggle */}
          <button
            className="cc-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <StatusTicker />

      {/* Mobile menu: content-sized panel + tap-to-close backdrop */}
      {menuOpen && (
        <>
          <div
            className="cc-mobile-overlay-backdrop"
            onClick={() => setMenuOpen(false)}
          />
          <div className="cc-mobile-overlay">
            <div className="cc-mobile-overlay-head">
              <Logo />
              <button
                className="cc-menu-toggle"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <nav className="cc-nav-mobile-list">
              {NAV_ITEMS.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  className={`cc-nav-mobile-item ${
                    active === key ? "cc-nav-mobile-item-active" : ""
                  }`}
                  onClick={() => handleSelect(key)}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </nav>

            <button
              className="cc-btn-primary cc-mobile-overlay-cta"
              onClick={handleConnect}
            >
              <Wallet size={16} />
              {walletConnected ? "0x84...0296" : "Connect Wallet"}
            </button>
          </div>
        </>
      )}
    </>
  );
}