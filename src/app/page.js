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
          <button className="btn btn-primary">Start here.</button>
        </div>
        <div className="philosophy">
          <h2>Our philosophy</h2>
          <p>
            We believe that a website should be more than just a means to an
            end. It should be a reflection of your brand and a way to connect
            with your audience.
          </p>
        </div>
        {/* Points on how we help */}

        <ul className="points">
          <li className="point">
            <h3>Intuitive.</h3>
            <p>
              We design websites that help reflect your brand and connect with
              your audience.
            </p>
          </li>
          <li className="point">
            <h3>Accessible.</h3>
            <p>
              We develop websites that are fast, responsive, and accessible to
              all audiences. A website should be for everyone.
            </p>
          </li>
          <li className="point">
            <h3>Custom.</h3>
            <p>
              We build websites that are custom-tailored to your needs. No
              templates here.
            </p>
          </li>
          <li className="point">
            <h3>Value-Oriented.</h3>
            <p>
              We try to get you the best value for the quality and work within
              your budget.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
