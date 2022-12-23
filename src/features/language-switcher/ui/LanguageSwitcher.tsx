import {FC, memo} from "react"
import {useTranslation} from "react-i18next"
import FlagEnIcon from "@/shared/assets/icons/flag_en.svg"
import FlagRuIcon from "@/shared/assets/icons/flag_ru.svg"

import {classnames} from "@/shared/lib/helpers/classnames"
import {Button, ButtonFeature, ButtonSize} from "@/shared/ui/button"

import {Flex} from "@/shared/ui/stack"

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
            size={ButtonSize.SMALL}
            feature={ButtonFeature.CLEAR}
            bordered
            squared
            onClick={toggleLanguage}
            className={classnames(cls, [], {minified}, [ className ])}
        >
            <Flex gap="xs" className={cls.action}>
                {i18n.language === "en" ? <FlagEnIcon className="icon" /> : <FlagRuIcon className="icon" />}
                {!minified && t("Русский")}
            </Flex>
        </Button>
    )
})
