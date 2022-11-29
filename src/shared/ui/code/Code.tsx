import {useCallback} from "react"
import {useTranslation} from "react-i18next"

import {classnames} from "shared/lib/helpers/classnames"
import CopyIcon from "shared/assets/icons/copy-20-20.svg"

import {Button, ButtonFeature, ButtonSize} from "../button/Button"

import cls from "./Code.module.sass"


interface CodeProps {
    text: string
    bordered?: boolean
    rounded?: boolean
    className?: string
}

export const Code = ({text, bordered = false, rounded = false, className}: CodeProps) => {
    const {t} = useTranslation("articles")
    const titleBtn = t("Копировать код")

    const onCopyClick = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [ text ])

    return (
        <div className={classnames(cls, [ "code__wrapper" ], {bordered, rounded}, [ className ])}>
            <Button
                feature={ButtonFeature.BLANK}
                title={titleBtn}
                size={ButtonSize.SMALL}
                rounded={rounded}
                className={cls.copy__btn}
                onClick={onCopyClick}
            >
                <CopyIcon />
            </Button>
            <pre className={cls.pre}>
                <code className={cls.code}>{text}</code>
            </pre>
        </div>
    )
}
