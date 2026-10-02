import React from "react";
import { MessageCircle } from "lucide-react";

const phone = "254748930757";
const message = encodeURIComponent(
  "Hello Velocoast Shade Solution. I found you online and would like to enquire about your tent/shade services."
);

export default function WhatsAppButton({ children = "WhatsApp Us", className = "" }) {
  return (
    <a
      className={`whatsapp-btn ${className}`}
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Velocoast Shade Solution on WhatsApp"
    >
      <MessageCircle size={18} />
      {children}
    </a>
  );
}