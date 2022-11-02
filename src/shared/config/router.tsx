import {RouteProps} from "react-router-dom"

import {HomePage} from "pages/home"
import {AboutPage} from "pages/about"
import {AuthPage} from "pages/auth"
import {ProfilePage} from "pages/profile"
import {ArticleDetailsPage} from "pages/articles/article-details"
import {ArticlesPage} from "pages/articles/articles-page"
import {NotFoundPage} from "pages/not-found-page"


export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    HOME = "home",
    ABOUT = "about",
    ARTICLES = "articles",
    ARTICLE_DETAILS = "article_details",
    AUTH = "auth",
    PROFILE = "profile",
    // must be last to search
    NOT_FOUND_PAGE = "notfound"
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.ARTICLE_DETAILS]: "/articles/", // TODO: add "id" to route
    [AppRoutes.AUTH]: "/auth",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.NOT_FOUND_PAGE]: "/*",
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.HOME]: {
        path: RoutesPath[AppRoutes.HOME],
        element: <HomePage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutesPath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutesPath[AppRoutes.ARTICLES],
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutesPath[AppRoutes.ARTICLE_DETAILS]}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.AUTH]: {
        path: RoutesPath[AppRoutes.AUTH],
        element: <AuthPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutesPath[AppRoutes.PROFILE],
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND_PAGE]: {
        path: RoutesPath[AppRoutes.NOT_FOUND_PAGE],
        element: <NotFoundPage />,
    },
}
