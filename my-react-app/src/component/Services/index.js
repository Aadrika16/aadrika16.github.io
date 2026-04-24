import Header from '../Header'
import './index.css'

const Services = () => {
  const servicesList = [
    {
      title: 'Strategy&Branding',
      description:["Brand Strategy & Positioning" , "Visual Identity & Graphic Design" , "Market Research & Personal Development" , "Competitive Analysis"],
      icon: '📈',
    },
    {
      title: 'Web Development',
      description:
        ['Build responsive and professional websites tailored to your business needs', ],
      icon: '💻',
    },
    {
      title: 'Brand Strategy',
      description:
        ['Create a strong and memorable brand identity to stand out in the market.', ],
      icon: '🎯',
    },
    {
      title: 'Content Marketing',
      description:
        ['Engage your audience with quality content creation and storytelling.', ],
      icon: '✍️',
    },
    {
      title: 'Social Media Management',
      description:
        ['Manage and grow your social media accounts with consistent branding.', ],
      icon: '📱',
    },
    {
      title: 'Email Marketing',
      description:
        ['Reach your customers effectively with targeted email campaigns.', ],
      icon: '📧',
    },
  ]

  return (
    <div>
        <Header />
        <div className="services-page">
        <section className="services-hero">
            <h1>Every Service.<br /> One team <br /> Zero Silos</h1>
            <p>
                We provide innovative marketing solutions to help your business grow
                online.
            </p>
        </section>

        <section className="services-container">
            {servicesList.map((service, index) => (
            <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h2>{service.title}</h2>
                <ul>
                    {service.description.map((each)=>(
                        <li>{each}</li>
                    ))}
                </ul>
                
            </div>
            ))}
        </section>
        </div> 
    </div>
  )
}

export default Services
