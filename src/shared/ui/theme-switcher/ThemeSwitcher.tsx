import {FC} from "react"
import {useTranslation} from "react-i18next"

import {UseThemeResult} from "app/providers/theme-provider/lib/useTheme"
import {classnames} from "shared/lib/helpers/classnames"
import {Button, ThemeButton} from "shared/ui/button/Button"

import ThemeIcon from "shared/assets/icons/theme-icon.svg"
import cls from "./ThemeSwitcher.module.sass"


interface ThemeSwitcherProps extends UseThemeResult {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({theme, toggleTheme, className}) => {
    const {t} = useTranslation()

    return (
        <Button
            theme={ThemeButton.BLANK}
            className={classnames(cls, ["switcher"], {}, [className])}
            onClick={toggleTheme}
        >
            <ThemeIcon className={cls.svg} />
            {t(theme)}
        </Button>
    )
}
