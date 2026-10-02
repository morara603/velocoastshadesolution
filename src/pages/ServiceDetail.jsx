import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import WhatsAppButton from "../components/WhatsAppButton";
import { services } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  if (!service) return <div className="section"><div className="container"><h1>Service not found</h1><Link to="/services" className="text-link">Back to services</Link></div></div>;
  return (
    <>
      <SEO title={`${service.title} in Kenya`} description={`${service.description} Serving Kilifi and projects across Kenya.`} path={`/services/${service.slug}`} image={service.image} service={service} />
      <section className="detail-hero"><div className="container detail-grid"><div><span className="eyebrow">VELOCOAST SERVICE</span><h1>{service.title}</h1><p>{service.description}</p><div className="hero-actions"><Link to={`/contact?service=${service.slug}`} className="btn btn-primary">Request a Quote <ArrowRight size={18}/></Link><WhatsAppButton /></div></div><div className="detail-photo"><img src={service.image} alt={`${service.title} from Velocoast Shade Solution`} /><span>VELOCOAST PROJECT / EXAMPLE</span></div></div></section>
      <section className="section"><div className="container detail-content"><div><span className="eyebrow">HOW WE APPROACH IT</span><h2>Built around the actual requirement.</h2><p>Every project is different. We can discuss dimensions, fabric, structure, intended use, location and whether the job is a new fabrication or a repair.</p></div><div className="check-list"><div><CheckCircle2/><span>Discuss your requirements</span></div><div><CheckCircle2/><span>Review measurements and condition</span></div><div><CheckCircle2/><span>Agree on the practical solution</span></div><div><CheckCircle2/><span>Fabricate, repair or install</span></div></div></div></section>
      <section className="section section-soft"><div className="container centered"><span className="eyebrow">READY TO DISCUSS IT?</span><h2>Send the size, location and photos.</h2><p className="section-lead centered-copy">WhatsApp is the fastest way to share your requirements and images with Velocoast.</p><WhatsAppButton>Discuss {service.title}</WhatsAppButton></div></section>
    </>
  );
}
