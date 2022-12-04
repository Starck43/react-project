import {createAsyncThunk} from "@reduxjs/toolkit"

import {ThunkConfig} from "app/providers/store-provider"

import {Article, fetchArticleById, getArticleCopy} from "entities/article"


export const updateArticleData = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
    "article/updateArticle",
    async (id, thunkAPI) => {
        const {extra, dispatch, rejectWithValue, getState} = thunkAPI
        const data = {...getArticleCopy(getState())}
        delete data?.user // TODO: mapping function for converting data to server interface

        if (!data || !id) return rejectWithValue("no data")

        try {
            const response = await extra.api.put<Article>(`/articles/${id}`, data)

            if (!response.data) {
                throw new Error()
            }
            // get renewed data from server with dispatching to store
            // dispatch(articleActions.updateData(copy)
            dispatch(fetchArticleById(id))

            return response.data
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
            return rejectWithValue("error")
        }
    },
)
