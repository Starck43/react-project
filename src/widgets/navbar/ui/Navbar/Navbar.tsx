import React, {memo, useMemo} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {UseThemeResult} from "app/providers/theme-provider/lib/useTheme"

import {classnames} from "shared/lib/helpers/classnames"
import {useWindowDimensions} from "shared/lib/hooks/useWindowDimensions"
import {LanguageSwitcher} from "shared/ui/language-switcher/LanguageSwitcher"
import {ThemeSwitcher} from "shared/ui/theme-switcher/ThemeSwitcher"

import {getNavbarItemsData} from "../../model/selectors/getNavbarItemsData"
import NavItem from "./NavItem"
import {NavbarItemType} from "../../model/types/navbar"

import cls from "./Navbar.module.sass"


interface NavbarProps extends UseThemeResult {
    className?: string
}

const Navbar = ({theme, toggleTheme, className}: NavbarProps) => {
    // const {t} = useTranslation("navbar")
    // const {width} = useWindowDimensions()
    // const collapsed = width < 992
    const itemsList = useSelector(getNavbarItemsData)


    const navbarItemsList = useMemo(() => (Object.keys(itemsList).map((key) => (
        <div key={key} className={classnames(cls, [ `navbar__${key}` ])}>
            {itemsList[key].map((item: NavbarItemType) => (
                <NavItem
                    data-testid={item.id}
                    text={item.text}
                    {...item}
                    key={item.path}
                />
            ))}
        </div>
    ))), [ itemsList ])

    return (
        <menu className={classnames(cls, [ "navbar", className ])}>
            {navbarItemsList}
            <ThemeSwitcher
                minified
                theme={theme}
                toggleTheme={toggleTheme}
                className={classnames(cls, [ "icon", "theme" ])}
            />
            <LanguageSwitcher minified className={classnames(cls, [ "lang" ])} />
        </menu>
    )
}

export default memo(Navbar)
