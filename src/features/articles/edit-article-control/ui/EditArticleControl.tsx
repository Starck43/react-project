import { memo } from "react"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { getArticleData } from "@/entities/article"
import { getRouteArticleEdit } from "@/shared/const/router"

import { Button, ButtonFeature } from "@/shared/ui/button"

import { getEditArticleData } from "../model/selectors/getEditArticleData"

import cls from "./EditArticleControl.module.sass"

export const EditArticleControl = memo(() => {
    const { t } = useTranslation("articles")
    const article = useSelector(getArticleData)
    const canEdit = useSelector(getEditArticleData)

    return canEdit ? (
        <Button
            data-testid="UpdateArticleForm.EditButton"
            feature={ButtonFeature.BLANK}
            bordered
            rounded
            className={cls.edit__button}
            href={getRouteArticleEdit(article?.id)}
        >
            {t("изменить")}
        </Button>
    ) : null
})
