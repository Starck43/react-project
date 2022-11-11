import {createSlice, PayloadAction} from "@reduxjs/toolkit"

import {NewCommentSchema} from "../types/newComment"


const initialState: NewCommentSchema = {
    text: undefined,
    error: undefined,
}

export const newCommentSlice = createSlice({
    name: "newComment",
    initialState,
    reducers: {
        update: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        },
    },
    extraReducers: (builder) => {
/*
        builder
        .addCase(fetchNewCommentData.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        .addCase(fetchNewCommentData.fulfilled, (state, action: PayloadAction<NewComment>) => {
            state.isLoading = false
            // state.copy = action.payload
            state.data = action.payload
        })
        .addCase(fetchNewCommentData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        .addCase(updateNewCommentData.pending, (state) => {
            state.isLoading = true
            // state.validateErrors = undefined
        })
        .addCase(updateNewCommentData.fulfilled, (state, action: PayloadAction<NewComment>) => {
            state.isLoading = false
            // state.data = state.copy
            // state.validateErrors = undefined
        })
        .addCase(updateNewCommentData.rejected, (state, action) => {
            state.isLoading = false
            // state.validateErrors = action.payload
        })
        */
    },
})

export const {actions: newCommentActions} = newCommentSlice
export const {reducer: newCommentReducer} = newCommentSlice
