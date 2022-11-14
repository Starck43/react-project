import {createAsyncThunk} from "@reduxjs/toolkit"
import {ThunkConfig} from "app/providers/store-provider"
import {getArticlesPageLimit} from "entities/article/model/selectors/article-list/getArticleList"

import {Article} from "../../types/article"


export interface FetchArticlesListProps {
    page?: number
}


export const fetchArticleList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    "article/fetchArticleList",
    async (args, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI
        const {page = 1} = args
        const limit = getArticlesPageLimit(getState())

        try {
            const response = await extra.api.get<Article[]>("/articles", {
                params: {
                    _expand: "user",
                    _page: page,
                    _limit: limit,
                },
            })

            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue("error")
        }
    },
)
