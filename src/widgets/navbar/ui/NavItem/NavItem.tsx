import React, {memo} from "react"
import {classnames} from "shared/lib/helpers/classnames"

import {NavLink} from "shared/ui/link/NavLink"
import {NavbarItemType} from "widgets/navbar/model/items"

import cls from "./NavItem.module.sass"


const NavItem = memo((props: NavbarItemType) => {
    const {path, text, Icon, ...other} = props

    return (
        <NavLink key={path} to={path} className={classnames(cls, [ "navbar__item" ], {text})} {...other}>
            {Icon && <Icon />}
            {text && text}
        </NavLink>
    )
})

export default NavItem
