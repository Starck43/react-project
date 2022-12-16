import {memo, useCallback, useState} from "react"

import {NotificationList} from "@/entities/notification"

import {classnames} from "@/shared/lib/helpers/classnames"
import {PositionType} from "@/shared/types/ui"
import {Button} from "@/shared/ui/button/Button"
import {Drawer} from "@/shared/ui/modals"

import BurgerIcon from "@/shared/assets/icons/burger-menu.svg"

import cls from "./NavMenu.module.sass"


interface NavMenuProps {
    position?: PositionType
    className?: string
}

export const NavMenu = memo(({position = "right", className}: NavMenuProps) => {
    const [ show, setShow ] = useState(false)

    const showMenuHandler = useCallback(() => setShow(true), [])
    const closeMenuHandler = useCallback(() => setShow(false), [])

    return (
        <>
            <Button
                Icon={BurgerIcon}
                onClick={showMenuHandler}
                className="menu__toggler"
            />

            {show
            && (
                <Drawer
                    position={position}
                    bordered
                    fullSize
                    open={show}
                    onClose={closeMenuHandler}
                    className={classnames(cls, [ "navbar_menu" ], {}, [ className ])}
                >
                    <NotificationList />
                </Drawer>
            )}
        </>
    )
})
