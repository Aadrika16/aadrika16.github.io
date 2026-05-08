import "./index.css";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <div className="landing-image-container">

        <div className="landing-image">
          <img
            src="https://res.cloudinary.com/doyaebals/image/upload/v1777292814/WhatsApp_Image_2026-04-27_at_5.54.48_PM_szf6jn.jpg"
            alt="Marketing Banner"
          />
        </div>

        <div className="landing-content">
          <p className="tag">— STRATEGY & VISION</p>

          <h2>
            YOUR BRAND, <br />
            OUR STRATEGY, <br />
            <span>REAL RESULTS.</span>
          </h2>

          <p className="description">
           We don’t just run campaigns — we plan, design, and execute strategies that actually grow your business.
           Every step we take is focused on helping your brand stand out, reach the right audience, and achieve measurable success.
          </p>
          <div className="features">
            <div className="feature">
              <div>
                <h4>MARKET INSIGHT</h4>
                <p>We continuously track your market and audience behavior, so your brand stays ahead of trends and competitors.</p>
              </div>
            </div>

            <div className="feature">
              <div>
                <h4>GROWTH ENGINE</h4>
                <p>We use proven strategies and smart systems to help your business scale faster and more efficiently.</p>
              </div>
            </div>
          </div>

        </div>
        </div>

      
    </section>
  );
};

export default LandingPage;