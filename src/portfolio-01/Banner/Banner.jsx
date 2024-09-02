import React from 'react'
import "./banner.css"
import { Col, Container, Row } from 'react-bootstrap'
import { IoMdPlay } from "react-icons/io";
import { TfiFacebook } from "react-icons/tfi";
import bannerImg from "../../assets/man-img.png"
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoIosMail } from "react-icons/io";
import { ReactTyped } from "react-typed";
import ScrollToTop from 'react-scroll-up';

const Banner = () => {
   
    
    
  return (
    <section id='banner'>
        <div className="round">
            <div className="o1"></div>
            <div className="o2"></div>
            <div className="o3"></div>
        </div>
        <div className="round">
            <div className="o4"></div>
            <div className="o5"></div>
            <div className="o6"></div>
        </div>
        <div className="round">
            <div className="o7"></div>
            <div className="o8"></div>
            <div className="o9"></div>
        </div>
        <div className="palse">
      <a href="#">  <IoMdPlay /></a>
        </div>
      <div className="man-img">
      <img src={bannerImg} alt="" />
      </div>
       <div className="main-icon1-banner">
       <div className="icon1-banner">
       <IoIosMail />
        </div>
       </div>
       <div className="main-icon2-banner">
       <div className="icon1-banner">
       <FaLinkedinIn />
        </div>
       </div>
       <div className="main-icon3-banner">
       <div className="icon1-banner">
       <TbWorld />
        </div>
       </div>
       <div className="main-icon4-banner">
       <div className="icon1-banner">
        <TfiFacebook />
        </div>
       </div>
       <ScrollToTop showUnder={160}>
  <span> <button className='scroll-btn toparrow'><MdKeyboardArrowUp /></button></span>
</ScrollToTop>
      
        <Container>
            <Row>
                <Col lg="6">
                <div className='reactTyped'>
    <ReactTyped strings={["Hello! Im"]} typeSpeed={40} /> 
    <br />

    <ReactTyped
      strings={[
        "Abdul Hadi",
        "Full-stack",
        " Devoloper",
      ]}
      typeSpeed={40}
      backSpeed={50}
      attr="placeholder"
      loop
    >
      <input type="text"  className='typed-input'/>
    </ReactTyped>
  </div>
                <p>
                    <ul>
                        <li className='full'>Full-stack Devoloper </li>
                    </ul>
                       
                    <ul>
                                Specialist in :
                                <br />
                                <br />
                                <li>Java Script</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                    </ul>
                </p>
                </Col>
            </Row>
        </Container>
      </section>
  )
  }

export default Banner