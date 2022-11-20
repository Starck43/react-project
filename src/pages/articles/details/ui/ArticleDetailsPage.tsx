import {ArticleHeader} from "pages/articles/details/ui/header/ArticleHeader"
import {memo} from "react"
import {useTranslation} from "react-i18next"
import {useParams} from "react-router-dom"

import {ArticleDetailsCard} from "entities/article"

import {BackToListLink} from "features/articles"

import Header, {HeaderAlign} from "shared/ui/header/Header"
import {Info, InfoAlign} from "shared/ui/info/Info"

import {Page} from "widgets/page"

import {ArticleCommentsCard} from "./comments-card/ArticleCommentsCard"
import {ArticleRelatedCard} from "./related-card/ArticleRelatedCard"

import cls from "./ArticleDetailsPage.module.sass"


function ArticleDetailsPage() {
    const {t} = useTranslation("articles")
    const {id = "1"} = useParams<{ id: string }>()


    if (!id) {
        return <Info title={t("статья не найдена!")} align={InfoAlign.CENTER} />
    }

    return (
        <Page className={cls.article_details__section}>
            <ArticleHeader />
            <ArticleDetailsCard articleId={id} />
            <ArticleCommentsCard articleId={id} />
            <ArticleRelatedCard articleId={id} />
        </Page>
    )
}

export default memo(ArticleDetailsPage)
