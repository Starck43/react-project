import {FC, memo} from "react"
import {useTranslation} from "react-i18next"

import {classnames} from "shared/lib/helpers/classnames"
import {Button, ButtonFeature, ButtonVariant} from "shared/ui/button/Button"
import FlagEnIcon from "shared/assets/icons/flag_en.svg"
import FlagRuIcon from "shared/assets/icons/flag_ru.svg"

import cls from "./LanguageSwitcher.module.sass"


interface LanguageSwitcherProps {
    minified?: boolean
    className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(({minified = false, className}) => {
    const {i18n, t} = useTranslation()
    const toggleLanguage = () => i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")

    return (
        <Button
            variant={ButtonVariant.SECONDARY}
            feature={ButtonFeature.BLANK}
            className={classnames(cls, [], {minified}, [ className ])}
            onClick={toggleLanguage}
        >
            {minified
                ? i18n.language
                : (
                    <>
                        {i18n.language === "en"
                            ? <FlagEnIcon className="icon" />
                            : <FlagRuIcon className="icon" />}
                        {t("Русский")}
                    </>
                )}
        </Button>
    )
})
