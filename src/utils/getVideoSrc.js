export function getVideoSrc(width, bigScreenVideo, mobileVideo) {
    if (width >= 720) return bigScreenVideo;

    return mobileVideo;
}