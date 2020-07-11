import React from 'react';
import Button from './button';
import './promoUnit.css';


const PromoUnit = () => {
    return (
        <div className='promo-container'>
            <div className='max-wrapper'>
                <div className='promo-info-column'>
                    <h3 className='headline'>Precautions regarding Coronavirus</h3>
                    <p className='description'>
                        During this time, we are taking additional precautions to ensure
                        our guests and team members stay healthy and safe with the recent
                        outbreak of Coronavirus (COVID-19).
                    </p>
                    <Button text='Learn More' />
                </div>
            </div>
        </div>
    );
}

export default PromoUnit;