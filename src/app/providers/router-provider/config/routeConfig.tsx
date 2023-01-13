import { UserRole } from "@/entities/user"
import {
    AppRoutes,
    getRouteAbout,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteAuth,
    getRouteForbidden,
    getRouteHome,
    getRouteProfile,
} from "@/shared/const/router"
import type { AppRoutesProps } from "../types"

import { HomePage } from "@/pages/home"
import { AboutPage } from "@/pages/about"
import { AuthPage } from "@/pages/auth"
import { ProfilePage } from "@/pages/profile"
import { ArticleDetailsPage, ArticleEditPage, ArticlesPage } from "@/pages/articles"
import { ForbiddenPage } from "@/pages/forbidden"
import { NotFoundPage } from "@/pages/not-found-page"

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.HOME]: {
        path: getRouteHome(),
        element: <HomePage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: getRouteArticleDetails(":id"),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
        roles: [UserRole.ADMIN],
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(":id"),
        element: <ArticleEditPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.EDITOR],
    },
    [AppRoutes.AUTH]: {
        path: getRouteAuth(),
        element: <AuthPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(":id"),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    [AppRoutes.NOT_FOUND_PAGE]: {
        path: "/*",
        element: <NotFoundPage />,
    },
}
