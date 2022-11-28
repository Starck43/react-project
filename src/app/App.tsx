import {Suspense, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import {AppRouter} from "app/providers/router-provider"
import useTheme from "app/providers/theme-provider/lib/useTheme"

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
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Sidebar position="left" className="sidebar" />
                {mounted && <AppRouter />}
            </main>
            <footer />
        </Suspense>
    )
}

export default App
