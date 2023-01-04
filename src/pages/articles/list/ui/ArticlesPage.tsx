import {memo, useCallback} from "react"
import {useSearchParams} from "react-router-dom"
import {useTranslation} from "react-i18next"

import {fetchArticleNextList, articlesReducer, initArticleList} from "@/entities/article"

import {InfiniteArticleList} from "@/features/articles"

import DynamicModuleLoader, {ReducerList} from "@/shared/lib/components/DynamicModuleLoader"
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch"
import {useInitialEffect} from "@/shared/lib/hooks/useInitialEffect"
import {Header} from "@/shared/ui/header"

import {Page} from "@/widgets/page"

import ArticlesPageControls from "./controls-bar/ArticlesPageControls"


const initialReducers: ReducerList = {articles: articlesReducer}

function ArticlesPage() {
    const {t} = useTranslation("articles")
    const dispatch = useAppDispatch()
    const [ urlQuery ] = useSearchParams()

    useInitialEffect(() => {
        // it will be done only once on mounting
        dispatch(initArticleList(urlQuery))
    })

    const LoadNext = useCallback(() => {
        dispatch(fetchArticleNextList())
    }, [ dispatch ])

    return (
        <DynamicModuleLoader reducers={initialReducers} destroyOnUnmount={false}>
            <Page
                id="articleListPage"
                data-testid="ArticleListPage"
                onScrollToEnd={LoadNext}
                saveScrollPos
            >
                <Header tag="h2" title={t("статьи")} align="center" shadowed />
                <ArticlesPageControls className="mb-2" />
                <InfiniteArticleList />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
