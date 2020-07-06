import React from 'react';
import Button from './button';

const SmoothieCategory = ({ image, blendNumber, title, stripe, shake, description, blendText, buttonText }) => {
    return (
        <div className='category fitness-blend-red'>
            <div className='category-card'>
                <div className='card-image'>
                    <img src={image} />
                </div>
                <div className='card-stripe'>
                    <p className='blend-count'>
                        <span className='blend-count-number'>{blendNumber}</span>
                        <span className='blend-count-text'>{blendText}</span>
                    </p>
                    <h3 className='card-title'>{title}</h3>
                </div>
                <div className='card-body'>
                    <p className='description'>{description}</p>
                    <Button text={buttonText} />
                </div>
            </div>
            <div className='category-feature'>
                <div className='ingredient-stripe'>
                    <div className='image-wrapper'>
                        <img src={stripe} />
                    </div>
                </div>
                <div className='featured-item'>
                    <img src={shake} />
                </div>
            </div>
        </div>
    );
}

export default SmoothieCategory;