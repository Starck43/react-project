import {memo, Suspense, useCallback} from "react"
import {Route, Routes} from "react-router-dom"

import {AppRoutes, RoutesPath} from "@/shared/const/router"

import type {AppRoutesProps} from "../types"
import {routeConfig} from "../config/routeConfig"
import RequireAuth from "./RequireAuth"

import {Loader} from "@/shared/ui/loader/Loader"


const AppRouter = () => {
    const renderRoutesCallback = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<Loader />}>
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
