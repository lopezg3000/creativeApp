import React from 'react';
import LocatorBackground from '../assets/homepageImages/locationUnit/locatorBackground.jpg';
import LocatorImage from '../assets/homepageImages/locationUnit/locatorImage.jpg';
import './locationBlock.css';

/*Improvements:
    1. Widths greater than 768px, make the image background have a zoom in and out effect
        when window width increases and decreases. 
    2. Create a separate component that encapsulates eyebrow, headline and description
    3. Validate form inputs and make form into a controlled component using React.
*/

const LocationBlock = () => {
    return (
        <React.Fragment>
            <div className='location-background'>
                <img src={LocatorBackground} />
            </div>
            <div className='location-container'>
                <div className='location-info-column'>
                    <div className='max-wrapper'>
                        <h2 className='eyebrow'>Store Locator</h2>
                        <h3 className='headline'>
                            1,000 WAYS TO RULE THE DAY
                            <sup><i className="far fa-registered"></i></sup>
                        </h3>
                        <p className='description'>
                            To find one of our many stores nationwide, simply enter your zip code.
                        </p>
                        <div className='form-container'>
                            <form>
                                <div className='entry-input entry-input-default'>
                                    <input
                                        name='zip'
                                        placeholder='ZIP Code'
                                        required='required'
                                        size='10'
                                        title='Enter ZIP Code'
                                        type='text'
                                        className='entry-input-text'
                                    />
                                    <button type='submit'>
                                        <i className="fas fa-caret-right icon white"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='location-image-column'>
                    <div className='image-wrapper'>
                        <img src={LocatorImage} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LocationBlock;