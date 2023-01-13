import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { fetchArticleById } from "../../services/fetchArticleById/fetchArticleById"

import { Article } from "../../types/article"
import { ArticleSchema } from "../../types/articleSchema"

const initialState: ArticleSchema = {
    isLoading: false,
    error: undefined,
    form: undefined,
}

export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {
        updateCopy: (state, action: PayloadAction<Article>) => {
            state.form = { ...state.form, ...action.payload }
        },
        updateData: (state, action: PayloadAction<Article>) => {
            state.data = action.payload
        },
        revert: (state) => {
            state.form = state.data
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

// Action creators are generated for each case reducer function
export const { actions: articleActions } = articleSlice
export const { reducer: articleReducer } = articleSlice
