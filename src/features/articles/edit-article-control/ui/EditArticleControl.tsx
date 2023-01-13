import { memo } from "react"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { getRouteArticleEdit } from "@/shared/const/router"

import { Button, ButtonFeature } from "@/shared/ui/button"

import { getCanEditArticleData } from "../model/selectors/getEditArticleData"

import cls from "./EditArticleControl.module.sass"

export const EditArticleControl = memo(({ articleId }: { articleId: string }) => {
    const { t } = useTranslation("articles")
    const canEdit = useSelector(getCanEditArticleData)

    return canEdit ? (
        <Button
            data-testid="EditArticleControl.EditButton"
            feature={ButtonFeature.BLANK}
            bordered
            rounded
            className={cls.edit__button}
            href={getRouteArticleEdit(articleId)}
        >
            {t("изменить")}
        </Button>
    ) : null
})
