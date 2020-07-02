import React from 'react';
import VideoBackground from './videoBackground';
import HeroCopyBlock from './heroCopyBlock';
import ContentIntro from './contentIntro';
import Slider from './slider';
import Promo from './promo';
import SmoothieCategories from './smoothieCategories';
import './heroCopyBlock.css'; //need to move this to heroCopyBlock.jsx to be consistent
import './contentIntro.css';
import './promo.css';
import './smoothieCategories.css';

//Hello, I'm Gabriel Lopez. I am a Frontend developer in Houston Texas. I have a serious passion for visual and responsive design as well as creating dynamic, user friendly experiences. In short, crafting great software matters to me. What matters to you?
//learning canvas today.

const HomePage = () => {
    return (
        <React.Fragment>
            <section className='hero full-width'>
                <VideoBackground />
                <HeroCopyBlock />
            </section>
            <section className='content-slider carousel'>
                <ContentIntro
                    headline='The Latest Smoothie Goodness'
                    description='Keep tabs on new products, partnerships, and limited-time offers.'
                />
                <Slider />
            </section>
            <section className='full-width-promo'>
                <Promo />
            </section>
            <section className='smoothie-categories stacked'>
                <ContentIntro
                    eyebrow='Purpose Blends'
                    headline='Blended to Fuel Your Passion'
                    description='Our Smoothies are packed with nutrient-rich fuel for experience-rich lives.'
                />
                <SmoothieCategories />
            </section>
        </React.Fragment>
    );
}

export default HomePage;