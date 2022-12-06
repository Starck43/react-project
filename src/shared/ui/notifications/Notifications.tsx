import {memo} from "react"
import {useTranslation} from "react-i18next"

import {NotificationList} from "entities/notification"

import {ThemeVariant} from "shared/types/theme"
import {PositionType} from "shared/types/ui"
import NotificationIcon from "shared/assets/icons/notification-20-20.svg"

import {Button} from "../button/Button"
import {Popover} from "../popups"

// import cls from "./Notifications.module.sass"


interface NotificationsProps {
    variant?: ThemeVariant
    minified?: boolean
    position?: PositionType
    className?: string
}

export const Notifications = memo((props: NotificationsProps) => {
    const {
        variant,
        minified = false,
        position,
        className,
    } = props

	const {t} = useTranslation()

    return (
        <Popover
            variant={variant}
            position={position}
            shadowed
            rounded
            toggleElement={(
                <Button Icon={NotificationIcon}>
                    {!minified && t("уведомления")}
                </Button>
            )}
            className={className}
        >
            <NotificationList />
        </Popover>
    )
})
