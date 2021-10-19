import React from 'react';
import Banner from '../../Banner/Banner';
import Services from '../../Services/Services';
import Trainers from '../../Trainers/Trainers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Trainers></Trainers>
        </div>
    );
};

export default Home;