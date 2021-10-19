import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import {Link, useHistory, useLocation} from 'react-router-dom'
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const { signInUsingGoogle, signInWithEmailAndPassword } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
        .catch(error => {
            setError(error.message);
        })
    }

    const handleEmailPasswordSignIn = () => {
        signInWithEmailAndPassword() 
        .then(result => {
            history.push(redirect_uri);
        })
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <Form className='p-4'>
            
        <Row className='justify-content-center mt-5'>
        
            <Col sm={12} md={6} lg={6} className='bg-warning p-4 rounded'>

               <h3 className='text-primary'>Please Sign In</h3>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword hasValidation">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password"/>
                </Form.Group>

                <Form.Check type="checkbox" label="Check me out" />
                <br/>

                <Button onClick={ handleEmailPasswordSignIn } variant='primary' size='sm'>Login</Button>
                <br/>

               <Link to='/register' style={{textDecoration : 'none'}} className='my-2 d-block fw-normal'>New User??</Link> 
                <br/>
                
                <Button
                onClick={handleGoogleSignIn}
                variant='danger'
                size='sm'>
                Google Sign In</Button>
            </Col>
        </Row>
    </Form>
    );
};

export default Login;