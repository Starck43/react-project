import {useCallback, useRef} from "react"

/**
 * useThrottle - the custom hook which allows to call a callback function one time per interval
 * @param callback - the function that starts only every interval time
 * @param interval - time in ms
 */
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
