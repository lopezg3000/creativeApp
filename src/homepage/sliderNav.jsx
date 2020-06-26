import React from 'react';
import './sliderNav.css';

const SliderNav = ({ sliderItems, activeSlide, onPrevClick, onNextClick }) => {
    return (
        <div className='slider-nav'>
            <button onClick={onPrevClick}>
                <i className="fas fa-chevron-left icon"></i>
            </button>
            <span className='slider-nav-current'>{activeSlide}</span>
            &nbsp;/&nbsp;
            <span className='slider-nav-total'>{sliderItems}</span>
            <button onClick={onNextClick}>
                <i className="fas fa-chevron-right icon"></i>
            </button>
        </div>
    );
}

export default SliderNav;