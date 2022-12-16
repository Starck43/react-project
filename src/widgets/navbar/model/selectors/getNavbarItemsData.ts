import {createSelector} from "@reduxjs/toolkit"
import {AppRoutes, RoutesPath} from "@/app/providers/router-provider/consts"

import {getUser} from "@/entities/user"

import ArticleIcon from "@/shared/assets/icons/article-20-20.svg"

import {groupNavbarItems} from "../../lib"
import {NavbarItemType} from "../../model/types/navbar"


export const getNavbarItemsData = createSelector(
    getUser,
    (user) => {
        const navbarItemsList: NavbarItemType[] = [
            {
                id: "homeLink",
                path: RoutesPath[AppRoutes.HOME],
                text: AppRoutes.HOME,
                group: "left",
            },
            {
                id: "aboutLink",
                path: RoutesPath[AppRoutes.ABOUT],
                text: AppRoutes.ABOUT,
                group: "left",
            },
        ]

        if (user) {
            const authItems = {
                id: "articlesLink",
                path: RoutesPath[AppRoutes.ARTICLES],
                text: AppRoutes.ARTICLES,
                Icon: ArticleIcon,
                authOnly: true,
                group: "left",
            }
            navbarItemsList.push(authItems as NavbarItemType)
        }

        return groupNavbarItems(navbarItemsList, "group", Boolean(user))
    },
)
