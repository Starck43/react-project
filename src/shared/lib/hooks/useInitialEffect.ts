import {useEffect} from "react"


export const useInitialEffect = (callback: () => void, isMounted: boolean = false) => {
    useEffect(() => {
        if (!isMounted && __PROJECT__ !== "storybook") {
            callback()
        }
        // eslint-disable-next-line
    }, [])
}
