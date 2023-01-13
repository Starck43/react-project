import { memo, FC } from "react"
import { useTranslation } from "react-i18next"
import { Theme } from "@/shared/const/theme"

import { UseThemeResult } from "@/shared/lib/hooks/useTheme"

import { classnames } from "@/shared/lib/helpers/classnames"
import type { ThemeVariant } from "@/shared/types/theme"
import { Button, ButtonFeature } from "@/shared/ui/button"
import ThemeIcon from "@/shared/assets/icons/theme-icon.svg"

import cls from "./ThemeSwitcher.module.sass"

interface ThemeSwitcherProps extends UseThemeResult {
    variant?: ThemeVariant
    minified?: boolean
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((props) => {
    const { theme = Theme.LIGHT, toggleTheme, variant, minified = false, className } = props
    const { t } = useTranslation()

    return (
        <Button
            feature={ButtonFeature.CLEAR}
            variant={variant}
            squared={minified}
            Icon={ThemeIcon}
            className={classnames(cls, ["switcher"], {}, [className, minified ? "minified" : undefined])}
            onClick={toggleTheme}
        >
            {minified ? null : t("theme", { context: theme })}
        </Button>
    )
})
