import {useTranslation} from "react-i18next"

import {classnames} from "shared/lib/helpers/classnames"
import {Button} from "shared/ui/button/Button"

import cls from "./PageError.module.sass"


interface PageErrorProps {
    className?: string
}

export const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation()
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    return (
        <div className={classnames(cls, [ "page__error" ], {}, [ className, "centered", "vertical" ])}>
            <h1>{t("что-то пошло не так")}</h1>
            {t("непредвиденная ошибка")}
            <Button onClick={reloadPage} className="mt-2">{t("обновить страницу")}</Button>
        </div>
    )
}
