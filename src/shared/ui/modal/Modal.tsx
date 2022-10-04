import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react"
import {classnames} from "shared/lib/helpers/classnames"
import {CloseButton} from "shared/ui/close-button/CloseButton"
import {Portal} from "shared/ui/portal/Portal"

// import vars from "app/styles/_globals.scss"
import cls from "./Modal.module.sass"


const TIME = 180

interface ModalProps {
    children?: ReactNode
    open?: boolean
    onClose?: () => void
    className?: string
}

export const Modal = (props: ModalProps) => {
    const {
        children,
        open = false,
        onClose,
        className,
    } = props

    const [ show, setShow ] = useState(false)
    const timeRef = useRef<ReturnType<typeof setTimeout>>()
    const preventClick = (e: React.MouseEvent) => e.stopPropagation()

    const handleClose = useCallback(() => {
        if (onClose) {
            setShow(false)
            timeRef.current = setTimeout(() => {
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
            setShow(true)
        }
        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener("keydown", onPressKey)
        }
    }, [ open, onPressKey ])

    return (
        <Portal>

            <div className={classnames(cls, [ "modal" ], {open, show}, [ className ])}>
                <CloseButton
                    className={cls.close__btn}
                    handleClick={handleClose}
                />
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
                <div className={cls.overlay} role="link" onClick={handleClose}>
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus */}
                    <div
                        className={classnames(cls, [ "content" ], {}, [ "shadow" ])}
                        role="link"
                        onClick={preventClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
