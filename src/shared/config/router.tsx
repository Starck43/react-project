import {RouteProps} from "react-router-dom"

import {HomePage} from "pages/home"
import {AboutPage} from "pages/about"


export enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about'
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutesPath[AppRoutes.HOME],
        element: <HomePage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutesPath[AppRoutes.ABOUT],
        element: <AboutPage />
    },
}
