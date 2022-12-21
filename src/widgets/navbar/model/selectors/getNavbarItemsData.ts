import {createSelector} from "@reduxjs/toolkit"

import {getUser} from "@/entities/user"

import {AppRoutes, getRouteAbout, getRouteArticles, getRouteHome} from "@/shared/const/router"
import ArticleIcon from "@/shared/assets/icons/article-20-20.svg"

import {groupNavbarItems} from "../../lib"
import {NavbarItemType} from "../../model/types/navbar"


export const getNavbarItemsData = createSelector(
    getUser,
    (user) => {
        const navbarItemsList: NavbarItemType[] = [
            {
                id: "homeLink",
                path: getRouteHome(),
                text: AppRoutes.HOME,
                group: "left",
            },
            {
                id: "aboutLink",
                path: getRouteAbout(),
                text: AppRoutes.ABOUT,
                group: "left",
            },
        ]

        if (user) {
            const authItems = {
                id: "articlesLink",
                path: getRouteArticles(),
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
