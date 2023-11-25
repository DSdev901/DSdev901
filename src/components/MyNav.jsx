
import { Link } from 'react-router-dom';
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function MyNav() {


  return (
    <Navbar expand="lg" bg="transparent" fixed="top" >
      <Navbar.Brand as={Link} to='/'> <div className=" change-link">DS </div></Navbar.Brand>
       <div className="red">|</div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" id="navbarText">
        <Nav.Link className = "change-link" as={Link} to='/About'>About</Nav.Link>
        <Nav.Link className = "change-link" as={Link} to='/About'>Contact</Nav.Link>
        <Nav.Link className = "change-link" as={Link} to='/About'>Projects</Nav.Link>
        <Nav.Link className = "change-link" as={Link} to='/About'>Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

}