import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://velocoastshadesolution.vercel.app";
const BUSINESS = {
  name: "Velocoast Shade Solution",
  phone: "+254748930757",
  locality: "Kilifi",
  country: "Kenya",
  url: SITE_URL,
};

export default function SEO({
  title,
  description,
  path = "/",
  type = "website",
  image = "/images/awning.webp",
  service,
}) {
  const fullTitle = title
    ? `${title} | ${BUSINESS.name}`
    : `${BUSINESS.name} | Tents, Shades & Canvas Solutions Across Kenya`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const canonical = new URL(normalized, SITE_URL).href;
  const imageUrl = new URL(image, SITE_URL).href;

  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.name,
    url: SITE_URL,
    telephone: BUSINESS.phone,
    image: imageUrl,
    description: "Kilifi-based mobile tent, shade and canvas fabrication and repair service serving projects across Kenya.",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.locality,
      addressCountry: "KE",
    },
    areaServed: {
      "@type": "Country",
      name: BUSINESS.country,
    },
    knowsAbout: [
      "Tent fabrication",
      "Tent repair",
      "Canopy tents",
      "Camping tents",
      "Shade sails",
      "Cantilever parasols",
      "Gazebos",
      "Canvas fabrication",
    ],
  };

  const graph = [localBusiness, {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    publisher: { "@id": `${SITE_URL}/#business` },
    inLanguage: "en-KE",
  }];

  if (service) {
    graph.push({
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: service.title,
      description: service.description,
      serviceType: service.title,
      areaServed: { "@type": "Country", name: "Kenya" },
      provider: { "@id": `${SITE_URL}/#business` },
      image: imageUrl,
      url: canonical,
    });
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: service.title, item: canonical },
      ],
    });
  }

  return (
    <Helmet>
      <html lang="en-KE" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <link rel="canonical" href={canonical} />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta property="og:locale" content="en_KE" />
      <meta property="og:site_name" content={BUSINESS.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={BUSINESS.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>
    </Helmet>
  );
}
