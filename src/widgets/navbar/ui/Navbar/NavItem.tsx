import React, {memo} from "react"
import {useTranslation} from "react-i18next"

import {classnames} from "shared/lib/helpers/classnames"
import {NavLink} from "shared/ui/link/NavLink"

import {NavbarItemType} from "widgets/navbar/model/types/navbar"

import cls from "./Navbar.module.sass"


// TODO: bring translations to parent
const NavItem = ({
path, text, Icon, authOnly, ...other
}: NavbarItemType) => {
    const {t} = useTranslation("navbar")

    return (
        <NavLink
            key={path}
            to={path}
            title={<span>{t("menu", {context: text, defaultValue: text})}</span>}
            Icon={Icon}
            feature="clear"
            className={classnames(cls, [ "navbar__item" ], {}, [ "inline" ])}
            {...other}
        />
    )
}

export default memo(NavItem)
