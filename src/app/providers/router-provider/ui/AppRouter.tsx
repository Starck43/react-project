import React, {Suspense} from "react"
import {Route, Routes} from "react-router-dom"

import {routeConfig} from "shared/config/router"
import {PageLoader} from "widgets/page-loader/PageLoader"


function AppRouter() {
    return (
        <Suspense fallback={<PageLoader className="lds-roller" />}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<PageLoader className="lds-roller" />}>
                                {element}
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter
