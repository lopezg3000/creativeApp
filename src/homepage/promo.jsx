import React from 'react'

const Promo = () => {
    return (
        <React.Fragment>
            <div className='promo-stripe'>
                <div className='max-wrapper'>
                    <div className='image-column'>
                        <div className='mobile-image'>
                            <img style={{ display: 'none' }} src='https://cdn.smoothieking.com/images/site/companion/phone-new-tilted.png' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='promo-image'>
                <div className='image-wrapper'>
                    <img src='https://cdn.smoothieking.com/images/site/companion/phone-new-tilted.png' />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Promo;