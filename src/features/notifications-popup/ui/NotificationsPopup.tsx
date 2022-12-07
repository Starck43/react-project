import {memo, useCallback, useMemo, useState} from "react"
import {useTranslation} from "react-i18next"

import {NotificationList} from "entities/notification"

import {useWindowDimensions} from "shared/lib/hooks/useWindowDimensions"
import {ThemeVariant} from "shared/types/theme"
import {Button} from "shared/ui/button/Button"
import {Drawer} from "shared/ui/modals"
import {Popover, PopupPositionType} from "shared/ui/popups"
import NotificationIcon from "shared/assets/icons/notification.svg"

// import cls from "./Notifications.module.sass"


interface NotificationsProps {
    variant?: ThemeVariant
    minified?: boolean
    position?: PopupPositionType
    className?: string
}

export const NotificationsPopup = memo((props: NotificationsProps) => {
    const {
        variant,
        minified = false,
        position,
        className,
    } = props

    const {t} = useTranslation()
    const {width: screenWidth, isMobile} = useWindowDimensions()
    const [ showDrawer, setShow ] = useState(false)

    const showDrawerDrawerHandler = useCallback(() => setShow(true), [])
    const closeDrawerHandler = useCallback(() => setShow(false), [])

    const mobile = isMobile || screenWidth < 576

    const toggler = (
        <Button
            Icon={NotificationIcon}
            onClick={mobile ? showDrawerDrawerHandler : undefined}
        >
            {!minified && t("уведомления")}
        </Button>
    )

    const content = useMemo(() => (<NotificationList />), [])

    return (
        mobile
            ? (
                <>
                    {toggler}
                    <Drawer
                        position="bottom"
                        rounded
                        bordered
                        open={showDrawer}
                        onClose={closeDrawerHandler}
                        closeOnOverlayClick
                        fullSize={mobile}
                        className={className}
                    >
                        {content}
                    </Drawer>
                </>
            )
            : (
                <Popover
                    variant={variant}
                    position={position}
                    shadowed
                    rounded
                    toggleElement={toggler}
                    className={className}
                >
                    {content}
                </Popover>
            )
    )
})
