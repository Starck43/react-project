import { createAsyncThunk } from "@reduxjs/toolkit"

import { ThunkConfig } from "@/app/providers/store-provider"

import { ArticleOrderType, ArticleSortType, ArticleType } from "../../consts"
import { getArticlesMounted } from "../../selectors/article-list/getArticleListData"
import { fetchArticleList } from "../fetchArticleList/fetchArticleList"
import { articlesActions } from "../../slice/article-list/articleListSlice"

export const initArticleList = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    "articles/initArticleList",
    async (searchParams, thunkAPI) => {
        const { dispatch, getState } = thunkAPI

        const sortUrl = searchParams.get("sort")
        const orderUrl = searchParams.get("order")
        const typeUrl = searchParams.get("type")

        dispatch?.(articlesActions.setOrder(orderUrl as ArticleOrderType))
        dispatch?.(articlesActions.setSort(sortUrl as ArticleSortType))
        dispatch?.(articlesActions.setType(typeUrl as ArticleType))

        const mounted = getArticlesMounted(getState())

        if (!mounted) {
            dispatch(articlesActions.initState())
            dispatch(fetchArticleList({}))
        }
    },
)
