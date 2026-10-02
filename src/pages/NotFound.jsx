import React from "react";
import { Link } from "react-router-dom";
export default function NotFound() {
  return <section className="section"><div className="container centered"><span className="eyebrow">404</span><h1>Page not found.</h1><p>Let's get you back to Velocoast.</p><Link className="btn btn-primary" to="/">Back Home</Link></div></section>;
}