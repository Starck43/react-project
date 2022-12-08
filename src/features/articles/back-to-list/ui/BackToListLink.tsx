import {memo} from "react"
import {useTranslation} from "react-i18next"

import {RoutesPath} from "@/shared/config/router"
import {NavLink} from "@/shared/ui/link/NavLink"
import ArrowIcon from "@/shared/assets/icons/arrow-shevron-left.svg"

import cls from "./BackToListLink.module.sass"


export const BackToListLink = memo(() => {
	const {t} = useTranslation("articles")

    return (
        <NavLink
            to={RoutesPath.articles}
            title={t("назад к списку")}
            Icon={ArrowIcon}
            feature="underlined"
            className={cls.back__link}
        />
    )
})
