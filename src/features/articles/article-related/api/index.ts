import type {Article} from "@/entities/article"

import {buildAbsoluteUrl} from "@/shared/lib/helpers/urls"
import {rtkApi} from "@/shared/api/rtkApi"


const relatedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRelatedList: build.query<Article[], Record<string, number>>({
            query: ({limit}) => ({
                url: buildAbsoluteUrl(__API__, "articles"),
                params: {
                    _limit: limit,
                },
            }),
        }),
    }),
})

export const useArticleRelatedList = relatedApi.useGetArticleRelatedListQuery
