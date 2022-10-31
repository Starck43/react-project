import {Suspense, useEffect} from "react"
import {AppRouter} from "app/providers/router-provider"
import useTheme from "app/providers/theme-provider/lib/useTheme"
import {useDispatch, useSelector} from "react-redux"

import {getUserOnMount, userActions} from "entities/user"
import {Navbar} from "widgets/navbar"
import {Sidebar} from "widgets/sidebar"


const App = () => {
    const {theme, toggleTheme} = useTheme()
    const dispatch = useDispatch()
    const mounted = useSelector(getUserOnMount)

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
                {mounted && <AppRouter />}
            </main>
            <footer />
        </Suspense>
    )
}

export default App
