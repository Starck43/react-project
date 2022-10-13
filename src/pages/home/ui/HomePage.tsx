import {useTranslation} from "react-i18next"

import Title from "shared/ui/title/Title"


function HomePage() {
    const {t} = useTranslation("home")

    return (
        <div className="content">
            <div className="container">
                <Title>{t("Продвинутый курс на Реакт")}</Title>
            </div>
        </div>
    )
}

export default HomePage
