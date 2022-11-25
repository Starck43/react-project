import {memo} from "react"
import {useTranslation} from "react-i18next"

import Header from "shared/ui/header/Header"

import {Page} from "widgets/page"


function AboutPage() {
    const {t} = useTranslation("about")

    return (
        <Page>
            <Header title={t("о нас")} shadowed align="center" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
                Culpa, dolorum, est, et harum hic illo inventore ipsam ipsum magnam  \
                molestiae natus nisi nostrum porro praesentium saepe sed sequi sunt tempore.
            </p>
        </Page>
    )
}

export default memo(AboutPage)
