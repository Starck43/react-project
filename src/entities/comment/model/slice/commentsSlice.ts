import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit"

import {StateSchema} from "app/providers/store-provider"
import {ArticleComment, ArticleCommentsSchema, fetchCommentsData} from "entities/comment"



const commentsAdapter = createEntityAdapter<ArticleComment>({
    selectId: (comment) => comment.id,
    // sortComparer: (a, b) => b.id.localeCompare(a.id),
})

const commentsSlice = createSlice({
    name: "comments",
    initialState: commentsAdapter.getInitialState<ArticleCommentsSchema>({
        isLoading: false,
        error: undefined,
        data: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
        update: (state, action: PayloadAction<ArticleComment>) => {
            // state.data = {...state.data, ...action.payload}
            // state.copy = {...state.copy, ...action.payload}
        },
        revert: (state) => {
            state.validateErrors = undefined
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCommentsData.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        .addCase(fetchCommentsData.fulfilled, (state, action: PayloadAction<ArticleComment[]>) => {
            state.isLoading = false
            commentsAdapter.setAll(state, action.payload)
        })
        .addCase(fetchCommentsData.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

// export const {postAdded, postUpdated, reactionAdded} = articleCommentsSlice.actions

export const getCommentsData = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.comments || commentsAdapter.getInitialState(),
)

export const {reducer: commentsReducer} = commentsSlice
