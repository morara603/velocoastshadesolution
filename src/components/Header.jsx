import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link to="/" onClick={close} aria-label="Velocoast Shade Solution home"><Logo /></Link>
        <button className="menu-toggle" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation" aria-expanded={open} aria-controls="primary-navigation">{open ? <X /> : <Menu />}</button>
        <nav id="primary-navigation" className={`main-nav ${open ? "main-nav--open" : ""}`}>
          <NavLink to="/" onClick={close}>Home</NavLink>
          <NavLink to="/services" onClick={close}>Services</NavLink>
          <NavLink to="/portfolio" onClick={close}>Our Work</NavLink>
          <NavLink to="/about" onClick={close}>About</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
          <a className="nav-call" href="tel:+254748930757"><Phone size={16} /> 0748 930 757</a>
          <WhatsAppButton />
        </nav>
      </div>
    </header>
  );
}
