import React from "react";

export default function Logo({ compact = false }) {
  return (
    <div className={`brand ${compact ? "brand--compact" : ""}`}>
      <span className="brand-logo-wrap">
        <img src="/images/logo.png" alt="Velocoast Shade Solution" className="brand-logo" />
      </span>
      <span className="brand-copy">
        <strong>Velocoast</strong>
        <small>SHADE SOLUTION</small>
      </span>
    </div>
  );
}
