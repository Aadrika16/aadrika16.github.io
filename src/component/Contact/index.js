import RegisterForm from "../RegisterForm"
import "./index.css"
import { useHistory } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

const Contact = () => {
  const history = useHistory()

  return (
    <div className="contact-page">
      {/* 🔙 Back Arrow */}
      

      <div className="contact-container">
        <div className="register-card">
          <h2 className="register-title">Contact Us</h2>
            <div className="back-btn" onClick={() => history.push("/")}>
                <FaArrowLeft />
                <span>Back</span>
            </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}

export default Contact