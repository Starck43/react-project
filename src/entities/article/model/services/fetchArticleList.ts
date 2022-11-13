import {createAsyncThunk} from "@reduxjs/toolkit"
import {ThunkConfig} from "app/providers/store-provider"

import {Article} from "../types/article"


export const fetchArticleList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    "article/fetchArticleList",
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI

        try {
            const response = await extra.api.get<Article[]>("/articles", {
                params: {
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
