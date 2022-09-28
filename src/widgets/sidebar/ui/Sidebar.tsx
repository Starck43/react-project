import {useState} from "react"

import {UseThemeResult} from "app/providers/theme-provider/lib/useTheme"
import {ThemeSwitcher} from "shared/ui/theme-switcher/ThemeSwitcher"
import {LanguageSwitcher} from "shared/ui/language-switcher/LanguageSwitcher"
import {CloseButton} from "shared/ui/close-button/CloseButton"
import {ErrorTestButton} from "app/providers/error-boundary-provider"

import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Sidebar.module.sass"
import "./Sidebar.sass"


interface SidebarProps extends UseThemeResult {
    className?: string
}

export function Sidebar(props: SidebarProps) {
    const {theme, toggleTheme, className} = props
    // const {media} = useWindowDimensions()
    const [ collapsed, setCollapsed ] = useState(false)

    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={classnames(cls, [ "sidebar", className ], {collapsed}, [ "sidebar" ])}>
            <CloseButton
                className={classnames(cls, [ "toggle__btn", className ], {collapsed}, [])}
                handleClick={toggleSidebar}
            />

            <div className="sidebar__container">
                <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
                <LanguageSwitcher />
                <ErrorTestButton />
            </div>
        </div>
    )
}
