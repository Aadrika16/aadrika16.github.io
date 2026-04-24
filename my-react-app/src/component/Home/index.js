import Header from "../Header"

import './index.css'

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://res.cloudinary.com/doyaebals/image/upload/v1777033797/GTAPEX_FLYER_j4pvja.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="" class="d-block w-100" alt="..."/>
                </div>
              </div>
            </div>
            <p className="hero-tag">360° Digital Marketing Agency</p>
          <h1>
            Full Throttle <br />
            <span>For Brands</span> <br />
            That Don’t Settle
          </h1>

          <p className="hero-description">
            We engineer your marketing like a race-spec machine — precision strategy,
            creative campaigns, and measurable performance.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Work With Us</button>
            <button className="secondary-btn">Explore Services</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="section-title">
          <p>What We Do</p>
          <h2>Every Service. One Team.</h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Brand Strategy</h3>
            <p>Identity design, positioning, and research.</p>
          </div>

          <div className="service-card">
            <h3>Performance Marketing</h3>
            <p>SEO, Google Ads, and conversion optimization.</p>
          </div>

          <div className="service-card">
            <h3>Social Media</h3>
            <p>Paid campaigns, engagement, and content creation.</p>
          </div>

          <div className="service-card">
            <h3>Website Development</h3>
            <p>Fast, responsive, and modern digital experiences.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready To Grow Your Brand?</h2>
        <button className="primary-btn">Let's Talk</button>
      </section>
    </div>
  )
}

export default Home