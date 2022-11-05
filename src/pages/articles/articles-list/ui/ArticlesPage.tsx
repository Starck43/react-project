import {memo} from "react"
import {useTranslation} from "react-i18next"

import Header, {HeaderAlign} from "shared/ui/title/Header"


function ArticlesPage() {
    const {t} = useTranslation("articles")

    return (
        <div className="container">
            <Header
                title={t("articles")}
                shadowed
                align={HeaderAlign.CENTER}
            />
        </div>
    )
}

export default memo(ArticlesPage)
