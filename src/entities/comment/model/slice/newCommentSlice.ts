import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import type { NewCommentSchema } from "../types/newComment"

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
    // extraReducers: (builder) => {},
})

export const { actions: newCommentActions } = newCommentSlice
export const { reducer: newCommentReducer } = newCommentSlice
