import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit"

import {StateSchema} from "app/providers/store-provider"
import {fetchArticleList} from "entities/article/model/services/fetchArticleList/fetchArticleList"
import {ARTICLES_VIEW_MODE_KEY} from "shared/const/localStorage"
import {Article, ArticleView} from "../../types/article"
import {ArticleListSchema} from "../../types/articleListSchema"


const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
    // sortComparer: (a, b) => b.id.localeCompare(a.id),
})

const articlesSlice = createSlice({
    name: "articles",
    initialState: articlesAdapter.getInitialState<ArticleListSchema>({
        isLoading: false,
        error: undefined,
        view: ArticleView.LIST,
        page: 1,
        limit: 0,
        hasMore: true,
        ids: [],
        entities: {},
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLES_VIEW_MODE_KEY, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        },
        setHasMore: (state, action: PayloadAction<boolean>) => {
            state.hasMore = action.payload
        },
        initState: (state) => {
            const mode = localStorage.getItem(ARTICLES_VIEW_MODE_KEY) as ArticleView
            state.limit = mode === ArticleView.LIST ? 3 : 9
            state.view = mode
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchArticleList.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        .addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.isLoading = false
            articlesAdapter.addMany(state, action.payload)
            state.hasMore = action.payload.length > 0
        })
        .addCase(fetchArticleList.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

// export const {postAdded, postUpdated, reactionAdded} = articleArticlesSlice.actions

export const getArticlesData = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articles || articlesAdapter.getInitialState(),
)

export const {reducer: articlesReducer, actions: articlesActions} = articlesSlice
