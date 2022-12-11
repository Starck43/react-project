import {Rating} from "@/entities/rating"
import {rtkApi} from "@/shared/api/rtkApi"


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
                url: "/article-ratings/",
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        setArticleRating: build.mutation<void, ArticleRatingSchema>({
            query: (args) => ({
                url: "/article-ratings/",
                method: "POST",
                body: args,
            }),
        }),
    }),
})

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery
export const updateArticleRating = articleRatingApi.useSetArticleRatingMutation
