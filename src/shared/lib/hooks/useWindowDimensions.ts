import {useEffect, useState, MutableRefObject, useCallback} from "react"
import {getWindowDimensions} from "../helpers/dom"


export const useWindowDimensions = (container: MutableRefObject<HTMLDivElement> | undefined = undefined) => {
    const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions(container))

    const handleResize = useCallback(() => {
        setWindowDimensions(getWindowDimensions(container))
    }, [ container ])

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [ container, handleResize ])

    return windowDimensions
}
