import {memo} from "react"
import {useTranslation} from "react-i18next"
import {useNavigate, useParams} from "react-router-dom"

import {UpdateArticleForm} from "features/articles"

import {AppRoutes, RoutesPath} from "shared/config/router"
import {classnames} from "shared/lib/helpers/classnames"
import Header from "shared/ui/header/Header"

import {Page} from "widgets/page"

import cls from "./ArticleEditPage.module.sass"


function ArticleEditPage() {
    const {t} = useTranslation("articles")
    const {id} = useParams<{ id: string }>()
    const isEditMode = Boolean(id)
    const navigate = useNavigate()

    const onCloseHandler = () => {
        navigate(RoutesPath[AppRoutes.ARTICLE_DETAILS] + id)
    }

    if (!id) return null

    return (
        <Page className={classnames(cls, [ "edit__article" ], {}, [])}>
            <Header tag="h2" title={isEditMode ? t("изменение статьи") : t("новая статья")} align="center" />
            <UpdateArticleForm articleId={id} onCloseHandler={onCloseHandler} />
        </Page>
    )
}

export default memo(ArticleEditPage)