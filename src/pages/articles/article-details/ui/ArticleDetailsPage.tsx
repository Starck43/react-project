import {memo} from "react"
import {useParams} from "react-router-dom"
import {useTranslation} from "react-i18next"

import {ArticleDetailsCard, articleReducer} from "entities/article"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import Header, {HeaderAlign, TitleType} from "shared/ui/header/Header"
import {Info, InfoAlign} from "shared/ui/info/Info"

import {ArticleCommentsCard} from "./comments-card/ArticleCommentsCard"


const initialReducers: ReducerList = {article: articleReducer}

function ArticleDetailsPage() {
    const {t} = useTranslation("articles")
    const {id = "1"} = useParams<{ id: string }>()

    if (!id) {
        return <Info title={t("статья не найдена!")} align={InfoAlign.CENTER} />
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className="content">
                <div className="container">
                    <Header title={t("статья")} shadowed titleType={TitleType.H1} align={HeaderAlign.CENTER} />
                    <ArticleDetailsCard articleId={id} />
                    <ArticleCommentsCard articleId={id} />
                </div>
            </div>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
