import React, {memo, useEffect, useState} from "react"

import {ErrorTestButton} from "app/providers/error-boundary-provider"
import {UseThemeResult} from "app/providers/theme-provider/lib/useTheme"

import {classnames} from "shared/lib/helpers/classnames"
import {useWindowDimensions} from "shared/lib/hooks/useWindowDimensions"
import {LanguageSwitcher} from "shared/ui/language-switcher/LanguageSwitcher"
import {ThemeSwitcher} from "shared/ui/theme-switcher/ThemeSwitcher"
import {ToggleButton, ToggleButtonVariant} from "shared/ui/toggle-button/ToggleButton"

import cls from "./Sidebar.module.sass"
import "./Sidebar.sass"


export interface SidebarProps extends UseThemeResult {
    position?: string
    className?: string
}

function Sidebar(props: SidebarProps) {
    const {theme, toggleTheme, position = "right", className} = props
    const {width} = useWindowDimensions()
    const [ collapsed, setCollapsed ] = useState(false)

    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }

    useEffect(() => {
        setCollapsed(width < 992)
    }, [ width ])

    return (
        <nav
            data-testid="sidebar"
            className={classnames(cls, [ "sidebar", position ], {collapsed}, [ "sidebar", collapsed ? "collapsed" : "", className ])}
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
                <ThemeSwitcher minified={collapsed} theme={theme} toggleTheme={toggleTheme} />
                <LanguageSwitcher minified={collapsed} />
                <ErrorTestButton minified={collapsed} />
            </div>
        </nav>
    )
}

export default memo(Sidebar)
