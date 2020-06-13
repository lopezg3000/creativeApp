import React from 'react';
import VideoBackground from './videoBackground';
import HeroCopyBlock from './heroCopyBlock';
import './heroCopyBlock.css'; //need to move this to heroCopyBlock.jsx to be consistent

const HomePage = () => {
    return (
        <React.Fragment>
            <section className='hero full-width'>
                <VideoBackground />
                <HeroCopyBlock />
            </section>
            <h1>Home</h1>
        </React.Fragment>
    );
}

export default HomePage;