import {createAsyncThunk} from "@reduxjs/toolkit"
import {ThunkConfig} from "app/providers/store-provider"

import {ArticleComment} from "../types/comments"


export const fetchCommentsData = createAsyncThunk<ArticleComment[], string | undefined, ThunkConfig<string>>(
    "comments/fetchCommentData",
    async (articleId, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI

        if (!articleId) return rejectWithValue("error")

        try {
            const response = await extra.api.get<ArticleComment[]>("/comments/", {
                params: {
                    articleId,
                    _expand: "user",
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
