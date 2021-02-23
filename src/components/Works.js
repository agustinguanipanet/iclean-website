import React from 'react';
import WorkItem from './WorkItem';
import './Works.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

function Works() {
    return (
        <div className='grid-works'>
            <Container>
                <Row className='works'>
                    
                    <div className='works_container'>
                    <h1>How it Works</h1>
                        <div className='works__wrapper'> 
                            <WorkItem
                            src='images/calendar.png'
                            title='Schedule Us'
                            number='1'
                            text="We're available to serve you Weekly, Monthly and Bi-monthly"
                            />
                            <hr></hr>
                            <WorkItem
                            src='images/notification.png'
                            title='Let us In'
                            number='2'
                            text="Provide entry instructions and we'll be there!"
                            />
                            <hr></hr>
                            <WorkItem
                            src='images/cleaning.png'
                            title='We Clean'
                            number='3'
                            text='We rigorously execute on our checklists. Our cleaners are trained to uphold the Bankiees quality.'
                            />
                            <hr></hr>
                            <WorkItem
                            src='images/clean.png'
                            title='Rinse & Repeat'
                            number='4'
                            text='Schedule recurring cleans to keep your place always healthy, clean and fresh.'
                            />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Works;
