import {memo, Suspense, useCallback} from "react"
import {Route, Routes} from "react-router-dom"

import type {AppRoutesProps} from "../types"
import {AppRoutes, RoutesPath} from "../consts"
import {routeConfig} from "../config/routeConfig"
import RequireAuth from "./RequireAuth"

import {PageLoader} from "@/widgets/page-loader"


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
                    ? <RequireAuth to={RoutesPath[AppRoutes.AUTH]} roles={route.roles}>{element}</RequireAuth>
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
