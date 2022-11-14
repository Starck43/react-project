import {memo} from "react"
import {useTranslation} from "react-i18next"

import Header, {HeaderAlign} from "shared/ui/header/Header"
import {Page} from "shared/ui/Page/Page"


function HomePage() {
    const {t} = useTranslation("home")

    return (
        <Page>
            <Header title={t("Продвинутый курс на Реакт")} shadowed align={HeaderAlign.CENTER} />
        </Page>
    )
}

export default memo(HomePage)
