import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import {Article, ArticleSchema} from "entities/article"

import {updateArticleData} from "../services/updateArticleData"


const initialState: ArticleSchema = {
    isLoading: false,
    error: undefined,
    validateErrors: undefined,
}

export const updateArticleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(updateArticleData.pending, (state) => {
            state.isLoading = true
            state.validateErrors = undefined
        })
        .addCase(updateArticleData.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false
            state.validateErrors = undefined
        })
        .addCase(updateArticleData.rejected, (state, action) => {
            state.isLoading = false
        })
    },
})

// Action creators are generated for each case reducer function
export const {actions: updateArticleActions} = updateArticleSlice
export const {reducer: updateArticleReducer} = updateArticleSlice
