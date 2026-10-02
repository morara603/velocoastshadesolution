import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-intro">
            Mobile tent, shade and canvas fabrication and repair services based in Kilifi and available across Kenya.
          </p>
          <WhatsAppButton />
        </div>
        <div>
          <h4>Services</h4>
          <Link to="/services/canopy-tents">Canopy Tents</Link>
          <Link to="/services/camping-tents">Camping Tents</Link>
          <Link to="/services/shade-sails">Shade Sails</Link>
          <Link to="/services/cantilever-parasols">Cantilever Parasols</Link>
          <Link to="/services/gazebos">Gazebos</Link>
          <Link to="/services/tent-repair">Tent Repair</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:+254748930757"><Phone size={16} /> 0748 930 757</a>
          <a href="https://wa.me/254748930757" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
          <span><MapPin size={16} /> Kilifi, Kenya</span>
          <span className="muted">Mobile service across Kenya</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Velocoast Shade Solution. All rights reserved.</span>
        <span>Custom fabrication • Repair • Installation</span>
      </div>
    </footer>
  );
}