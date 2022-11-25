import {memo, useCallback} from "react"
import {useSearchParams} from "react-router-dom"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {
    getArticlesData,
    getArticlesError,
    getArticlesLoading,
    getArticlesView,
    ArticleList,
    fetchArticleNextList,
    initArticleList,
    articlesReducer,
} from "entities/article"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect"
import Header from "shared/ui/header/Header"

import {Page} from "widgets/page"

import ArticlesPageControls from "./controls-bar/ArticlesPageControls"


const initialReducers: ReducerList = {articles: articlesReducer}

function ArticlesPage() {
    const {t} = useTranslation("articles")

    const dispatch = useAppDispatch()
    const articles = useSelector(getArticlesData.selectAll)
    const view = useSelector(getArticlesView)
    const isLoading = useSelector(getArticlesLoading)
    const error = useSelector(getArticlesError)
    const [ urlQuery ] = useSearchParams()

    useInitialEffect(() => {
        // it will be done only once on mounting
        dispatch(initArticleList(urlQuery))
    })

    const onLoadNext = useCallback(() => {
        dispatch(fetchArticleNextList())
    }, [ dispatch ])

    return (
        <DynamicModuleLoader reducers={initialReducers} destroyOnUnmount={false}>
            <Page onScrollToEnd={onLoadNext} saveScrollPos>
                <Header title={t("статьи")} align="center" shadowed />
                <ArticlesPageControls className="mb-2" />
                <ArticleList articles={articles} isLoading={isLoading} error={error} view={view} shadowed />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
