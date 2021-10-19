import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetailsPage = () => {
    const {serviceId} = useParams();
    const [servicesDetails, setServicesDetails] = useState([]);
    const [singleDetails, setSingleDetails] = useState({});
    useEffect( () => {
        fetch(`/services.json`)
        .then(res => res.json())
        .then(data => setServicesDetails(data))
    }, []);

    useEffect( () => {
       const found = servicesDetails?.find(detail => detail.id === serviceId);
       setSingleDetails(found)
    }, [servicesDetails]);

    console.log(singleDetails);
    
    return (
        <Container className='my-5'>
            <Row xs={1} md={2}>
                <Col>
                   <img 
                   style={{width : '100%'}}
                   src={singleDetails?.image} alt="" />
                </Col>

                <Col>
                    <h2>{singleDetails?.name}</h2>
                    <p>{singleDetails?.description}</p>
                    <Link to='/home'>   
                    <Button variant='dark' size='sm'>Go Back</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default ServiceDetailsPage;