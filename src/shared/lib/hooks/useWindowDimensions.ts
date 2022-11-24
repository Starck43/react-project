import {MutableRefObject, useEffect, useState} from "react"
import {getWindowDimensions} from "../helpers/dom"


export const useWindowDimensions = (container: MutableRefObject<HTMLDivElement> | undefined = undefined) => {
    const [ windowDimensions, setWindowDimensions ] = useState(
        getWindowDimensions(container),
    )

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions(container))
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [ container ])

    return windowDimensions
}
