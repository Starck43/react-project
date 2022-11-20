import {UpdateArticleForm} from "features/articles/update-article/ui/UpdateArticleForm"
import {memo} from "react"
import {useTranslation} from "react-i18next"
import {useParams} from "react-router-dom"
import {classnames} from "shared/lib/helpers/classnames"
import Header, {HeaderAlign} from "shared/ui/header/Header"
import {Page} from "widgets/page"

import cls from "./ArticleEditPage.module.sass"


interface ArticleEditPageProps {
	className?: string
}

function ArticleEditPage() {
	const {t} = useTranslation("articles")
    const {id} = useParams<{id: string}>()
    const isEditMode = Boolean(id)

    if (!id) return null

    return (
        <Page className={classnames(cls, [ "edit__article" ], {}, [])}>
            <Header title={isEditMode ? t("изменение статьи") : t("новая статья")} align={HeaderAlign.CENTER} />
            <UpdateArticleForm articleId={id} />
        </Page>
    )
}

export default memo(ArticleEditPage)
