import {memo} from "react"
import {useSelector} from "react-redux"
import {useTranslation} from "react-i18next"

import {getArticleData} from "@/entities/article"

import {RoutesPath} from "@/shared/config/router"
import {AppRoutes} from "@/shared/const/appRoutes"
import {Button} from "@/shared/ui/button/Button"
import {ButtonFeature} from "@/shared/ui/button/consts"

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
