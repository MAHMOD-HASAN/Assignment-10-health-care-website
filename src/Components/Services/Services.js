import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'

// all services are here
// fetch data from fakeData.json(into public folder)

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

// use two function in one component

    return (
        <Container className='mt-5 text-center'>

            <h1 className='text-danger'>Our Services</h1>
            <small>What we Provide</small>

            <Row  xs='1' md='2'>
                {
                  services.map(service => <Service
                     key={service.id}
                     service={service}></Service>)
                }
            </Row>

        </Container>
    );
};

function Service ({service}) {
    const {id, image, name, description} = service;
    return (
     <div>
        <Col className='border border-2 border-primary rounded-2 my-3 bg-light'>
           <img className='hover-effect'
           style={{
               width : '100%'
           }}
           src={image} alt="" />
           <div className='p-3'>
            <h3>{name}</h3>
            <small>{description}</small>
            <br />
            <Link to={`/services/${id}`}><Button variant='primary' size='sm' className='mt-2'>see details <i className="fas fa-arrow-right text-dark"></i></Button>
            </Link>
           </div>
        </Col>
    </div>
    )
}

export default Services;