import {useEffect, useState} from "react"
import {getWindowDimensions} from "../helpers/dom"


export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions(),
    )

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions())
        }
        // console.log(`Window dimension: ${windowDimensions.width}px`)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowDimensions
}
