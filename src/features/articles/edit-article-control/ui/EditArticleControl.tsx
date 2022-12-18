import {memo} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"
import {AppRoutes, RoutesPath} from "@/shared/const/router"

import {getArticleData} from "@/entities/article"

import {Button, ButtonFeature} from "@/shared/ui/button"

import {getEditArticleData} from "../model/selectors/getEditArticleData"

import cls from "./EditArticleControl.module.sass"


export const EditArticleControl = memo(() => {
    const {t} = useTranslation("articles")
    const article = useSelector(getArticleData)
    const canEdit = useSelector(getEditArticleData)

    return (
        canEdit
            ? (
                <Button
                    data-testid="UpdateArticleForm.EditButton"
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
