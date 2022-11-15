import {useEffect} from "react"


export const useInitialEffect = (callback: () => void, allowed: boolean = true) => {
    useEffect(() => {
        if (allowed && __PROJECT__ !== "storybook") {
            callback()
        }
        // eslint-disable-next-line
    }, [])
}
