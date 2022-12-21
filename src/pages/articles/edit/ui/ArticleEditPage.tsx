import {memo} from "react"
import {useTranslation} from "react-i18next"
import {useNavigate, useParams} from "react-router-dom"

import {UpdateArticleForm} from "@/features/articles"

import {getRouteArticleDetails} from "@/shared/const/router"
import {classnames} from "@/shared/lib/helpers/classnames"
import {Header} from "@/shared/ui/header"

import {Page} from "@/widgets/page"

import cls from "./ArticleEditPage.module.sass"


function ArticleEditPage() {
    const {t} = useTranslation("articles")
    const {id} = useParams<{ id: string }>()
    const isEditMode = Boolean(id)
    const navigate = useNavigate()

    const onCloseHandler = () => {
        if (id) {
            navigate(getRouteArticleDetails(id))
        }
    }

    return (
        <Page className={classnames(cls, [ "edit__article" ], {}, [])}>
            <Header tag="h2" title={isEditMode ? t("изменение статьи") : t("новая статья")} align="center" />
            <UpdateArticleForm articleId={id} onCloseHandler={onCloseHandler} />
        </Page>
    )
}

export default memo(ArticleEditPage)
