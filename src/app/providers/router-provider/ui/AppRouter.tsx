import React, {memo, Suspense, useCallback} from "react"
import {Route, Routes} from "react-router-dom"

import RequireAuth from "app/providers/router-provider/ui/RequireAuth"
import {PageLoader} from "widgets/page-loader/PageLoader"
import {AppRoutes, AppRoutesProps, routeConfig, RoutesPath} from "shared/config/router"


const AppRouter = () => {
    const renderRoutesCallback = useCallback((route: AppRoutesProps) => {
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
            {Object.values(routeConfig).map(renderRoutesCallback)}
        </Routes>
    )
}

export default memo(AppRouter)
