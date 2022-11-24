import {useRef, MutableRefObject, ReactNode, UIEvent} from "react"
import {useSelector} from "react-redux"
import {useLocation} from "react-router-dom"

import {StateSchema} from "app/providers/store-provider"

import {classnames} from "shared/lib/helpers/classnames"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useElementInView} from "shared/lib/hooks/useElementInView"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect"
import {useThrottle} from "shared/lib/hooks/useThrottle"

import {getPageByPath, pageActions} from "widgets/page"

import cls from "./Page.module.sass"


export const PAGE_ID = "pageContent"

interface PageProps {
    children: ReactNode
    saveScrollPos?: boolean
    onScrollToEnd?: () => void
    className?: string
}

export const Page = ({children, saveScrollPos = false, onScrollToEnd, className}: PageProps) => {
    const containerRef = useRef() as MutableRefObject<HTMLDivElement>
    const loadMoreRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const {pathname} = useLocation()
    const scrollPos = useSelector((state: StateSchema) => getPageByPath(state, pathname))

    useElementInView({
        containerRef,
        triggerRef: loadMoreRef,
        callback: onScrollToEnd,
    })

    const onScrollHandler = useThrottle((e: UIEvent<HTMLDivElement>) => {
        if (saveScrollPos) {
            dispatch(pageActions.setScrollPos({
                path: pathname,
                pos: e.currentTarget.scrollTop,
            }))
        }
    })

    useInitialEffect(() => {
        containerRef.current.scrollTop = scrollPos
    }, saveScrollPos)

    return (
        <div
            ref={containerRef}
            id={PAGE_ID}
            className={classnames(cls, [ "content" ], {}, [ className ])}
            onScroll={onScrollHandler}
        >
            {children}
            {onScrollToEnd ? <div ref={loadMoreRef} className={cls.load__more} /> : null}
        </div>
    )
}
