import {ArticleDetailsCard} from "entities/article"
import {memo} from "react"
import {useTranslation} from "react-i18next"
import {useParams} from "react-router-dom"

import {Info, InfoAlign} from "shared/ui/info/Info"
import Header, {HeaderAlign} from "shared/ui/title/Header"


function ArticleDetailsPage() {
    const {t} = useTranslation("articles")
    const {id} = useParams<{ id: string }>()

    if (!id) {
        return <Info title={t("статья не найдена!")} align={InfoAlign.CENTER} />
    }

    return (
        <div className="content">
            <div className="container">
                <Header
                    title={t("article")}
                    shadowed
                    align={HeaderAlign.CENTER}
                />

                <ArticleDetailsCard id={id} />
            </div>
        </div>
    )
}

export default memo(ArticleDetailsPage)
