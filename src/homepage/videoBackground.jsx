import React from 'react';
import './videoBackground.css'

const VideoBackground = () => {
    return (
        <div className='hero-background container'>
            <div className='video-wrap'>
                <video
                    src='https://vod-progressive.akamaized.net/exp=1591999507~acl=%2A%2F1454893004.mp4%2A~hmac=1e4d47cfb1faa39d0d901a0ebeaa0a3a238bef32bd7f12cefa43676001e818b4/vimeo-prod-skyfire-std-us/01/1335/14/356679802/1454893004.mp4'
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