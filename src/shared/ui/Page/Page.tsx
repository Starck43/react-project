import {MutableRefObject, ReactNode, useRef} from "react"
import {classnames} from "shared/lib/helpers/classnames"
import {useElementInView} from "shared/lib/hooks/useElementInView"

import cls from "./Page.module.sass"


interface PageProps {
    children: ReactNode
    className?: string
    onScrollToEnd?: () => void
}

export const Page = ({children, onScrollToEnd, className}: PageProps) => {
    const containerRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useElementInView({
        containerRef,
        triggerRef,
        callback: onScrollToEnd,
    })

    return (
        <section ref={containerRef} className={classnames(cls, [ "content" ], {}, [ className ])}>
            {children}
            <div ref={triggerRef} />
        </section>
    )
}
