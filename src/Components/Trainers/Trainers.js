import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import trainer1 from '../../Images/trainer1.jpg';
import trainer2 from '../../Images/trainer2.jpg';
import trainer3 from '../../Images/trainer3.jpg';

// this is trainer section

const Trainers = () => {
    const trainers = [
        {id : 1, image : trainer1, name : 'Nick Mitchell', description : 'Hi! My name is Nick. I am  founder of Fitness Bd gym center. I will try my best to improve your body fitness. It is our duty man...'},

        {id : 2, image : trainer2, name : 'Matt Roberts', description : 'Hello! My name is Matt Roberst. I am Professional Builder. I will try my best to improve your body fitness. It is our duty man...'},

        {id : 3, image : trainer3, name : 'Shaun Stafford', description : 'Hey! Whats up ??Basically I am Yoga trainer. We are Friendly. I will try my best to improve your body fitness. It is our duty man...'},
    ];

// one function in one component
// use diffrent system to show ui

    return (
        <Container className='mt-5'>

            <h1 className='text-primary text-center mb-3'>Out trainers</h1>

            <Row xs= '1' sm='1' md='2' lg='3'>

                {

                  trainers.map(trainer => <Col
                  key={trainer.id}>

                      <Card style={{backgroundColor : 'lightgrey', marginBottom : '20px'}}>
                          <Card.Img src={trainer.image} alt='' />

                          <div className='text-center mt-3 p-3'>
                          <Card.Title style={{color : 'indianred'}}>{trainer.name}</Card.Title>
                          <Card.Text style={{fontSize : '15px'}}>{trainer.description}</Card.Text>
                          </div>

                      </Card>

                  </Col>)

                }

            </Row>

        </Container>
    );
};

export default Trainers;