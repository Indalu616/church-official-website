import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../assets/Images/church-logo.png'
function AppNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow text-white">
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <img src={logo} alt="logo..." style={{width:"80px"} } className="logo-img"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-icon" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="link">Home</Nav.Link>
            <Nav.Link href="#about" className="link">About</Nav.Link>
            <Nav.Link href="#services" className="link">Services</Nav.Link>
            <Nav.Link href="#testimonials" className="link">Testimonials</Nav.Link>
            <Nav.Link href="#gallery" className="link">Gallery</Nav.Link>
            <Nav.Link href="#contacts" className="link">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNav;
