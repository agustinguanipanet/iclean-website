import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

function WorkItem(props) {
    return (
        <Container>
            <Row>
                <Col lg={2}>
                    <div className='works__item__info'>
                        <h4 className='works__item__number'>
                        {props.number}</h4>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='works__center'>
                        <img src={props.src} alt='Cleaning' className='works__item__img'></img>
                    </div>
                    <div>
                        <h4 className='works__item__title'>
                        {props.title}</h4>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='works__item__info'>
                        <h5 className='works__item__text'>{props.text}</h5>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default WorkItem
