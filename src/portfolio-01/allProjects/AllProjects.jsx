import React from 'react'
import "./allProjects.css"
import { Container } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import proimg1 from "../../assets/pro-img-1.png"
import proimg2 from "../../assets/pro-img-2.png"
import proimg3 from "../../assets/pro-img-3.png"
import proimg4 from "../../assets/pro-img-4.png"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

function SampleNextArrow(props) {
    const {  onClick } = props;
    return (
      <div  onMouseMove={onClick} className='next'
      ><MdKeyboardDoubleArrowRight /> </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div  onMouseMove={onClick} className='prev'
      ><MdKeyboardDoubleArrowLeft /></div>
    );
  }

const AllProjects = () => {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
   <>
   <section id='allProjects'>
    <Container>
        <span className='section-tag'>Awesome Portfolio</span>
        <h2 className='section-title'>My Complete Projects</h2>
        <Slider {...settings}>
      <div className='slick'>
        <h3><img className='rotate-img' src={proimg1} alt="" /></h3>
        <h3 className='position-bg'></h3>
        <h3><img className='pro-img' src={proimg1} alt="" /></h3>
        <h3 className='slick-text'>E-commarce Site</h3>
      </div>
      <div className='slick'>
        <h3><img className='rotate-img' src={proimg2} alt="" /></h3>
        <h3 className='position-bg'></h3>
        <h3><img className='pro-img' src={proimg2} alt="" /></h3>
        <h3 className='slick-text'>E-commarce Site</h3>
      </div>
      <div className='slick'>
        <h3><img className='rotate-img' src={proimg3} alt="" /></h3>
        <h3 className='position-bg'></h3>
        <h3><img className='pro-img add' src={proimg3} alt="" /></h3>
        <h3 className='slick-text addd'>E-commarce Site</h3>
      </div>
      <div className='slick'>
        <h3><img className='rotate-img' src={proimg4} alt="" /></h3>
        <h3 className='position-bg'></h3>
        <h3><img className='pro-img' src={proimg4} alt="" /></h3>
        <h3 className='slick-text'>E-commarce Site</h3>
      </div>
     
      
    </Slider>

    </Container>
   </section>
   </>
  )
}

export default AllProjects