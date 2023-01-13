import { createAsyncThunk } from "@reduxjs/toolkit"

import { ThunkConfig } from "@/app/providers/store-provider"

import {
    getArticlesLoading,
    getArticlesHasMore,
    getArticlesPageNum,
} from "../../selectors/article-list/getArticleListData"

import { articlesActions } from "../../slice/article-list/articleListSlice"
import { fetchArticleList } from "../fetchArticleList/fetchArticleList"

export const fetchArticleNextList = createAsyncThunk<void, void, ThunkConfig<string>>(
    "article/fetchArticleNextList",
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI
        const hasMore = getArticlesHasMore(getState())
        const page = getArticlesPageNum(getState())
        const isLoading = getArticlesLoading(getState())

        if (hasMore && !isLoading) {
            dispatch(articlesActions.setPage(page + 1))
            dispatch(fetchArticleList({}))
        }
    },
)
