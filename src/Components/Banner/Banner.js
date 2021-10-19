import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import banner1 from '../../Images/banner1.jpg';
import banner2 from '../../Images/banner2.jpg';
import banner3 from '../../Images/banner3.jpg';

const Banner = () => {
    return (
         <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height ='500'
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1>Keep Your Body <br/>Fit & <span className='text-warning'>Strong</span></h1>
                    <p className='text-warning'>with Fitness BD</p>
                    <Button variant='danger' size='sm' className='btn-sm-block'>More About Health <i className="fas fa-arrow-right"></i></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height = '500'
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1>Exercise Smarter, Fell Better<br/>&<span className='text-warning'> Live Longer</span></h1>
                    <p className='text-warning'>with Fitness BD</p>
                    <Button variant='danger' size='sm' className='btn-sm-block'>More About Health <i className="fas fa-arrow-right"></i></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height = '500'
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1>Do Exercise and Build Muscle<br/> & <span className='text-warning'>Impress Girls</span></h1>
                    <p className='text-warning'>with Fitness BD</p>
                    <Button variant='danger' size='sm' className='btn-sm-block'>More About Health <i className="fas fa-arrow-right"></i></Button>
                    </Carousel.Caption>
                </Carousel.Item>
    </Carousel>
    );
};

export default Banner;