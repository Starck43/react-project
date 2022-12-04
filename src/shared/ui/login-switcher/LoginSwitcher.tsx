import {
    FC, memo, useCallback, useMemo, useState,
} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {getUser} from "entities/user"

import {Logout} from "features/auth"

import {RoutesPath} from "shared/config/router"
import {AppRoutes} from "shared/const/appRoutes"
import {classnames} from "shared/lib/helpers/classnames"
import {ThemeVariant} from "shared/types/theme"
import LoginIcon from "shared/assets/icons/auth.svg"

import {Button} from "../button/Button"
import {Dropdown} from "../dropdown/Dropdown"
import {NavLink} from "../link/NavLink"

import cls from "./LoginSwitcher.module.sass"


interface LoginSwitcherProps {
    variant?: ThemeVariant
    minified?: boolean
    className?: string
}

export const LoginSwitcher: FC<LoginSwitcherProps> = memo((props) => {
    const {
        variant,
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
                        control={(
                            <Button>{minified ? <LoginIcon /> : user.username}</Button>
                        )}
                        items={menuItems}
                        variant={variant}
                        className={classnames(cls, [ "login__link" ], {}, [ className ])}
                    />
                )
                : (
                    <NavLink
                        to={RoutesPath[AppRoutes.AUTH]}
                        Icon={LoginIcon}
                        className={classnames(cls, [ "login__link" ], {}, [ className ])}
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
