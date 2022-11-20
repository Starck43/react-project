import {ErrorTestButton} from "app/providers/error-boundary-provider"
import React, {memo, useState} from "react"
import {useTranslation} from "react-i18next"
import {RoutesPath} from "shared/config/router"

import {classnames} from "shared/lib/helpers/classnames"
import {useWindowDimensions} from "shared/lib/hooks/useWindowDimensions"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import {ToggleButton, ToggleButtonVariant} from "shared/ui/toggle-button/ToggleButton"

import cls from "./Sidebar.module.sass"
import "./Sidebar.sass"


export enum SidebarPositionType {
    LEFT = "left",
    RIGHT = "right"
}

export interface SidebarProps {
    position?: SidebarPositionType
    className?: string
}

function Sidebar(props: SidebarProps) {
    const {
        position = SidebarPositionType.RIGHT,
        className,
    } = props

    const {t} = useTranslation("sidebar")
    const {width} = useWindowDimensions()
    const [ collapsed, setCollapsed ] = useState(width < 992)

    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }

    return (
        <aside
            data-testid="sidebar"
            className={classnames(cls, [ "sidebar", position ], {collapsed}, [
                "sidebar",
                collapsed ? "collapsed" : "",
                className,
            ])}
        >
            {width < 992 && (
                <ToggleButton
                    data-testid="sidebar-toggle"
                    variant={collapsed ? ToggleButtonVariant.RIGHT : ToggleButtonVariant.LEFT}
                    className={classnames(cls, [ "toggle__btn", position ], {collapsed})}
                    onClick={toggleSidebar}
                />
            )}

            <div className={classnames(cls, [], {collapsed}, [ "sidebar__container" ])}>
                <Button feature={ButtonFeature.BLANK} href={RoutesPath.article_create}>
                    {t("новая статья")}
                </Button>
                <ErrorTestButton />
            </div>
        </aside>
    )
}

export default memo(Sidebar)
