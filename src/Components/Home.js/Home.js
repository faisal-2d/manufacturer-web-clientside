import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>            
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <div>Extra 1</div>
            <div>Extra 2</div>
        </div>
    );
};

export default Home;