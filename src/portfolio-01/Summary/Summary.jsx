import React from 'react'
import "./summary.css"
import { Col, Container, Row } from 'react-bootstrap'
import personImg from "../../assets/person-icon.png"
import roundImg from "../../assets/round-icon.png"
import calImg from "../../assets/calender-icon.png"
import CountUp from 'react-countup';


const Summary = () => {

  return (
  <section id='summary'>
   <Container>
   <Row>
    <Col lg={4} sm={4} xs={12} className='summary-width'>
    <div className="summary-main-div">
        <div className="summary-left">
            <img className='summary-img' src={personImg} alt="" />
        </div>
        <div className="summary-right">
            {/* <h2 className='number'data-number="258"><span>258+</span></h2> */}
            <h2 className='number'><CountUp end={258} />+</h2>
            <p>Happy Clients</p>
        </div>
    </div>
    </Col>
    <Col lg={4} sm={4} xs={12} >
    <div className="summary-main-div">
        <div className="summary-left">
            <img className='summary-img' src={roundImg} alt="" />
        </div>
        <div className="summary-right">
            {/* <h2 className='number1'data-number="50"><CountUp end={100} /><span></span></h2> */}
            <h2 className='number1'><CountUp end={50} />+</h2>
            <p>Project Complete</p>
        </div>
    </div>
    </Col>
    <Col lg={4} sm={4} xs={12} className='summary-width'>
    <div className="summary-main-div">
        <div className="summary-left">
            <img className='summary-img' src={calImg} alt="" />
        </div>
        <div className="summary-right">
            {/* <h2 className='number2'data-number="10"><span>10+</span></h2> */}
            <h2 className='number2'><CountUp end={10} />+</h2>
            <p>Years of Experience</p>
        </div>
    </div>
    </Col>
   </Row>
   </Container>
  </section>
  )
}

export default Summary