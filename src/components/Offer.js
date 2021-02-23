import React from 'react';
import '../App.css';

import './Offer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

function Offer() {
    return (
        <div className='grid-offer'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='Img-Offer'>
                            <div className='Card'>
                                <img src='images/nino-maghradze-BUXdQh53eis-unsplash.jpg' width='100%'/>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='Text-1'>
                            <h1>What we Offer?</h1>
                            <p>The fundamental objective of our business is to deliver world-class cleaning and laudry services, while providing our customers with professional and friendly services.</p>
                            <p>
                            In rare events, you are not satisfied with the quality of the service, we will make it right with our Grat Bankiees Guarantee.
                            </p>
                            <a href='#'>Know More</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Offer
