import {ErrorTestButton} from "app/providers/error-boundary-provider"

import {UseThemeResult} from "app/providers/theme-provider/lib/useTheme"
import {useEffect, useState} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import {useWindowDimensions} from "shared/lib/hooks/useWindowDimensions"
import {LanguageSwitcher} from "shared/ui/language-switcher/LanguageSwitcher"
import {ThemeSwitcher} from "shared/ui/theme-switcher/ThemeSwitcher"
import {ToggleButton, ToggleButtonVariant} from "shared/ui/toggle-button/ToggleButton"

import cls from "./Sidebar.module.sass"
import "./Sidebar.sass"


interface SidebarProps extends UseThemeResult {
    position?: string
    className?: string
}

export function Sidebar(props: SidebarProps) {
    const {theme, toggleTheme, position = "right", className} = props
    const {width} = useWindowDimensions()
    const [ collapsed, setCollapsed ] = useState(false)

    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }

    useEffect(() => {
        if (width < 992) {
            setCollapsed(false)
        }
    }, [ width ])

    return (
        <div
            data-testid="sidebar"
            className={classnames(cls, [ "sidebar", position ], {collapsed}, [ "sidebar", collapsed && "collapsed", className ])}
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
                <ThemeSwitcher minified={collapsed} theme={theme} toggleTheme={toggleTheme} className={collapsed ? "minified" : ""} />
                <LanguageSwitcher minified={collapsed} />
                <ErrorTestButton minified={collapsed} />
            </div>
        </div>
    )
}
