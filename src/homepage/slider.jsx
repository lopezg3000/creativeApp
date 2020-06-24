import React, { Component } from 'react';
import Slide from './slide';
import SliderNav from './sliderNav';
import ImmuneBuilder from '../assets/img/immuneBuilder.jpg';
import CleanBlends from '../assets/img/cleanBlends.jpg';
import FiveDollarFriday from '../assets/img/fiveDollarFriday.jpg';
import './slider.css';


class Slider extends Component {
    state = {
        width: 0,
        activeIndex: 0,
        xInitial: ''
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    };

    updateDimensions = () => {
        const width = this.slider.clientWidth;
        this.setState({ width })
    };

    immuneBuilderHeadline() {
        return (
            <React.Fragment>
                <span>Immune Builder</span>
                <sup><i className="far fa-registered"></i></sup>
                <span>&nbsp; Veggie Superfood</span>
            </React.Fragment>
        );
    };

    immuneBuilderDescription() {
        return (
            <React.Fragment>
                <span>
                    Rich in antioxidants, each smoothie is
                    blended with more than 800% of your daily vitamin C,
                    plus zinc,iron and calcium to support a healthier
                    immune system.
                </span>
            </React.Fragment>
        );
    };

    cleanBlendsDescription() {
        return (
            <React.Fragment>
                <span>It’s our commitment to blend a more nutritious Smoothie.</span>
                <br />
                <span>From the bottom of the cup up.</span>
            </React.Fragment>
        );
    };

    handlePrevClick = () => {
        if (this.state.activeIndex > 0) {
            this.setState({ activeIndex: this.state.activeIndex - 1 });
        } else {
            this.setState({ activeIndex: 2 })
        }
    };

    handleNextClick = () => {
        if (this.state.activeIndex < 2) {
            this.setState({ activeIndex: this.state.activeIndex + 1 });
        } else {
            this.setState({ activeIndex: 0 })
        }
    };

    // unify(e) {
    //     return e.changedTouches ? e.changedTouches[0] : e;
    // };

    // lock(e) {
    //     xInitial = unify(e).clientX
    // };

    handleTouchStart = (e, xInitial) => {
        console.log('start', xInitial);
    };

    // handleMouseUp = (e, xInitial) => {
    //     console.log('up', xInitial);
    // };

    handleTouchEnd = (e, xInitial) => {
        console.log('end', xInitial);
    };

    // handleMouseDown = (e, xInitial) => {
    //     console.log('down', xInitial);
    // };


    render() {
        let { xInitial } = this.state;
        let sliderStyle = {
            transform: `translateX(${this.state.activeIndex * -33.3}%)`,
            transition: '0.5s'
        }

        return (
            <React.Fragment>
                <div
                    className='slider-container'
                    ref={(slider) => { this.slider = slider }}
                    onTouchStart={(e) => this.handleTouchStart(e, xInitial)}
                    // onMouseDown={(e) => this.handleMouseDown(e, xInitial)}
                    // onMouseUp={(e) => this.handleMouseUp(e, xInitial)}
                    onTouchEnd={(e) => this.handleTouchEnd(e, xInitial)}
                >
                    <div className='slider-items' style={sliderStyle}>
                        <Slide
                            eyebrow='New flavor. Same benefits.'
                            headline={this.immuneBuilderHeadline()}
                            description={this.immuneBuilderDescription()}
                            src={ImmuneBuilder}
                            text='Show me more'
                            width={this.state.width}
                        />
                        <Slide
                            eyebrow='Our Promise'
                            headline='Clean Blends'
                            description={this.cleanBlendsDescription()}
                            src={CleanBlends}
                            text='Get the Clean Blends Detail'
                            width={this.state.width}
                        />
                        <Slide
                            eyebrow='Is it Friday?'
                            headline='Get Yours For Just $5'
                            description='Every Friday, any regular 32 oz. Smoothie is just $5.'
                            src={FiveDollarFriday}
                            text='How do you Friday?'
                            width={this.state.width}
                        />
                    </div>
                </div>
                <SliderNav
                    onPrevClick={this.handlePrevClick}
                    onNextClick={this.handleNextClick}
                />
            </React.Fragment>
        );
    }
}

export default Slider;