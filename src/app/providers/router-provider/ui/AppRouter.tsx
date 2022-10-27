import React, {memo, Suspense, useMemo} from "react"
import {Route, Routes} from "react-router-dom"
import {useSelector} from "react-redux"

import {getUser} from "entities/user"
import {routeConfig} from "shared/config/router"
import {PageLoader} from "widgets/page-loader/PageLoader"


function AppRouter() {
    const {authData} = useSelector(getUser)

    const authenticatedRoutes = useMemo(() => Object.values(routeConfig)
    .filter((route) => !(route.authOnly && !authData)), [ authData ])

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(authenticatedRoutes).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<PageLoader />}>
                                {element}
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default memo(AppRouter)
