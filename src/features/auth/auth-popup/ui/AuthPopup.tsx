import { FC, memo, useCallback, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getUser } from "@/entities/user"
import LoginIcon from "@/shared/assets/icons/auth.svg"

import { getRouteAuth, getRouteProfile } from "@/shared/const/router"
import { classnames } from "@/shared/lib/helpers/classnames"
import { ThemeVariant } from "@/shared/types/theme"
import { Avatar } from "@/shared/ui/avatar"
import { Button, ButtonFeature } from "@/shared/ui/button"
import { NavLink } from "@/shared/ui/link"
import { Dropdown, PopupPositionType } from "@/shared/ui/popups"

import { Logout } from "../../logout/ui/Logout"

import cls from "./AuthPopup.module.sass"

interface LoginSwitcherProps {
    variant?: ThemeVariant
    position?: PopupPositionType
    minified?: boolean
    className?: string
}

export const AuthPopup: FC<LoginSwitcherProps> = memo((props) => {
    const { variant, position, minified = false, className } = props

    const { t } = useTranslation("auth")
    const [isShowLogout, setShowLogout] = useState(false)
    const user = useSelector(getUser)

    const showLogoutModal = useCallback(() => setShowLogout(true), [])

    const hideLogoutModal = useCallback(() => setShowLogout(false), [])

    const menuItems = useMemo(
        () =>
            user?.id
                ? [
                      {
                          value: t("профиль"),
                          href: getRouteProfile(user.id),
                      },
                      {
                          value: t("выйти"),
                          onClick: showLogoutModal,
                      },
                  ]
                : null,
        [showLogoutModal, t, user],
    )

    return (
        <>
            {menuItems ? (
                <Dropdown
                    toggleElement={
                        <Button feature={ButtonFeature.CLEAR} squared>
                            {minified ? <Avatar src={user?.avatar} rounded bordered /> : user?.username}
                        </Button>
                    }
                    items={menuItems}
                    variant={variant}
                    position={position}
                    className={classnames(cls, ["action"], {}, [className])}
                />
            ) : (
                <NavLink
                    to={getRouteAuth()}
                    Icon={LoginIcon}
                    className={classnames(cls, ["action"], {}, [className])}
                />
            )}

            {isShowLogout && <Logout show={isShowLogout} closeHandler={hideLogoutModal} />}
        </>
    )
})
