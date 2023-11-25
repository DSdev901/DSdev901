import React from "react";
import Table from 'react-bootstrap/Table';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Kyronlogo from '../svg/portfolio_assets/bot-svgrepo-com.svg';



export default function About() {
    return (




        <div className='about-space container-divider'>


            <Col md={12} sm={12} className='about-content'>

                <Row>
                    <Col sm={12} xs={12} className="about-header">
                        <div>
                            About
                        </div>
                    </Col>
                </Row>

                <p className='about-details'>
                    An enthused polyglot software developer with the bulk of my experience being on the backend.
                    <br></br>
                    I've primarily worked through an employer on large projects for clients such as: Apple, Walmart, and Tesla - to name a few.
                    <br></br>
                    I also enjoy web design / development and learning other technical skills in my "free time".
                </p>

            </Col>
            <Col md={12} sm={12} className='container-divider'>
                <div className='about-content'>

                    <div className="about-header">
                        Skills
                    </div>


                    <Row>
                        <Col xs={12} >
                            <div className='skill-details'>
                                <Table>
                                    <thead> </thead>
                                    <tbody>

                                        <tr><td>SQL | PLSQL</td> <td><img src={require('../svg/portfolio_assets/sql-file-format-symbol-svgrepo-com.svg')} alt='mySvgImage' /></td></tr>
                                        <tr><td>Progress4gl | OpenEdge</td> <td><img src={require('../svg/portfolio_assets/progress-svgrepo-com.svg')} alt='mySvgImage' /></td></tr>
                                        <tr><td>Node JS | Express</td> <td><img src={require('../svg/portfolio_assets/node-js-svgrepo-com.svg')} alt='mySvgImage' /></td></tr>
                                        <tr><td>Javascript (react, jquery, angular)</td><td><img src={Kyronlogo} alt='mySvgImage' /></td></tr>
                                        <tr><td>CSS, SASS, BOOTSTRAP</td> <td><img src={require('../images/css-svgrepo-com.svg')} alt='mySvgImage' /></td></tr>
                                        <tr><td>Kryon | RPA</td> <td> <img src={require('../svg/portfolio_assets/bot-svgrepo-com.svg')} alt='mySvgImage' /></td></tr>
                                        <tr><td>HTML</td> <td><img src={require('../svg/portfolio_assets/html-svgrepo-com.svg')} alt='mySvgImage' /></td></tr>
                                        <tr><td>MONGO DB</td> <td><img src={require('../svg/portfolio_assets/mongodb-svgrepo-com.svg')} alt='mySvgImage' /></td></tr>

                                    </tbody>
                                </Table>
                            </div>

                        </Col>
                    </Row>
                </div>
            </Col>

        </div>


    )
}
