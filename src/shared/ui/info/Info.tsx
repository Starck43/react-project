import {SVGProps, VFC} from "react"

import {classnames} from "shared/lib/helpers/classnames"
import {Icon} from "../../ui/icon/Icon"
import {Col, Row} from "../../ui/stack"

import cls from "./Info.module.sass"


export enum InfoStatus {
    DEFAULT = "default",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}

export enum InfoSize {
    XL = "xl",
    LG = "lg",
    MD = "md",
    SM = "sm"
}

type FlexAlign = "start" | "end" | "center"

export type InfoProps = {
    Tag?: keyof HTMLElementTagNameMap
    title?: string
    subTitle?: string
    icon?: VFC<SVGProps<SVGSVGElement>>
    status?: InfoStatus
    align?: FlexAlign
    size?: InfoSize
    className?: string

    "data-testid"?: string
}

export const Info = (props: InfoProps) => {
    const {
        Tag = "h3",
        subTitle,
        icon,
        title,
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
            className={classnames(cls, [ "info__block", status, size ], {}, [ className ])}
        >
            {title && (
                <Tag
                    data-testid={`${dataTestId}.Title`}
                    className={cls.title}
                >
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
