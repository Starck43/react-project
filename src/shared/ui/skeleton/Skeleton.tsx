import { CSSProperties, memo, useMemo } from "react"

import { classnames } from "@/shared/lib/helpers/classnames"
import { ThemeVariant } from "@/shared/types/theme"

import { SizeType } from "@/shared/types/ui"
import { SkeletonElementType } from "@/shared/ui/skeleton/const"
import { Flex } from "@/shared/ui/stack"

import cls from "./Skeleton.module.sass"

interface SkeletonProps {
    elements?: SkeletonElementType[]
    variant?: ThemeVariant
    avatarSize?: SizeType
    width?: string | number
    height?: string | number
    borderRadius?: string
    rounded?: boolean
    inlined?: boolean
    className?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        elements = [SkeletonElementType.TITLE],
        variant = "primary",
        width = "100%",
        height,
        borderRadius,
        avatarSize,
        rounded = false,
        inlined = false,
        className,
    } = props

    const styles: CSSProperties = {
        width,
        height: height || (inlined ? "1.6em" : "auto"),
        borderRadius: rounded ? borderRadius : "none",
    }

    // TODO: styles for every shimmer element inside skeleton
    const shimmerElements = useMemo(
        () =>
            elements?.map((item, index) => (
                <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className={classnames(
                        cls,
                        [
                            "shimmer__element",
                            item,
                            item === SkeletonElementType.AVATAR ? `avatar__${avatarSize}` : undefined,
                        ],
                        { rounded, inlined },
                    )}
                />
            )),
        [avatarSize, elements, inlined, rounded],
    )

    return (
        <Flex
            direction={inlined ? "row" : "column"}
            align="start"
            justify="between"
            gap="sm"
            className={classnames(cls, ["skeleton", variant], { inlined }, [className])}
            style={styles}
        >
            {elements && shimmerElements}
        </Flex>
    )
})
