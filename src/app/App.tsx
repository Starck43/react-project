import React, {Suspense} from "react"

import {Theme} from "app/providers/theme-provider"
import useTheme from "app/providers/theme-provider/lib/useTheme"
import {AppRouter} from "app/providers/router-provider"
import {Navbar} from "widgets/navbar"
import {isDarkness} from "shared/lib/helpers/datetime"


function App() {
    const {theme} = useTheme(isDarkness(18, 7) ? Theme.DARK : Theme.LIGHT) // TODO Move initial theme parameter to other place
    return (
        <Suspense fallback="">
            <Navbar theme={theme} />
            <main>
                <AppRouter />
            </main>
            <footer />
        </Suspense>
    )
}

export default App
