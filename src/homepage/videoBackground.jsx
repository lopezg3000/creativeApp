import React from 'react';
import SmoothieKing from '../assets/videos/smoothieKing.mp4'
import './videoBackground.css'

const VideoBackground = () => {
    return (
        <div className='hero-background container'>
            <div className='video-wrap'>
                <video
                    src={SmoothieKing}
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

export default VideoBackground;