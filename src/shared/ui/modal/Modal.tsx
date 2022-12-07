import {
    ReactNode,
    MutableRefObject,
    useCallback, useEffect, useRef, useState,
} from "react"

import type {SizeType} from "shared/types/ui"
import {classnames} from "shared/lib/helpers/classnames"
import {Button} from "../button/Button"
import {ButtonFeature} from "../button/consts"

import {Overlay} from "../overlay/Overlay"
import {Portal} from "../portal/Portal"
import {CloseButton} from "../close-button/CloseButton"
import {Col, Flex, Row} from "../../ui/stack"

// import vars from "app/styles/_globals.scss"
import cls from "./Modal.module.sass"


// TODO: Move constant TIME to constants and add as parameter in Modal
const TIME = 180

interface ModalProps {
    header?: ReactNode
    footer?: ReactNode
    cancelLabel?: string | null
    submitLabel?: string | null
    onSubmit?: () => void
    onClose?: () => void
    lazy?: boolean
    closeOnOverlayClick?: boolean
    open: boolean
    rounded?: boolean
    bordered?: boolean
    size?: SizeType
    fullScreen?: boolean
    style?: object
    className?: string
    children: ReactNode
}

export const Modal = (props: ModalProps) => {
    const {
        header,
        footer,
        onSubmit,
        onClose,
        submitLabel,
        cancelLabel,
        open = false,
        closeOnOverlayClick = false,
        lazy = false,
        rounded = false,
        bordered = true,
        size,
        fullScreen = false,
        children,
        className,
        style,
    } = props

    const [ show, setShow ] = useState(false)
    const [ isMounted, setIsMounted ] = useState(false)
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

    const handleSubmit = useCallback(() => {
        if (onSubmit) {
            setShow(false)
            timeRef.current = setTimeout(() => {
                // @ts-ignore
                onSubmit()
            }, TIME)
        }
    }, [ onSubmit ])

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


    useEffect(() => {
        if (open) setIsMounted(true)
    }, [ open ])

    if (lazy && !isMounted) return null

    return (
        <Portal>
            <Overlay open={open} show={show} onClick={closeOnOverlayClick ? handleClose : undefined} />
            <Col
                data-testid="modal"
                role="link"
                justify="between"
                gap="sm"
                className={classnames(cls, [ "modal", "shadowed", size ], {
                    open,
                    show,
                    rounded,
                    bordered,
                    fullScreen,
                }, [ className ])}
                style={style}
            >
                <Row
                    gap="sm"
                    fullWidth
                    justify="between"
                    align="baseline"
                    className={cls.header}
                >
                    {header}
                    <CloseButton className={cls.close__button} handleClick={handleClose} />
                </Row>

                <Flex wrap justify="between" gap="xs" className={cls.body}>
                    {children}
                </Flex>

                <Flex wrap className={cls.footer}>
                    {footer}
                    {handleSubmit
                    && (
                        <Button
                            data-testid="SubmitButton"
                            feature={ButtonFeature.BLANK}
                            type="submit"
                            bordered
                            onClick={handleSubmit}
                        >
                            {submitLabel}
                        </Button>
                    )}

                    {handleClose
                    && (
                        <Button
                            data-testid="CancelButton"
                            feature={ButtonFeature.BLANK}
                            bordered
                            onClick={handleClose}
                        >
                            {cancelLabel}
                        </Button>
                    )}
                </Flex>
            </Col>
        </Portal>
    )
}
