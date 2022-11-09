import {memo} from "react"
import {useTranslation} from "react-i18next"
import Header, {HeaderAlign} from "shared/ui/header/Header"


function HomePage() {
    const {t} = useTranslation("home")

    return (
        <div className="content">
            <div className="container">
                <Header title={t("Продвинутый курс на Реакт")} shadowed align={HeaderAlign.CENTER} />
            </div>
        </div>
    )
}

export default memo(HomePage)
