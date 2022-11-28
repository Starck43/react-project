import {memo} from "react"
import {useTranslation} from "react-i18next"
import {useParams} from "react-router-dom"

import {ArticleDetailsCard} from "entities/article"

import {Info} from "shared/ui/info/Info"

import {Page} from "widgets/page"

import {ArticleHeader} from "./header/ArticleHeader"
import {ArticleCommentsCard} from "./comments-card/ArticleCommentsCard"
import {ArticleRelatedCard} from "./related-card/ArticleRelatedCard"

import cls from "./ArticleDetailsPage.module.sass"


function ArticleDetailsPage() {
    const {t} = useTranslation("articles")
    const {id = "1"} = useParams<{ id: string }>()


    if (!id) {
        return <Info title={t("статья не найдена!")} align="center" />
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
