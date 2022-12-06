import {memo, useMemo} from "react"
import {useSelector} from "react-redux"

import {UseThemeResult} from "app/providers/theme-provider/lib/useTheme"

import {ThemeSwitcher} from "features/theme-switcher"
import {LanguageSwitcher} from "features/language-switcher"
import {AuthPopup} from "features/auth/auth-popup"
import {NotificationsPopup} from "features/notifications-popup"

import {classnames} from "shared/lib/helpers/classnames"
import {Row} from "shared/ui/stack"

import {NavbarItemType} from "../../model/types/navbar"
import {getNavbarItemsData} from "../../model/selectors/getNavbarItemsData"
import NavItem from "./NavItem"

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
        <Row
            as="header"
            align="center"
            justify="between"
            fullWidth
            role="navigation"
            className={classnames(cls, [ "navbar", className ])}
        >
            {navbarItemsList}
            <ThemeSwitcher minified theme={theme} toggleTheme={toggleTheme} />
            <LanguageSwitcher minified />
            <NotificationsPopup minified position="bottom_right" />
            <AuthPopup minified position="bottom_right" />
        </Row>
    )
}

export default memo(Navbar)
