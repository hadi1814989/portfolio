import React from 'react'
import "./satisfied.css"
import { Col, Container, Row, Card } from 'react-bootstrap'
import { RiStarFill } from "react-icons/ri";

const Satisfied = () => {
  return (
   <section id='Satisfied'>
    <Container>
        <Row>
            <Col lg={5}>
            <Card className='setisfied-card'>
      <Card.Body>
        <Card.Title className='setisfied-h2'>Some quick example text to build on the card title and make up the
        bulk of the card's content.</Card.Title>
        <Card.Text>
         SEO ,Seoly
        </Card.Text>
         <div className="setisfied-icon-div">
         <RiStarFill />
         <RiStarFill />
         <RiStarFill />
         <RiStarFill />
         <RiStarFill />
         </div>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={6}>
           <div className="setisfied-right">
           <p>|| &nbsp; &nbsp; Testimonial</p>
           <h2>Satisfied Clients Say</h2>
           </div>
             <Row>
                <Col lg={11}>
                <Card className='setisfied-card  ms-5 mt-5'>
      <Card.Body>
        <Card.Title className='setisfied-h2'>
            Some quick example text to build on the card title and make up the
        bulk of the card's content.</Card.Title>
        <Card.Text>
         SEO ,Seoly
        </Card.Text>
         <div className="setisfied-icon-div">
         <RiStarFill />
         <RiStarFill />
         <RiStarFill />
         <RiStarFill />
         <RiStarFill />
         </div>
      </Card.Body>
    </Card>
                </Col>
             </Row>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Satisfied