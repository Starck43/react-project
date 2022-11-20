import {createSelector} from "@reduxjs/toolkit"

import {getArticleData} from "entities/article"
import {getUser} from "entities/user"


export const getEditArticleData = createSelector(
    getArticleData,
    getUser,
    (article, user) => {
        if (!article || !user) {
            return false
        }
        return article.user?.id === user.id
    },
)
