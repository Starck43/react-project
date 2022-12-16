import {ReactNode, useMemo, useState} from "react"
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/themeContext"

const currentTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

interface ThemeProviderProps {
    children: ReactNode,
    defaultTheme: Theme
}

const ThemeProvider = ({children, defaultTheme}:ThemeProviderProps) => {
    const [ theme, setTheme ] = useState<Theme>(currentTheme || defaultTheme || Theme.LIGHT)

    const defaultValue = useMemo(() => ({
        theme,
        setTheme,
    }), [ theme ])

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    )
}

// @ts-ignore
export default ThemeProvider
