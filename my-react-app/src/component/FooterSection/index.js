
import './index.css'

const FooterSection = () => {
  return (
    <div className="footer-wrapper">
      {/* CTA Section */}
      <section className="cta-section">
        <h1 className="cta-title">
          READY TO <span>OUTPACE</span> THE <br />
          COMPETITION?
        </h1>

        <button className="cta-btn">OUR SERVICES</button>
      </section>

      {/* Footer */}
      <footer className="footer-container">
        <div className="footer-grid">
          {/* Left Column */}
          <div className="footer-column">
            <h2 className="footer-logo">GT APEX</h2>
            <p>
              GT Apex is a 360 Digital Marketing Agency delivering end-to-end
              growth solutions.
            </p>
            <p>
              We specialize in performance-driven strategies that generate real
              leads and conversions.
            </p>
            <p>
              Our focus is to help brands scale with creativity, data, and
              innovation.
            </p>
          </div>

          {/* Expertise */}
          <div className="footer-column">
            <h3>Expertise</h3>
            <ul>
              <li>360 Marketing</li>
              <li>Strategy</li>
              <li>Scalability</li>
              <li>Sustainability</li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>Press</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Portfolio</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>© 2024 GT APEX. ENGINEERED FOR PRECISION.</p>

          <div className="footer-links">
            <span>PRIVACY POLICY</span>
            <span>TERMS OF SERVICE</span>
            <span>CONTACT</span>
          </div>

          <div className="social-icons">
            <span>🔗</span>
            <span>🌐</span>
            <span>⚙️</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FooterSection