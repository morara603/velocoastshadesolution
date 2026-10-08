import React from "react";
import SEO from "../components/SEO";
import { MapPinned, Wrench, Route } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO title="About Velocoast Shade Solution" description="Learn about Velocoast Shade Solution, a Kilifi-based mobile tent and shade fabrication and repair service available across Kenya." path="/about" />
      <section className="page-hero"><div className="container narrow"><span className="eyebrow">ABOUT VELOCOAST</span><h1>Custom-built outdoor solutions, made for real conditions.</h1><p>Velocoast Shade Solution specializes in custom-built outdoor structures, heavy-duty canvas fabrication, and reliable maintenance services across Kenya.</p></div></section>
      <section className="section"><div className="container about-grid"><div className="about-story"><span className="eyebrow">THE BUSINESS</span><h2>Built around practical outdoor solutions.</h2><p>From robust car park shades and architectural shade sails to specialized tent manufacturing, truck tarpaulins, and custom covers, we engineer practical solutions designed to withstand real-world weather.</p><p>Combining expert craftsmanship with mobile service delivery, we bring quality, durability, and a precise fit directly to your space—from initial design to final installation.</p></div><div className="about-points"><div><MapPinned/><h3>Kilifi based</h3><p>Operating from Kilifi, Kenya.</p></div><div><Route/><h3>Kenya-wide</h3><p>Open to projects beyond the home area.</p></div><div><Wrench/><h3>Fabrication & repair</h3><p>New builds, repairs and practical modifications.</p></div></div></div></section>
      <section className="section section-soft"><div className="container"><span className="eyebrow">WHAT MATTERS</span><h2>Clear communication. Practical work.</h2><div className="feature-list feature-list--three"><div><strong>Understand the job</strong><p>We start by understanding the intended use and constraints.</p></div><div><strong>Build or repair</strong><p>The solution is based on the actual condition and requirement.</p></div><div><strong>Keep it useful</strong><p>The finished work should serve the customer, not just look good in a photograph.</p></div></div></div></section>
    </>
  );
}