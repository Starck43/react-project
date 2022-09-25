import {AppRoutes, RoutesPath} from "shared/config/router"
import {Theme} from "app/providers/theme-provider/lib/ThemeContext"
import {UseThemeResult} from "app/providers/theme-provider/lib/useTheme"
import {useTranslation} from "react-i18next"

import {NavLink, NavLinkTheme} from "shared/ui/nav-link/NavLink"
import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Navbar.module.sass"


interface NavbarProps extends UseThemeResult {
    className?: string
}

export function Navbar({theme, className}: NavbarProps) {
    const {t} = useTranslation("navbar")
    /*
        const navbarClick: MouseEventHandler = (e) => {
            const { target } = e
            console.log(target)
        }
     */

    return (
        <nav className={classnames(cls, ["navbar", className], {}, [])}>
            <div className={cls.navbar__links}>
                <NavLink
                    to={RoutesPath[AppRoutes.HOME]}
                    theme={theme === Theme.LIGHT ? NavLinkTheme.PRIMARY : NavLinkTheme.SECONDARY} // TODO Fix passing theme
                    className="nav-link home"
                >
                    {t('Главная')}
                </NavLink>
                <NavLink
                    to={RoutesPath[AppRoutes.ABOUT]}
                    theme={theme === Theme.LIGHT ? NavLinkTheme.PRIMARY : NavLinkTheme.SECONDARY} // TODO Fix passing theme
                    className="nav-link about"
                >
                    {t('О себе')}
                </NavLink>
            </div>
        </nav>
    )
}
