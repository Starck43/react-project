import {FC} from "react"
import {useTranslation} from "react-i18next"

import {classnames} from "shared/lib/helpers/classnames"
import {Button, ButtonFeature, ButtonVariant} from "shared/ui/button/Button"

import cls from "./LanguageSwitcher.module.sass"



interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({className}) => {
    const {i18n, t} = useTranslation()

    const toggleLanguage = () => i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")

    return (
        <Button
            variant={ButtonVariant.PRIMARY}
            feature={ButtonFeature.BLANK}
            className={classnames(cls, [], {}, [ className ])}
            onClick={toggleLanguage}
        >
            {t("Русский")}

        </Button>
    )
}
