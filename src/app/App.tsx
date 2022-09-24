import React, {Suspense} from "react"

import useTheme from "app/providers/theme-provider/lib/useTheme"
import {AppRouter} from "app/providers/router-provider"
import {Navbar} from "widgets/navbar"
import {Sidebar} from "widgets/sidebar"
import {isDarkness} from "shared/lib/helpers/datetime"
import {Theme} from "app/providers/theme-provider"


const App = () => {
    const {theme, toggleTheme} = useTheme(isDarkness(18, 7) ? Theme.DARK : Theme.LIGHT) //TODO Move initial theme parameter to other place
    return (
        <Suspense fallback="">
            <Navbar theme={theme}/>
            <main>
                <Sidebar
                    theme={theme} toggleTheme={toggleTheme}
                    className="sidebar__left"
                />
                <div className="content">
                    <AppRouter/>
                </div>
            </main>
            <footer/>
        </Suspense>
    )
}

export default App