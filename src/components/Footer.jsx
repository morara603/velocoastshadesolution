import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";
import { services } from "../data/services";

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
          {services.slice(0, 6).map(service => (
            <Link key={service.slug} to={`/services/${service.slug}`}>{service.title}</Link>
          ))}
          <Link to="/services">View all 10 services →</Link>
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