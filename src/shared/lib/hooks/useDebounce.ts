import {MutableRefObject, useCallback, useRef} from "react"


export const useDebounce = (callback: (...args: any[]) => void, interval: number = 1000) => {
    const timer = useRef(false) as MutableRefObject<any>

    return useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback(...args)
        }, interval)
    }, [ callback, interval ])
}
