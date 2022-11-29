import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit"

import {StateSchema} from "app/providers/store-provider"

import {Comment, CommentSchema} from "entities/comment"

import {fetchArticleCommentsData} from "../services/fetchArticleCommentsData"


const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
    // sortComparer: (a, b) => b.id.localeCompare(a.id),
})

const articleCommentsSlice = createSlice({
    name: "articleComments",
    initialState: commentsAdapter.getInitialState<CommentSchema>({
        isLoading: false,
        error: undefined,
        data: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
        update: (state, action: PayloadAction<Comment>) => {
            // state.data = {...state.data, ...action.payload}
            // state.copy = {...state.copy, ...action.payload}
        },
        revert: (state) => {
            state.validateErrors = undefined
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchArticleCommentsData.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        .addCase(fetchArticleCommentsData.fulfilled, (state, action: PayloadAction<Comment[]>) => {
            state.isLoading = false
            commentsAdapter.setAll(state, action.payload)
        })
        .addCase(fetchArticleCommentsData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

// export const {postAdded, postUpdated, reactionAdded} = articleCommentsSlice.actions

export const getArticleCommentsData = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.comments || commentsAdapter.getInitialState(),
)

export const {reducer: articleCommentsReducer} = articleCommentsSlice
