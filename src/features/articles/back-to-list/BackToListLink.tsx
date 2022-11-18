import {memo} from "react"
import {useTranslation} from "react-i18next"

import {RoutesPath} from "shared/config/router"
import {NavLink, NavLinkFeature} from "shared/ui/link/NavLink"

import cls from "./BackToListLink.module.sass"


export const BackToListLink = memo(() => {
	const {t} = useTranslation("articles")

    return (
        <NavLink feature={NavLinkFeature.UNDERLINED} to={RoutesPath.articles} className={cls.back__link}>
            {t("назад к списку")}
        </NavLink>
    )
})
