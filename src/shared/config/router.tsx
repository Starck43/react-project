import {RouteProps} from "react-router-dom"

import {HomePage} from "pages/home"
import {AboutPage} from "pages/about"
import {NotFoundPage} from "pages/not-found-page"

export enum AppRoutes {
    HOME = "home",
    ABOUT = "about",
    NOT_FOUND_PAGE = "notfound"
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.NOT_FOUND_PAGE]: "/*",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutesPath[AppRoutes.HOME],
        element: <HomePage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutesPath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND_PAGE]: {
        path: RoutesPath[AppRoutes.NOT_FOUND_PAGE],
        element: <NotFoundPage />,
    },
}
