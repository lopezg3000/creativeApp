import React from 'react';
import './videoBackground.css'

const VideoBackground = () => {
    return (
        <div className='hero-background container'>
            <div className='video-wrap'>
                <video
                    src='https://www.videvo.net/videvo_files/converted/2013_12/preview/CROWD_JUMPS_LIGHTS_PULSE.mov15296.webm'
                    autoplay='true'
                    loop='true'
                    type="video/mp4"
                    muted>
                </video>
            </div>
        </div>
    );
}

export default VideoBackground;