import {memo, useMemo} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {classnames} from "shared/lib/helpers/classnames"

import NavItem from "widgets/navbar/ui/NavItem/NavItem"

import {NavbarItemType} from "widgets/navbar/model/types/navbar"
import {getNavbarItemsData} from "../../model/selectors/getNavbarItemsData"

import cls from "./Navbar.module.sass"


interface NavbarProps {
    className?: string
}

const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation("navbar")
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
        <nav className={classnames(cls, [ "navbar", className ])}>
            {navbarItemsList}
        </nav>
    )
}

export default memo(Navbar)
