import React from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import {AppRoutes, RoutesPath} from "shared/config/router"
import {NavLink} from "shared/ui/nav-link/NavLink"
import {classnames} from "shared/lib/helpers/classnames"
import AuthIcon from "shared/assets/icons/auth.svg"

import {getUser} from "entities/user"

import cls from "./Navbar.module.sass"


interface NavbarProps {
    className?: string
}

const NavbarRoutes = [ AppRoutes.HOME, AppRoutes.ABOUT ]

export function Navbar({className}: NavbarProps) {
    const {t} = useTranslation("navbar")
    const {userAuth} = useSelector(getUser)

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
                    {!userAuth
                        ? <AuthIcon />
                        : userAuth?.username}
                </NavLink>

            </div>
        </nav>
    )
}
