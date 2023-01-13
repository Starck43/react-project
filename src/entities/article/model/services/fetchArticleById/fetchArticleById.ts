import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "@/app/providers/store-provider"

import { Article } from "../../types/article"

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
    "article/fetchArticleById",
    async (id, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        if (!id) return rejectWithValue("no id")

        try {
            const response = await extra.api.get<Article>(`/articles/${id}`, {
                params: {
                    _expand: "user",
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
