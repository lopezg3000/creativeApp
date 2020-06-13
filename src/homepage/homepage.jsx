import React from 'react';
import VideoBackground from './videoBackground'
import HeroCopyBlock from './heroCopyBlock'

const HomePage = () => {
    return (
        <React.Fragment>
            <section>
                <VideoBackground />
                <HeroCopyBlock />
            </section>
            <h1>Home</h1>
        </React.Fragment>
    );
}

export default HomePage;