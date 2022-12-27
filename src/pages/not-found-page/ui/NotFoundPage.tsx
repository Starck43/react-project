import {memo} from "react"
import {useTranslation} from "react-i18next"

import {classnames} from "@/shared/lib/helpers/classnames"
import {Button} from "@/shared/ui/button"
import {Header} from "@/shared/ui/header"

import {Page} from "@/widgets/page"

import cls from "./NotFoundPage.module.sass"


function NotFoundPage() {
    const {t} = useTranslation()

    return (
        <Page
            data-testid="NotFoundPage"
            className={classnames(cls, [ "not_found__page" ])}
        >
            <Header
                tag="h2"
                align="center"
                title={t("Страница не найдена")}
            >
                <Button bordered href="/">{t("На главную")}</Button>
            </Header>
        </Page>
    )
}

export default memo(NotFoundPage)
