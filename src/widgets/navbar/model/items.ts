import React from "react"
import {AppRoutes, RoutesPath} from "shared/config/router"


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
]
