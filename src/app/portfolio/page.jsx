import React from "react";
import "./portfolio.css";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
        <h2 className="portfolio-header">Portfolio</h2>

        <div className="portfolio-content">
          <div className="portfolio-item">
            <h3>
              <a href="/">Our website</a>
            </h3>
            <Image
              src="/img/portfolio/home.png"
              alt="Home"
              width={1200}
              height={0}
            />
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              blandit, lacus nec fermentum aliquet, diam nibh gravida arcu, eget
              porta quam lorem ac metus. Donec eget semper velit. Suspendisse
              potenti. Sed euismod, lorem ac aliquam blandit, urna sapien
              tincidunt odio, non ullamcorper elit nunc ut leo.
            </p>
          </div>
          <div className="portfolio-item">
            <h3>
              <a href="https://bdctexas.com">BDCTexas.com</a>
            </h3>
            <Image
              src="/img/portfolio/bdctexas.png"
              alt="BDC Texas"
              width={1200}
              height={0}
            />
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              blandit, lacus nec fermentum aliquet, diam nibh gravida arcu, eget
              porta quam lorem ac metus. Donec eget semper velit. Suspendisse
              potenti. Sed euismod, lorem ac aliquam blandit, urna sapien
              tincidunt odio, non ullamcorper elit nunc ut leo.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
