import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Tent, Sun, Umbrella, Wrench, Car, Wind, Truck, Box } from "lucide-react";

const icons = { Tent, Sun, Umbrella, Wrench, Car, Wind, Truck, Box };

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon] || Tent;
  return (
    <article className="service-card">
      <div className="service-card-image">
        <img src={service.image} alt={service.title} loading="lazy" />
        <span className="service-icon"><Icon size={22} /></span>
      </div>
      <div className="service-card-body">
        <span className="eyebrow">VELOCOAST SERVICE</span>
        <h3>{service.title}</h3>
        <p>{service.short}</p>
        <Link to={`/services/${service.slug}`} className="text-link">Explore service <ArrowUpRight size={17} /></Link>
      </div>
    </article>
  );
}
