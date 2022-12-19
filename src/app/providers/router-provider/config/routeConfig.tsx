import {UserRole} from "@/entities/user"
import {AppRoutes, RoutesPath} from "@/shared/const/router"
import type {AppRoutesProps} from "../types"


import {HomePage} from "@/pages/home"
import {AboutPage} from "@/pages/about"
import {AuthPage} from "@/pages/auth"
import {ProfilePage} from "@/pages/profile"
import {ArticleDetailsPage, ArticleEditPage, ArticlesPage} from "@/pages/articles"
import {ForbiddenPage} from "@/pages/forbidden"
import {NotFoundPage} from "@/pages/not-found-page"


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
