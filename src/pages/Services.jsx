import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <SEO title="Tent & Shade Services" description="Explore Velocoast Shade Solution's tent fabrication, tent repair, shade sail, cantilever parasol, gazebo and camping tent services across Kenya." path="/services" />
      <section className="page-hero">
        <div className="container narrow"><span className="eyebrow">OUR SERVICES</span><h1>Fabrication, repair &amp; shade solutions.</h1><p>Custom outdoor structures and repair services designed around the job, the space and the way you need to use it.</p></div>
      </section>
      <section className="section">
        <div className="container">
          <div className="service-grid service-grid--large">{services.map(s => <ServiceCard key={s.slug} service={s} />)}</div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container split-section">
          <div><span className="eyebrow">NOT SURE WHAT YOU NEED?</span><h2>Describe the project. We'll start from there.</h2></div>
          <Link to="/contact" className="btn btn-primary">Talk to Velocoast <ArrowRight size={18}/></Link>
        </div>
      </section>
    </>
  );
}