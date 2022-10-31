import {memo} from "react"
import {useTranslation} from "react-i18next"

import {AppRoutes, RoutesPath} from "shared/config/router"
import {Button} from "shared/ui/button/Button"
import Title from "shared/ui/title/Title"
import {classnames} from "shared/lib/helpers/classnames"

import cls from "./NotFoundPage.module.sass"


interface NotFoundPageProps {
	className?: string
}

function NotFoundPage({className}: NotFoundPageProps) {
	const {t} = useTranslation()
	return (
    <div className={classnames(cls, [ "not_found__page" ], {}, [ className, "centered", "vertical" ])}>
        <Title align="center">{t("Страница не найдена")}</Title>
        <Button href={RoutesPath[AppRoutes.HOME]}>
            {t("На главную")}
        </Button>

    </div>
	)
}

export default memo(NotFoundPage)
