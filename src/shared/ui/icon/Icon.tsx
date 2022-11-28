import {memo, SVGProps, VFC} from "react"

import {classnames} from "shared/lib/helpers/classnames"

import cls from "./Icon.module.sass"


interface IconProps {
    className?: string;
    Svg: VFC<SVGProps<SVGSVGElement>> | string;
}

export const Icon = memo((props: IconProps) => {
    const {className, Svg} = props

    return (
        <Svg className={classnames(cls, [ "icon", "svg-icon" ], {}, [ className ])} />
    )
})
