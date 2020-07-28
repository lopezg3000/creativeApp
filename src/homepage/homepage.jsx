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
    //Used createRef method instead of ref callback because ref created by createRef
    //method happens before componentDidMount
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

    heroRef = React.createRef();
    sectionRefs = this.sections.reduce((acc, value) => {
        acc[value.number] = React.createRef();
        return acc;
    }, {});


    componentDidMount() {

        // console.log(this.sectionRefs);

        // console.log('hero');
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this)
        );

        // if (this.heroRef.current) {
        Object.values(this.sectionRefs).forEach(value => {
            // console.log(value.current)
            if (value.current) this.observer.observe(value.current)
        },
        );
        // this.observer.observe(this.heroRef.current);
        // console.log(this.heroRef.current);
        // }

    }

    componentWillUnmount() {
        Object.values(this.sectionRefs).forEach(value => {
            if (value.current) this.observer.unobserve(value.current)
        });
        // this.observer.unobserve(this.heroRef.current);
    }

    handleObserver(entries, observer) {
        if (entries[0].isIntersecting) {
            console.log(entries.target)
            this.setState({ isVisible: true });

            Object.values(this.sectionRefs).forEach(value => {
                if (value.current) observer.unobserve(value.current)
            }
            );
            // observer.unobserve(this.heroRef.current);
        }
    }


    render() {

        // console.log(this.sectionRefs[1]);
        // console.log(this.heroRef);
        return (
            <React.Fragment>
                <section
                    className={`hero full-width section ${this.state.isVisible ? 'is-visible' : ''}`}
                    // ref={this.heroRef}
                    ref={this.sectionRefs[1]}
                >
                    <VideoBackground />
                    <HeroCopyBlock />
                </section>
                <section
                    className={`content-slider carousel section ${this.state.isVisible ? 'is-visible' : ''}`}
                    ref={this.sectionRefs[2]}
                >
                    <ContentIntro
                        headline='The Latest Smoothie Goodness'
                        description='Keep tabs on new products, partnerships, and limited-time offers.'
                    />
                    <Slider />
                </section>
                <section className='full-width-promo' ref={this.sectionRefs[3]}>
                    <Promo />
                </section>
                <section className='smoothie-categories stacked' ref={this.sectionRefs[4]}>
                    <ContentIntro
                        eyebrow='Purpose Blends'
                        headline='Blended to Fuel Your Passion'
                        description='Our Smoothies are packed with nutrient-rich fuel for experience-rich lives.'
                    />
                    <SmoothieCategories />
                </section>
                <section className='content-slider partnerships carousel' ref={this.sectionRefs[5]}>
                    <PartnershipsSlider />
                </section>
                <section className='promo-unit left' ref={this.sectionRefs[6]}>
                    <PromoUnit />
                </section>
                <section className='location-block' ref={this.sectionRefs[7]}>
                    <LocationBlock />
                </section>
            </React.Fragment>
        );
    }
}

export default Homepage;