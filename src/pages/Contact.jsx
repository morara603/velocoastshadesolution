import React, { useEffect, useState } from "react";
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, ImagePlus } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Contact() {
  const [params] = useSearchParams();
  const [form, setForm] = useState({name:"", location:"", service:"", message:""});
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const slug=params.get("service");
    const labels={"canopy-tents":"Canopy tent","camping-tents":"Camping tent","shade-sails":"Shade sail","cantilever-parasols":"Cantilever parasol","gazebos":"Gazebo","tent-repair":"Tent repair"};
    if(slug && labels[slug]) setForm(f=>({...f,service:labels[slug]}));
  }, [params]);
  function submit(e){
    e.preventDefault();
    const text=encodeURIComponent(`Hello Velocoast Shade Solution.\n\nName: ${form.name}\nLocation: ${form.location}\nService: ${form.service}\nProject details: ${form.message}`);
    window.open(`https://wa.me/254748930757?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }
  return (
    <>
      <SEO title="Contact & Get a Quote" description="Contact Velocoast Shade Solution in Kilifi for tent fabrication, tent repair, shade sails, parasols and gazebo projects across Kenya." path="/contact" image="/images/awning.webp" />
      <section className="page-hero"><div className="container narrow"><span className="eyebrow">GET A QUOTE</span><h1>Tell us what you need.</h1><p>Give us a few details about the project. For repairs, photos on WhatsApp can help us understand the problem faster.</p></div></section>
      <section className="section"><div className="container contact-grid"><div className="contact-info"><span className="eyebrow">CONTACT VELOCOAST</span><h2>Let's discuss your project.</h2><a className="contact-card" href="tel:+254748930757"><span><Phone/></span><div><small>CALL</small><strong>0748 930 757</strong><p>Speak directly with Velocoast.</p></div></a><a className="contact-card" href="https://wa.me/254748930757" target="_blank" rel="noreferrer"><span><MessageCircle/></span><div><small>WHATSAPP</small><strong>0748 930 757</strong><p>Send requirements and project photos.</p></div></a><div className="contact-card"><span><MapPin/></span><div><small>BASE</small><strong>Kilifi, Kenya</strong><p>Mobile service available across Kenya.</p></div></div><div className="contact-tip"><ImagePlus size={20}/><div><strong>Have photos?</strong><p>Start the WhatsApp conversation, then attach your site, tent or repair photos there.</p></div></div></div>
        <form className="quote-form" onSubmit={submit}><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="e.g. John Mwangi" /></label><label>Your location<input required value={form.location} onChange={e=>setForm({...form,location:e.target.value})} placeholder="Town / county" /></label><label>Service needed<select required value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option value="">Select a service</option><option>Canopy tent</option><option>Camping tent</option><option>Shade sail</option><option>Cantilever parasol</option><option>Gazebo</option><option>Tent repair</option><option>Other / custom</option></select></label><label>Tell us about the project<textarea required rows="6" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Size, purpose, repair problem, quantity, preferred date, etc." /></label><button className="btn btn-primary btn-full" type="submit"><Send size={18}/> Send via WhatsApp</button>{sent&&<p className="form-success"><CheckCircle2 size={17}/> WhatsApp should now be open with your enquiry.</p>}<small className="form-note">Your form does not store data on this website; it prepares a WhatsApp enquiry for you to review and send.</small></form>
      </div></section>
      <section className="section section-soft"><div className="container centered"><span className="eyebrow">QUICK CONTACT</span><h2>Prefer WhatsApp?</h2><p className="centered-copy">Send your requirements, measurements and photos directly.</p><WhatsAppButton>Open WhatsApp</WhatsAppButton></div></section>
    </>
  );
}
