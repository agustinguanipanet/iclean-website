import React from 'react';
import '../App.css';

import './Foot.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

function Foot() {
    return (
        <div className='grid-foot'>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className='Foot-Name'>
                            <h2>BANKIEES</h2>
                        </div>
                    </Col>
                    <Col>
                        <div className='Foot-Name'>
                            <h3>Our Services</h3>
                            <ul>
                                <li><a href='#'>Home Cleaning</a></li>
                                <li><a href='#'>Laundry Services</a></li>
                                <li><a href='#'>Fumigation Services</a></li>
                                <li><a href='#'>Logistics Services</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className='Foot-Name'>
                            <h3>Company</h3>
                            <ul>
                                <li><a href='#'>About Us</a></li>
                                <li><a href='#'>Bookings</a></li>
                                <li><a href='#'>Blog</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div className='Foot-Name'>
                            <h3>Contact Us</h3>
                            <ul>
                                <li><i class="fa fa-envelope"></i><a href='#'>stinabankiees@gmail.com</a></li>
                                <li><i class="fa fa-phone"></i><a href='#'>08166205200</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='Foot-Social'>
                            <hr></hr>
                            <a href='#'>Twitter</a>
                            <a href='#'>Facebook</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Foot
