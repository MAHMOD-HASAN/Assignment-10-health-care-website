import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import firebaseInitialize from '../../Firebase/ConfigAndInit';
import useAuth from '../../Hooks/useAuth';


firebaseInitialize();
const Login = () => {
    const auth = getAuth();
    const location = useLocation();
    const history = useHistory();
    const redirec_uri = location.state?.from || '/home';

    const { signInUsingGoogle } = useAuth();

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
        setIsLogin(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        if(password.length < 6) {
            setError('password must be atleast 6 catacter')
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('use 2 uppercase');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            history.push(redirec_uri)
            setError('');
        })
       .catch(error => {
           setError(error.message);
       })
    }

    return (
        <Form className='px-3 mb-4'>
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
                <p className='text-danger'>{error}</p>

                <Form.Check onChange={toggleLogin} type="checkbox" label="Already registerd" />

                <Button onClick={handleRegistration} variant='primary' size='sm' className='my-2'>
                   {isLogin ? 'Login' : 'Register'}
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

export default Login;