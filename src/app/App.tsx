import { Suspense, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getUserOnMount, userActions } from "@/entities/user"

import useTheme from "@/shared/lib/hooks/useTheme"
import { Navbar } from "@/widgets/navbar"
import { Sidebar } from "@/widgets/sidebar"

import { AppRouter } from "./providers/router-provider"

// TODO: Finish with font preload to HEAD
const HREF_FONT = "./fonts/design.ttf"

const App = () => {
    const { theme, toggleTheme } = useTheme()
    const dispatch = useDispatch()
    const mounted = useSelector(getUserOnMount)

    useEffect(() => {
        dispatch(userActions.initAuthData())

        if (!__IS_DEV__) {
            const fragment = document.createDocumentFragment()
            const preload = document.createElement("link")
            preload.rel = "preload"
            preload.href = HREF_FONT
            // preload.type = "font/truetype"
            preload.as = "font"
            preload.crossOrigin = "anonymous"
            fragment.appendChild(preload)
            document.head.appendChild(fragment)
        }
    }, [dispatch])

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
