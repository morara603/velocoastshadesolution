import React from "react";
import SEO from "../components/SEO";
import { MapPinned, Wrench, Route } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO title="About Velocoast Shade Solution" description="Learn about Velocoast Shade Solution, a Kilifi-based mobile tent and shade fabrication and repair service available across Kenya." path="/about" />
      <section className="page-hero"><div className="container narrow"><span className="eyebrow">ABOUT VELOCOAST</span><h1>Mobile craftsmanship, wherever the project is.</h1><p>Velocoast Shade Solution is a Kilifi-based service provider focused on tent, shade and canvas fabrication and repair.</p></div></section>
      <section className="section"><div className="container about-grid"><div className="about-story"><span className="eyebrow">THE BUSINESS</span><h2>Built around practical outdoor solutions.</h2><p>Velocoast works with customers who need new tents and shade structures as well as customers who need existing equipment repaired or modified.</p><p>The business is mobile by nature. Kilifi is the base, while projects can be considered anywhere in Kenya depending on the requirements.</p></div><div className="about-points"><div><MapPinned/><h3>Kilifi based</h3><p>Operating from Kilifi, Kenya.</p></div><div><Route/><h3>Kenya-wide</h3><p>Open to projects beyond the home area.</p></div><div><Wrench/><h3>Fabrication & repair</h3><p>New builds, repairs and practical modifications.</p></div></div></div></section>
      <section className="section section-soft"><div className="container"><span className="eyebrow">WHAT MATTERS</span><h2>Clear communication. Practical work.</h2><div className="feature-list feature-list--three"><div><strong>Understand the job</strong><p>We start by understanding the intended use and constraints.</p></div><div><strong>Build or repair</strong><p>The solution is based on the actual condition and requirement.</p></div><div><strong>Keep it useful</strong><p>The finished work should serve the customer, not just look good in a photograph.</p></div></div></div></section>
    </>
  );
}