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
} from "entities/article"

import {ArticleViewSwitcher, ArticleViewAlign} from "features/articles"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect"
import Header, {HeaderAlign} from "shared/ui/header/Header"


const initialReducers: ReducerList = {articles: articlesReducer}

function ArticlesPage() {
    const {t} = useTranslation("articles")

    const dispatch = useAppDispatch()
    const articles = useSelector(getArticlesData.selectAll)
    const isLoading = useSelector(getArticlesLoading)
    const error = useSelector(getArticlesError)
    const view = useSelector(getArticlesView)

    useInitialEffect(() => {
        dispatch(fetchArticleList())
        dispatch(articlesActions.initState())
    })

    const onChangeViewClick = useCallback((view: ArticleView) => {
        dispatch(articlesActions.setView(view))
    }, [ dispatch ])

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className="container">
                <Header title={t("статьи")} shadowed align={HeaderAlign.CENTER} />
                <ArticleViewSwitcher
                    view={view}
                    align={ArticleViewAlign.RIGHT}
                    onChangeViewHandler={onChangeViewClick}
                />
                <ArticleList articles={articles} isLoading={isLoading} error={error} view={view} />
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
