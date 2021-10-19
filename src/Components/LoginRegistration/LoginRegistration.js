
import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const LoginRegistration = () => {

    const location = useLocation();
    const history = useHistory();
    const redirec_uri = location?.state?.from || '/home';

    const { signInUsingGoogle, signInUsingEmailPassword, registerNewUser } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
  
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
        history.push(redirec_uri);
        })
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    const handleLoginRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.');
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password must contains a Upper case latter')
            return;
        }

        isLogin ? signInUsingEmailPassword(email, password) : registerNewUser(email, password);

    }

    return (
        <Form className='px-3 mb-4' onSubmit={handleLoginRegistration}>
        <Row className='justify-content-center mt-5'>
            <Col lg='5' className='bg-warning py-4 rounded'>
                <h1>Please {isLogin ? 'Login' : 'Register'}</h1>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Check onChange={toggleLogin} type="checkbox" label="Check me out" />

                <Button onClick={signInUsingEmailPassword} variant='primary' size='sm' className='my-2'>
                   { isLogin ? 'Login' : 'Register'}
                </Button>
                <br /> 
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

export default LoginRegistration;