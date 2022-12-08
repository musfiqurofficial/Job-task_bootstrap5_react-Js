import React from 'react';
import HeroSection from './HeroSection';
import HomePost from './HomePost/HomePost';

const Home = () => {
    return (
        <div>
            <div><HeroSection></HeroSection></div>
            <div><HomePost></HomePost></div>
        </div>
    );
};

export default Home;