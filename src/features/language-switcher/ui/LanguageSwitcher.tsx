import { FC, memo } from "react"
import { useTranslation } from "react-i18next"
import FlagEnIcon from "@/shared/assets/icons/flag_en.svg"
import FlagRuIcon from "@/shared/assets/icons/flag_ru.svg"

import { classnames } from "@/shared/lib/helpers/classnames"
import { Button, ButtonFeature } from "@/shared/ui/button"

import cls from "./LanguageSwitcher.module.sass"

interface LanguageSwitcherProps {
    minified?: boolean
    className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(({ minified = false, className }) => {
    const { i18n, t } = useTranslation()
    const toggleLanguage = () => i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")

    return (
        <Button
            feature={ButtonFeature.CLEAR}
            squared={minified}
            Icon={i18n.language === "en" ? FlagEnIcon : FlagRuIcon}
            onClick={toggleLanguage}
            className={classnames(cls, [], { minified }, [className])}
        >
            {!minified && t("Русский")}
        </Button>
    )
})
