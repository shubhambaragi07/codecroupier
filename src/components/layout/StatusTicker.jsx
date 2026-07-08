import React from "react";

export default function StatusTicker() {
  return (
    <div className="cc-ticker">
      <span className="cc-ticker-item">
        <span className="cc-dot cc-dot-purple" /> NETWORK&nbsp;
        <b>BSC MAINNET</b>
      </span>
      <span className="cc-ticker-sep">/</span>
      <span className="cc-ticker-item">
        <span className="cc-dot cc-dot-cyan" /> $CCHIP&nbsp;<b>N/A</b>
      </span>
      <span className="cc-ticker-sep">/</span>
      <span className="cc-ticker-item">
        CONTRACT&nbsp;<b>0x8402...0296</b>
      </span>
      <span className="cc-ticker-sep">/</span>
      <span className="cc-ticker-item">
        <span className="cc-dot cc-dot-green" /> CONTRACT STATUS&nbsp;
        <b>LIVE</b>
      </span>
    </div>
  );
}
