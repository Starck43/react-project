export function detectMobile() {
    const devicesToMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i]

    return devicesToMatch.some((device) => navigator.userAgent.match(device))
}

export const detectDevice = () => {
    const isMobile = window.matchMedia
    if (!isMobile) return false

    const device = isMobile("(pointer:coarse)")
    return device.matches
}

export const getWindowDimensions = (container?: Element) => ({
    width: container?.clientWidth || window.innerWidth,
    height: container?.clientHeight || window.innerHeight,
    ratio: window.innerWidth / window.innerHeight,
    isMobile: detectDevice(),
})
