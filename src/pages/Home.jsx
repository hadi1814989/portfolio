import React from 'react'
import Header from '../portfolio-01/Header/Header'
import Banner from '../portfolio-01/Banner/Banner';
import Skill from '../portfolio-01/Skills/Skill';
import Service from '../portfolio-01/Service/Service';
import Summary from '../portfolio-01/Summary/Summary';
import Satisfied from '../portfolio-01/Satisfied/Satisfied';
import Footer from '../portfolio-01/Footer/Footer';



const Home = () => {
 
  return (
  <>
    {/* <Header></Header> */}
      <Banner></Banner>
       <Skill></Skill>
      <Service></Service> 
      <Summary></Summary>
      <Satisfied></Satisfied>
      {/* <Footer></Footer> */}
  </>
  )
}

export default Home