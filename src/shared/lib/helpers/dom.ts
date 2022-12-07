import {MutableRefObject} from "react"


export const detectDevice = () => {
    const isMobile = window.matchMedia
    if (!isMobile) return false

    const device = isMobile("(pointer:coarse)")
    return device.matches
}

export const getWindowDimensions = (container: MutableRefObject<HTMLDivElement> | undefined) => {
    if (typeof window === "undefined") {
        return {
            width: 0,
            height: 0,
            ratio: 0,
            isMobile: false,
        }
    }

    if (container?.current) {
        return {
            width: container.current.clientWidth,
            height: container.current.clientHeight,
            ratio: container.current.clientWidth / container.current.clientHeight,
            isMobile: detectDevice(),
        }
    }
    return {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.innerWidth / window.innerHeight,
        isMobile: detectDevice(),
    }
}

export function detectMobile() {
    const devicesToMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
    ]

    return devicesToMatch.some((device) => navigator.userAgent.match(device))
}
