import {memo} from "react"
import {useTranslation} from "react-i18next"

import {classnames} from "shared/lib/helpers/classnames"
import {AppRoutes, RoutesPath} from "shared/config/router"
import {Button} from "shared/ui/button/Button"
import Header, {HeaderAlign} from "shared/ui/header/Header"

import cls from "./NotFoundPage.module.sass"


interface NotFoundPageProps {
	className?: string
}

function NotFoundPage({className}: NotFoundPageProps) {
	const {t} = useTranslation()

	return (
    <div className={classnames(cls, [ "not_found__page" ], {}, [ className, "centered", "vertical" ])}>
        <Header title={t("Страница не найдена")} shadowed align={HeaderAlign.CENTER} />

        <Button href={RoutesPath[AppRoutes.HOME]}>
            {t("На главную")}
        </Button>

    </div>
	)
}

export default memo(NotFoundPage)
