import { memo, useMemo } from "react"
import { useSelector } from "react-redux"

import { ThemeSwitcher } from "@/features/theme-switcher"
import { LanguageSwitcher } from "@/features/language-switcher"
import { AuthPopup } from "@/features/auth"
import { NotificationsPopup } from "@/features/notifications-popup"

import { UseThemeResult } from "@/shared/lib/hooks/useTheme"
import { classnames } from "@/shared/lib/helpers/classnames"
import { Row } from "@/shared/ui/stack"

import type { NavbarItemType } from "../../model/types/navbar"
import { getNavbarItemsData } from "../../model/selectors/getNavbarItemsData"
import { NavMenu } from "../nav-menu/NavMenu"
import NavItem from "../nav-item/NavItem"

import cls from "./Navbar.module.sass"

interface NavbarProps extends UseThemeResult {
    className?: string
}

const Navbar = ({ theme, toggleTheme, className }: NavbarProps) => {
    // const {t} = useTranslation("navbar")
    // const {width} = useWindowDimensions()
    // const collapsed = width < 992
    const itemsList = useSelector(getNavbarItemsData)

    const navbarItemsList = useMemo(
        () =>
            Object.keys(itemsList).map((key) => (
                <div key={key} className={classnames(cls, [`navbar__${key}`])}>
                    {itemsList[key].map((item: NavbarItemType) => (
                        <NavItem
                            data-testid={item.id}
                            text={item.text}
                            {...item}
                            key={item.path}
                        />
                    ))}
                </div>
            )),
        [itemsList],
    )

    return (
        <Row
            as="header"
            role="navigation"
            align="center"
            justify="between"
            fullWidth
            className={classnames(cls, ["navbar", className])}
        >
            {navbarItemsList}

            <ThemeSwitcher minified theme={theme} toggleTheme={toggleTheme} />
            <LanguageSwitcher minified />
            <NotificationsPopup minified position="bottom_right" />
            <AuthPopup minified position="bottom_right" />
            <NavMenu position="right" />
        </Row>
    )
}

export default memo(Navbar)
