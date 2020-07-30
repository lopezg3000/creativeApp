import React, { Component } from 'react';
import BigScreenVideo from '../assets/videos/heroBigScreenVideo.mp4';
import MobileVideo from '../assets/videos/heroMobileVideo.mov';
import { getVideoSrc } from '../utils/getVideoSrc';
import './videoBackground.css'


class VideoBackground extends Component {
    state = {
        width: 0
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


    render() {
        const { width } = this.state;
        const src = getVideoSrc(width, BigScreenVideo, MobileVideo);

        return (
            <div className='hero-background container'>
                <div className='video-wrap'>
                    <video
                        src={src}
                        autoPlay={true}
                        loop={true}
                        type="video/mp4"
                        muted
                        playsInline>
                    </video>
                </div>
            </div>
        );
    }
}

export default VideoBackground;