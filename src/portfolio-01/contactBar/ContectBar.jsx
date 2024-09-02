import React from 'react'
import "./contectBar.css"
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoDribbble } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

const ContectBar = () => {
  return (
   <>
  <section id='contectBar'>
  <Container>
    <Row>
        <Col lg={4}>
        <div className="contact-sidebar">
            <ul className='contact-sidebar-list-item'>
                <li className='contact-sidebar-single-box'>
                    <h6 className='title-text'>Phone:</h6>
                    <a href="callTo:+880123456789" className='link'>+880123456789</a>
                </li>
                <li className='contact-sidebar-single-box'>
                    <h6 className='title-text'>Email:</h6>
                    <a href="mailTo:hit@gmail.com" className='link'>hit@gmail.com</a>
                </li>
                <li className='contact-sidebar-single-box'>
                    <h6 className='title-text'>Website:</h6>
                    <a href="https://www.example.com" className='link'>www.example.com</a>
                </li>
                <li className='contact-sidebar-single-box'>
                    <h6 className='title-text'>Address:</h6>
                    <a href="https://maps.app.goo.gl/LQBphMjQqE1sC9oJ9" className='link'>Tikatuli, Wari, Dhaka, Bangladesh</a>
                </li>
            </ul>
        </div>
       <div className="sidebar-widget-single-area">
        <h3 className='title'>Follow Me</h3>
        <div className='social-link'>
        <div className="icofont">
        <FaFacebookF  />
        </div>
         <div className="icofont">
         <IoLogoDribbble  />
         </div>
            <div className="icofont">
            <FaLinkedinIn />
            </div>
        </div>
       </div>
        </Col>
        <Col lg={{span: 7 , offset: 1}}>
        <div className="content">
            <span className='section-tag'>Get In Touch</span>
            <h2 className='title'>If you have any porject or need help. Contact me</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting emndustry lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print only five centuries, but also the leap into electronic.</p>
        </div>
        <Row>
            <Col lg={6}>
            <div className="cus-form ">
                <input name='name' type="text" placeholder='Name' />
            </div>
            </Col>
            <Col lg={6}>
            <div className="cus-form ">
                <input name='email' type="email" placeholder='Email' />
            </div>
            </Col>
            <Col lg={6}>
            <div className="cus-form ">
                <input name='phone' type="tel" placeholder='Phone' />
            </div>
            </Col>
            <Col lg={6}>
            <div className="cus-form ">
                <input name='subject' type="text" placeholder='Subject' />
            </div>
            </Col>
            <Col lg={12}>
            <div className="cus-form ">
                <textarea name='message' type="text" placeholder='Comment' rows="10" ></textarea>
            </div>
            </Col>
            <Col lg={4}>
            <div className="cus-form ">
               <Button>Submit Massage</Button>
            </div>
            </Col>

        </Row>
        </Col>
    </Row>
    </Container>
  </section>
   </>
  )
}

export default ContectBar