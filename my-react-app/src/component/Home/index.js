import Header from "../Header"
import Carousel from "../Carousel"
import StatsCards from "../StatsCards"
import PitStopProtocol from "../PitStopProtocol"
import ServerRoomSection from "../ServerRoomSection"
import FooterSection from "../FooterSection"

import './index.css'

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <Header />

      {/* Full Width Carousel */}
      <Carousel />
      <StatsCards /> 
      <PitStopProtocol />
      <ServerRoomSection />
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

      {/* Footer Section */} 
      <FooterSection />
      
    </div>
  )
}

export default Home