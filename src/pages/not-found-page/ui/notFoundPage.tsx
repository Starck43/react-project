import {classnames} from "shared/lib/helpers/classnames"
import {useTranslation} from "react-i18next"

import Title from "shared/ui/title/Title"
import cls from "./NotFoundPage.module.sass"


interface NotFoundPageProps {
	className?: string
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {
	const {t} = useTranslation()
	return (
    <div className={classnames(cls, ["not_found__page"], {}, [className, "centered"])}>
        <Title>{t("Страница не найдена")}</Title>
    </div>
	)
}
