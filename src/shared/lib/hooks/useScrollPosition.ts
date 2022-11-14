import {useEffect, useState} from "react"


export const useScrollPosition = (container = document.documentElement, targetScroll = window.innerHeight) => {
    const [ scroll, setScroll ] = useState({
        position: 0,
        reachedTarget: false,
    })

    useEffect(() => {
        const handleScroll = () => {
            setScroll({
                position: container.scrollTop,
                reachedTarget: container.scrollTop >= targetScroll,
            })
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [ container.scrollTop, targetScroll ])

    return scroll
}
