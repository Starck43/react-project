import { memo } from "react"
import { useTranslation } from "react-i18next"

import { getRouteArticles } from "@/shared/const/router"
import { NavLink } from "@/shared/ui/link"
import ArrowIcon from "@/shared/assets/icons/arrow-shevron-left.svg"

import cls from "./BackToListLink.module.sass"

export const BackToListLink = memo(() => {
    const { t } = useTranslation("articles")

    return (
        <NavLink
            to={getRouteArticles()}
            title={t("назад к списку")}
            Icon={ArrowIcon}
            feature="underlined"
            className={cls.back__link}
        />
    )
})
