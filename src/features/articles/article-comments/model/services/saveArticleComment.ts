import {createAsyncThunk} from "@reduxjs/toolkit"

import {ThunkConfig} from "app/providers/store-provider"

import {getUser} from "entities/user"
import {getArticleData} from "entities/article"
import {Comment} from "entities/comment"

import {fetchArticleCommentsData} from "./fetchArticleCommentsData"


export const saveArticleComment = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    "article/saveCommentForArticle",
    async (text, thunkAPI) => {
        const {extra, dispatch, rejectWithValue, getState} = thunkAPI
        const user = getUser(getState())
        const article = getArticleData(getState())

        if (!user || !text || !article) return rejectWithValue("no data")

        try {
            const response = await extra.api.post<Comment>("/comments", {
                articleId: article.id,
                userId: user.id,
                text,
            })

            if (!response.data) {
                throw new Error()
            }

            // refresh state to get actual comments after sending a comment to server
            dispatch(fetchArticleCommentsData(article.id))

            return response.data
        } catch (e) {
            return rejectWithValue("error")
        }
    },
)
