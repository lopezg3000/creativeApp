import React from 'react';
import VideoBackground from './videoBackground';
import HeroCopyBlock from './heroCopyBlock';
import ContentIntro from './contentIntro';
import Slider from './slider';
import Promo from './promo';
import SmoothieCategories from './smoothieCategories';
import PartnershipsSlider from './partnershipsSlider';
import PromoUnit from './promoUnit';
import LocationBlock from './locationBlock';
import './heroCopyBlock.css'; //need to move this to heroCopyBlock.jsx to be consistent
import './contentIntro.css';
import './promo.css';
import './smoothieCategories.css';

//need to add fade in effect on scroll


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
            <section className='content-slider partnerships carousel'>
                <PartnershipsSlider />
            </section>
            <section className='promo-unit left'>
                <PromoUnit />
            </section>
            <section className='location-block'>
                <LocationBlock />
            </section>
        </React.Fragment>
    );
}

export default HomePage;