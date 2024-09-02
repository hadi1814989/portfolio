import React from 'react'
import "./header.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imgLogo from "../../assets/api-logo.jpg"
import { Link } from 'react-router-dom';

const Header = () => {
  // let menu_bg = document.querySelector(".menu_bg")
  // window.addEventListener("scroll",()=>{
  //   let scrollToTop = window.scrollY
  //   if(scrollToTop > 1130){
  //     menu_bg.classList.add("new_menu_bg")
  //   }else{
  //     menu_bg.classList.remove("new_menu_bg")
  //   }
  // })
  return (
   
    
    
        <Navbar expand="lg" className="menu_bg">
          <Container>
            <Navbar.Brand href="#"><h3 className='logo'>HIT</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mx-auto my-2 my-lg-0 nav-gap"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                {/* <Nav.Link href="#action1">Home</Nav.Link> */}
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/project">Project</Link>
                {/* <Nav.Link href="#action1">Services</Nav.Link> */}
                <NavDropdown title="Sections" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#summary">Summary</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#Satisfied">
                  Satisfied
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#skill">
                  Skill
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#service">
                  Service
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#footer">
                  Footer
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link href="#action2">Contact</Nav.Link> */}
                <Link className='link' to="/contact">Contact</Link>
              </Nav>
              <Form className="d-flex">
                <Button variant="outline-success nav-btn">Hire me</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    
    
    
   
  )
}

export default Header