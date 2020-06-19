import React, { Component } from 'react';
import Slide from './slide';
import ImmuneBuilder from '../assets/img/immuneBuilder.jpg';
import CleanBlends from '../assets/img/cleanBlends.jpg';
import FiveDollarFriday from '../assets/img/fiveDollarFriday.jpg';
import './slider.css';

class Slider extends Component {
    state = {}

    immuneBuilderHeadline() {
        return (
            <React.Fragment>
                <span>Immune Builder</span>
                <sup><i className="far fa-registered"></i></sup>
                <span>&nbsp; Veggie Superfood</span>
            </React.Fragment>
        );
    }

    immuneBuilderDescription() {
        return (
            <React.Fragment>
                <span>
                    Rich in antioxidants, each smoothie is
                    blended with more than 800% of your daily vitamin C,
                    plus zinc,iron and calcium to support a healthier
                    immune system.
                </span>
            </React.Fragment>
        );
    }

    cleanBlendsDescription() {
        return (
            <React.Fragment>
                <span>It’s our commitment to blend a more nutritious Smoothie.</span>
                <br />
                <span>From the bottom of the cup up.</span>
            </React.Fragment>
        );
    }

    render() {
        return (
            <div className='slider-container'>
                <div className='slider-items'>
                    <Slide
                        eyebrow='New flavor. Same benefits.'
                        headline={this.immuneBuilderHeadline()}
                        description={this.immuneBuilderDescription()}
                        src={ImmuneBuilder}
                        text='Show me more'
                    />
                    <Slide
                        eyebrow='Our Promise'
                        headline='Clean Blends'
                        description={this.cleanBlendsDescription()}
                        src={CleanBlends}
                        text='Get the Clean Blends Detail'
                    />
                    <Slide
                        eyebrow='Is it Friday?'
                        headline='Get Yours For Just $5'
                        description='Every Friday, any regular 32 oz. Smoothie is just $5.'
                        src={FiveDollarFriday}
                        text='How do you Friday?'
                    />
                </div>
            </div>
        );
    }
}

export default Slider;