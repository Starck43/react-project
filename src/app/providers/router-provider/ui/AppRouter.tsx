import RequireAuth from "app/providers/router-provider/ui/RequireAuth"
import React, {memo, Props, Suspense, useCallback} from "react"
import {Route, Routes} from "react-router-dom"

import {AppRoutes, AppRoutesProps, routeConfig, RoutesPath} from "shared/config/router"
import {PageLoader} from "widgets/page-loader/PageLoader"


const AppRouter = () => {
    const renderCallback = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly
                    ? <RequireAuth to={RoutesPath[AppRoutes.AUTH]}>{element}</RequireAuth>
                    : element}
            />
        )
    }, [])

    return (
        <Routes>
            {Object.values(routeConfig).map(renderCallback)}
        </Routes>
    )
}

export default memo(AppRouter)
