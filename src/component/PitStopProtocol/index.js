// PitStopProtocol.js
import './index.css'
import { FaClipboardList, FaDraftingCompass, FaRocket, FaChartLine } from 'react-icons/fa'

const steps = [
  {
    id: '01',
    title: 'AUDIT',
    description:
      'We analyze your entire digital presence in detail.Identify strengths, weaknesses, and growth gaps.Understand your audience and competition.Build clarity on current performance.Set a strong foundation for strategy',
    icon: <FaClipboardList />,
  },
  {
    id: '02',
    title: 'BLUEPRINT',
    description:
      'We craft a data-driven marketing strategy.Tailored to your brand and objectives.Focused on high-impact channels and actions.Clear roadmap with measurable goals.Designed for maximum efficiency.',
    icon: <FaDraftingCompass />,
  },
  {
    id: '03',
    title: 'LAUNCH',
    description:
      'We execute campaigns with precision.Activate ads, content, and targeting strategies.Monitor performance in real time.Optimize continuously for best results.Ensuring strong initial momentum.',
    icon: <FaRocket />,
  },
  {
    id: '04',
    title: 'SCALE',
    description:
      'We amplify successful campaigns.Increase reach and conversion efficiency.Continuously refine strategies.Drive consistent growth and ROI.Turn momentum into long-term success',
    icon: <FaChartLine />,
  },
]

const PitStopProtocol = () => {
  return (
    <section className="pitstop-section">
      <div className="pitstop-container">
        <div className="pitstop-header">
          <h2>
            THE PIT STOP <span>PROTOCOL</span>
          </h2>
          <p>
            OUR PROPRIETARY FOUR-STAGE DEPLOYMENT SYSTEM FOR MAXIMUM MARKET
            PENETRATION.
          </p>
        </div>

        <div className="pitstop-grid">
          {steps.map(step => (
            <div className="pit-card" key={step.id}>
              <div className="pit-icon">{step.icon}</div>

              <h3>{step.id}</h3>

              <h4>{step.title}</h4>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PitStopProtocol
