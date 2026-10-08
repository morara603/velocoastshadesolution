import React, { useState } from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, X, Maximize2 } from "lucide-react";

const projects = [
  ["/images/client/premium_01_car_park_shades.png", "Car Park Shades", "Single and multi-bay parking shade"],
  ["/images/client/premium_02_tents.png", "Tents", "Exhibition, safari, camping and event tents"],
  ["/images/client/premium_03_shade_sails.png", "Premium Shade Sails", "Architectural outdoor shade"],
  ["/images/client/premium_04_wind_breakers.png", "Wind Breakers", "Outdoor wind protection"],
  ["/images/client/Carport.jpeg", "DIY Carports", "Heavy-duty carport kit"],
  ["/images/client/premium_06_truck_tarpaulin_covers.png", "Truck Tarpaulin Covers", "Cargo protection"],
  ["/images/client/premium_07_flatbed_pickup_covers.png", "Flatbed Pickup Covers", "Custom load protection"],
  ["/images/client/premium_08_parasols.png", "Parasols", "Commercial outdoor umbrellas"],
  ["/images/client/premium_09_box_covers.png", "Box Covers", "Protective custom covers"],
  ["/images/client/premium_10_repair_re_tensioning.png", "Repair & Re-Tensioning", "Restoration and maintenance work"],
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <SEO title="Velocoast Shade & Cover Solutions | Our Work" description="View Velocoast Shade Solution imagery for car park shades, tents, shade sails, wind breakers, carports, truck covers, pickup covers, parasols, box covers and repair work." path="/portfolio" image="/images/client/premium_03_shade_sails.png" />
      <section className="page-hero"><div className="container narrow"><span className="eyebrow">OUR WORK</span><h1>The Velocoast range of solutions.</h1><p>Explore supplied project and service imagery covering the full range of solutions in the Velocoast brief.</p></div></section>
      <section className="section"><div className="container"><div className="gallery-grid">{projects.map(([src,cat,title],i)=><button className="gallery-card" key={src} onClick={()=>setSelected(projects[i])} aria-label={`Open ${title}`}><img src={src} alt={`${title} by Velocoast Shade Solution`} loading={i<3?"eager":"lazy"}/><span><small>{cat}</small><strong>{title}</strong></span><Maximize2 size={18}/></button>)}</div></div></section>
      {selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project photo viewer" onClick={()=>setSelected(null)}><button className="lightbox-close" onClick={()=>setSelected(null)} aria-label="Close"><X/></button><img src={selected[0]} alt={selected[2]} onClick={e=>e.stopPropagation()}/><div className="lightbox-caption"><small>{selected[1]}</small><strong>{selected[2]}</strong></div></div>}
      <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">START YOUR PROJECT</span><h2>Have something similar in mind?</h2><p>Send us the details and photographs of your space. We can discuss the next step.</p></div><Link to="/contact" className="btn btn-light">Request a Quote <ArrowRight size={18}/></Link></div></section>
    </>
  );
}
