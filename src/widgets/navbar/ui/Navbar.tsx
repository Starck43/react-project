import React, {useState} from "react"
import {useTranslation} from "react-i18next"

import AuthIcon from "shared/assets/icons/auth.svg"
import {AppRoutes, RoutesPath} from "shared/config/router"
import {classnames} from "shared/lib/helpers/classnames"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {Modal} from "shared/ui/modal/Modal"

import {NavLink} from "shared/ui/nav-link/NavLink"
import cls from "./Navbar.module.sass"


interface NavbarProps {
    className?: string
}

const NavbarRoutes = [ AppRoutes.HOME, AppRoutes.ABOUT ]

export function Navbar({className}: NavbarProps) {
    const [ isShowAuth, setShowAuth ] = useState(false)

    const {t} = useTranslation("navbar")
        const toggleAuthModal = () => {
            setShowAuth((prev) => !prev)
        }

    return (
        <nav className={classnames(cls, [ "navbar", className ], {}, [])}>
            <div className={cls.navbar__links}>
                {NavbarRoutes.map((item) => (
                    <NavLink key={item} to={RoutesPath[item]} className="navbar__link">
                        { /* i18next-extract-disable-line */}
                        {t(item)}
                    </NavLink>
                ))}
            </div>
            <div className={classnames(cls, [ "navbar__icons" ], {}, [ "centered" ])}>
                {/* eslint-disable-next-line max-len */}
                <Button feature={ButtonFeature.BLANK} squared onClick={() => setShowAuth(true)}><AuthIcon /></Button>
            </div>
            <Modal open={isShowAuth} onClose={toggleAuthModal}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                Lorem ipsum dolor sit amet, consectetur animistic elit. Ab accusantium ad aliquid architecto, blanditiis commodi consequatur cupiditate debitis ea earum eveniet fuga ipsum, magnam natus nemo nisi obcaecati odio odit placeat provident quae quo reiciendis saepe tenetur veniam? Autem, dicta eos expedita iure nemo nesciunt nostrum provident quas, quibusdam quidem rerum soluta vel! Aspernatur deleniti deserunt dolore eaque exercitationem, hic id laboriosam magnam omnis pariatur perspiciatis provident quam saepe, sunt vitae voluptate voluptatibus. Adipisci alias corporis culpa cumque, deserunt dolorem dolores fugiat ipsa ipsum, labore mollitia nisi officiis, omnis quidem reiciendis repudiandae similique. Cum facere libero minima quasi saepe veritatis.
            </Modal>

        </nav>
    )
}
