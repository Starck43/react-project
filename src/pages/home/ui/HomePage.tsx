import {memo} from "react"
import {useTranslation} from "react-i18next"

import Header from "shared/ui/header/Header"

import {Page} from "widgets/page"


function HomePage() {
    const {t} = useTranslation("home")

    return (
        <Page>
            <Header tag="h2" title={t("Продвинутый курс на Реакт")} shadowed align="center" />
        </Page>
    )
}

export default memo(HomePage)
