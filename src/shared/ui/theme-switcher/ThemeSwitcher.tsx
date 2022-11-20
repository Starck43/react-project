import {FC, memo} from "react"
import {useTranslation} from "react-i18next"

import {Theme} from "app/providers/theme-provider"
import {UseThemeResult} from "app/providers/theme-provider/lib/useTheme"

import {classnames} from "shared/lib/helpers/classnames"
import {Button, ButtonFeature} from "shared/ui/button/Button"
import ThemeIcon from "shared/assets/icons/theme-icon.svg"

import cls from "./ThemeSwitcher.module.sass"


export enum ThemeSwitcherVariant {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

interface ThemeSwitcherProps extends UseThemeResult {
	variant?: ThemeSwitcherVariant
	minified?: boolean
	className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({
	theme = Theme.LIGHT,
	toggleTheme,
	variant = ThemeSwitcherVariant.PRIMARY,
	minified = false,
	className,
}) => {
	const {t} = useTranslation()

	return (
    <Button
        feature={ButtonFeature.BLANK}
        className={classnames(cls, [ "switcher", variant ], {}, [ className, minified ? "minified" : "" ])}
        onClick={toggleTheme}
    >
        <ThemeIcon className="icon" />
        { minified ? null : t("theme", {context: theme})}
    </Button>
	)
})
