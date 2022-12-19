import {Suspense, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"


import {getUserOnMount, userActions} from "@/entities/user"

import useTheme from "@/shared/lib/hooks/useTheme"
import {Navbar} from "@/widgets/navbar"
import {Sidebar} from "@/widgets/sidebar"

import {AppRouter} from "./providers/router-provider"


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
