import React from 'react';

const SliderNav = () => {
    return (
        <div className='slider-nav'>
            <button>
                <i className="far fa-arrow-alt-circle-left"></i>
            </button>
            <span className='slider-nav-current'>01</span>
            &nbsp;/&nbsp;
            <span className='slider-nav-total'>03</span>
            <button>
                <i class="far fa-arrow-alt-circle-right"></i>
            </button>
        </div>
    );
}

export default SliderNav;