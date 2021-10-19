import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import builder1 from '../../Images/builder1.jpg';

// this is about section

const About = () => {

    return (
     <Container className='my-5'>

            <h1 className='text-center text-success mb-5'>why choose us ?</h1>

        <Row xs={1} md={2}>

            <Col>

                <img className='img-fluid' src={builder1} alt="" />

            </Col>
                
            <Col>
                
                <h1 className='text-uppercase fw-bold'>We Raise Your Confidence</h1>
                <small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</small>
                <ul>
                    <li>We are here to serve you</li>
                    <li>We are ready to help you to get fitness</li>
                    <li>We are certified and Experienced</li>
                </ul>

                <button className="btn btn-dark text-white">Read More</button>

            </Col>
       </Row>

     </Container>
    );
};

export default About;