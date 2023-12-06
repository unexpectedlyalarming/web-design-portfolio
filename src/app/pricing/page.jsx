import PricingTier from "@/components/PricingTier";
import React from "react";
import "./pricing.css";
import Footer from "@/components/Footer";

export default function Pricing() {
  return (
    <>
      <div className="container pricing-container">
        <div className="header">
          <h2>Pricing</h2>
          <p>
            No two projects are the same. We try to stick to a simple pricing
            scheme, but depending on your needs the prices may vary.
          </p>
        </div>

        <PricingTier />
        <h2 className="pricing-notes">Notes</h2>
        <p className="pricing-note">
          Depending on if you have a website or design already, we may be able
          to offer a discount.
        </p>
        <h2 className="pricing-contact">
          Not seeing what you need? <a href="/contact">Contact us</a> and we can
          work something out.
        </h2>
      </div>
      <Footer />
    </>
  );
}
