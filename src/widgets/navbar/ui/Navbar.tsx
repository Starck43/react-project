import {AppRoutes, RoutesPath} from "shared/config/router"
import {useTranslation} from "react-i18next"

import {NavLink} from "shared/ui/nav-link/NavLink"
import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Navbar.module.sass"


interface NavbarProps {
    className?: string
}

const NavbarRoutes = [ AppRoutes.HOME, AppRoutes.ABOUT ]

export function Navbar({className}: NavbarProps) {
    const {t} = useTranslation("navbar")
    /*
        const navbarClick: MouseEventHandler = (e) => {
            const { target } = e
            console.log(target)
        }
     */

    return (
        <nav className={classnames(cls, [ "navbar", className ], {}, [])}>
            <div className={cls.navbar__links}>
                {NavbarRoutes.map((item) => (
                    <NavLink key={item} to={RoutesPath[item]} className="navbar__link">
                        {t(item)}
                    </NavLink>
                ))}
            </div>
        </nav>
    )
}
