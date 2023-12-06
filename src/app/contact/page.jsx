import React from "react";
import "./contact.css";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          Have a question? Want a quote? Send us an email and we'll get back to
          you as soon as possible.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Email us at</h3>
            <p>
              <a href="mailto:">email@email.com</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
