import {useTranslation} from "react-i18next"
import Title from "shared/ui/title/Title"


const HomePage = () => {
    const {t} = useTranslation("home")

    return (
        <div className="container">
            <Title>{t("главная страница")}</Title>
        </div>
    )
}

export default HomePage