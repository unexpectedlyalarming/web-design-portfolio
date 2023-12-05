import React from "react";
import "./faq.css";
import Footer from "@/components/Footer";
export default function Faq() {
  return (
    <>
      <div className="container faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            Got a question? We've got answers. If you have any other questions,
            feel free to <a href="/contact">contact us.</a>
          </p>
        </div>
        <div className="faq-content">
          <div className="faq faq-1">
            <h3>How much does a website cost?</h3>
            <p>
              It depends on the scope of the project. We will work with you to
              determine the scope of your project and provide a fair price. You
              can find more information about pricing on our{" "}
              <a href="/pricing">pricing page.</a>
            </p>
          </div>
          <div className="faq faq-2">
            <h3>How long does it take to build a website?</h3>
            <p>
              Like pricing, it depends on the scope of the project. For a simple
              website, it can take as little as a week. For a more complex
              website or interactive app, it can take a few months. We will work
              with you to determine the scope of your project and provide a fair
              timeline.
            </p>
          </div>
          <div className="faq faq-3">
            <h3>Do you offer website maintenance?</h3>
            <p>
              We offer website maintenance for a monthly fee. We will work with
              you to determine the scope of your project and provide a fair
              price. We can also provide one time updates if you prefer.
            </p>
          </div>
          <div className="faq faq-4">
            <h3>Can you help me with my existing website?</h3>
            <p>
              We can help you with your existing website. We can update it, or
              redesign it depending on what your goal is.
            </p>
          </div>
          <div className="faq faq-5">
            <h3>Can you implement our existing design?</h3>
            <p>
              We can implement your existing design. We can also help you design
              your website if you need help with that. Just give us some
              references and we can work something up.
            </p>
          </div>
          <div className="faq faq-6">
            <h3>
              I want something complex like an ecommerce site, can you do that?
            </h3>
            <p>
              We can build an ecommerce site for you. We can also build a custom
              web application if you need something more complex. It will take
              us a little longer than a simple business site, but we can
              implement any custom solution you require.
            </p>
          </div>
          <div className="faq faq-7">
            <h3>Do you offer hosting?</h3>
            <p>
              We offer hosting for a monthly fee. We can also help you set up
              hosting with a third party if you prefer.
            </p>
          </div>
          <div className="faq faq-8">
            <h3>Do you do domain registration/SSL/analytics/etc.</h3>
            <p>
              We can offer extra services depending on your needs. If you want
              to do it all yourself, you can, or if you don't have someone to do
              that, we can take care of it too.
            </p>
          </div>
          <div className="faq faq-9">
            <h3>Do your websites work on mobile?</h3>
            <p>
              All of our websites are responsive and work on all devices. We try
              to practice a mobile first design since that is where most of your
              traffic will come from.
            </p>
          </div>
          <div className="faq faq-10">
            <h3>Can you implement a CMS/blog?</h3>
            <p>
              We can implement an existing CMS technology, or implement a custom
              one if you need.
            </p>
          </div>
          <div className="faq faq-11">
            <h3>Do you do SEO?</h3>
            <p>
              We try our best to keep up with the latest SEO practices, down to
              the design of the website.
            </p>
          </div>
          <div className="faq faq-12">
            <h3>Do you do revisions?</h3>
            <p>
              We try to work with you to get the design right the first time,
              but we understand that sometimes you need to make changes. We
              offer a few revisions depending on the scope of the project. Small
              revisions are to be expected, but full redesigns may not be
              included in the pricing.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
