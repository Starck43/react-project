import {useContext, useEffect, MouseEventHandler} from "react"

import {ThemeContext} from "../context/themeContext"
import {LOCAL_STORAGE_THEME_KEY} from "../../const/localStorage"
import {Theme} from "../../const/theme"



export interface UseThemeResult {
    theme?: Theme
    toggleTheme?: () => void
}

const useTheme = (current?: Theme): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme: MouseEventHandler = (e) => {
        e.preventDefault()
        let newTheme: Theme
        switch (theme) {
            case Theme.LIGHT:
                newTheme = Theme.DARK
                break
            case Theme.DARK:
                newTheme = Theme.ADDITIONAL
                break
            case Theme.ADDITIONAL:
                newTheme = Theme.LIGHT
                break
            default:
                newTheme = Theme.LIGHT
        }

        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    useEffect(() => {
        const root = document.body
        root.className = theme || current || Theme.LIGHT
    }, [ theme, current ])

    return <UseThemeResult>{theme, toggleTheme}
}

export default useTheme
