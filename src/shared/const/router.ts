export enum AppRoutes {
    HOME = "home",
    ABOUT = "about",
    ARTICLES = "articles",
    ARTICLE_DETAILS = "article_details",
    ARTICLE_CREATE = "article_create",
    ARTICLE_EDIT = "article_edit",
    AUTH = "auth",
    PROFILE = "profile",
    FORBIDDEN = "forbidden",
    // must be last to search
    NOT_FOUND_PAGE = "notfound"
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
