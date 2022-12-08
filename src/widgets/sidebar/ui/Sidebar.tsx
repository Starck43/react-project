import {memo, useState} from "react"
import {useTranslation} from "react-i18next"

import {ErrorTestButton} from "@/app/providers/error-boundary-provider"

import {RoutesPath} from "@/shared/config/router"
import {useWindowDimensions} from "@/shared/lib/hooks/useWindowDimensions"
import {classnames} from "@/shared/lib/helpers/classnames"
import {AlignType} from "@/shared/types/ui"
import {NavLink} from "@/shared/ui/link/NavLink"
import {ToggleButton} from "@/shared/ui/toggle-button/ToggleButton"

import cls from "./Sidebar.module.sass"
import "./Sidebar.sass"


export interface SidebarProps {
    position?: AlignType
    className?: string
}

function Sidebar({position = "right", className}: SidebarProps) {
    const {t} = useTranslation("sidebar")
    const {width} = useWindowDimensions()
    const [ collapsed, setCollapsed ] = useState(width < 992)

    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }

    return (
        <aside
            data-testid="Sidebar"
            className={classnames(cls, [ "sidebar", position ], {collapsed}, [
                collapsed ? "collapsed" : "",
                "sidebar",
                className,
            ])}
        >
            {width < 992 && (
                <ToggleButton
                    data-testid="Sidebar.ToggleBtn"
                    position={collapsed ? "right" : "left"}
                    className={classnames(cls, [ "toggle__btn", position ], {collapsed})}
                    onClick={toggleSidebar}
                />
            )}

            <div className={classnames(cls, [], {collapsed}, [ "sidebar__container" ])}>
                <NavLink
                    to={RoutesPath.article_create}
                    title={t("новая статья")}
                    feature="underlined"
                />
                <ErrorTestButton />
            </div>
        </aside>
    )
}

export default memo(Sidebar)
