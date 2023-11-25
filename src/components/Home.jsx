import React from "react";
import Banner from "./Banner";
import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'





export default function Home() {
    return (
        <div>
            <div class="container-fluid">
                <Row className="no-gutter">
                    <Col lg={2} md={0} sm={0} xs={0} className='side-nav d-none d-lg-block'>
                        <div className='side-content'>
                        <ListGroup>
                            <ListGroup.Item className="no-pad"><div className="logo">DS</div></ListGroup.Item>
                            <ListGroup.Item>ABOUT</ListGroup.Item>
                            <ListGroup.Item>SKILLS</ListGroup.Item>
                            <ListGroup.Item>PROJECTS</ListGroup.Item>
                            <ListGroup.Item>CONTACT</ListGroup.Item>
                            <ListGroup.Item>BLOG</ListGroup.Item>
                        </ListGroup>
                        </div>
                    </Col>
                    <Col lg={10} md={12} sm={12}>
                        <div className="main-content">
                        <div className="background">
                        </div>

                        <Banner></Banner>
                        <About></About>
                        <Projects />
                        <Footer></Footer>
                        </div>

                    </Col>

                </Row>
            </div>
        </div>
    )
}