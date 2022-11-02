import {getUser} from "entities/user"
import React, {memo} from "react"
import {useSelector} from "react-redux"
import {classnames} from "shared/lib/helpers/classnames"

import {NavLink} from "shared/ui/link/NavLink"
import {NavbarItemType} from "widgets/navbar/model/items"

import cls from "./NavItem.module.sass"


const NavItem = memo((item: NavbarItemType) => {
    const {path, text, Icon, ...other} = item
    const authData = useSelector(getUser)

    if (item.authOnly && !authData) {
        return null
    }

    return (
        <NavLink key={path} to={path} className={classnames(cls, [ "navbar__item" ], {text})} {...other}>
            {Icon && <Icon className={text && cls.gap} />}
            {text && text}
        </NavLink>
    )
})

export default NavItem
