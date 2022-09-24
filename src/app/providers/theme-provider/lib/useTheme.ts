import {MouseEventHandler, useContext, useEffect} from "react"
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "app/providers/theme-provider/lib/ThemeContext"


export interface UseThemeResult {
    theme: Theme
    toggleTheme?: () => void
}

const useTheme = (current?: Theme): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme: MouseEventHandler = (e) => {
        e.preventDefault()
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    useEffect(() => {
        let root = document.body
        root.className = theme || current || Theme.LIGHT
    }, [theme])

    return <UseThemeResult>{theme, toggleTheme}
}

export default useTheme
