import React, { useState } from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, X, Maximize2 } from "lucide-react";

const projects = [
  ["/images/awning.webp", "Outdoor shade", "Custom shade installation"],
  ["/images/shade-sails.webp", "Shade sails", "Contemporary shade structures"],
  ["/images/shade-sail-installation.webp", "Shade sails", "Outdoor shade installation"],
  ["/images/cantilever.webp", "Cantilever parasol", "Freestanding outdoor shade"],
  ["/images/gazebo.webp", "Gazebos", "Garden and hospitality shade"],
  ["/images/canopy.webp", "Canopy tents", "Portable canopy structure"],
  ["/images/camping.webp", "Camping tents", "Outdoor shelter"],
  ["/images/repair.webp", "Tent repair", "Repair / restoration example"],
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <SEO title="Tent, Shade & Canvas Projects" description="View Velocoast Shade Solution project photographs including shade sails, parasols, gazebos, tents and repair work." path="/portfolio" image="/images/shade-sail-installation.webp" />
      <section className="page-hero"><div className="container narrow"><span className="eyebrow">OUR WORK</span><h1>Real examples. Practical solutions.</h1><p>Explore photographs showing the types of tents, shades, parasols, gazebos and repair work represented by Velocoast Shade Solution.</p></div></section>
      <section className="section"><div className="container"><div className="gallery-grid">{projects.map(([src,cat,title],i)=><button className="gallery-card" key={src} onClick={()=>setSelected(projects[i])} aria-label={`Open ${title}`}><img src={src} alt={`${title} by Velocoast Shade Solution`} loading={i<3?"eager":"lazy"}/><span><small>{cat}</small><strong>{title}</strong></span><Maximize2 size={18}/></button>)}</div></div></section>
      {selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project photo viewer" onClick={()=>setSelected(null)}><button className="lightbox-close" onClick={()=>setSelected(null)} aria-label="Close"><X/></button><img src={selected[0]} alt={selected[2]} onClick={e=>e.stopPropagation()}/><div className="lightbox-caption"><small>{selected[1]}</small><strong>{selected[2]}</strong></div></div>}
      <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">START YOUR PROJECT</span><h2>Have something similar in mind?</h2><p>Send us the details and photographs of your space. We can discuss the next step.</p></div><Link to="/contact" className="btn btn-light">Request a Quote <ArrowRight size={18}/></Link></div></section>
    </>
  );
}
