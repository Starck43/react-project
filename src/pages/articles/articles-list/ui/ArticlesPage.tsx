import {memo, useCallback} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import {
    ArticleList,
    articlesActions,
    articlesReducer,
    ArticleView,
    fetchArticleList,
    getArticlesData,
    getArticlesError,
    getArticlesLoading,
    getArticlesView,
    fetchArticleNextList,
} from "entities/article"

import {ArticleViewSwitcher, ArticleViewAlign} from "features/articles"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect"
import Header, {HeaderAlign} from "shared/ui/header/Header"
import {Page} from "shared/ui/Page/Page"


const initialReducers: ReducerList = {articles: articlesReducer}

function ArticlesPage() {
    const {t} = useTranslation("articles")

    const dispatch = useAppDispatch()
    const articles = useSelector(getArticlesData.selectAll)
    const isLoading = useSelector(getArticlesLoading)
    const error = useSelector(getArticlesError)
    const view = useSelector(getArticlesView)

    useInitialEffect(() => {
        // it goes first always
        dispatch(articlesActions.initState())
        dispatch(fetchArticleList({page: 1}))
    })

    const onChangeViewHandler = useCallback((view: ArticleView) => {
        dispatch(articlesActions.setView(view))
    }, [ dispatch ])

    const onLoadNext = useCallback(() => {
        dispatch(fetchArticleNextList())
    }, [ dispatch ])

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Page onScrollToEnd={onLoadNext}>
                <Header title={t("статьи")} shadowed align={HeaderAlign.CENTER} />
                <ArticleViewSwitcher
                    view={view}
                    align={ArticleViewAlign.RIGHT}
                    onChangeViewClick={onChangeViewHandler}
                />
                <ArticleList articles={articles} isLoading={isLoading} error={error} view={view} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
