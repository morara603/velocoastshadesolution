import React from "react";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <div className="mobile-bottom-bar">
      <a href="tel:+254748930757"><Phone size={18} /> Call</a>
      <a href="https://wa.me/254748930757" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
      <Link to="/contact"><FileText size={18} /> Quote</Link>
    </div>
  );
}