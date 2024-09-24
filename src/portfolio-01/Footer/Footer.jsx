import React from 'react'
import "./footer.css"
import { Button, Container  } from 'react-bootstrap'
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";


const Footer = () => {
  return (
  <section id='footer'>
    <div className="footer-cercel-left d-xl-block d-none">
    <div className="o1"></div>
    <div className="o2"></div>
    <div className="o3"></div> 
    </div>
    <div className="footer-cercel-right d-xl-block d-none">
    <div className="o4"></div>
    <div className="o5"></div>
    <div className="o6"></div>
    </div>
    <Container>
       <div className="footer">
       <p>|| &nbsp; &nbsp; Get Latest Updates</p>
        <h2>Subscribe For Newsletter</h2>
    <div className="d-xl-flex ">
    <div className="">
     <input type="text" placeholder="demo@example.com" className='footer-form-cus'></input>
     </div>
     <div className="set-btn">
     <Button  className='footer-btn'>Subscribe Now</Button>
     </div>
    </div>
       <div className="footer-middle-main-div d-sm-flex ">
        <div className="footer-middle-1">
       <div className="call-icon"> <IoIosCall /></div>
       <span>0123456789</span>
        </div>
        <div className="footer-middle-2">
          <div className="mail-icon"><IoIosMail /></div>
          <span> demo@example.com</span>
        </div>
        <div className="footer-middle-3">
         <div className="footer-group-icon">
         <FaFacebookF />
         </div>
         <div className="footer-group-icon">
         <TbWorld />
         </div>
        <div className="footer-group-icon">
        <FaLinkedinIn />
        </div>
         
        </div>
       </div>

       <div className="last-footer-div">
          <div className="footer-border"></div>
        <div className="last-footer-left">
          <p>© 2021 <span>HIT</span> Made with <span><FaHeart /></span> by <span>HasThemes</span></p>
        </div>
        <div className="last-footer-right"><h3>hit</h3></div>
       </div>
       </div>
    </Container>
  </section>
  )
}

export default Footer