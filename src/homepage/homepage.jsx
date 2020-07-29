import React, { Component } from 'react'
import VideoBackground from './videoBackground';
import HeroCopyBlock from './heroCopyBlock';
import ContentIntro from './contentIntro';
import Slider from './slider';
import Promo from './promo';
import SmoothieCategories from './smoothieCategories';
import PartnershipsSlider from './partnershipsSlider';
import PromoUnit from './promoUnit';
import LocationBlock from './locationBlock';
import './homepage.css';
import './heroCopyBlock.css'; //need to move this to heroCopyBlock.jsx to be consistent
import './contentIntro.css';
import './promo.css';
import './smoothieCategories.css';
import { entries } from 'lodash';

//need to add fade in effect on scroll

class Homepage extends Component {
    state = {
        isVisible: false,
    }

    sections = [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
        { number: 6 },
        { number: 7 }
    ]

    //Used createRef method instead of ref callback because ref created by createRef
    //method happens before componentDidMount
    sectionRefs = this.sections.reduce((acc, value) => {
        acc[value.number] = React.createRef();
        return acc;
    }, {});


    componentDidMount() {
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this)
        );

        Object.values(this.sectionRefs).forEach(value => {
            if (value.current) this.observer.observe(value.current);
        });

    }

    componentWillUnmount() {
        Object.values(this.sectionRefs).forEach(value => {
            if (value.current) this.observer.unobserve(value.current);
        });
    }

    handleObserver(entries, observer) {
        if (entries[0].isIntersecting) {
            console.log(entries[0].target);

            // Object.values(this.sectionRefs).forEach(value => {
            // if (this.sectionRefs.current) {
            // console.log(this.sectionRefs.current);
            entries[0].target.className += ' is-visible'; //not the react way, need to learn react way
            observer.unobserve(entries[0].target);
            // }
            // });
        }
    }


    render() {
        return (
            <React.Fragment>
                <section
                    className='hero full-width section'
                    ref={this.sectionRefs[1]}
                >
                    <VideoBackground />
                    <HeroCopyBlock />
                </section>
                <section
                    className='content-slider carousel section'
                    ref={this.sectionRefs[2]}
                >
                    <ContentIntro
                        headline='The Latest Smoothie Goodness'
                        description='Keep tabs on new products, partnerships, and limited-time offers.'
                    />
                    <Slider />
                </section>
                <section className='full-width-promo section' ref={this.sectionRefs[3]}>
                    <Promo />
                </section>
                <section className='smoothie-categories stacked section' ref={this.sectionRefs[4]}>
                    <ContentIntro
                        eyebrow='Purpose Blends'
                        headline='Blended to Fuel Your Passion'
                        description='Our Smoothies are packed with nutrient-rich fuel for experience-rich lives.'
                    />
                    <SmoothieCategories />
                </section>
                <section className='content-slider partnerships carousel section' ref={this.sectionRefs[5]}>
                    <PartnershipsSlider />
                </section>
                <section className='promo-unit left section' ref={this.sectionRefs[6]}>
                    <PromoUnit />
                </section>
                <section className='location-block section' ref={this.sectionRefs[7]}>
                    <LocationBlock />
                </section>
            </React.Fragment>
        );
    }
}

export default Homepage;