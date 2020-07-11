import React, { Component } from 'react';
import Slide from './slide';
import SliderNav from './sliderNav';
import DrewBrees from '../assets/homepageImages/partnerships/drewBrees.jpg';
import ChallengedAthletes from '../assets/homepageImages/partnerships/challengedAthletes.jpg';
import SmoothieKingCenter from '../assets/homepageImages/partnerships/smoothieKingCenter.jpg';
import Premama from '../assets/homepageImages/partnerships/Premama.jpg';
import './slider.css';

//improvements: 
// 1. stop swipe when trying to scroll up
// 2. drag slide to preview next or see past
// 3. Refactor code
// 4. make count change with state
// 5. bug with pressing button since on-pointer events set to none


class Slider extends Component {
    state = {
        width: 0,
        activeIndex: 0,
        xInitial: '',
        sliderItems: 4
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

    handlePrevClick = () => {
        if (this.state.activeIndex > 0) {
            this.setState({ activeIndex: this.state.activeIndex - 1 });
        } else {
            this.setState({ activeIndex: 3 })
        }
    };

    handleNextClick = () => {
        if (this.state.activeIndex < 3) {
            this.setState({ activeIndex: this.state.activeIndex + 1 });
        } else {
            this.setState({ activeIndex: 0 })
        }
    };

    unify(e) {
        return e.changedTouches ? e.changedTouches[0] : e;
    };

    lock(e) {
        const xInitial = this.unify(e).clientX;
        this.setState({ xInitial });
    };

    move(e) {
        const sliderItems = this.state.sliderItems;
        const xInitial = this.state.xInitial;
        let activeIndex = this.state.activeIndex;
        if (xInitial || xInitial === 0) {
            let deltaX = this.unify(e).clientX - xInitial, s = Math.sign(deltaX);

            if ((activeIndex > 0 || s < 0) && (activeIndex < sliderItems - 1 || s > 0)) {
                activeIndex -= s;
                this.setState({ activeIndex });
            }

            this.setState({ xInitial: '' });
        }
    }

    handleTouchStart = e => {
        this.lock(e);
    };

    handleMouseUp = e => {
        this.lock(e);
    };

    handleTouchEnd = e => {
        this.move(e);
    };

    handleMouseDown = e => {
        this.move(e);
    };

    formatActiveSlide() {
        const activeIndex = this.state.activeIndex;
        return `0${activeIndex + 1}`;
    }

    premamaHeadline() {
        return (
            <React.Fragment>
                <span>Premama</span>
                <sup><i className="far fa-registered"></i></sup>
            </React.Fragment>
        );
    };

    premamaDescription() {
        return (
            <React.Fragment>
                <span>Packed with prenatal multivitamins, whole fruits and organic spinach, the Premama</span>
                <sup>&reg;</sup>
                <span>&nbsp;Smoothie is just what mom needs to help keep herself and baby strong.</span>
            </React.Fragment>
        );
    };


    render() {
        const { width, sliderItems } = this.state;
        const translatePercent = -Math.abs(100 / sliderItems);
        let sliderStyle = {
            transform: `translateX(${this.state.activeIndex * translatePercent}%)`,
            transition: '0.5s'
        }

        return (
            <React.Fragment>
                <div
                    className='slider-container'
                    ref={(slider) => { this.slider = slider }}
                    onTouchStart={this.handleTouchStart}
                    onMouseUp={this.handleMouseUp}
                    onMouseDown={this.handleMouseDown}
                    onTouchEnd={this.handleTouchEnd}
                >
                    <div className='slider-items' style={sliderStyle}>
                        <Slide
                            eyebrow="Smoothie King's MVP"
                            headline='Drew Brees'
                            description='Drew Brees has teamed up with Smoothie King to show everyone how delicious and convenient healthier eating can be.'
                            src={DrewBrees}
                            text='Learn more about Drew Brees'
                            width={width}
                        />
                        <Slide
                            eyebrow='Our Partnerships'
                            headline='Challenged Athletes Foundation'
                            description='Help athletes with physical challenges find success through sports.'
                            src={ChallengedAthletes}
                            text='Learn more about CAF'
                            width={width}
                        />
                        <Slide
                            eyebrow='Our Partnerships'
                            headline='Smoothie King Center'
                            description='By supporting the Smoothie King Center and the New Orleans Pelicans franchise, this partnership reflects joint interests in nutrition, health and athletics from an international to a local perspective.'
                            src={SmoothieKingCenter}
                            text='Smoothie King Center Details'
                            width={width}
                        />
                        <Slide
                            eyebrow='Our Partnerships'
                            headline={this.premamaHeadline()}
                            description={this.premamaDescription()}
                            src={Premama}
                            text='Learn more about The Premama&reg;'
                            width={width}
                        />
                    </div>
                </div>
                <SliderNav
                    onPrevClick={this.handlePrevClick}
                    onNextClick={this.handleNextClick}
                    activeSlide={this.formatActiveSlide()}
                    sliderItems={`0${sliderItems}`}
                />
            </React.Fragment>
        );
    }
}

export default Slider;