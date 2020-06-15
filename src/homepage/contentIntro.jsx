import React from 'react';

const ContentIntro = () => {
    return (
        <div className='content-intro'>
            <div className='content-row with-gradient'>
                <div className='content-column'></div>
                <div className='content-column'>
                    <h3 className='headline'>The Latest Smoothie Goodness</h3>
                </div>
                <div className='content-column'></div>
            </div>
            <div className='content-row'>
                <p className='description'>
                    Keep tabs on new products, partnerships, and limited-time offers.
                </p>
            </div>
        </div>
    );
}

export default ContentIntro;