import React, {Suspense} from "react"

import {AppRouter} from "app/providers/router-provider"
import {Navbar} from "widgets/navbar"


const App = () => (
    <Suspense fallback="">
        <Navbar />
        <main>
            <AppRouter />
        </main>
        <footer />
    </Suspense>
)

export default App
