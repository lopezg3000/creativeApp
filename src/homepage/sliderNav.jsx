import React from 'react';

const SliderNav = ({ onPrevClick, onNextClick }) => {
    return (
        <div className='slider-nav'>
            <button onClick={onPrevClick}>
                <i className="far fa-arrow-alt-circle-left"></i>
            </button>
            <span className='slider-nav-current'>01</span>
            &nbsp;/&nbsp;
            <span className='slider-nav-total'>03</span>
            <button onClick={onNextClick}>
                <i className="far fa-arrow-alt-circle-right"></i>
            </button>
        </div>
    );
}

export default SliderNav;