import {
    FC, memo, useCallback, useMemo, useState,
} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {getUser} from "@/entities/user"

import {AppRoutes, RoutesPath} from "@/shared/const/router"
import {ButtonFeature, Button} from "@/shared/ui/button"
import {classnames} from "@/shared/lib/helpers/classnames"
import {ThemeVariant} from "@/shared/types/theme"
import {Avatar} from "@/shared/ui/avatar"
import {NavLink} from "@/shared/ui/link"
import {Dropdown, PopupPositionType} from "@/shared/ui/popups"
import LoginIcon from "@/shared/assets/icons/auth.svg"

import {Logout} from "../../logout/ui/Logout"

import cls from "./AuthPopup.module.sass"


interface LoginSwitcherProps {
    variant?: ThemeVariant
    position?: PopupPositionType
    minified?: boolean
    className?: string
}

export const AuthPopup: FC<LoginSwitcherProps> = memo((props) => {
    const {
        variant,
        position,
        minified = false,
        className,
    } = props

    const {t} = useTranslation("auth")
    const [ isShowLogout, setShowLogout ] = useState(false)
    const user = useSelector(getUser)

    const showLogoutModal = useCallback(() => (
        setShowLogout(true)
    ), [])

    const hideLogoutModal = useCallback(() => (
        setShowLogout(false)
    ), [])

    const menuItems = useMemo(() => (
        user?.id ? [
                {
                    value: t("профиль"),
                    href: RoutesPath[AppRoutes.PROFILE] + user.id,
                },
                {
                    value: t("выйти"),
                    onClick: showLogoutModal,
                },
            ]
            : null
    ), [ showLogoutModal, t, user ])

    return (
        <>
            {menuItems
                ? (
                    <Dropdown
                        toggleElement={(
                            <Button variant="primary" feature={ButtonFeature.CLEAR}>
                                {minified
                                    ? <Avatar size="xs" src={user?.avatar} />
                                    : user.username}
                            </Button>
                        )}
                        items={menuItems}
                        variant={variant}
                        position={position}
                        className={classnames(cls, [ "action" ], {}, [ className ])}
                    />
                )
                : (
                    <NavLink
                        to={RoutesPath[AppRoutes.AUTH]}
                        Icon={LoginIcon}
                        className={classnames(cls, [ "action" ], {}, [ className ])}
                    />
                )}

            {isShowLogout
            && (
                <Logout
                    show={isShowLogout}
                    closeHandler={hideLogoutModal}
                />
            )}
        </>
    )
})
