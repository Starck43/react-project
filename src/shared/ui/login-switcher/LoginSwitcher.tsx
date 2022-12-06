import {
    FC, memo, useCallback, useMemo, useState,
} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {getUser} from "entities/user"

import {Logout} from "features/auth"

import {classnames} from "shared/lib/helpers/classnames"
import {RoutesPath} from "shared/config/router"
import {AppRoutes} from "shared/const/appRoutes"
import {ThemeVariant} from "shared/types/theme"
import {PositionType} from "shared/types/ui"
import LoginIcon from "shared/assets/icons/auth.svg"

import {Avatar} from "../avatar/Avatar"
import {Button} from "../button/Button"
import Dropdown from "../popups/dropdown/Dropdown"
import {NavLink} from "../link/NavLink"

import cls from "./LoginSwitcher.module.sass"


interface LoginSwitcherProps {
    variant?: ThemeVariant
    position?: PositionType
    minified?: boolean
    className?: string
}

export const LoginSwitcher: FC<LoginSwitcherProps> = memo((props) => {
    const {
        variant,
        position,
        minified = false,
        className,
    } = props

    const {t} = useTranslation("auth")
    const [ isShowLogout, setShowLogout ] = useState(false)
    const user = useSelector(getUser)

    const onLogoutHandler = useCallback(() => (
        setShowLogout((prev) => !prev)
    ), [])

    const menuItems = useMemo(() => (
        user ? [
                {
                    value: t("профиль"),
                    href: RoutesPath[AppRoutes.PROFILE] + user.id,
                },
                {
                    value: t("выйти"),
                    onClick: onLogoutHandler,
                },
            ]
            : []
    ), [ onLogoutHandler, t, user ])

    return (
        <>
            {user?.username
                ? (
                    <Dropdown
                        position={position}
                        toggleElement={(
                            <Button>{minified ? <Avatar size="xs" src={user?.avatar} /> : user.username}</Button>
                        )}
                        items={menuItems}
                        variant={variant}
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
                    closeHandler={() => setShowLogout((prev) => !prev)}
                />
            )}
        </>
    )
})
