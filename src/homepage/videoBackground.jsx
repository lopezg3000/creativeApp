import React from 'react';
import './videoBackground.css'

const VideoBackground = () => {
    return (
        <div className='hero-background container'>
            <div className='video-wrap'>
                <video
                    src='https://vod-progressive.akamaized.net/exp=1591982497~acl=%2A%2F1454893004.mp4%2A~hmac=15c6f0323eff33bbf19deb29848d3b682c0e182e518d3137ff4035c8af368329/vimeo-prod-skyfire-std-us/01/1335/14/356679802/1454893004.mp4'
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