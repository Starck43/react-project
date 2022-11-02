import React from "react"
import {AppRoutes, RoutesPath} from "shared/config/router"

import ArticleIcon from "shared/assets/icons/article-20-20.svg"


export interface NavbarItemType {
    path: string
    text?: string
    Icon?: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean
}

export const NavbarItemsList: NavbarItemType[] = [
    {
        path: RoutesPath[AppRoutes.HOME],
        text: AppRoutes.HOME,
    },
    {
        path: RoutesPath[AppRoutes.ABOUT],
        text: AppRoutes.ABOUT,
    },
    {
        path: RoutesPath[AppRoutes.ARTICLES],
        text: AppRoutes.ARTICLES,
        Icon: ArticleIcon,
        authOnly: true,
    },
]
