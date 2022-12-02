import {useEffect} from "react"


export const useInitialEffect = (callback: () => void, allowed: boolean = true) => {
    useEffect(() => {
        if (allowed && __PROJECT__ !== "storybook" && __PROJECT__ !== "jest") {
            callback()
        }
        // eslint-disable-next-line
    }, [])
}
