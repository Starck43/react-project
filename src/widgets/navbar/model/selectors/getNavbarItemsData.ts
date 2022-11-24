import {createSelector} from "@reduxjs/toolkit"

import {getUser} from "entities/user"

import {AppRoutes, RoutesPath} from "shared/config/router"
import AuthIcon from "shared/assets/icons/auth.svg"
import ArticleIcon from "shared/assets/icons/article-20-20.svg"

import {groupNavbarItems} from "widgets/navbar/libs"

import {NavbarItemType} from "widgets/navbar/model/types/navbar"


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
            {
                id: "articlesLink",
                path: RoutesPath[AppRoutes.ARTICLES],
                text: AppRoutes.ARTICLES,
                Icon: ArticleIcon,
                authOnly: true,
                group: "left",
            },
        ]

        const authItems = (user)
            ? {
                id: "profileLink",
                path: RoutesPath[AppRoutes.PROFILE] + user.id,
                text: user.username,
                authOnly: true,
                group: "right",
            }
            : {
                id: "authLink",
                path: RoutesPath[AppRoutes.AUTH],
                Icon: AuthIcon,
                group: "right",
            }

        navbarItemsList.push(authItems as NavbarItemType)
        return groupNavbarItems(navbarItemsList, "group", Boolean(user))
    },
)
