import React from 'react';
import '../App.css';

import './Warranty.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

function Warranty() {
    return (
        <div className='grid-warranty'>
            <Container>
                <Row>
                    <Col>
                        <div className='Img-Warranty'>
                            <div className='circle-card-1'>
                                <div className='circle-card-color'>
                                <img src='images/team.png'/>
                                </div>
                            </div>
                            <div className='Text-Warranty'>
                                <h4>Experienced Staffs</h4>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='Img-Warranty'>
                            <div className='circle-card-2'>
                                <div className='circle-card-color'>
                                <img src='images/badge.png'/>
                                </div>
                                
                            </div>
                            <div className='Text-Warranty'>
                                <h4>Certified Carpet Cleaners</h4>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='Img-Warranty'>
                            <div className='circle-card-3'>
                                <div className='circle-card-color'>
                                <img src='images/wall-clock.png'/>
                                </div>
                                
                            </div>
                            <div className='Text-Warranty'>
                                <h4>Always Turn Up on Time</h4>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div  iv className='Img-Warranty'>
                            <div className='circle-card-4'>
                                <div className='circle-card-color'>
                                <img src='images/spot.png'/>
                                </div>
                                
                            </div>
                            <div className='Text-Warranty'>
                                <h4>We remove most stains</h4>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='Img-Warranty'>
                            <div className='circle-card-5'>
                                <div className='circle-card-color'>
                                <img src='images/guaranteed.png'/>
                                </div>
                            </div>
                            <div className='Text-Warranty'>
                                <h4>100% Satisfaction Guarantee</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Warranty
