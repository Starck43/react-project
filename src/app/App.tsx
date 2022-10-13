import {Suspense, useEffect} from "react"
import {AppRouter} from "app/providers/router-provider"
import useTheme from "app/providers/theme-provider/lib/useTheme"
import {useDispatch} from "react-redux"

import {userActions} from "entities/user"
import {Navbar} from "widgets/navbar"
import {Sidebar} from "widgets/sidebar"


const App = () => {
    const {theme, toggleTheme} = useTheme()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [ dispatch ])

    return (
        <Suspense fallback="">
            <Navbar />
            <main>
                <Sidebar
                    theme={theme}
                    toggleTheme={toggleTheme}
                    position="left"
                    className="sidebar"
                />
                <AppRouter />
            </main>
            <footer />
        </Suspense>
    )
}

export default App
