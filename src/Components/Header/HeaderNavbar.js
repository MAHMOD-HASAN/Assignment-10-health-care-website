import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../Images/logo.jpg';


// this is top Navbar

const HeaderNavbar = () => {

    const {user, logOut} = useAuth();

    return (
       
            <Navbar collapseOnSelect sticky='top' expand="lg" bg='dark'>
               <Container>
                   <Navbar.Brand>
                       <img 
                       height = '40'
                       width = '60'
                       src={logo} alt="" />
                   </Navbar.Brand>
                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                   <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    
                       <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                       <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                       <Nav.Link as={Link} to='/trainers'>Trainers</Nav.Link>
                       <Nav.Link as={Link} to='/about'>About</Nav.Link>

                       {
                           user.email && <span className='text-light me-3'>Hello {user.displayName}</span>
                       }

                       {
                         user.email ? 
                        <Link to='/home'>
                        <Button onClick={logOut} variant='danger' size='sm'>Log out</Button>
                        </Link>
                         :
                         <Link to='/login'>
                         <Button variant='success' size='sm'>sign in</Button>
                         </Link>
                      
                       }
                       

                   </Navbar.Collapse>
              </Container>
           </Navbar>
    );
};

export default HeaderNavbar;