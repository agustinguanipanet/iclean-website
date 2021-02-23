import React from 'react';
import '../App.css';

import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

function HeroSection() {
    return (
        <div className='grid-container'>
            <Container fluid>
                <Row> 
                    <Col lg={6}> 
                        <div className='Hero-1'>
                            <h5>We make homes, <p style={{color: '#1372b7', display: 'inline'}}>clean</p>, safe, healthy.</h5>
                            <br></br>
                            <h6>Let's do the dirty work, so you don't have to.</h6>
                            <div className='hero-btns'>
                                <Button
                                className='btns'
                                buttonStyle='btn--primary'
                                buttonSize='btn--large'
                                >
                                    Get Started
                                </Button>
                                <Button
                                variant='light'
                                className='btns'
                                buttonStyle='btn--outline'
                                buttonSize='btn--large'
                                >
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='Hero-2'>
                            <Row>
                                <Col lg={6}>
                                    <div className="Img-1">
                                        <div className="Card">
                                            <img src='images/cdc-VRpjDw3WqqI-unsplash.jpg' width='100%'/>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="Img-2">
                                        <div className="Card">
                                            <img src='images/clay-banks-cEzMOp5FtV4-unsplash.jpg' width='100%'/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <div className="Img-3">
                                        <div className="Card">
                                            <img src='images/christine-sandu-lf1yaJcL9OA-unsplash.jpg' width='100%'/>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="Img-4">
                                        <div className="Card">
                                            <img src='images/cdc-E53W_7UBUQw-unsplash.jpg' width='100%'/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>    
    );
}

export default HeroSection;
