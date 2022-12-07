import {
    memo, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import {PositionType} from "shared/types/ui"

import {CloseButton} from "../close-button/CloseButton"
import {Col} from "../stack"
import {Overlay} from "../overlay/Overlay"
import {Portal} from "../portal/Portal"

import cls from "./Drawer.module.sass"

// TODO: Move constant TIME to constants and add as parameter in Drawer
const TIME = 180


interface DrawerProps {
    closeOnOverlayClick?: boolean
    open: boolean
    onClose?: () => void
    showButton?: boolean
    position?: PositionType
    rounded?: boolean
    bordered?: boolean
    className?: string
    children: ReactNode
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        closeOnOverlayClick,
        open,
        onClose,
        showButton = true,
        position = "bottom",
        rounded = false,
        bordered = false,
        className,
        children,
    } = props

    const [ show, setShow ] = useState(false)
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

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
            // to render frame with display block before showing with opacity 1
            timeRef.current = setTimeout(() => {
                setShow(true)
            }, 0)
            window.addEventListener("keydown", onPressKey)
        }
        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener("keydown", onPressKey)
        }
    }, [ open, onPressKey ])


    return (
        <Portal>
            <Overlay open={open} show={show} onClick={closeOnOverlayClick ? handleClose : undefined} />
            <Col
                data-testid="drawer"
                role="link"
                align="center"
                justify="between"
                gap="xs"
                className={classnames(cls, [ "drawer", "shadowed", position ], {
                    open,
                    show,
                    rounded,
                    bordered,
                }, [ className ])}
            >
                {showButton && <CloseButton className={cls.close__button} handleClick={handleClose} />}

                <div className={cls.body}>
                    {children}
                </div>
            </Col>
        </Portal>
    )
})
