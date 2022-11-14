import {memo} from "react"
import {useTranslation} from "react-i18next"
import {useParams} from "react-router-dom"

import {ArticleDetailsCard, articleReducer} from "entities/article"

import Header, {HeaderAlign, TitleType} from "shared/ui/header/Header"
import {Info, InfoAlign} from "shared/ui/info/Info"
import {NavLink, NavLinkFeature} from "shared/ui/link/NavLink"

import DynamicModuleLoader, {ReducerList} from "shared/lib/components/DynamicModuleLoader"
import {RoutesPath} from "shared/config/router"
import {Page} from "shared/ui/Page/Page"

import {ArticleCommentsCard} from "./comments-card/ArticleCommentsCard"

import cls from "./ArticleDetailsPage.module.sass"


const initialReducers: ReducerList = {article: articleReducer}

function ArticleDetailsPage() {
    const {t} = useTranslation("articles")
    const {id = "1"} = useParams<{ id: string }>()


    if (!id) {
        return <Info title={t("статья не найдена!")} align={InfoAlign.CENTER} />
    }

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <Page>
                <Header title={t("статья")} shadowed titleType={TitleType.H1} align={HeaderAlign.CENTER} />
                <NavLink feature={NavLinkFeature.UNDERLINED} to={RoutesPath.articles} className={cls.back__link}>
                    {t("назад к списку")}
                </NavLink>
                <ArticleDetailsCard articleId={id} />
                <ArticleCommentsCard articleId={id} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
