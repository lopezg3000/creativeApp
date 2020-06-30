import React from 'react'
import Button from './button';
import FitnessBlendsImage from '../assets/homepageImages/fitnessBlendsImage.jpg';
import FitnessBlendsStripe from '../assets/homepageImages/fitnessBlendsStripe.jpg';
import FitnessBlendsShake from '../assets/homepageImages/fitnessBlendsShake.png';

const SmoothieCategories = () => {
    return (
        <div className='categories-container'>
            <div className='categories'>
                <div className='category fitness-blend-red'>
                    <div className='category-card'>
                        <div className='card-image'>
                            <img src={FitnessBlendsImage} />
                        </div>
                        <div className='card-stripe'>
                            <p className='blend-count'>
                                <span className='blend-count-number'>27</span>
                                <span className='blend-count-number'>
                                    Blends <br /> Available
                                </span>
                            </p>
                            <h3 className='card-title'>
                                Fitness <br /> Blends
                            </h3>
                        </div>
                        <div className='card-body'>
                            <p className='description'>
                                Purposefully blended with protein-rich ingredients to help
                                you fuel up or recover faster.
                            </p>
                            <Button text='Explore All Fitness Blends' />
                        </div>
                    </div>
                    <div className='category-feature'>
                        <div className='ingredient-stripe'>
                            <div className='image-wrapper'>
                                <img src={FitnessBlendsStripe} />
                            </div>
                        </div>
                        <div className='featured-item'>
                            <img src={FitnessBlendsShake} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmoothieCategories;