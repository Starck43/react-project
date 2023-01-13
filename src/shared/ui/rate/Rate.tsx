import { memo, useState } from "react"

import { classnames } from "@/shared/lib/helpers/classnames"
import { Flex } from "@/shared/ui/stack"
import { Icon } from "@/shared/ui/icon"
import StarIcon from "@/shared/assets/icons/star.svg"

import type { StarsSizeType } from "./types"
import cls from "./Rate.module.sass"

interface RateProps {
    value?: number
    onSelect?: (value: number) => void
    size?: StarsSizeType
    className?: string
}

const STARS = [1, 2, 3, 4, 5]

export const Rate = memo((props: RateProps) => {
    const { value = 0, onSelect, size = "normal", className } = props
    const [currentValue, setCurrentValue] = useState(value)
    const [selected, setSelected] = useState(Boolean(value))

    const onHover = (val: number) => () => {
        if (!selected) {
            setCurrentValue(val)
        }
    }

    const onLeave = () => {
        if (!selected) {
            setCurrentValue(0)
        }
    }

    const onClick = (val: number) => () => {
        if (!selected) {
            setSelected(true)
            onSelect?.(val)
        }
    }

    return (
        <Flex gap="none" className={classnames(cls, ["rate"], { selected }, [className])}>
            {STARS.map((index) => (
                <Icon
                    data-testid={`Rate.${index}`}
                    data-selected={currentValue >= index}
                    Svg={StarIcon}
                    className={classnames(cls, ["star", size, currentValue >= index ? "hovered" : ""], {}, [])}
                    onClick={onClick(index)}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(index)}
                    // eslint-disable-next-line react/no-array-index-key
                    key={`starIndex-${index}`}
                />
            ))}
        </Flex>
    )
})
