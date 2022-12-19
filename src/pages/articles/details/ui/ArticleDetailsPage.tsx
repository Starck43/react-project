import {memo} from "react"
import {useTranslation} from "react-i18next"
import {useParams} from "react-router-dom"

import {articleReducer, ArticleDetailsCard} from "@/entities/article"

import {
ArticleRatingCard,
    articleRelatedReducer,
    articleCommentsReducer,
    ArticleCommentsCard,
    ArticleRelatedList,
} from "@/features/articles"

import DynamicModuleLoader, {ReducerList} from "@/shared/lib/components/DynamicModuleLoader"
import {Info} from "@/shared/ui/info"

import {Page} from "@/widgets/page"

import {ArticleHeader} from "./header/ArticleHeader"

// import cls from "./ArticleDetailsPage.module.sass"

const initialReducers: ReducerList = {
    article: articleReducer,
    articleRelated: articleRelatedReducer,
    comments: articleCommentsReducer,
}

function ArticleDetailsPage() {
    const {t} = useTranslation("articles")
    const {id = "1"} = useParams<{ id: string }>()


    if (!id) {
        return <Info Tag="h2" title={t("ошибка")} subTitle={t("статья не найдена!")} />
    }

    return (
        <DynamicModuleLoader reducers={initialReducers} destroyOnUnmount={false}>
            <Page>
                <ArticleHeader />
                <ArticleDetailsCard articleId={id} />
                <ArticleCommentsCard articleId={id} />
                <ArticleRatingCard articleId={id} />
                <ArticleRelatedList />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
