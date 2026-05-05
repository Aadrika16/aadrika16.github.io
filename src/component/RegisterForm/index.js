import './index.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const RegisterForm = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_9dqxsen',
      'template_zmhx5y8',
      form.current,
      'sKXIJKNzq2gkS2Mjd'
    )
    .then(() => {
      alert('Form submitted successfully ✅')
      form.current.reset()
      
    })
    .catch(() => {
      alert('Failed to send ❌')
    })
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="register-form">
      <div className="input-group">
        <label>Name</label>
        <input type="text" name="name" placeholder="Enter Full Name" required />
      </div>

      <div className="input-group">
        <label>Email Address</label>
        <input type="email" name="email" placeholder="Enter Email" required />
      </div>

      <div className="input-group">
        <label>Mobile Number</label>
        <input type="text" name="mobile" placeholder="Enter Mobile Number" required />
      </div>

      <div className="input-group">
        <label>Description</label>
        <textarea name="message" placeholder="Describe Your Requirement" required />
      </div>

      <button className="submit-btn" type="submit">
        REGISTER NOW
      </button>
    </form>
  )
}

export default RegisterForm