import React, {memo} from "react"
import {useSelector} from "react-redux"

import {AppRoutes, RoutesPath} from "shared/config/router"
import {classnames} from "shared/lib/helpers/classnames"
import AuthIcon from "shared/assets/icons/auth.svg"

import {getUser} from "entities/user"
import {NavbarItemsList} from "widgets/navbar/model/items"
import NavItem from "widgets/navbar/ui/NavItem/NavItem"

import cls from "./Navbar.module.sass"


interface NavbarProps {
    className?: string
}

function Navbar({className}: NavbarProps) {
    const {userAuth} = useSelector(getUser)

    return (
        <nav className={classnames(cls, [ "navbar", className ], {}, [ "centered" ])}>
            <div className={cls.navbar__items}>
                {NavbarItemsList.map((item) => <NavItem key={item.path} {...item} />)}
            </div>
            <div className={classnames(cls, [ "navbar__icons" ], {}, [ "centered" ])}>
                {userAuth
                    ? <NavItem data-testid="profileBtn" path={RoutesPath[AppRoutes.PROFILE]} text={userAuth.username} />
                    : <NavItem data-testid="authBtn" path={RoutesPath[AppRoutes.AUTH]} Icon={AuthIcon} />}
            </div>
        </nav>
    )
}

export default memo(Navbar)
