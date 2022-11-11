import {createAsyncThunk} from "@reduxjs/toolkit"
import {ThunkConfig} from "app/providers/store-provider"

import {Comment} from "entities/comment"


export const fetchCommentsData = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    "comment/fetchCommentData",
    async (articleId, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI

        if (!articleId) return rejectWithValue("error")

        try {
            const response = await extra.api.get<Comment[]>("/comments/", {
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
