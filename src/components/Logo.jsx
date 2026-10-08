import React from "react";

export default function Logo({ compact = false }) {
  return (
    <div className={`brand ${compact ? "brand--compact" : ""}`}>
      <span className="brand-logo-wrap" aria-hidden="true">
        <img
          src="/images/branding/velocoast-mark.png"
          alt=""
          className="brand-logo"
        />
      </span>
      <span className="brand-copy">
        <strong>Velocoast</strong>
        <small>SHADE SOLUTIONS</small>
      </span>
    </div>
  );
}
