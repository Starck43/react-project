import { memo, Suspense, useCallback } from "react"
import { Route, Routes } from "react-router-dom"

import { getRouteAuth } from "@/shared/const/router"
import { Loader } from "@/shared/ui/loader"

import type { AppRoutesProps } from "../types"
import { routeConfig } from "../config/routeConfig"
import RequireAuth from "./RequireAuth"

export const AppRouter = () => {
    const renderRoutesCallback = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<Loader />}>{route.element}</Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? (
                        <RequireAuth to={getRouteAuth()} roles={route.roles}>
                            {element}
                        </RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        )
    }, [])

    return (
        <Routes>{Object.values(routeConfig).map(renderRoutesCallback)}</Routes>
    )
}

export default memo(AppRouter)
