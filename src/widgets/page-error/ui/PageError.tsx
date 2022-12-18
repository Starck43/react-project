import {useTranslation} from "react-i18next"

import {Button, ButtonFeature} from "@/shared/ui/button"
import {Col} from "@/shared/ui/stack"

// import cls from "./PageError.module.sass"


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
        <Col align="center" className={className}>
            <h1>{t("что-то пошло не так")}</h1>
            {t("непредвиденная ошибка")}
            <Button feature={ButtonFeature.BLANK} onClick={reloadPage} className="mt-2">{t("обновить страницу")}</Button>
        </Col>
    )
}
