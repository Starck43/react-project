import {createAsyncThunk} from "@reduxjs/toolkit"
import {ThunkConfig} from "app/providers/store-provider"

import {Article} from "entities/article"


export const fetchArticleRelatedData = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    "article/fetchArticleRelated",
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI

        try {
            const response = await extra.api.get<Article[]>("/articles/", {
                params: {
                    _expand: "user",
                    _limit: 4,
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
