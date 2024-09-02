import React from 'react'
import "./service.css"
import { Col, Container, Row, Card } from 'react-bootstrap'
import cardServiceImg from "../../assets/card-service-img.png"

const Service = () => {
  return (
   <section id='service'>
    <Container>
    <span>|| &nbsp; &nbsp; Special Skills</span> 
    <h2>Service Provide For My Clients.</h2>
    <Row>
        <Col lg={4} >
        <Card className='service-card-cus'>
      <Card.Body>
        <img src={cardServiceImg} alt="" />
        <Card.Title className='card-service-title'>Front-end Dovolopment</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Java Script</li>
                <li>React</li>
              
            </ul>
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col lg={4} >
        <Card className='service-card-cus'>
      <Card.Body>
        <img src={cardServiceImg} alt="" />
        <Card.Title className='card-service-title'>Front-end Dovolopment</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Java Script</li>
                <li>React</li>
            </ul>
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col lg={4} >
        <Card className='service-card-cus'>
      <Card.Body>
        <img src={cardServiceImg} alt="" />
        <Card.Title className='card-service-title'>Front-end Dovolopment</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Java Script</li>
                <li>React</li>
            </ul>
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
    </Row>
    </Container>
   </section>
  )
}

export default Service