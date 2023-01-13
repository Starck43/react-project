import { createAsyncThunk } from "@reduxjs/toolkit"

import { ThunkConfig } from "@/app/providers/store-provider"

import { addQueryParams } from "@/shared/lib/helpers/urls"

import type { Article } from "../../types/article"
import { ArticleType } from "../../consts"
import {
    getArticlesOrder,
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from "../../selectors/article-list/getArticleListData"

export interface FetchArticlesListProps {
    replace?: boolean
}

export const fetchArticleList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    "articles/fetchArticleList",
    async (args, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI
        const page = getArticlesPageNum(getState())
        const limit = getArticlesPageLimit(getState())
        const sort = getArticlesSort(getState())
        const order = getArticlesOrder(getState())
        const search = getArticlesSearch(getState())
        const type = getArticlesType(getState())

        try {
            addQueryParams({ sort, order, type })
            const response = await extra.api.get<Article[]>("/articles/", {
                params: {
                    _expand: "user",
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    type: type === ArticleType.ALL ? undefined : type,
                    q: search,
                },
            })
            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
            return rejectWithValue("error")
        }
    },
)
