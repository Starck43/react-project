import {
    useCallback, useEffect, useRef, useState,
    MutableRefObject,
    ReactNode,
    MouseEvent,
} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import {Portal} from "shared/ui/portal/Portal"
import {CloseButton} from "shared/ui/close-button/CloseButton"

// import vars from "app/styles/_globals.scss"
import cls from "./Modal.module.sass"


// TODO: Move constant TIME to constants and add as parameter in Modal
const TIME = 180

interface ModalProps {
    header?: ReactNode
    footer?: ReactNode
    lazy?: boolean
    open?: boolean
    onClose: () => void
    style?: object
    className?: string
    children: ReactNode
}

export const Modal = (props: DeepPartial<ModalProps>) => {
    const {
        header = null,
        children,
        footer = null,
        open = false,
        onClose,
        lazy = false,
        className,
        style,
    } = props

    const [ show, setShow ] = useState(false)
    const [ isMounted, setIsMounted ] = useState(false)
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>
    const preventClick = (e: MouseEvent) => e.stopPropagation()

    const handleClose = useCallback(() => {
        if (onClose) {
            setShow(false)
            timeRef.current = setTimeout(() => {
                // @ts-ignore
                onClose()
            }, TIME)
        }
    }, [ onClose ])

    const onPressKey = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            handleClose()
        }
    }, [ handleClose ])


    useEffect(() => {
        if (open) {
            window.addEventListener("keydown", onPressKey)
            timeRef.current = setTimeout(() => {
                setShow(true)
            }, 0)
        }
        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener("keydown", onPressKey)
        }
    }, [ open, onPressKey ])


    useEffect(() => {
        if (open) setIsMounted(true)
    }, [ open ])

    if (lazy && !isMounted) return null

    return (
        <Portal>
            <div data-testid="modal" className={classnames(cls, [ "modal" ], {open, show})}>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
                <div className={cls.overlay}>
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
                    <div
                        className={classnames(cls, [ "content" ], {}, [ className, "shadow" ])}
                        role="link"
                        onClick={preventClick}
                        style={style}
                    >
                        <div className={cls.header}>
                            {header}
                            <CloseButton className={cls.close__btn} handleClick={handleClose} />
                        </div>

                        <div className={cls.body}>
                            {children}
                        </div>

                        {footer && (
                            <div className={cls.footer}>
                                {footer}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
