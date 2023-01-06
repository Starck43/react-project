import { createSelector } from "@reduxjs/toolkit"

import { getArticleData } from "@/entities/article"
import { getUserRoles, UserRole } from "@/entities/user"

export const getEditArticleData = createSelector(
    getArticleData,
    getUserRoles,
    (article, roles) =>
        article &&
        (Boolean(roles?.includes(UserRole.EDITOR)) ||
            Boolean(roles?.includes(UserRole.ADMIN))),
)
