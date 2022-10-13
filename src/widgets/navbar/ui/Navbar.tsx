import {getAuthUser} from "entities/user"
import React from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import {AppRoutes, RoutesPath} from "shared/config/router"
import {NavLink} from "shared/ui/nav-link/NavLink"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {classnames} from "shared/lib/helpers/classnames"

import AuthIcon from "shared/assets/icons/auth.svg"
import cls from "./Navbar.module.sass"


interface NavbarProps {
    className?: string
}

const NavbarRoutes = [ AppRoutes.HOME, AppRoutes.ABOUT ]

export function Navbar({className}: NavbarProps) {
    const {t} = useTranslation("navbar")
    const authUser = useSelector(getAuthUser)

    return (
        <nav className={classnames(cls, [ "navbar", className ], {}, [ "centered" ])}>
            <div className={cls.navbar__links}>
                {NavbarRoutes.map((item) => (
                    <NavLink key={item} to={RoutesPath[item]} className="navbar__link">
                        { /* i18next-extract-disable-line */}
                        {/* i18next-extract-disable-next-line */}
                        {t(item)}
                    </NavLink>
                ))}
            </div>
            <div className={classnames(cls, [ "navbar__icons" ], {}, [ "centered" ])}>
                <NavLink
                    data-testid="authBtn"
                    to={RoutesPath[AppRoutes.AUTH]}
                >
                    {!authUser
                        ? <AuthIcon />
                        : authUser?.username}
                </NavLink>

            </div>
        </nav>
    )
}
