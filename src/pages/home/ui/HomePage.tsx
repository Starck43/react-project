import {memo} from "react"
import {useTranslation} from "react-i18next"
import {Counter} from "@/entities/counter"

import {Header} from "@/shared/ui/header"

import {Page} from "@/widgets/page"


function HomePage() {
    const {t} = useTranslation("home")

    return (
        <Page data-testid="homePage">
            <Header tag="h2" title={t("Продвинутый курс на Реакт")} shadowed align="center" />
            <Counter />
        </Page>
    )
}

export default memo(HomePage)
