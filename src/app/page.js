import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="background"></div>

      <div className="container">
        <div className="header">
          <h1>Elevate your brand with affordable and hand-crafted websites.</h1>
          <p className="primary">
            Ready to stand out? We're ready to help with a custom website to fit
            your needs.
          </p>
          <a className="btn btn-primary" href="#philosophy">
            Start here.
          </a>
        </div>

        <div className="philosophy" id="philosophy">
          <h2>Our philosophy</h2>
          <p>
            We believe that a website should be more than just a means to an
            end. It should be a reflection of your brand and a way to connect
            with your audience.
          </p>
        </div>

        <ul className="points">
          <li className="point">
            <h3>
              <Image
                src="/img/lamp.png"
                alt="Lightbulb"
                width={100}
                height={100}
                className="point-icon"
              />
              Intuitive.
            </h3>
            <p>
              We design websites that help reflect your brand and connect with
              your audience.
            </p>
          </li>
          <li className="point">
            <h3>
              <Image
                src="/img/worldwide.png"
                alt="Lightbulb"
                width={100}
                height={100}
                className="point-icon"
              />
              Accessible.
            </h3>
            <p>
              We develop websites that are fast, responsive, and accessible to
              all audiences. A website should be for everyone.
            </p>
          </li>
          <li className="point">
            <h3>
              <Image
                src="/img/puzzle-piece.png"
                alt="Lightbulb"
                width={100}
                height={100}
                className="point-icon"
              />
              Custom.
            </h3>
            <p>
              Our websites are custom-tailored to your needs. No templates here.
            </p>
          </li>
          <li className="point">
            <h3>
              <Image
                src="/img/price-tag.png"
                alt="Lightbulb"
                width={100}
                height={100}
                className="point-icon"
              />
              Value-Oriented.
            </h3>
            <p>
              We try to get you the best value for the quality and work within
              your budget.
            </p>
          </li>
        </ul>
        <div className="process">
          <h2>Our process</h2>
          <p>
            We work with you to create a custom website that fits your needs.
            Here's how we do it:
          </p>
        </div>
        <ul className="process-list">
          <li className="process-item item-1">
            <h3>1. Introduction</h3>
            <p>We learn about your business, your goals, and your audience.</p>
          </li>
          <li className="process-item item-2">
            <h3>2. Discovery</h3>
            <p>
              We look at competitors and other websites to see what works and
              what doesn't.
            </p>
          </li>
          <li className="process-item item-3">
            <h3>3. Design</h3>
            <p>
              We create a design that reflects your brand and connects with your
              audience.
            </p>
          </li>
          <li className="process-item item-4">
            <h3>4. Development</h3>
            <p>
              We build the website using the latest technologies and best
              practices, checking in with you along the way.
            </p>
          </li>
          <li className="process-item item-5">
            <h3>5. Testing</h3>
            <p>
              We test the website to make sure it works on all devices and
              browsers.
            </p>
          </li>
          <li className="process-item item-6">
            <h3>6. Launch</h3>
            <p>
              We launch the website and make sure everything is working
              properly.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
