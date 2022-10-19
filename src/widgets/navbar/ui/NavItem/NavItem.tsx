import React, {memo} from "react"
import {useTranslation} from "react-i18next"
import {classnames} from "shared/lib/helpers/classnames"

import {NavLink} from "shared/ui/link/NavLink"
import {NavbarItemType} from "widgets/navbar/model/items"

import cls from "./NavItem.module.sass"


const NavItem = memo((props: NavbarItemType) => {
    const {path, text = "", Icon = null, ...other} = props
    const {t} = useTranslation("navbar")

    return (
        <NavLink key={path} to={path} className={classnames(cls, [ "navbar__item" ], {text})} {...other}>
            {Icon && <Icon />}
            { /* i18next-extract-disable-line */}
            {/* i18next-extract-disable-next-line */}
            {text && t(text)}
        </NavLink>
    )
})

export default NavItem
