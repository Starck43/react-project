import {memo} from "react"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

import {getArticleData} from "entities/article"

import {getEditArticleData} from "features/articles"

import {AppRoutes, RoutesPath} from "shared/config/router"
import {Button, ButtonFeature} from "shared/ui/button/Button"

import cls from "./EditArticleControl.module.sass"


export const EditArticleControl = memo(() => {
    const {t} = useTranslation("articles")
    const article = useSelector(getArticleData)
    const canEdit = useSelector(getEditArticleData)

    return (
        canEdit
            ? (
                <Button
                    feature={ButtonFeature.BLANK}
                    bordered
                    rounded
                    className={cls.edit__button}
                    href={`${RoutesPath[AppRoutes.ARTICLE_DETAILS]}${article?.id}/edit`}
                >
                    {t("изменить")}
                </Button>
            )
            : null
    )
})
