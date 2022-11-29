import {memo} from "react"
import {useTranslation} from "react-i18next"

import {AppRoutes, RoutesPath} from "shared/config/router"
import {classnames} from "shared/lib/helpers/classnames"
import {Button} from "shared/ui/button/Button"
import Header from "shared/ui/header/Header"

import {Page} from "widgets/page"

import cls from "./NotFoundPage.module.sass"


function NotFoundPage() {
    const {t} = useTranslation()

    return (
        <Page className={classnames(cls, [ "not_found__page" ], {}, [ "centered" ])}>
            <Header tag="h2" title={t("Страница не найдена")} shadowed align="center" />

            <Button href={RoutesPath[AppRoutes.HOME]}>
                {t("На главную")}
            </Button>

        </Page>
    )
}

export default memo(NotFoundPage)
