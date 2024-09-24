import React from 'react'
import "./skill.css"
import { Button, Col, Container, Row , ProgressBar} from 'react-bootstrap'
import CountUp from 'react-countup';




const Skill = () => {
    const now1 = 80;
    const now2 = 87;
    const now3 = 90;
  return (
    <section id='skill'>
        <Container>
            <Row>
                <Col lg={5}>
               <span>|| &nbsp; &nbsp; Special Skills</span> 
                <h2>My Special Skill Field Here.</h2>
                <Button className='cus-btn-skill'>Get Resume</Button>
                </Col>
                <Col lg={6} offset={1}>
                <div className="skill-left-div offset-lg-2">
                    <h3>Bootstrap</h3>
                    <span className='skill-span'>80%</span>
                <ProgressBar now={now1} label={`${now1}%`} visuallyHidden />
                </div>
                <div className="skill-left-div offset-lg-2 mt-5">
                    <h3>React</h3>
                    <span className='skill-span'>87%</span>
                <ProgressBar now={now2} label={`${now2}%`} visuallyHidden />
                </div>
                <div className="skill-left-div offset-lg-2 mt-5">
                    <h3>Java Script</h3>
                    <span className='skill-span'>90%</span>
                <ProgressBar now={now3} label={`${now3}%`} visuallyHidden />
                </div>
                </Col>
            </Row>
        </Container>
    </section>




  )
}

export default Skill