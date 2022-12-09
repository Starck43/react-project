import {useCallback, useEffect} from "react"

import {AnimationProvider, useAnimationModules} from "@/shared/lib/components/AnimationProvider"
import {classnames} from "@/shared/lib/helpers/classnames"
import {useWindowDimensions} from "@/shared/lib/hooks/useWindowDimensions"

import {DrawerProps} from "../types"
import {CloseButton} from "../../close-button/CloseButton"
import {Col, Row} from "../../stack"
import {Portal} from "../../portal/Portal"
import {Overlay} from "../overlay/Overlay"

import styles from "../styles/Modals.module.sass"
import cls from "./Drawer.module.sass"


const DrawerContent = (props: DrawerProps) => {
    const {
        open,
        onClose,
        header,
        closeOnOverlayClick,
        animationTime = 220,
        showClose = true,
        position = "bottom",
        fullSize = false,
        rounded = false,
        bordered = false,
        className,
        children,
    } = props


    const {width, height} = useWindowDimensions()
    const {Spring, Gesture} = useAnimationModules()
    const [ {x, y}, api ] = Spring.useSpring(() => ({x: width, y: height}))

    const openDrawer = useCallback(() => {
        api.start({x: 0, y: 0, immediate: false})
    }, [ api ])

    useEffect(() => {
        if (open) openDrawer()
    }, [ api, open, openDrawer ])

    const handleClose = (velocity = 0) => {
        api.start({
            x: width,
            y: height,
            immediate: false,
            config: {...Spring.config.stiff, velocity},
            onResolve: onClose,
        })
    }

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [ vx, vy ],
            direction: [ dx, dy ],
            movement: [ mx, my ],
            cancel,
        }) => {
            if (position === "top" || position === "bottom") {
                if (my < -70) cancel()

                if (last) {
                    if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                        handleClose()
                    } else {
                        openDrawer()
                    }
                } else {
                    api.start({y: my, immediate: true})
                }
            } else {
                if (mx < -70) cancel()

                if (last) {
                    if (mx > height * 0.5 || (vx > 0.5 && dx > 0)) {
                        handleClose()
                    } else {
                        openDrawer()
                    }
                } else {
                    api.start({x: mx, immediate: true})
                }
            }
        },
        {
            from: () => [ x.get(), y.get() ],
            duration: animationTime,
            filterTaps: true,
            bounds: {top: 0, left: 0},
            rubberband: true,
        },
    )

    if (!open) return null

    let overlayStyle = {}
    let drawerStyle = {}
    let contentStyle = {}

    if (position === "bottom") {
        const display = y.to((py) => (py < height ? "block" : "none"))
        overlayStyle = {
            display,
            opacity: y.to([ 0, height ], [ 1, 0 ], "clamp"),
        }
        drawerStyle = {display, bottom: -100, y}
        contentStyle = {paddingBottom: "calc(var(--modal-padding) + 100px)"}
    } else {
        const display = x.to((px) => (px < width ? "block" : "none"))

        overlayStyle = {
            display,
            opacity: x.to([ 0, width ], [ 1, 0 ], "clamp"),
        }
        drawerStyle = {display, right: -100, x}
        contentStyle = {paddingRight: "calc(var(--modal-padding) + 100px)"}
    }

    return (
        <Portal>
            <Spring.a.div
                className={cls.drawer}
                style={drawerStyle}
                {...bind()}
            >
                <Col
                    data-testid="Drawer.Content"
                    role="link"
                    align="center"
                    justify="between"
                    className={classnames(cls, [ "drawer__content", "show", "shadowed", position ], {
                        rounded,
                        bordered,
                        fullSize,
                    }, [
                        styles.modals,
                        styles.open,
                        bordered ? styles.bordered : "",
                        fullSize ? styles.fullSize : "",
                        className,
                    ])}
                    style={contentStyle}
                >
                    <Row
                        gap="sm"
                        fullWidth
                        justify="between"
                        align="baseline"
                        className={cls.header}
                    >
                        {header}
                        {showClose && (
                            <CloseButton className={styles.close__button} handleClick={() => handleClose()} />
                        )}
                    </Row>

                    <div className={classnames(cls, [ "body" ], {}, [ styles.body ])}>
                        {children}
                    </div>
                </Col>
            </Spring.a.div>
            <Overlay
                as={Spring.a.div}
                open
                show
                onClick={closeOnOverlayClick ? () => handleClose() : undefined}
                style={overlayStyle}
            />
        </Portal>
    )
}

const DrawerAsync = (props: DrawerProps) => {
    const {isLoaded} = useAnimationModules()

    return isLoaded ? <DrawerContent {...props} /> : null
}

export const Drawer = (props: DrawerProps) => (
    <AnimationProvider>
        <DrawerAsync {...props} />
    </AnimationProvider>
)
