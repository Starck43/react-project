import {classnames} from "shared/lib/helpers/classnames"

import {useModal} from "../lib/hooks/useModal"
import {ModalProps} from "../types"
import {CloseButton} from "../../close-button/CloseButton"
import {Portal} from "../../portal/Portal"
import {Overlay} from "../overlay/Overlay"
import {Col, Flex, Row} from "../../stack"
import {Button} from "../../button/Button"
import {ButtonFeature} from "../../button/consts"


import styles from "../styles/Modals.module.sass"
import cls from "./Modal.module.sass"


export const Modal = (props: ModalProps) => {
    const {
        lazy = false,
        open = false,
        onSubmit,
        onClose,
        primaryBtnLabel,
        secondaryBtnLabel,
        header,
        footer,
        closeOnOverlayClick = false,
        animationTime = 180,
        showClose = true,
        rounded = false,
        bordered = true,
        size,
        fullSize = false,
        children,
        className,
        style,
    } = props

    const modalProps = useModal({onSubmit, onClose, isOpen: open, animationTime})
    const {isMounted, isShown: show, handleSubmit, handleClose} = modalProps

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
                    fullSize,
                }, [
                    styles.modals,
                    open ? "open" : "",
                    bordered ? "bordered" : "",
                    fullSize ? "fullSize" : "",
                    className,
                ])}
                style={{...style, transitionDuration: `${animationTime}ms`}}
            >
                <Row
                    gap="sm"
                    fullWidth
                    justify="between"
                    align="baseline"
                    className={cls.header}
                >
                    {header}
                    {showClose && <CloseButton className={styles.close__button} handleClick={handleClose} />}
                </Row>

                <Flex
                    wrap
                    justify="between"
                    gap="sm"
                    className={styles.body}
                >
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
                            {primaryBtnLabel}
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
                            {secondaryBtnLabel}
                        </Button>
                    )}
                </Flex>
            </Col>
        </Portal>
    )
}
