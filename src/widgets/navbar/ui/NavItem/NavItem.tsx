import React, {memo} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import {NavLink} from "shared/ui/link/NavLink"
import {NavbarItemType} from "widgets/navbar/model/types/navbar"

import cls from "./NavItem.module.sass"


const NavItem = memo((item: NavbarItemType) => {
    const {
        path, text, Icon, authOnly, ...other
    } = item

    return (
        <NavLink key={path} to={path} className={classnames(cls, [ "navbar__item" ], {text}, [ "inline" ])} {...other}>
            {Icon && <Icon />}
            {text && <span>{text}</span>}
        </NavLink>
    )
})

export default NavItem
