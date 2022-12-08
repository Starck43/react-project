import {createSlice} from "@reduxjs/toolkit"

import {ArticleSchema} from "@/entities/article"

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
        .addCase(updateArticleData.fulfilled, (state) => {
            state.isLoading = false
            state.validateErrors = undefined
        })
        .addCase(updateArticleData.rejected, (state) => {
            state.isLoading = false
        })
    },
})

// Action creators are generated for each case reducer function
export const {actions: updateArticleActions} = updateArticleSlice
export const {reducer: updateArticleReducer} = updateArticleSlice
