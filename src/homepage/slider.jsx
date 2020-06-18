import React, { Component } from 'react';
import Slide from './slide';
import ImmuneBuilder from '../assets/img/immuneBuilder.jpg';
import './slider.css';
{/* <sup><i className="far fa-registered"></i></sup> */ }

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

    render() {
        return (
            <div className='slider-container'>
                <div className='slider-items'>
                    <Slide
                        eyebrow='New flavor. Same benefits.'
                        headline={this.immuneBuilderHeadline()}
                        description='Rich in antioxidants, each smoothie is 
                            blended with more than 800% of your daily vitamin C, 
                            plus zinc,iron and calcium to support a healthier 
                            immune system.'
                        src={ImmuneBuilder}
                        text='Show me more'
                    />
                </div>
            </div>
        );
    }
}

export default Slider;