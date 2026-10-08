import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Hammer, MapPin, ShieldCheck, Wrench } from "lucide-react";
import SEO from "../components/SEO";
import WhatsAppButton from "../components/WhatsAppButton";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function Home() {
  return (
    <>
      <SEO title="Car Park Shades, Tents, Covers & Shade Solutions Kenya" description="Velocoast Shade Solution specializes in custom-built outdoor structures, car park shades, tents, premium shade sails, wind breakers, carports, truck tarpaulin covers, pickup covers, parasols, box covers and repair services across Kenya." image="/images/client/premium_01_car_park_shades.png" />
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="eyebrow"><span /> CUSTOM SHADE & CANVAS SOLUTIONS</div>
            <h1>Shade, shelter & canvas solutions <span>made for your space.</span></h1>
            <p className="hero-text">Velocoast Shade Solution designs, fabricates and repairs practical outdoor structures for homes, businesses, events and outdoor spaces across Kenya.</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Get a Quote <ArrowRight size={18} /></Link>
              <a href="https://wa.me/254748930757?text=Hello%20Velocoast%20Shade%20Solution.%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" className="btn btn-outline">WhatsApp Us</a>
            </div>
            <div className="hero-proof"><div><CheckCircle2 size={18} /><span>Custom fabrication</span></div><div><CheckCircle2 size={18} /><span>Repair service</span></div><div><CheckCircle2 size={18} /><span>Kenya-wide service</span></div></div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo"><img src="/images/client/premium_01_car_park_shades.png" alt="Velocoast car park shade solution" fetchPriority="high" /><div className="hero-photo-caption"><span>REAL PROJECT PHOTO</span><strong>Outdoor shade made for the space</strong></div></div>
            <div className="floating-card"><div className="floating-icon"><ShieldCheck size={22} /></div><div><strong>Built around your requirements</strong><small>Fabrication • Repair • Installation</small></div></div>
          </div>
        </div>
      </section>
      <section className="trust-strip"><div className="container trust-grid"><div><MapPin size={20} /><span><strong>Based in Kilifi</strong><small>Serving clients across Kenya</small></span></div><div><Hammer size={20} /><span><strong>Fabrication & Repair</strong><small>New builds and restoration work</small></span></div><div><Wrench size={20} /><span><strong>Mobile Service</strong><small>We can come to your project</small></span></div></div></section>
      <section className="section"><div className="container"><div className="section-heading"><div><div className="eyebrow">WHAT WE DO</div><h2>Outdoor structures and covers, <span>built for real conditions.</span></h2></div><p>From car park shades and premium shade sails to tents, truck covers and repair works, we combine fabrication skills with practical site requirements.</p></div><div className="services-grid">{services.slice(0, 6).map(service => <ServiceCard key={service.slug} service={service} />)}</div><div className="center-action"><Link to="/services" className="text-link">Explore all services <ArrowRight size={17} /></Link></div></div></section>
      <section className="section section-dark"><div className="container split-section"><div><div className="eyebrow">WHY VELOCOAST</div><h2>We build for the way <span>you actually use your space.</span></h2><p className="section-lead">Outdoor structures have to work in the real world. We consider the space, use, weather exposure, materials, installation and maintenance — not just appearance.</p><div className="feature-list"><div className="feature-item"><div className="feature-number">01</div><div><h3>Made to fit</h3><p>Custom dimensions and practical solutions for your available space.</p></div></div><div className="feature-item"><div className="feature-number">02</div><div><h3>Fabrication expertise</h3><p>Canvas, fabric, frames and supporting structures can be combined into complete solutions.</p></div></div><div className="feature-item"><div className="feature-number">03</div><div><h3>Repair when possible</h3><p>Existing tents and shade structures can be assessed, repaired and restored where practical.</p></div></div><div className="feature-item"><div className="feature-number">04</div><div><h3>Mobile service</h3><p>Based in Kilifi, with service available for projects across Kenya.</p></div></div></div></div><div className="dark-panel"><span className="panel-label">FROM IDEA TO INSTALLATION</span>{[['01','Tell us what you need','Share dimensions, photos, location and intended use.'],['02','Plan the solution','Discuss materials, design, scope and practical requirements.'],['03','Fabricate or repair','Work is prepared according to the agreed requirements.'],['04','Complete the project','Installation, handover or delivery depending on the project.']].map((s,i)=><React.Fragment key={s[0]}><div className="process-step"><span>{s[0]}</span><div><strong>{s[1]}</strong><p>{s[2]}</p></div></div>{i<3&&<div className="process-line"/>}</React.Fragment>)}</div></div></section>
      <section className="section"><div className="container"><div className="section-heading"><div><div className="eyebrow">OUR WORK</div><h2>See the kinds of <span>solutions we provide.</span></h2></div><p>The client-supplied Velocoast imagery now forms the visual foundation of the site.</p></div><div className="portfolio-preview"><Link to="/portfolio" className="portfolio-photo large"><img src="/images/client/premium_03_shade_sails.png" alt="Shade sail installation" loading="lazy" /><div><span>PREMIUM SHADE SAILS</span><strong>Outdoor shade installations</strong></div></Link><Link to="/portfolio" className="portfolio-photo"><img src="/images/client/premium_08_parasols.png" alt="Cantilever parasol" loading="lazy" /><div><span>PARASOLS</span><strong>Cantilever shade</strong></div></Link><Link to="/portfolio" className="portfolio-photo"><img src="/images/client/premium_02_tents.png" alt="Camping tent" loading="lazy" /><div><span>TENTS</span><strong>Camping shelter</strong></div></Link></div><div className="center-action"><Link to="/portfolio" className="text-link">View the full gallery <ArrowRight size={17} /></Link></div></div></section>
      <section className="cta-section"><div className="container cta-inner"><div><div className="eyebrow">START YOUR PROJECT</div><h2>Need a tent, shade structure <span>or repair?</span></h2><p>Send your requirements, location and photos if available. We will discuss the practical next step.</p></div><div className="cta-actions"><Link to="/contact" className="btn btn-primary">Request a Quote <ArrowRight size={18} /></Link><a href="tel:+254748930757" className="btn btn-light">Call 0748 930 757</a></div></div></section>
      <WhatsAppButton />
    </>
  );
}
