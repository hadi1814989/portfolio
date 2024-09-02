import React from 'react'
import "./contactRow1.css"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ContactRow1 = () => {
  return (
  <>
  <section id='con1'>
  <Container>
  <div className='div' >
  <h2>Contact Me</h2>
    <ul className="link-page">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
  </Container>
  </section>
  </>
  )
}

export default ContactRow1