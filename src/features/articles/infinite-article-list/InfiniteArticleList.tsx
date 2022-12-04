import {memo} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import {
    ArticleList,
    getArticlesData,
    getArticlesError,
    getArticlesLoading,
    getArticlesView,
} from "entities/article"

import {Info} from "shared/ui/info/Info"


export const InfiniteArticleList = memo(() => {
    const {t} = useTranslation("articles")

    const articles = useSelector(getArticlesData.selectAll)
    const view = useSelector(getArticlesView)
    const isLoading = useSelector(getArticlesLoading)
    const error = useSelector(getArticlesError)

    if (error) {
        return <Info title={t("ошибка загрузки статей!")} />
    }

    if (!isLoading && !articles?.length) {
        return <Info title={t("статьи не найдены!")} />
    }

    return <ArticleList articles={articles} isLoading={isLoading} virtualized={false} view={view} shadowed />
})
