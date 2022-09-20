import {useContext, useEffect} from "react"
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../theme/ThemeContext"


interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}

const useTheme = (current: Theme): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = (e: any) => {
        e.preventDefault()
        console.log(e)
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    useEffect(() => {
        let root = document.body
        root.className = theme || current
    }, [theme])

    return <UseThemeResult>{theme, toggleTheme}
}

export default useTheme