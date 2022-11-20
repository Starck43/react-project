import React, {memo} from "react"
import {useTranslation} from "react-i18next"

import {classnames} from "shared/lib/helpers/classnames"
import {NavLink, NavLinkFeature} from "shared/ui/link/NavLink"

import {NavbarItemType} from "widgets/navbar/model/types/navbar"

import cls from "./Navbar.module.sass"


const NavItem = memo((item: NavbarItemType) => {
    const {
        path, text, Icon, authOnly, ...other
    } = item
    const {t} = useTranslation("navbar")

    return (
        <NavLink
            key={path}
            to={path}
            feature={NavLinkFeature.CLEAR}
            className={classnames(cls, [ "navbar__item" ], {}, [ "inline" ])}
            {...other}
        >
            {Icon && <Icon className={cls.icon} />}
            {/* TODO: fix error with Username in translation */}
            {text && <span>{t("menu", {context: text, defaultValue: text})}</span>}
        </NavLink>
    )
})

export default NavItem
