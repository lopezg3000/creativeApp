import React, { Component } from 'react';
import BigScreenVideo from '../assets/videos/heroBigScreenVideo.mp4';
import MobileVideo from '../assets/videos/heroMobileVideo.mov';
import { getVideoSrc } from '../utils/getVideoSrc';
import Thumb from '../assets/homepageImages/heroVideoThumb.jpg';
import './videoBackground.css'

/*improvements:
    1. box shadow behind hero video after implementing progressive loading
    2. position of image between 320px and 768px needs to be corrected
*/


class VideoBackground extends Component {
    state = {
        width: 0,
        isVideoLoaded: false
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    };

    updateDimensions = () => {
        const width = window.innerWidth;
        this.setState({ width });
    };

    onLoadedData = () => {
        this.setState({ isVideoLoaded: true });
    }


    render() {
        const { width } = this.state;
        const src = getVideoSrc(width, BigScreenVideo, MobileVideo);

        return (
            <div className='hero-background container'>
                <div className='video-wrap'>
                    {/* <img
                        src={Thumb}
                        className="video-thumb tiny"
                        alt="thumb"
                        style={{ opacity: this.state.isVideoLoaded ? 0 : 1 }}
                    /> */}
                    <video
                        src={src}
                        autoPlay={true}
                        loop={true}
                        type="video/mp4"
                        muted
                        // onLoadedData={this.onLoadedData}
                        // style={{ opacity: this.state.isVideoLoaded ? 1 : 0 }}
                        playsInline>
                    </video>
                </div>
            </div>
        );
    }
}

export default VideoBackground;