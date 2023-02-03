import { ReactNode, useMemo, useState } from "react"
import { ThemeContext } from "@/shared/lib/context/themeContext"
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localStorage"
import { Theme } from "@/shared/const/theme"

const currentTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

interface ThemeProviderProps {
    children: ReactNode
    defaultTheme: Theme
}

const ThemeProvider = ({ children, defaultTheme }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(currentTheme || defaultTheme || Theme.LIGHT)

    const defaultValue = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    )

    return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
