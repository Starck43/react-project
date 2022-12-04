import {useCallback, useRef} from "react"


export const useThrottle = (callback: (...args: any[]) => void, interval: number = 1000) => {
    const throttleRef = useRef(false)

    return useCallback((...args: any[]) => {
        if (!throttleRef.current) {
            callback(...args)
            throttleRef.current = true
            setTimeout(() => {
                throttleRef.current = false
            }, interval)
        }
    }, [ callback, interval ])
}
