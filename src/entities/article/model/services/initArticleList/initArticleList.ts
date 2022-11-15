import {createAsyncThunk} from "@reduxjs/toolkit"

import {ThunkConfig} from "app/providers/store-provider"

import {fetchArticleList} from "../fetchArticleList/fetchArticleList"
import {getArticlesMounted} from "../../selectors/article-list/getArticleList"
import {articlesActions} from "../../slice/article-list/articleListSlice"


export const initArticleList = createAsyncThunk<void, void, ThunkConfig<string>>(
    "articles/initArticleList",
    async (_, thunkAPI) => {
        const {dispatch, getState} = thunkAPI

        const mounted = getArticlesMounted(getState())
        if (!mounted) {
            dispatch(articlesActions.initState())
            dispatch(fetchArticleList({page: 1}))
        }
    },
)
