import React from 'react';
import './videoBackground.css'

const VideoBackground = () => {
    return (
        <div className='hero-background container'>
            <div className='video-wrap'>
                <video
                    src='https://vod-progressive.akamaized.net/exp=1592014411~acl=%2A%2F1454893004.mp4%2A~hmac=9acf1124ca464c5dcaee6737fce646193235934a7d37620e73d4663c2792269b/vimeo-prod-skyfire-std-us/01/1335/14/356679802/1454893004.mp4'
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