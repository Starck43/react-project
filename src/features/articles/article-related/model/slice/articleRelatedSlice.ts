import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"

import { StateSchema } from "@/app/providers/store-provider"

import { Article } from "@/entities/article"

import { ArticleRelatedSchema } from "../types/articleRelatedSchema"
import { fetchArticleRelatedData } from "../services/fetchArticleRelatedData"

const articleRelatedAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
    // sortComparer: (a, b) => b.id.localeCompare(a.id),
})

const articleRelatedSlice = createSlice({
    name: "article/related",
    initialState: articleRelatedAdapter.getInitialState<ArticleRelatedSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRelatedData.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchArticleRelatedData.fulfilled, (state, action) => {
                state.isLoading = false
                articleRelatedAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleRelatedData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const getArticleRelatedData =
    articleRelatedAdapter.getSelectors<StateSchema>(
        (state) =>
            state.articleRelated || articleRelatedAdapter.getInitialState(),
    )

export const { reducer: articleRelatedReducer } = articleRelatedSlice
