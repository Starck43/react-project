import {useTranslation} from "react-i18next"
import Title from "shared/ui/title/Title"


const AboutPage = () => {
    const {t} = useTranslation("about")

    return (
        <div className="container">
            <Title>{t("о нас")}</Title>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dolorum, est, et harum
                hic illo inventore ipsam ipsum magnam molestiae natus nisi nostrum porro praesentium
                saepe sed sequi sunt tempore.
            </p>
        </div>
    );
};

export default AboutPage