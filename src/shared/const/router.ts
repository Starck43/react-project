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

export const getRouteHome = () => "/"
export const getRouteAbout = () => "/about"
export const getRouteArticles = () => "/articles"
export const getRouteArticleDetails = (id: string) => `/articles/${id}`
export const getRouteArticleCreate = () => "/articles/create"
export const getRouteArticleEdit = (id?: string) => (id ? `/articles/${id}/edit` : getRouteArticleCreate())
export const getRouteAuth = () => "/auth"
export const getRouteProfile = (id?: string) => (id ? `/profile/${id}` : getRouteAuth())
export const getRouteForbidden = () => "/forbidden"
