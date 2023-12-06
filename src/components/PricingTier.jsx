"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function PricingTier() {
  const [type, setType] = useState("one-time");

  const subscriptionCards = (
    <>
      <p className="subscription-description">
        All subscription plans include hosting, maintenance, and updates. We can
        also provide domain management, email, and SSL services.
      </p>

      <div className="cards">
        <div className="card card-1">
          <Image src="/img/rocket.png" alt="Basic" width={100} height={100} />
          <h3>Basic</h3>
          <p className="description">
            Simple website with little/no interactive elements.
          </p>
          <p className="use-case">
            Perfect for small businesses or portfolios.
          </p>
          <p className="page-count">1-5 pages</p>

          <h4 className="pricing">Starting at $100 per month</h4>
          <p className="note">
            *Minimum 6 month commitment. 10% discount for 12 month commitment.
          </p>
        </div>
        <div className="card card-2">
          <Image
            src="/img/settings.png"
            alt="Standard"
            width={100}
            height={100}
          />
          <h3>Standard</h3>
          <p className="description">Website with interactive elements.</p>
          <p className="use-case">
            Perfect for larger businesses or more complex websites.
          </p>
          <p className="page-count">5-10 pages</p>
          <h4 className="pricing">Starting at $150 per month</h4>
          <p className="note">
            *Minimum 6 month commitment. 10% discount for 12 month commitment.
          </p>
        </div>
        <div className="card card-3">
          <Image src="/img/crown.png" alt="Premium" width={100} height={100} />
          <h3>Premium</h3>
          <p className="description">
            Fully custom application. For the most customized and interactive
            websites.
          </p>
          <p className="use-case">
            Perfect for e-commerce, or custom applications.
          </p>
          <p className="page-count">10+ pages</p>
          <h4 className="pricing">Starting at $250 per month</h4>
          <p className="note">
            *Minimum 12 month commitment. 10% discount for 24 month commitment.
          </p>
        </div>
      </div>
    </>
  );

  const oneTimeCards = (
    <>
      <p className="one-time-description">
        Just want the website? One time plans may be the right choice for you.
      </p>
      <div className="cards">
        <div className="card card-1">
          <Image src="/img/rocket.png" alt="Basic" width={100} height={100} />
          <h3>Basic</h3>
          <p className="description">
            Simple website with little/no interactive elements.
          </p>
          <p className="use-case">
            Perfect for small businesses or portfolios.
          </p>
          <p className="page-count">1-5 pages</p>

          <h4 className="pricing">Starting at $500</h4>
        </div>
        <div className="card card-2">
          <Image
            src="/img/settings.png"
            alt="Standard"
            width={100}
            height={100}
          />
          <h3>Standard</h3>
          <p className="description">Website with interactive elements.</p>
          <p className="use-case">
            Perfect for larger businesses or more complex websites.
          </p>
          <p className="page-count">5-10 pages</p>
          <h4 className="pricing">Starting at $1000</h4>
        </div>
        <div className="card card-3">
          <Image src="/img/crown.png" alt="Premium" width={100} height={100} />

          <h3>Premium</h3>
          <p className="description">
            Fully custom application. For the most customized and interactive
            websites.
          </p>
          <p className="use-case">
            Perfect for e-commerce, or custom applications.
          </p>
          <p className="page-count">10+ pages</p>
          <h4 className="pricing">Starting at $2000</h4>
        </div>
      </div>
    </>
  );

  return (
    <div className="pricing-tiers">
      <h2>Pricing Tiers</h2>
      <div className="pricing-controls">
        <button
          className={"btn btn-primary" + (type === "one-time" ? " active" : "")}
          onClick={() => {
            setType("one-time");
          }}
        >
          One-time
        </button>

        <button
          className={
            "btn btn-primary" + (type === "subscription" ? " active" : "")
          }
          onClick={() => {
            setType("subscription");
          }}
        >
          Subscription
        </button>
      </div>
      {type === "one-time" ? oneTimeCards : subscriptionCards}
    </div>
  );
}
