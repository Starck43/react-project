import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit"

import {StateSchema} from "@/app/providers/store-provider"

import {ARTICLES_VIEW_MODE_KEY} from "@/shared/const/localStorage"

import type {Article} from "../../types/article"
import type {ArticleListSchema} from "../../types/articleListSchema"
import {ArticleOrderType, ArticleSortType, ArticleType, ArticleView} from "../../consts"
import {fetchArticleList} from "../../services/fetchArticleList/fetchArticleList"

import {LIST_VIEW_PER_PAGE, TILE_VIEW_PER_PAGE} from "../../../lib/constants"


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
        sort: ArticleSortType.TITLE,
        order: ArticleOrderType.ASC,
        search: "",
        type: ArticleType.ALL,
        page: 1,
        limit: LIST_VIEW_PER_PAGE,
        hasMore: true,
        ids: [],
        entities: {},
        _mounted: false,
    }),
    reducers: {
        initState: (state) => {
            const mode = localStorage.getItem(ARTICLES_VIEW_MODE_KEY) as ArticleView
            state.limit = mode === ArticleView.LIST ? LIST_VIEW_PER_PAGE : TILE_VIEW_PER_PAGE
            state.view = mode
            state._mounted = true
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
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLES_VIEW_MODE_KEY, action.payload)
        },
        setOrder: (state, action: PayloadAction<ArticleOrderType>) => {
            state.order = action.payload
        },
        setSort: (state, action: PayloadAction<ArticleSortType>) => {
            state.sort = action.payload
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchArticleList.pending, (state, action) => {
            state.isLoading = true
            state.error = undefined
            if (action.meta.arg.replace) {
                articlesAdapter.removeAll(state)
            }
        })
        .addCase(fetchArticleList.fulfilled, (state, action) => {
            state.isLoading = false
            state.hasMore = action.payload.length >= state.limit

            if (action.meta.arg.replace) {
                articlesAdapter.setAll(state, action.payload)
            } else {
                articlesAdapter.addMany(state, action.payload)
            }
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
