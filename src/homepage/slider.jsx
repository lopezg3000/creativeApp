import React from 'react'
import Button from './button'
import ImmuneBuilder from '../assets/img/immuneBuilder.jpg';
import './slider.css';


const Slider = () => {
    return (
        <div className='slider-container'>
            <div className='slider-items'>
                <div className='carousel-cell slide'>
                    <div className='slide-info-column'>
                        <div className='max-wrapper'>
                            <h2 className='eyebrow'>New flavor. Same benefits.</h2>
                            <h3 className='headline'>
                                Immune Builder
                                <sup><i className="far fa-registered"></i></sup>
                                Veggie Superfood
                            </h3>
                            <p className='description'>
                                Rich in antioxidants, each smoothie is blended with more
                                than 800% of your daily vitamin C, plus zinc,iron and
                                calcium to support a healthier immune system.
                            </p>
                            <Button text='Show me more' />
                        </div>
                    </div>
                    <div className='slide-image-column'>
                        <div className='image-wrapper'>
                            <img alt='Immune builder image' src={ImmuneBuilder} />
                        </div>
                    </div>
                </div>
            </div>
            <h1>Slider</h1>
        </div>
    );
}

export default Slider;