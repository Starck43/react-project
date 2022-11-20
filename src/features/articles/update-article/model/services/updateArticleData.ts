import {createAsyncThunk} from "@reduxjs/toolkit"

import {ThunkConfig} from "app/providers/store-provider"
import {Article, getArticleCopy} from "entities/article"



export const updateArticleData = createAsyncThunk<Article, string, ThunkConfig<string>>(
    "article/updateArticle",
    async (id, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI
        const data = getArticleCopy(getState())
        delete data?.user // TODO: mapping function for converting data to server interface

        if (!data) return rejectWithValue("error")

        try {
            const response = await extra.api.put<Article>(`/articles/${id}`, data)

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
