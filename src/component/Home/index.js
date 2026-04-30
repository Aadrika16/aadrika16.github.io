import Header from "../Header"
import StatsCards from "../StatsCards"
import PitStopProtocol from "../PitStopProtocol"
import LandingPage from "../LandingPage"
import ServicesCards from "../ServicesCards"
import FooterSection from "../FooterSection"
import Pricing from "../Pricing"
import FounderSection from "../FounderSection"
 
import './index.css'


const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <Header />
       <div className="bg-con">
        <div className="hero-overlay">
          <h1 className="hero-title animate-path">
            WELCOME TO <br className="mobile-break" />
            GT APEX
          </h1>
        </div>
      </div>
      {/* Full Width Carousel */}
      <StatsCards />
      <LandingPage />
      <ServicesCards />
      <PitStopProtocol />
      <Pricing />
      <FounderSection />
      {/* Footer Section */} 
      <FooterSection />
      
    </div>
  )
}

export default Home