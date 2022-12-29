import type {Rating} from "@/entities/rating"

import {rtkApi} from "@/shared/api/rtkApi"
import {buildAbsoluteUrl} from "@/shared/lib/helpers/urls"


interface ArticleRatingSchema {
    userId?: string
    articleId: string
    value?: number
    feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], ArticleRatingSchema>({
            query: ({userId, articleId}) => ({
                url: buildAbsoluteUrl(__API__, "article-ratings"),
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        setArticleRating: build.mutation<void, ArticleRatingSchema>({
            query: (args) => ({
                url: buildAbsoluteUrl(__API__, "article-ratings"),
                method: "POST",
                body: args,
            }),
        }),
    }),
})

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery
export const updateArticleRating = articleRatingApi.useSetArticleRatingMutation
