import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Wallet, Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import StatusTicker from "./StatusTicker.jsx";
import { NAV_ITEMS } from "../../constants/nav.js";

const truncate = (addr) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;

export default function TopNav({ walletConnected, walletAddress, onConnect, onDisconnect }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleConnect = () => {
    onConnect();
    setMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    `cc-nav-item${isActive ? " cc-nav-item-active" : ""}`;

  const mobileNavClass = ({ isActive }) =>
    `cc-nav-mobile-item${isActive ? " cc-nav-mobile-item-active" : ""}`;

  return (
    <>
      <header className="cc-topnav">
        <Logo />

        <nav className="cc-nav cc-nav-desktop">
          {NAV_ITEMS.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={navClass}
            >
              <Icon size={16} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="cc-topnav-actions">
          {walletConnected ? (
            <div className="cc-wallet-connected-wrap">
              <span className="cc-wallet-addr cc-mono">{truncate(walletAddress)}</span>
              <button className="cc-btn-danger cc-wallet-btn" onClick={onDisconnect}>
                <Wallet size={16} />
                <span className="cc-wallet-btn-text">Disconnect</span>
              </button>
            </div>
          ) : (
            <button className="cc-btn-primary cc-wallet-btn" onClick={onConnect}>
              <Wallet size={16} />
              <span className="cc-wallet-btn-text">Connect Wallet</span>
            </button>
          )}

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

      {menuOpen && (
        <>
          <div className="cc-mobile-overlay-backdrop" onClick={() => setMenuOpen(false)} />
          <div className="cc-mobile-overlay">
            <div className="cc-mobile-overlay-head">
              <Logo />
              <button className="cc-menu-toggle" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <nav className="cc-nav-mobile-list">
              {NAV_ITEMS.map(({ path, label, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  className={mobileNavClass}
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </NavLink>
              ))}
            </nav>

            <button className="cc-btn-primary cc-mobile-overlay-cta" onClick={handleConnect}>
              <Wallet size={16} />
              {walletConnected ? truncate(walletAddress) : "Connect Wallet"}
            </button>
          </div>
        </>
      )}
    </>
  );
}
