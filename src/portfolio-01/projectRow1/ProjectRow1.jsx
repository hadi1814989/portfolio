import React from 'react'
import "./projectRow1.css"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProjectRow1 = () => {
  return (
   <>
   <section id='pro1'>
  <Container>
  <div className='div' >
  <h2>Welcome to  My Projects</h2>
    <ul className="link-page">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/project">Project</Link></li>
    </ul>
  </div>
  </Container>
  </section>
   </>
  )
}

export default ProjectRow1