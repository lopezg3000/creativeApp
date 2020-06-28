import React from 'react';
import Button from './button';

const Promo = () => {
    return (
        <React.Fragment>
            <div className='promo-stripe'>
                <div className='max-wrapper'>
                    <div className='image-column'>
                        <div className='mobile-image'>
                            <img
                                style={{ display: 'none' }}
                                src='https://cdn.smoothieking.com/images/site/companion/phone-new-tilted.png'
                            />
                        </div>
                    </div>
                    <div className='body-column'>
                        <h2 className='eyebrow'>Healthy Results</h2>
                        <h3 className='headline'>HARD WORK PAYS OFF</h3>
                        <p className='description'>And so do healthy choices.</p>
                        <Button text='See how' />
                        <div className='download-buttons'>
                            <a href='#' className='apple-button'>
                                <img
                                    src='https://skprod.objects.frb.io/images/static/apple-app-store-icon.svg'
                                    alt='Download on the App Store'
                                />
                            </a>
                            <a href='#' className='google-button'>
                                <img
                                    src='https://skprod.objects.frb.io/images/static/google-play-icon.svg'
                                    alt='Get it on Google Play'
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='promo-image'>
                <div className='image-wrapper'>
                    <img style={{ height: 'auto', width: '40%' }} src='https://cdn.smoothieking.com/images/site/companion/phone-new-tilted.png' />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Promo;