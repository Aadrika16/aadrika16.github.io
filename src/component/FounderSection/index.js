
import './index.css'

const founders = [
  {
    id: 1,
    name: 'ALLA JEEVAN CHAITANYA REDDY',
    role: 'MANAGING DIRECTOR & CFO',
    image:
      'https://res.cloudinary.com/doyaebals/image/upload/v1777555987/file_0000000091e07208a86f51608c46390a_1_zcbymc.svg',
  },
  {
    id: 2,
    name: 'YASHO KRISHNA DEV KOLA',
    role: 'FOUNDER AND CEO',
    image:'https://res.cloudinary.com/doyaebals/image/upload/v1777555961/IMG_2261_1_1_rwy07z.svg',
  },
]

const FounderSection = () => {
  return (
    <div className="founder-container">
      <h1 className="founder-heading">OUR FOUNDERS</h1>

      <div className="founder-grid">
        {founders.map(each => (
          <div className="founder-card" key={each.id}>
            <div className="image-wrapper">
              <img
                src={each.image}
                alt={each.name}
                className="founder-image"
              />
            </div>

            <h2 className="founder-name">{each.name}</h2>
            <p className="founder-role">{each.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FounderSection
