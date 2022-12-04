import {Article} from "entities/article"
import {rtkApi} from "shared/api/rtkApi"


const relatedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRelatedList: build.query<Article[], Record<string, number>>({
            query: ({limit}) => ({
                url: "/articles/",
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
})

export const useArticleRelatedList = relatedApi.useGetArticleRelatedListQuery
