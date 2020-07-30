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

/* improvements: 
    1. Need to fade in each smoothie category separately
    2. Need to figure out a way to reference refs without using array index i.e. using id
*/

class Homepage extends Component {

    sections = [
        { number: 1 },
        { number: 2 },
        { number: 3 },
        { number: 4 },
        { number: 5 },
        { number: 6 },
        { number: 7 }
    ]

    /*  Used createRef method instead of ref callback because ref created by createRef
        method happens before componentDidMount
    */
    sectionRefs = this.sections.reduce((acc, value) => {
        acc[value.number] = React.createRef();
        return acc;
    }, {});


    componentDidMount() {
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this)
        );

        Object.values(this.sectionRefs).forEach(value => {
            this.observer.observe(value.current);
        });

    }

    componentWillUnmount() {
        Object.values(this.sectionRefs).forEach(value => {
            this.observer.unobserve(value.current);
        });
    }

    handleObserver(entries, observer) {
        if (entries[0].isIntersecting) {
            console.log(entries[0].target);
            //Need to use react, feel like I am referencing dom too much
            entries[0].target.className += ' is-visible';
            observer.unobserve(entries[0].target);
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
                <section
                    className='full-width-promo section'
                    ref={this.sectionRefs[3]}
                >
                    <Promo />
                </section>
                <section
                    className='smoothie-categories stacked section'
                    ref={this.sectionRefs[4]}
                >
                    <ContentIntro
                        eyebrow='Purpose Blends'
                        headline='Blended to Fuel Your Passion'
                        description='Our Smoothies are packed with nutrient-rich fuel for experience-rich lives.'
                    />
                    <SmoothieCategories />
                </section>
                <section
                    className='content-slider partnerships carousel section'
                    ref={this.sectionRefs[5]}
                >
                    <PartnershipsSlider />
                </section>
                <section
                    className='promo-unit left section'
                    ref={this.sectionRefs[6]}
                >
                    <PromoUnit />
                </section>
                <section
                    className='location-block section'
                    ref={this.sectionRefs[7]}
                >
                    <LocationBlock />
                </section>
            </React.Fragment>
        );
    }
}

export default Homepage;