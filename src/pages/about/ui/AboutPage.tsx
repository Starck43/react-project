import {memo} from "react"
import {useTranslation} from "react-i18next"

import Header, {HeaderAlign} from "shared/ui/title/Header"


function AboutPage() {
    const {t} = useTranslation("about")

    return (
        <div className="container">
            <Header
                title={t("о нас")}
                shadowed
                align={HeaderAlign.CENTER}
            />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
                Culpa, dolorum, est, et harum hic illo inventore ipsam ipsum magnam  \
                molestiae natus nisi nostrum porro praesentium saepe sed sequi sunt tempore.
            </p>
        </div>
    )
}

export default memo(AboutPage)
