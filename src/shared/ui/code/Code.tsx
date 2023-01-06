import { useCallback } from "react"
import { useTranslation } from "react-i18next"

import { classnames } from "@/shared/lib/helpers/classnames"
import CopyIcon from "@/shared/assets/icons/copy-20-20.svg"

import { ButtonFeature, ButtonSize } from "../button/consts"
import { Button } from "../button/Button"

import cls from "./Code.module.sass"

interface CodeProps {
    text: string
    bordered?: boolean
    rounded?: boolean
    className?: string
}

export const Code = ({
    text,
    bordered = false,
    rounded = false,
    className,
}: CodeProps) => {
    const { t } = useTranslation("articles")
    const titleBtn = t("Копировать код")

    const onCopyClick = useCallback(() => {
        // eslint-disable-next-line no-console
        navigator.clipboard
            .writeText(text)
            .then(() => console.log("copied to buffer"))
    }, [text])

    return (
        <div
            className={classnames(
                cls,
                ["code__wrapper"],
                { bordered, rounded },
                [className],
            )}
        >
            <Button
                feature={ButtonFeature.CLEAR}
                size={ButtonSize.SMALL}
                title={titleBtn}
                Icon={CopyIcon}
                rounded={rounded}
                className={cls.copy__btn}
                onClick={onCopyClick}
            />
            <pre className={cls.pre}>
                <code className={cls.code}>{text}</code>
            </pre>
        </div>
    )
}
