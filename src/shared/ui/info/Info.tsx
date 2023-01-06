import { FC, SVGProps } from "react"

import { classnames } from "@/shared/lib/helpers/classnames"
import { Icon } from "@/shared/ui/icon"
import { Col, Row } from "@/shared/ui/stack"

import { InfoSize, InfoStatus } from "./consts"

import cls from "./Info.module.sass"

type FlexAlign = "start" | "end" | "center"

export type InfoProps = {
    Tag?: keyof HTMLElementTagNameMap
    title?: string | null
    subTitle?: string | null
    icon?: FC<SVGProps<SVGSVGElement>>
    status?: InfoStatus
    align?: FlexAlign
    size?: InfoSize
    className?: string

    "data-testid"?: string
}

// TODO: check error with removing data-testid by custom plugin
export const Info = (props: InfoProps) => {
    const {
        Tag = "h3",
        title = null,
        subTitle,
        icon,
        align = "center",
        status = InfoStatus.DEFAULT,
        size = InfoSize.MD,
        className,
        "data-testid": dataTestId = "Info",
    } = props

    return (
        <Col
            fullWidth
            align={align}
            className={classnames(cls, ["info__block", status, size], {}, [
                className,
            ])}
        >
            {title && (
                <Tag data-testid={`${dataTestId}.Title`} className={cls.title}>
                    {title}
                </Tag>
            )}

            {subTitle && (
                <Row
                    data-testid={`${dataTestId}.SubTitle`}
                    as="p"
                    gap="sm"
                    className={cls.subtitle}
                >
                    {icon && <Icon Svg={icon} />}
                    {subTitle}
                </Row>
            )}
        </Col>
    )
}
