import {RouteProps} from "react-router-dom"

import {UserRole} from "entities/user"

import {AppRoutes} from "shared/const/appRoutes"
import {AboutPage} from "pages/about"
import {HomePage} from "pages/home"
import {AuthPage} from "pages/auth"
import {ProfilePage} from "pages/profile"
import {ArticleDetailsPage} from "pages/articles/details"
import {ArticleEditPage} from "pages/articles/edit"
import {ArticlesPage} from "pages/articles/list"
import {NotFoundPage} from "pages/not-found-page"
import {ForbiddenPage} from "pages/forbidden"


export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRole[]
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.ARTICLE_DETAILS]: "/articles/", // + ":id" TODO: add "id" to route
    [AppRoutes.ARTICLE_CREATE]: "/articles/create",
    [AppRoutes.ARTICLE_EDIT]: "/articles/:id/edit",
    [AppRoutes.AUTH]: "/auth",
    [AppRoutes.PROFILE]: "/profile/", // + ":id"
    [AppRoutes.FORBIDDEN]: "/forbidden",
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
    [AppRoutes.ARTICLE_CREATE]: {
        path: `${RoutesPath[AppRoutes.ARTICLE_CREATE]}`,
        element: <ArticleEditPage />,
        authOnly: true,
        roles: [ UserRole.ADMIN ],
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: `${RoutesPath[AppRoutes.ARTICLE_EDIT]}`,
        element: <ArticleEditPage />,
        authOnly: true,
        roles: [ UserRole.ADMIN, UserRole.EDITOR ],
    },
    [AppRoutes.AUTH]: {
        path: RoutesPath[AppRoutes.AUTH],
        element: <AuthPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutesPath[AppRoutes.PROFILE]}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutesPath[AppRoutes.FORBIDDEN],
        element: <ForbiddenPage />,
    },
    [AppRoutes.NOT_FOUND_PAGE]: {
        path: RoutesPath[AppRoutes.NOT_FOUND_PAGE],
        element: <NotFoundPage />,
    },
}
