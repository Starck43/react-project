import {classnames} from "@/shared/lib/helpers/classnames"
import Header from "@/shared/ui/header"

import {useModal} from "../lib/hooks/useModal"
import {ModalProps} from "../types"
import {CloseButton} from "../../close-button/CloseButton"
import {Portal} from "../../portal/Portal"
import {Overlay} from "../overlay/Overlay"
import {Col, Flex, Row} from "../../stack"
import {Button} from "../../button/Button"
import {ButtonFeature} from "../../button/consts"
import SubmitIcon from "@/shared/assets/icons/check.svg"
import CancelIcon from "@/shared/assets/icons/close.svg"

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
        fullWidth = false,
        children,
        className,
        style,
    } = props

    const modalProps = useModal({onSubmit, onClose, isOpen: open, animationTime})
    const {isMounted, isShown: show, handleSubmit, handleClose} = modalProps

    if (lazy && !isMounted) return null

    return (
        <Portal>
            <Overlay
                open={open}
                show={show}
                onClick={closeOnOverlayClick ? handleClose : undefined}
                style={{transitionDuration: `${animationTime}ms`}}
            />
            <Col
                data-testid="modal"
                justify="between"
                gap="md"
                className={classnames(cls, [ "modal", "shadowed", size ], {
                    open,
                    show,
                    fullSize,
                    rounded,
                    bordered,
                }, [
                    styles.modals,
                    open ? styles.open : "",
                    bordered ? styles.bordered : "",
                    fullSize ? styles.fullSize : "",
                    className,
                ])}
                style={{...style, transitionDuration: `${animationTime}ms`}}
            >
                <Row
                    gap="sm"
                    fullWidth
                    justify="between"
                    align="center"
                    className={cls.header}
                >
                    {typeof header === "string" ? <Header tag="h4" title={header} align="start" /> : header}
                    {showClose && <CloseButton className={styles.close__button} handleClick={handleClose} />}
                </Row>

                <div className={styles.body}>
                    <Flex justify="between" wrap fullWidth={fullWidth} className={styles.content}>
                        {children}
                    </Flex>
                </div>

                <Flex justify="end" wrap fullWidth className={cls.footer}>
                    {footer}
                    {handleSubmit
                    && (
                        <Button
                            data-testid="SubmitButton"
                            variant="primary"
                            feature={ButtonFeature.BLANK}
                            type="submit"
                            bordered
                            Icon={SubmitIcon}
                            onClick={handleSubmit}
                        >
                            {primaryBtnLabel}
                        </Button>
                    )}

                    {handleClose
                    && (
                        <Button
                            data-testid="CancelButton"
                            variant="primary"
                            feature={ButtonFeature.BLANK}
                            bordered
                            Icon={CancelIcon}
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
