import {classnames} from "shared/lib/helpers/classnames"

import {useModal} from "../lib/hooks/useModal"
import {DrawerProps} from "../types"
import {CloseButton} from "../../close-button/CloseButton"
import {Col, Row} from "../../stack"
import {Portal} from "../../portal/Portal"
import {Overlay} from "../overlay/Overlay"

import styles from "../styles/Modals.module.sass"
import cls from "./Drawer.module.sass"


export const Drawer = (props: DrawerProps) => {
    const {
        open,
        onClose,
        lazy,
        header,
        closeOnOverlayClick,
        animationTime = 220,
        showClose = true,
        position = "bottom",
        fullSize = false,
        rounded = false,
        bordered = false,
        className,
        style,
        children,
    } = props


    const modalProps = useModal({onClose, isOpen: open, animationTime})
    const {isMounted, isShown: show, handleClose} = modalProps

    if (lazy && !isMounted) return null

    return (
        <Portal>
            <Overlay open={open} show={show} onClick={closeOnOverlayClick ? handleClose : undefined} />
            <Col
                data-testid="drawer"
                role="link"
                align="center"
                justify="between"
                gap="sm"
                className={classnames(cls, [ "drawer", "shadowed", position ], {
                    show,
                    rounded,
                    bordered,
                    fullSize,
                }, [
                    styles.modals,
                    styles.open,
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

                <div className={classnames(cls, [ "body" ], {}, [ styles.body ])}>
                    {children}
                </div>
            </Col>
        </Portal>
    )
}
