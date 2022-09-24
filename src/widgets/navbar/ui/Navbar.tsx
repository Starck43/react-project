import {MouseEventHandler} from "react"

import {AppRoutes, RoutesPath} from "shared/config/router"
import {Theme} from "app/providers/theme-provider/lib/ThemeContext"
import {UseThemeResult} from "app/providers/theme-provider/lib/useTheme"

import {NavLink, NavLinkTheme} from "shared/ui/nav-link/NavLink"
import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Navbar.module.sass"


interface NavbarProps extends UseThemeResult {
    className?: string
}


export const Navbar = ({theme, className}: NavbarProps) => {

    const navbarClick: MouseEventHandler = (e) => {
        const target = e.target
        console.log(target)
    }

    return (
        <nav className={classnames(cls, ['navbar', className], {}, [])} onClick={navbarClick}>
            <div className={cls.navbar__links}>
                <NavLink
                    to={RoutesPath[AppRoutes.HOME]}
                    theme={theme === Theme.LIGHT ? NavLinkTheme.PRIMARY : NavLinkTheme.SECONDARY} //TODO Fix passing theme
                    className="nav-link home"
                >
                    Главная
                </NavLink>
                <NavLink
                    to={RoutesPath[AppRoutes.ABOUT]}
                    theme={theme === Theme.LIGHT ? NavLinkTheme.PRIMARY : NavLinkTheme.SECONDARY} //TODO Fix passing theme
                    className="nav-link about"
                >
                    О себе
                </NavLink>
            </div>
        </nav>
    )
}
