import React from 'react';
import VideoBackground from './videoBackground';
import HeroCopyBlock from './heroCopyBlock';
import ContentIntro from './contentIntro';
import Slider from './slider';
import Promo from './promo';
import './heroCopyBlock.css'; //need to move this to heroCopyBlock.jsx to be consistent
import './contentIntro.css';

const HomePage = () => {
    return (
        <React.Fragment>
            <section className='hero full-width'>
                <VideoBackground />
                <HeroCopyBlock />
            </section>
            <section className='content-slider carousel'>
                <ContentIntro />
                <Slider />
            </section>
            <section className='full-width-promo'>
                <Promo />
            </section>
        </React.Fragment>
    );
}

export default HomePage;