import {memo, FC} from "react"
import {useTranslation} from "react-i18next"

import {Theme} from "app/providers/theme-provider"
import {UseThemeResult} from "app/providers/theme-provider/lib/useTheme"

import {classnames} from "shared/lib/helpers/classnames"
import {ThemeVariant} from "shared/types/theme"
import {Button} from "shared/ui/button/Button"
import ThemeIcon from "shared/assets/icons/theme-icon.svg"

import cls from "./ThemeSwitcher.module.sass"


interface ThemeSwitcherProps extends UseThemeResult {
	variant?: ThemeVariant
	minified?: boolean
	className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo((props) => {
	const {
		theme = Theme.LIGHT,
		toggleTheme,
		variant,
		minified = false,
		className,
	} = props
	const {t} = useTranslation()

	return (
    <Button
        Icon={ThemeIcon}
        className={classnames(cls, [ "switcher", variant ], {}, [ className, minified ? "minified" : "" ])}
        onClick={toggleTheme}
    >
        { minified ? null : t("theme", {context: theme})}
    </Button>
	)
})
